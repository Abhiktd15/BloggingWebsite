import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export default function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('https://bloggingwebsite-crgl.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('https://bloggingwebsite-crgl.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link style={{fontFamily:"cursive"}} to="/" className="logo">
        Blogger
      </Link>
      <nav>
        {username && (
          <>
            <Link className="button" to="/create">Create new post</Link>
            <a className="button" onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}