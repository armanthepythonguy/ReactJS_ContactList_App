import React from "react";

const ContactCard = (props) => {
    const { id ,name, email} = props.contact;
    return(
        <div className="item">
        <img className="ui avatar image" src="https://github.com/dmalvia/React_Tutorial_Contact_Manager_App/blob/master/src/images/user.png?raw=true" alt="hello"></img>
            <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" style={{color:"red"}} onClick={()=> props.clickHandler(id)}></i>
        </div>
    );
};

export default ContactCard;