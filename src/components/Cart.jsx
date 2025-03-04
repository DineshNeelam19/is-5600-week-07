import React, { useContext } from 'react';
import PurchaseForm from './PurchaseForm';
import { useCart } from '../state/CartProvider';

const Cart = () => {
  // TODO - get cart items from context
  const cartItems = [];
  const removeFromCart = () => {};
  const updateItemQuantity = () => {};
  const getCartTotal = () => {};

  const{cartItems, removeFromCart, getCartTotal, updateItemQuantity } = useCart();

  return (
    <div className="center mw7 mv4"></div>