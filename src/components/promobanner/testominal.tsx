import React from "react";
import styles from "./testomonial.module.css";
import Image from "next/image";

interface TestimonialProps {
  image: string;
  name: string;
  review: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ image, name, review, rating }) => {
  return (
    <>
      <div className={styles.card}>
        <Image width={80} height={80} src={image} alt={name} className={styles.avatar} />
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.stars}>
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>
        <p className={styles.review}>{review}</p>
      </div>
    </>
  );
};

export default TestimonialCard;
