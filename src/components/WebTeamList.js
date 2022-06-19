import React from "react";
import { Link } from "react-router-dom";

const styles = {
  icon: {
    width: 100,
  },
};

const WebTeamList = ({ webs, title }) => {
  return (
    <div className="web-list">
      <h2>{title}</h2>
      {webs.map((web) => (
        <div key={web.id}>
          <Link to={`/our-team/web/${web.id}`}>
            <img src={web.imageSrc} alt="xx" style={styles.icon}></img>
            <p>{web.displayName}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WebTeamList;
