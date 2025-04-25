import logo from '../assets/Codeforces_logo.png';
import React, { useState } from "react";
import './Card.css';

const Card = ({ submitHandler }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitHandler(name);
  };

  return (
    <div className='Card'>

        <div className="flex justify-between mb-7">
            <img src={logo} alt='logo' height={40} width={200} loading="lazy"/>
            <div>
                <h1 className="flex justify-start heading ">CodeForces Analyzer</h1>
            </div>        
        </div>

        <p className="text-l font-sans">Unlock insights into your Codeforces journey with Codeforces Analyzer—analyze, learn, and improve your competitive programming performance!</p>

        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-3 place-content-center w-100 mt-4 h-30">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Codeforces Handle"
                    className="text-center border-[#243c5a] h-9"
                />
                <button type="submit" className="bg-slate-700 text-white font-sans rounded w-100 text-l font-bold h-9">Analyze</button>
            </div>
        </form>

    </div>
    
  );
};

export default Card;


