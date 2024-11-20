import React from "react";

const Header = ({ title, price, data, setData, isLogin }) => {
  function outerFunction() {
    console.log("outetFunction");
  }
  function main() {
    outerFunction();
  }
  main();
  return (
    <>
      <p>{title}</p>
      <p>{price}</p>
      <p>{data}</p>
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <h1>{isLogin ? data : isLogin ? "کاربر محمد لاگ این است" : null}</h1>
    </>
  );
};

export default Header;
