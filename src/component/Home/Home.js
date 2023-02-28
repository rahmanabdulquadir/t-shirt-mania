import React from "react";
import { useLoaderData } from "react-router-dom";
import Orders from "../Orders/Orders";
import T_shirts from "../T_shirt/T_shirts";

const Home = () => {
  const tshirts = useLoaderData();
  return (
    <div className="grid grid-cols-3">
      <div className="grid grid-cols-2 col-span-2 gap-3">
        {tshirts.map((ts) => (
          <T_shirts ts={ts}></T_shirts>
        ))}
      </div>
      <Orders></Orders>
    </div>
  );
};

export default Home;
