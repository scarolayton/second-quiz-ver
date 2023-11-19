from rest_framework import viewsets, status, serializers
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializer import  SavedQueriesSerializer, CommentsSerializer, CustomUserSerializer
from .models import   SavedQueries, Comments, CustomUser
from google.cloud import bigquery
from django.shortcuts import get_object_or_404
# Create your views here.
class CustomUserView(viewsets.ModelViewSet):
  serializer_class = CustomUserSerializer
  queryset = CustomUser.objects.all()
class GoogleDataSetView(viewsets.ModelViewSet):
  class GoogleTrendsDataSerializer(serializers.Serializer):
    first_country = serializers.CharField()
    second_country = serializers.CharField(required=False, allow_null=True, allow_blank=True)
    first_date = serializers.DateField()
    second_date = serializers.DateField()
    query_quantity = serializers.IntegerField()
  serializer_class = GoogleTrendsDataSerializer
  @action(detail=False, methods=['POST'])
  def fetch_for_specific_date(self, request):
    client = bigquery.Client()
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    first_country = request.data.get('first_country')
    second_country = request.data.get('second_country')
    first_date = request.data.get('first_date')
    query_quantity = request.data.get('query_quantity')
    second_date = request.data.get('second_date')
    where_clause = f"""
        rank BETWEEN 1 and {int(query_quantity)}
        AND refresh_date BETWEEN '{second_date}' and '{first_date}'
        AND (country_name = '{first_country}'  
    """
    if second_country:
      where_clause += f"OR country_name = '{second_country}'"
    where_clause += ")"
    query = f"""
        SELECT
            refresh_date AS Day,
            term AS Top_Term,
            country_name,
            rank,
            AVG(score) as Total_Score
        FROM
            `bigquery-public-data.google_trends.international_top_terms`
        WHERE
            {where_clause} 
        GROUP BY
            Day,
            Top_Term,
            country_name,
            rank
        ORDER BY
            Day ASC,
            rank ASC
     """
    query_res = client.query(query)
    reponse_data = {
      'message': 'Query succesfully submitted',
      'data': {'query_res' : list(query_res)}
    }
    return Response(reponse_data, status=status.HTTP_200_OK)
class SavedQueriesView(viewsets.ModelViewSet):
  serializer_class = SavedQueriesSerializer
  queryset = SavedQueries.objects.all().order_by('-id') 
  def perform_create(self, serializer):
    user_id = self.request.data.get('user')  # Obtener user_id desde la solicitud
    user = get_object_or_404(CustomUser, pk=user_id)  # Obtener el objeto User
    serializer.save(user=user)

  @action(detail=False, methods=['GET'])
  def queries_by_user(self, request):
    user_id = request.query_params.get('user_id')
    queries = SavedQueries.objects.select_related('user').filter(user=user_id)
    serializer = self.get_serializer(queries, many=True)
    return Response(serializer.data)
class CommentsView(viewsets.ModelViewSet):
  serializer_class = CommentsSerializer
  queryset = Comments.objects.all()
  def perform_create(self, serializer):
    user_id = self.request.data.get('author')  # Obtener user_id desde la solicitud
    user = get_object_or_404(CustomUser, pk=user_id)  # Obtener el objeto User
    serializer.save(author=user)

  @action(detail=False, methods=['GET'])
  def comments_by_query(self, request):
    saved_query_reference = request.query_params.get('saved_query_id')
    queries = Comments.objects.select_related('author').filter(saved_query_reference=saved_query_reference)
    serializer = self.get_serializer(queries, many=True)
    return Response(serializer.data)
  