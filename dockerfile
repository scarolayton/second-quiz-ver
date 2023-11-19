# Utilizamos una imagen de Python como base
FROM python:3.10.4-alpine3.14

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de requerimientos y los instalamos
RUN apk add --no-cache gcc musl-dev postgresql-dev python3-dev libffi-dev && \
    pip install --upgrade pip
COPY requirements.txt ./

RUN pip install -r requirements.txt

# Copiamos el resto de los archivos al directorio de trabajo
COPY ./ ./

# Exponemos el puerto en el que se ejecutará la aplicación
EXPOSE 8000

# Comando para ejecutar el servidor de desarrollo de Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]