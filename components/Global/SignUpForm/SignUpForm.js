import React from "react";
import styles from "./SignUpForm.module.scss";
export default function SignUpForm() {
  return (
    <div className={styles.form_container}>
      <h3>Create your account</h3>
      <form className={styles.form}>
        <div className="form_group">
          <input
            className="form_control"
            type="text"
            placeholder="First name"
          />
          <input className="form_control" type="text" placeholder="Last name" />
        </div>
        <input className="form_control" type="email" placeholder="Email" />
        <input
          className="form_control"
          type="password"
          placeholder="Password"
        />
        <input
          className="form_control"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="btn_primary_block" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}
