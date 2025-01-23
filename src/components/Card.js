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
                <h2 className="flex justify-start heading mr-40">CodeForces Analyzer</h2>
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
                    className="text-center border-b-zinc-500 h-8"
                />
                <button type="submit" className="bg-black text-white font-sans rounded w-100 text-l h-8">Analyze</button>
            </div>
        </form>

    </div>
    
  );
};

export default Card;


