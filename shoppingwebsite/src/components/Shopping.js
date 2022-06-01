import React, { useState, useEffect } from "react";
import "./Shopping.css";

const Shopping = () => {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://fakestoreapi.com/products`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);

  const [cart, setCart] = useState();

  return (
    <div className="cardWrapper">
      <div className="categories">
        {appState?.repos?.map((e, index) => {
          return (
            <>
              <h6>{e?.category}</h6>
            </>
          );
        })}
      </div>
      <div className="products">
      {appState?.repos?.map((e, index) => {
        return (
      
          <div className="card" key={index}>
            <img src={e?.image} class="" alt="" />
            <div>
              <h4>{e?.title}</h4>
              <h6>{e?.category}</h6>
              <p>{e?.description}</p>
              <span>{e?.price}</span>
            </div>
            <button onClick={() => setCart(cart)}>Add</button>
          </div>
         
        );
      })}
       </div>
       <div className="cart">
           <h2>My Cart</h2>
           <hr />
           <span>{cart}</span>
       </div>
    </div>
  );
};

export default Shopping;
