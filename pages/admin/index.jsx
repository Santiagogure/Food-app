import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Admin.module.css";
import AddButton from "../../components/AddButton";
import { Add } from "../../components/Add";

const Index = ({ orders, products }) => {
  console.log(orders);

  const [close, setClose] = useState(true);
  const [itemList, setItemList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDeleteProducts = async (id) => {
    console.log(id);
    try {
      await axios.delete("http://localhost:3000/api/products/" + id);
      setItemList(itemList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put("http://localhost:3000/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);

      console.log(currentStatus);

      if (currentStatus == 1 || currentStatus == 2) {
        await axios.delete("http://localhost:3000/api/orders/" + id);
        setOrderList([...orderList.filter((order) => order._id !== id)]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!close && <Add setClose={setClose} />}
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Orders</h1>
          <table className={styles.table}>
            <tbody>
              {orderList.length >= 1 ? (
                <tr className={styles.trTitle}>
                  <th>Address</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              ) : (
                <tr>
                  <td className={styles.norder}>No order so far</td>
                </tr>
              )}
            </tbody>
            {orderList.map((order) => (
              <tbody key={order._id}>
                <tr className={styles.trTitle}>
                  <td>{order.address}</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>
                    {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                  </td>
                  <td>{status[order.status]}</td>
                  <div className={styles.pagination}>
                    <button
                      className={styles.button}
                      onClick={() => handleStatus(order._id)}
                    >
                      Next Stage
                    </button>
                  </div>
                </tr>
                <td></td>
              </tbody>
            ))}
          </table>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Products</h1>
          <AddButton setClose={setClose} />
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>
            {itemList.map((product) => (
              <tbody key={product._id}>
                <tr className={styles.trTitle}>
                  <td>
                    <Image
                      src={product.img}
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt=""
                    />
                  </td>
                  <td>{product._id?.slice(0, 5)}...</td>
                  <td>{product.title}</td>
                  <td>${product.prices[0]}</td>
                  <td>
                    <button
                      className={styles.button}
                      onClick={() => handleDeleteProducts(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;
