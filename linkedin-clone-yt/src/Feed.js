import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image"
import SubscriptionsIcon from "@mui/icons-material/Subscriptions"
import EventNoteIcon from "@mui/icons-material/EventNote"
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay"

import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";

function Feed() {
  const [posts,setPosts]=useState([])


  
  useEffect(()=>{
    db.collection("posts").onSnapshot(snapshot=>( setPosts(snapshot.map(doc=>(
      {
        id:doc.id,
        data:doc.data
      }
    )))))
  },[])





  const sendPost=(e)=>{
    e.prevenDefault()

    db.collection('posts ').add(
      {
        name:'Pavan Wadikar',
        description:"This is for test",
        message:"test message for firebase"
      }
    )    

  }

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDayIcon} title="photo" color="#7Fc15E" />

        </div>
      </div>
      {/* Posts */}
      {posts.map((post)=>{
      <Post />

      })}
      <Post name="Pavan Wadikar" description='Test' message='test Message'/>

    </div>
  );
}

export default Feed;
