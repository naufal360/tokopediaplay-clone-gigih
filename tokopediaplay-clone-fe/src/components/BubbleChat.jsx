import React from 'react'

function BubbleChat({username, comment_text}) {
  return (
    <div className="chat chat-start">
        <div className="chat-header text-gray-400">
            <h2 className='text-xs'>{username}</h2>
        </div>
        <div className="chat-bubble"> <h2 className='text-sm'>{comment_text}</h2></div>
    </div>
  )
}

export default BubbleChat