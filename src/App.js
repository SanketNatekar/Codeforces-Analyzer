import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import User from './components/User';
import { toast } from 'react-toastify';

function App() {
  const [isAvalable,setAvalibility] = useState(false);
  const [userData,setUserData] = useState('');

  const submitHandler = async (enteredName) => { 
    console.log("submitted"); 
    const newUserInfo = "https://codeforces.com/api/user.info?handles=" + enteredName + "&checkHistoricHandles=false";

    try {
      const res = await fetch(newUserInfo);
      const output = await res.json();
      if(!res.ok){
        toast.error("Something went wrong");
        throw new Error(`Response status: ${res.status}`);
      }

      setAvalibility(true);
      setUserData(output);
      console.log(output);
    } 
    catch (error) {
      setAvalibility(false);
      console.log("Error occurred");
    }
  };

  return (
    <div className="App">
      {
        isAvalable ? <User userData={userData}/> : <Card submitHandler={submitHandler}/>
      }
    </div>
  );
}

export default App;
