import React, { useEffect } from "react";
import axios from "axios";
import styles from "../../../styles/Products.module.css";
import FoodCard from "../../../components/FoodCard";
import { useDispatch } from "react-redux";
import { toggleComponent } from "../../../redux/cartSlice";

const Products = ({ foodlist }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleComponent());
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Here you have all the pizzas</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>

      <div className={styles.wrapper}>
        {foodlist.slice(0, 8).map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodlist: res.data,
    },
  };
};

export default Products;
