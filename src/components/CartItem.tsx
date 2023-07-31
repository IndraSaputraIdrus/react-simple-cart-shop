import { useAppContext } from "../context/AppContext";
import { productType } from "../types/productType";

const CartItem: React.FC<productType> = ({ id, name, price, image }) => {
  const { addToCart, cartItems, removeFromCart, changeTotalCart } =
    useAppContext();

  return (
    <div className="flex items-center justify-center shadow-lg p-3 rounded-lg">
      <div className="w-1/3 flex items-center justify-center">
        <img src={image} className="w-full object-cover" />
      </div>
      <div className="flex-auto text-center">
        <h1 className="text-lg lg:text-2xl font-semibold">{name}</h1>
        <p className="mt-2">${price}</p>
        <div className="flex items-center justify-center space-x-3 mt-3">
          <button
            onClick={() => removeFromCart(id)}
            className="block shadow py-1 px-2 text-sm bg-black text-white rounded"
          >
            -
          </button>
          <input
            className="bg-slate-300 px-3 py-1 w-16 text-center flex rounded shadow text-sm"
            onChange={(e) => changeTotalCart(e, id)}
            value={cartItems[id]}
          />
          <button
            onClick={() => addToCart(id)}
            className="block shadow py-1 px-2 text-sm bg-black text-white rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
