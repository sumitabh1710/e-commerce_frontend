/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";

interface CartItemsProps {
  data: any;
}

const CartItems: FC<CartItemsProps> = ({ data }) => {
  return (
    <div className="border-2 transition-all w-full flex justify-between gap-4 shadow hover:shadow-xl border-[#A8D5E3] rounded-xl overflow-hidden p-4">
      <div className="flex gap-4">
        <div className="w-[200px] flex justify-center items-center h-[150px]">
          <img
            alt="product"
            src={data.imageUrl}
            className="w-fit h-full rounded-xl"
          />
        </div>
        <div className="flex-col flex gap-1">
          <p className="text-sm text-gray-900 font-semibold">
            {`${data.name}, `}
            <span className="text-[10px] text-gray-900 font-light italic">
              {data.category}
            </span>
          </p>
          <p className="text-xs text-gray-900 font-light">{data.description}</p>
          <p className="text-xs text-gray-900 font-semibold">$ {data.price}</p>
        </div>
      </div>
      <div className="w-fit flex items-end justify-end h-full">
        <button className="bg-[#FF78AC] py-2 px-4 text-xs shadow rounded-md text-white font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartItems;
