import React from "react";

const UserCard = ({ el }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="title">{el.name}</div>
        <div className="price">{el.website}</div>
        <div className="description">
          {`${el.name}, email : ${el.email}, phone number : ${el.phone} `}
        </div>
      </div>
      <button>{`Company: ${el.company.name}`}</button>
    </div>
  );
};

export default UserCard;
