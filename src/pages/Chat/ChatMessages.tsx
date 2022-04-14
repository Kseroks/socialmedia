import React,{useEffect,useState} from 'react'
import { ChatMessage } from './ChatMessage'
import {websocket} from '../../api/ChatApi'

export const ChatMessages: React.FC<any>= () => {

	const [message, setMessage] = useState<any>([]);
	



	useEffect(() => {

		websocket.addEventListener("message", (e) => {
			let newMessage = JSON.parse(e.data);
			setMessage((prevMessage:any) => [...prevMessage, ...newMessage]);
		})
	},)

	return (
		<div style={{height:"400px",overflowY: 'auto'}}>
			{message.map((m:any,i:any)=>{
				return <ChatMessage key={i} message={m}/>
			})}
		</div>
	)
}
