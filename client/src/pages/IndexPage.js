import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    fetch('https://bloggingwebsite-crgl.onrender.com/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
        setIsLoading(false)
      });
    });
  }, []);
  return isLoading ? <div style={{fontWeight:"bold",fontSize:"2rem",textAlign:"center",padding:"12px",color:"#888"}}>Loading ... </div>
    :  (
    <>
      {posts.length > 0 ? posts.map((post,index) => (
        <Post key={index} {...post} />
      )) :
      <div style={{fontWeight:"bold",fontSize:"2rem",textAlign:"center",padding:"12px",color:"#888"}}>There are no blogs, Please create one </div>
    }
    </>
  );
}