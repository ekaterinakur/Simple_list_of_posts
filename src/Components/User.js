import React from 'react';
import '../styles/User.css';

function User(props) {
  const { name, email, address } = props;

  return (
    <div className="user">
      <p><i>{name},</i> {address}</p>
      <a href={"mailto:" + email}>{email} <span className="envelope">&#9993;</span></a>
    </div>
  );
}

export default User;
