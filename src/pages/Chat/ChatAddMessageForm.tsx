import { useState } from "react";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../selectors/chat-selectors";
import { thunks } from "../../redux/chat-reducer";

export const ChatAddMessageForm = () => {
  const { TextArea } = Input;

  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const status = useSelector(selectors.getStatus);

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }
    dispatch(thunks.sendMessageTC(message));
    setMessage("");
  };

  return (
    <div>
      <div>
        <TextArea rows={2}
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        ></TextArea>
      </div>
      <div>
        <Button type="ghost" disabled={status !== "ready"}
          onClick={sendMessageHandler}>Send</Button>
      </div>
    </div>
  );
};

