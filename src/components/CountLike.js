import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { collection, getDocs, updateDoc } from "firebase/firestore";

// クリック数が、偶数か、奇数化かでONOFF
function CountLike() {
  const [message, setMessage] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const messageData = collection(db, "messages");
    getDocs(messageData).then((snapshot) => {
      setMessage(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  const countLk = async (uid) => {
    const useDocumentRef = doc(db, "messages", uid);
    console.log(useDocumentRef);
    await updateDoc(useDocumentRef, {
      like: like + 1,
    });
  };

  return (
    <div>
      {message.map((message) => (
        <div>{message.like}</div>
      ))}
      <Button onClick={() => countLk(message.like)}>
        <FavoriteIcon />
      </Button>
      {/* <p>{count}</p> */}
    </div>
  );
}

export default CountLike;
