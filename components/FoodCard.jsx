import Image from "next/image";
import styles from "../styles/FoodCard.module.css";
import Link from "next/link";

const PizzaCard = ({ food }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${food._id}`} passHref>
        <Image src={food.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{food.title}</h1>
      <span className={styles.price}>${food.prices[0]}</span>
      <p className={styles.desc}>{food.desc}</p>
    </div>
  );
};

export default PizzaCard;
