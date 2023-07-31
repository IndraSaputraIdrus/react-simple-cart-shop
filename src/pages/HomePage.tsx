import { useEffect, useState } from "react";
import { productType } from "../types/productType";
import ProductCard from "../components/ProductCard";
import clsx from "clsx";
import { getProduct } from "../utils";

const HomePage = () => {
  const [data, setData] = useState<productType[] | null>(null);

  useEffect(() => {
    getProduct().then((products) => setData(products));
  }, []);

  return (
    <>
      <h1 className={clsx("text-center", "mt-10", "text-6xl font-semibold")}>
        Ndrain Shop
      </h1>
      <div className={clsx("py-10 grid grid-cols-3 gap-2")}>
        {data &&
          data.map((item: productType) => (
            <ProductCard key={item.id} {...item} />
          ))}
      </div>
    </>
  );
};

export default HomePage;
