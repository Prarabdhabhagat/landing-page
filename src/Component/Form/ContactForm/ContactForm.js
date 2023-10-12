import React, { useState } from "react";
import Button from "../../Button/Button";
import { BiMessageDetail } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { AiTwotoneMail } from "react-icons/ai";
import styles from "./ContactForm.module.css";
import lady from "../../../Images/contact.svg";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log(event);
  };
  return (
    <div className="flex gap-[50px] mt-[65px] ml-[188px]">
      <div className="flex flex-col">
        {/* Two Buttons */}
        <div className="flex gap-[32px]">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<BiMessageDetail fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<BiPhoneCall fontSize="24px" />} />
        </div>
        <div className="mt-[17px]">
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<AiTwotoneMail />}
          />
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <div className={styles.formControl}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="text">Note</label>
              <textarea type="text" name="text" cols="50" rows="3" />
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <Button text="submit" />
          </div>
        </form>
        <div>{`Your name is ${name} and email is ${email} and address is ${text}`}</div>
      </div>
      <div>
        <img src={lady} alt="random" />
      </div>
    </div>
  );
}
