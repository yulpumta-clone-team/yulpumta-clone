import React, { useState } from "react";
import { useHistory } from "react-router";
import ChatPresenter from "./ChatPresenter";

function ChatContainer() {
  const history = useHistory();
  const [Msgs, setMsgs] = useState([]);
  const [message, setMessage] = useState("");
  const handleBack = () => history.push("/group/detail");
  const onMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setMsgs([...Msgs, message]);
    setMessage("");
  };
  return (
    <ChatPresenter
      handleBack={handleBack}
      Msgs={Msgs}
      message={message}
      onMessageChange={onMessageChange}
      onSubmit={onSubmit}
    />
  );
}

export default ChatContainer;
