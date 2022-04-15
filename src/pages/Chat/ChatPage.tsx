import { useEffect } from "react";
import { ChatAddMessageForm } from "./ChatAddMessageForm";
import { ChatMessages } from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { thunks } from "../../redux/chat-reducer";
import { selectors } from "../../selectors/chat-selectors";

export const ChatPage = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectors.getStatus);

  useEffect(() => {
    dispatch(thunks.startMessagesListeningTC());
    return () => {
      dispatch(thunks.stopMessagesListeningTC());
    };
  }, [dispatch]);

  return (
    <div>
      {status === "error" && (
        <div>Some error occurred. Please refresh the page</div>
      )}
      <>
        <ChatMessages />
        <ChatAddMessageForm />
      </>
    </div>
  );
};
