import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [carts, setCarts] = useState(null);
  useEffect(() => {
    axios.get("https://dummyjson.com/comments")
      .then((Response) => {

        setCart(Response.data.comments.slice(0,20));
      })
      .catch((res) => {
        setCarts(res.message);
      });
  }, []);
  if (carts) {
    return <p>404 : {carts}</p>;
  }
  return (
    <>
        <h1>Comments-Users</h1>
      <div className="cart">
        {cart.map((e) => {
          return (
              <div key={e.id} className="subcart">
              <p><strong>Name : </strong>{e.user.fullName}</p>
              <p><strong>UserName : </strong>{e.user.username}</p>
              <p><strong>Id :</strong> {e.id}</p>
              <p><strong>Title :</strong> {e.body}</p>
              <p><strong>PostId :</strong> {e.postId}</p>
              <p><strong>Likes :</strong> {e.likes}</p>
              </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
