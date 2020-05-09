import React from "react";
import styles from "./styles/Contact.module.scss";
import { SvgLink } from "./Hero";

const ContactForm = () => (
  <form>
    <div>
      <div className={styles["input-container"]}>
        <label htmlFor='name-input'>Name</label>
        <input id='name-input' />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor='mail-input'>E-mail</label>
        <input id='mail-input' />
      </div>
      <div className={styles["select-container"]}>
        <label htmlFor='reason-input'>Reason</label>
        <select id='reason-input'>
          <option value='hi'>Say hi :)</option>
          <option value='work'>For work</option>
        </select>
      </div>
    </div>
    <div>
      <span className={styles["separator"]} />
    </div>
    <div>
      <div className={styles["textarea-container"]}>
        <label htmlFor='message-input'>Message</label>
        <textarea id='message-input' />
      </div>
      <button type="submit">Submit</button>
    </div>
  </form>
);

export const ContactSection = () => (
  <div className={styles["container"]}>
    <h1>Contact me</h1>
    <ContactForm />
    <SvgLink />
  </div>
);
