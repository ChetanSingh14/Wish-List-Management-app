import React, { useState } from "react";
import styles from "./Wishlist.module.css"
export default function Wishlist() {
  const [data, setData] = useState({
    wish: "",
  });
  const [wishlist, setWishlist] = useState([]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWishlist([...wishlist, data.wish]);
    setData({ wish: "" }); // Clear the input field after submission
  };

  const handleClearAll = () => {
    setWishlist([]);
  };

  const handleDelete = (index) => {
    const updatedWishlist = wishlist.filter((item, i) => i !== index);
    setWishlist(updatedWishlist);
  };

  return (
    <>
    <div className={styles.body}>
      <div >
        <label htmlFor="wish">Wish:</label>
        <input
          type="text"
          name="wish"
          value={data.wish}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Update
        </button>
        <button type="button" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
      <h1>Wish List:</h1>
      <div >
        <ul>
          {wishlist.map((item, index) => (
            <li key={index}>
              {item}
              <button  className={styles.Wishlist} type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}
