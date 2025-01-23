import React from 'react'
import Profile from './Profile'
import Analysis from './Analysis';
import {useState,useEffect} from 'react';

function User(props) {
    const [questionData,setQuestionData] = useState('');
    const profileData  = props.userData.result[0];
    const userName = profileData.handle;
    //const questionInfoUrl = "https://codeforces.com/api/user.status?handle="+ userName +"&from=1&count=1000";

    const reqQuestionData = async (userName) => { 
        console.log("question data requested"); 
        const questionInfo = "https://codeforces.com/api/user.status?handle="+ userName +"&from=1&count=1000";
    
        try {
          const res = await fetch(questionInfo);
          const output = await res.json();
          if(!res.ok){
            throw new Error(`Response status: ${res.status}`);
          }   
        //   setAvalibility(true);
          setQuestionData(output);
          console.log(output);
        } 
        catch (error) {
        //   setAvalibility(false);
          console.log("Error occurred");
        }
      };
      
      useEffect( () =>{
        console.log('reredered');
        reqQuestionData(userName);
      },[]);
      

  return (
    <div>
        <Profile profileData={profileData}/>
        <Analysis questionData={questionData}/>

    </div>
  )
}

export default User