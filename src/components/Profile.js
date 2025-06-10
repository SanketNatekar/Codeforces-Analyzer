import React from 'react';

function Profile({ profileData }) {
  const { handle, rating, rank, titlePhoto, maxRating, maxRank } = profileData;

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 transition-transform hover:scale-[1.02]">
      
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">@{handle}</h1>
        <p className="text-lg text-gray-700 mb-1">Rating: <span className="font-semibold text-blue-700">{rating}</span></p>
        <p className="text-lg text-gray-700 mb-1">Current Rank: <span className="font-semibold text-green-700 capitalize">{rank}</span></p>
        <p className="text-lg text-gray-700 mb-1">Max Rating: <span className="font-semibold text-indigo-700">{maxRating}</span></p>
        <p className="text-lg text-gray-700">Max Rank: <span className="font-semibold text-purple-700 capitalize">{maxRank}</span></p>
      </div>

      <div>
        <img
          src={titlePhoto}
          alt="User"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow-md"
        />
      </div>
    </div>
  );
}

export default Profile;
