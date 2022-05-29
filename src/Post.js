import React, { useEffect, useState } from 'react';
import './Post.css';

function Posts({ data, selectedTag, user, content }) {
  let pl = [];
  if (selectedTag.length === 0) {
    for (let i = 0; i < data.length; i++) {
      pl.push(
        <div className="Post">
          <div className="postHead">
            <div className="userTag">
              <img src={user[0].img} className="userPic" />
              <div className="userInf">
                <div className="userName">
                  <span className="by">by </span>
                  <span className="userNameFont">{user[0].name}</span>
                </div>
                <div className="userTime">{user[0].time}</div>
              </div>
            </div>
            <button className="insertWebina">웨비나 참여할래요</button>
          </div>
          <div className="PostPic">
            <img key={data[i].img} src={data[i].img} alt="dog" />
          </div>
          <div className="content">
            <div className="contentName">{content[0].name}</div>
            <div className="contentMain">
              <div className="content_letter">
                <div className="letterHead">어떤 웨비나인가요?</div>
                <ul className="letterContent">
                  {content[0].which.map((text) => (
                    <li>💡{text}</li>
                  ))}
                </ul>
              </div>
              <div className="content_letter">
                <div className="letterHead">이런 분들이 들으면 좋아요</div>
                <ul className="letterContent">
                  {content[0].forWho.map((text) => (
                    <li>📌{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    for (let i = 0; i < selectedTag.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (selectedTag[i] == data[j].tag) {
          pl.push(<img key={data[j].img} src={data[j].img} alt="dog" />);
        }
      }
    }
  }
  return <div className="Posts">{pl}</div>;
}

export default Posts;
