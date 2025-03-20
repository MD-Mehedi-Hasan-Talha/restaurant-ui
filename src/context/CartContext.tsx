import React, { createContext, useContext, useReducer } from 'react';
import { OrderItem, MenuItem } from '../types';

type CartState = {
  items: OrderItem[];
  restaurant: string | null;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: { menuItem: MenuItem; quantity: number; instructions?: string } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(
        (item) => item.menuItem.id === action.payload.menuItem.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.menuItem.id === action.payload.menuItem.id
              ? {
                  ...item,
                  quantity: item.quantity + action.payload.quantity,
                  specialInstructions: action.payload.instructions,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            menuItem: action.payload.menuItem,
            quantity: action.payload.quantity,
            specialInstructions: action.payload.instructions,
          },
        ],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.menuItem.id !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.menuItem.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        items: [],
        restaurant: null,
      };

    default:
      return state;
  }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    restaurant: null,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}