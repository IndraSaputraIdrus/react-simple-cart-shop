import { useState, useEffect } from "react";
import { productType } from "../types/productType";
import { getProduct } from "../utils";
import { useAppContext } from "../context/AppContext";
import CartItem from "../components/CartItem";
import clsx from "clsx";

const CartPage = () => {
  const [data, setData] = useState<productType[] | null>(null);
  const { cartItems, getTotal } = useAppContext();
  const [total, setTotal] = useState<number>();

  getTotal().then((res) => setTotal(res));

  useEffect(() => {
    getProduct().then((product) => setData(product));
  }, []);

  return (
    <div className={clsx("my-10")}>
      <h1
        className={clsx(
          "text-3xl lg:text-6xl font-semibold",
          "text-center mb-7"
        )}
      >
        Your cart item
      </h1>
      <div className={clsx("grid grid-cols-1 gap-5 max-w-2xl mx-auto")}>
        {data &&
          data.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem key={item.id} {...item} />;
            }
          })}
      </div>
      <div className="text-center mt-10 mb-20">
        {total && total > 0 ? <p className="text-xl">Total: ${total}</p> : ""}
      </div>
    </div>
  );
};

export default CartPage;
