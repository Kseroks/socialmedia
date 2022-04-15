import React from "react";
import { ChatMessageAPIType } from "../../api/ChatApi";

export const Message: React.FC<{ message: ChatMessageAPIType }> =
  React.memo(({ message }) => {
    return (
      <div>
        <img src={message.photo} style={{ width: "30px" }} alt="" />{" "}
        <b>{message.userName}</b>
        <br />
        {message.message}
        <hr />
      </div>
    );
  });
