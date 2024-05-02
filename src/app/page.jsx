import Image from "next/image";
import styles from "./home.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur non
          ipsa odio deserunt, similique ad maiores! Ab.
        </p>
        <div className={styles.buttons}>
          <div className={styles.button}>Learn More</div>
          <div className={styles.button}>Contact</div>
        </div>
        <div className={styles.brands}>
          <Image
            src={"/brands.png"}
            alt="brands"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={"/hero.gif"}
          alt="hero img"
          fill
          className={styles.heroImg}
        />
      </div>
    </main>
  );
}
