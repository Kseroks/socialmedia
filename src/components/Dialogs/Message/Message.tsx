import React from "react";

interface PropsType { message: string };

export const Message: React.FC<PropsType>= ({ message }) => {
	return (
		<div>{message}</div>
	)
};