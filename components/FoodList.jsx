import styles from "../styles/FoodList.module.css";
import FoodCard from "./FoodCard";

const FoodList = ({ foodlist }) => {
  return (
    <div id="products" className={styles.container}>
      <h1 className={styles.title}>Check Our Best Products</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {foodlist.slice(8, 12).map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <div className={styles.wrapper}>
        {foodlist.slice(0, 4).map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
