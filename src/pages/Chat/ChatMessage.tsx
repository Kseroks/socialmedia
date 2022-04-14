import React from 'react'

export const ChatMessage: React.FC<any>= ({message}) => {
	return (
		<div>
			<img style={{width: '50px', height:"50px",borderRadius: '30%'}} src={message.photo} alt=""></img>
			<b>{message.userName}</b>
			<br />
			{message.message}
		</div>
	)
}
