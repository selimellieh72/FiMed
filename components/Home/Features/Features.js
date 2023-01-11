import React from "react";
import styles from "./Features.module.scss";
import Offer from "./icons/offer.svg";
import Request from "./icons/requests.svg";
import Pharmacy from "./icons/pharmacy.svg";

export default function Features() {
  return (
    <section className={styles.features_section}>
      <h2>What we offer</h2>
      <div className={styles.features}>
        <article className={styles.feature}>
          <h5>Offer</h5>
          <Offer />
          <p>
            Share your excess of medications with others by posting them on our
            platforms.
          </p>
        </article>
        <article className={styles.feature}>
          <h5>Request</h5>
          <Request />
          <p>
            Share your excess of medications with others by posting them on our
            platforms.
          </p>
        </article>
        <article className={styles.feature}>
          <h5>Ask A professional</h5>
          <Pharmacy />
          <p>
            Share your excess of medications with others by posting them on our
            platforms.
          </p>
        </article>
      </div>
    </section>
  );
}
