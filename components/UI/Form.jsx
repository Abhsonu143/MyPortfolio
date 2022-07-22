import React from "react";
import classes from "../../styles/form.module.css";
import { useState } from "react";

const Form = () => {
  const [submit,setSubmit]=useState(false);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const handlesubmit = () => {
    if(!name || !email || !message || email.indexOf("@")==-1)
      return;
    setSubmit(true);
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <form className={`${classes.form}`}>
      <div className={`${classes.form__group}`}>
        <input value={name} type="text" placeholder="Your Name" required onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className={`${classes.form__group}`}>
        <input value={email} type="email" placeholder="Email Address" required onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className={`${classes.form__group}`}>
        <textarea value={message} type="text" rows={5} placeholder="Message" required onChange={(e)=>setMessage(e.target.value)}/>
      </div>

      <button className="primary__btn" onClick={handlesubmit}>
        Send
      </button>
      {submit && <div style={{color:"#3CCF4E"}}>Your response has been submitted</div>}
    </form>
  );
};

export default Form;
