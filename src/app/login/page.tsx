import React from "react";
import Link from "next/link";

type Props = {};

function Login({}: Props) {
  return (
    <>
      <form action="">
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          placeholder="enter your name"
          className="border border-black"
        />{" "}
        <br /> <br />
        <label htmlFor="surname">Surname</label> <br />
        <input
          type="text"
          placeholder="enter your surname"
          className="border border-black"
        />{" "}
        <br /> <br />
        <button
          style={{
            border: "1px solid green",
            backgroundColor: "green",
            borderRadius: "5px",
            padding: "5px 8px",
          }}
        >
          <Link href="/products">Products</Link>
        </button>
      </form>
    </>
  );
}

export default Login;
