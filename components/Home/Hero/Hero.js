import React from "react";
import Image from "next/image";
import SignUpForm from "../../Global/SignUpForm/SignUpForm";
import styles from "./Hero.module.scss";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <SignUpForm />
      <div className={styles.hero_cta}>
        <span>
          <h1>3ayez meds? Fi meds!</h1>
          <p>
            Are you in need of medication but struggling to find it at your
            local pharmacy? Look no further! Our website connects individuals in
            need of pills with those who have them available. No more scouring
            the internet or waiting in long lines at the pharmacy. Our platform
            allows for easy and quick access to the medication you need. Join
            now and never worry about finding pills again.
          </p>
        </span>
        <Image width="200" height="350" src="/hero_image.png" />
      </div>
    </section>
  );
}
