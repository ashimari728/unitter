import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { db } from "../firebase";
import SendMessage from "./SendMessage";
// import CountLike from "./CountLike";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";

function Chat() {
  const [messages, setMessages] = useState([]);
  // const [count, setCount] = useState(0);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  // useEffect(() => {
  //   db.collection("messages")
  //     .orderBy("createdAt")
  //     .onSnapshot((snapshot) => {
  //       setCount(snapshot.docs.map((doc) => doc.data()));
  //     });
  // }, []);

  // function increment() {
  //   db.ref("messages").update({
  //     uid: {
  //       like: like + 1,
  //     },
  //   });
  // }

  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div class="msgs">
        {messages.map(({ id, text, photoURL, uid, like }) => (
          <div>
            <div key={id}>
              <div className="1uneet">
                <div className="post">
                  <div className="balloonWithIcon">
                    <img src={photoURL} alt="" />
                    <div className="textWithUid">
                      <p className="uid">{uid}</p>
                      <p>{text}</p>
                      {/* <p>{count}</p> */}
                    </div>
                  </div>
                </div>
                <div className="reaction">
                  <Button>
                    <FavoriteIcon />
                  </Button>
                  <p>{like}</p>
                  {/* <CountLike /> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SendMessage />
      {/* <CountLike /> */}
    </div>
  );
}

export default Chat;
