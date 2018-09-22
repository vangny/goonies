import React from 'react';

const TrailInfo = (props) => {
  return (
    <div>
      {props.selectedTrail.name}
      <br />
      <img src={props.selectedTrail.imgSmallMed} alt={props.selectedTrail.imgMedium}/>
      <ul>
        <li>{props.selectedTrail.summary}</li>
        <li>{`Length: ${props.selectedTrail.length} miles`}</li>
        <li>{`Rating: ${props.selectedTrail.stars} / 5 stars`}</li>
        <li>{`Total Votes: ${props.selectedTrail.starVotes}`}</li>
      </ul>
    </div>
  );
};

export default TrailInfo;
