import { createContext, useContext, useState } from "react";
import { getProduct } from "../utils";
import { productType } from "../types/productType";
type CartItem = {
  [id: number]: number;
};

type AppContextType = {
  cartItems: CartItem;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  changeTotalCart: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  getTotal: () => Promise<number>;
};

const AppContext = createContext<AppContextType>({
  cartItems: {},
  addToCart: () => {},
  removeFromCart: () => {},
  changeTotalCart: () => {},
  getTotal: () => Promise.resolve(0),
});

export function useAppContext() {
  return useContext<AppContextType>(AppContext);
}

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
  });

  function addToCart(itemId: number) {
    const newCart = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
    setCartItems(newCart);
  }

  function removeFromCart(itemId: number) {
    const newCart = { ...cartItems, [itemId]: cartItems[itemId] - 1 };
    setCartItems(newCart);
  }

  function changeTotalCart(
    e: React.ChangeEvent<HTMLInputElement>,
    itemId: number
  ) {
    const newCart = { ...cartItems, [itemId]: parseInt(e.target.value) };
    setCartItems(newCart);
  }

  async function getTotal(): Promise<number> {
    const data = await getProduct();
    let total: number = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find(
          (product: productType) => product.id === Number(item)
        );
        if (itemInfo) {
          total += cartItems[item] * itemInfo.price;
        }
      }
    }

    return new Promise<number>((resolve) => {
      return resolve(total);
    });
  }

  const contextValue: AppContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    changeTotalCart,
    getTotal,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
