import React, {useEffect, useState} from 'react'
import { getCommentsByQuery } from '@/api/comments.api'
import { createNewComment } from '@/api/comments.api'
import CreateUserModal from './createUserModal'
import { createPortal } from 'react-dom'
export default function Comments({savedQueryId}) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [createUserModalIsOpen, setCreateUserModalIsOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    const fetchComments = async () => {
      const res = await getCommentsByQuery(savedQueryId)
      setComments(res.data);
    }
    fetchComments()
  },[])
  const createComment = async () => {
    if(user) {
      const body = {
        author: user.id,
        text: newComment,
        saved_query_reference: savedQueryId
      }
      try {
        console.log(body);
        const res = await createNewComment(body)
        console.log(res);
        setComments([...comments, res.data])
        setNewComment('')
      } catch (error) {
        console.error(error)
      }
    }else {
      setCreateUserModalIsOpen(true)
    }
  }
  return (
    <div className='text-sm'>
       {createUserModalIsOpen && createPortal(<CreateUserModal setCreateUserModalIsOpen={setCreateUserModalIsOpen} />, document?.body)}
      {comments.map(comment => (
        <p key={comment.id}><strong>{comment.username}</strong> {comment.text}</p>
      ))}
      <div className='w-full mt-1 flex justify-between items-center'>
      <input value={newComment} onChange={(e) => setNewComment(e.target.value)} type="text" placeholder='Add a comment...' className='' name='add'/>
      {newComment !== '' && <button onClick={createComment} className='text-[#2c6ef0]'>Submit</button>}
      </div>
    </div>
  )
}
