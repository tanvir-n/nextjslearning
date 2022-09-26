import React from "react";
import styles from "./Card.module.css";
import { useRouter } from "next/router";

export default function Card({ id, name, city, country, image }) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => {
        router.push(`/places/${id}`);
      }}
    >
      <div className={styles["card-header"]}>
        <img src={image} alt={name} className={styles["card-img"]} />
      </div>
      <div className={styles["cardContent"]}>
        <h3>{name}</h3>
        <p>{city}, {country}</p>
      </div>
    </div>
  );
}