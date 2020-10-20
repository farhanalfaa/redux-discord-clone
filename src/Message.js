import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          farhanalfaa
          <span className="message__timestamp">this is a timestamp</span>
        </h4>
        <p>This is a message!</p>
      </div>
    </div>
  );
}

export default Message;
