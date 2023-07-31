import { useAppContext } from "../context/AppContext";
import { productType } from "../types/productType";

const ProductCard: React.FC<productType> = ({ id, name, price, image }) => {
  const { addToCart, cartItems } = useAppContext();

  return (
    <div className="p-5 flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={image}
          className="block h-full object-cover w-5/6 transition duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="text-center mt-5 space-y-2">
        <h1 className="font-semibold cursor-pointer transition hover:text-black/50">
          {name}
        </h1>
        <p className="text-sm">${price}</p>
        <button
          onClick={() => addToCart(id)}
          className="inline-block text-sm px-3 py-1 rounded-full border-2 border-black transition hover:bg-black hover:text-white"
        >
          Add to cart {cartItems[id] > 0 && <span>({cartItems[id]})</span>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
