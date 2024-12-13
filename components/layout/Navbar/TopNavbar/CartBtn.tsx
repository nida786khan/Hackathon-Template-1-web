"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// This is a placeholder for the cart data (simplified version).
const useAppSelector = () => {
  // Example cart data for explanation
  return {
    cart: {
      totalQuantities: 3, // Number of items in the cart
    },
  };
};

const CartBtn = () => {
  // Getting the cart data (mocking the selector for beginners)
  const { cart } = useAppSelector();

  return (
    // Link to the Cart page
    <Link href="/cart" className="relative mr-4 p-1">
      {/* Cart icon */}
      <Image
        src="/icons/cart.svg" // Path to the cart icon
        height={22} // Adjusted height
        width={22} // Adjusted width
        alt="Cart Icon"
        className="max-w-[22px] max-h-[22px]" // Styling the icon
      />

      {/* Showing total quantities if more than 0 */}
      {cart && cart.totalQuantities > 0 && (
        <span
          className="absolute -top-2 left-1/2 -translate-x-1/2 bg-black text-white rounded-full px-1 text-xs"
        >
          {cart.totalQuantities}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;

