import React from "react";
import Body from "../../Styled/Body";
import styled from "styled-components";
import Container from "../../Styled/Container";
import Header from "../../Styled/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function ChatPresenter({
  handleBack,
  Msgs,
  message,
  onMessageChange,
  onSubmit,
}) {
  return (
    <Container>
      <Header>
        <span onClick={() => handleBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <span>그룹채팅</span>
      </Header>
      <Body>
        <ul>{Msgs && Msgs.map((Msg, idx) => <li key={idx}>{Msg}</li>)}</ul>
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onMessageChange} value={message} />
          <button type="submit">전송</button>
        </form>
      </Body>
    </Container>
  );
}

export default ChatPresenter;
