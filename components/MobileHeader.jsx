import React, { useState } from "react";
import styles from "../styles/MobileHeader.module.css";
import Link from "next/link";
import { toggleComponent } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const MobileHeader = () => {
  const dispatch = useDispatch();

  const showComponent = useSelector((state) => state.cart.showComponent);

  function handleCloseComponent() {
    dispatch(toggleComponent());
  }

  return (
    <>
      {showComponent ? (
        <div className={styles.scroller}>
          <div>
            <span className={styles.close} onClick={handleCloseComponent}>
              X
            </span>
          </div>

          <nav>
            <ul className={styles.ul}>
              <Link href="/" passHref>
                <h2>Menu</h2>
              </Link>
              <Link href="/products/pizza" passHref>
                <h2>Pizzas</h2>
              </Link>
              <Link href="/products/burger" passHref>
                <h2>Burgers</h2>
              </Link>
              <h4>
                Number: <span>4360-8403</span>
              </h4>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileHeader;
