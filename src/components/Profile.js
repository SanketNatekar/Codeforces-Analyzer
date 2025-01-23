import React from 'react'

function Profile(props) {
    console.log(props.profileData);
    const user = props.profileData;

    const userName = user.handle;
    const rating = user.rating;
    const rank = user.rank;
    const profilePhoto = user.titlePhoto;
    //const nation = user.country
    const maxRating = user.maxRating;
    const maxRank = user.maxRank;
    
  return (
    <div>
        <div className="flex bg-white p-10">
            <div>
                <h1>handle : {userName}</h1>
                <h2>rating : {rating}</h2>
                <h2>rank : {rank}</h2>
                <h2>max rating : {maxRating}</h2>
                <h2>max rank : {maxRank}</h2>
            </div>
            <div>
                <img src={profilePhoto}/>
            </div>
        </div>
    </div>
  )
}

export default Profile