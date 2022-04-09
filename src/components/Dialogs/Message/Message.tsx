import React from "react";
type PropsType = {
	message: string
}

const Message: React.FC<PropsType>= ({ message }) => {

	return (
		<div>{message}</div>
	)
};
export default Message;