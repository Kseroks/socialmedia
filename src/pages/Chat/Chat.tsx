import React from 'react'
import { ChatAddMessageForm } from './ChatAddMessageForm'
import { ChatMessages } from './ChatMessages'

export interface PropsType {
	message: string
	photo: string
	userId: number
	userName: string
}

export const Chat = () => {

	return (
		<div>
			<ChatMessages />
			<ChatAddMessageForm/>
		</div>
	)
}
