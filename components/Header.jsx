import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { toggleComponent } from "../redux/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    dispatch(toggleComponent());
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div onClick={handleClick} className={styles.callButton}>
          <Image
            src="/../public/img/burger-icon.png"
            alt=""
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <Link href="/" passHref>
            <div className={styles.text}>FOOD-APP</div>
          </Link>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>

          <Link href="/products/pizza" passHref>
            <li className={styles.listItem}>Pizzas</li>
          </Link>
          <Link href="/products/burger" passHref>
            <li className={styles.listItem}>Burgers</li>
          </Link>
          <li className={styles.listItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        {cart.products.length <= 0 ? (
          <div
            onClick={() => alert("Need to add an order to your cart")}
            className={styles.cart}
          >
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        ) : (
          <Link href="/cart" passHref>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="30px" height="30px" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
