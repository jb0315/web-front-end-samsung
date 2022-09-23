import React, { useContext } from 'react';
import { arrayOf, oneOf, oneOfType, shape, func, number, string } from 'prop-types';


// 컨텍스트 생성
const CartContext = React.createContext();

// 컨텍스트 래퍼 컴포넌트
export const CartProvider = ({ value, children }) => {
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
    title: string,
    products: oneOfType([
      oneOf([null]),
      arrayOf(
        shape({
          amount: number,
          id: string,
          maxAmount: number,
          name: string,
          photo: string,
          price: number,
        }),
      ),
    ]),
    totalPrice: number,
    handleUpdateAmount: func,
  };

// 커스텀 훅
export const useCart = () => {
    const value = useContext(CartContext);
    if (!value) {
        throw new Error(
            'useCart Error'
        );
    }
    return value;
}


