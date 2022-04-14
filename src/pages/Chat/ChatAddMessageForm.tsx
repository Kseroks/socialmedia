import { Button, Input } from "antd";
import {websocket} from '../../api/ChatApi'
import React from "react";

export const ChatAddMessageForm = () => {
  const { TextArea } = Input;

  const [message, setMessage] = React.useState("");


  const ChatSendMessage = () => {
  
    if (!message) {
      return
    } 
    websocket.send(message);
  };

  return (
    <div style={{width: '300px'}}>
      <div>
        <TextArea
          rows={4}
          onChange={(e) => { setMessage(e.currentTarget.value); }}
          value={message}
        >
        </TextArea>
      </div>
			<Button type="ghost" onClick={ChatSendMessage} >Send</Button>
    </div>
  );
};
