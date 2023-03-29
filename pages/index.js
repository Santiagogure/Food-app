import Head from "next/head";
import axios from "axios";
import Featured from "../components/Featured";
import FoodList from "../components/FoodList";
import styles from "../styles/Home.module.css";

export default function Home({ foodlist }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food-App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <FoodList foodlist={foodlist} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodlist: res.data,
    },
  };
};
