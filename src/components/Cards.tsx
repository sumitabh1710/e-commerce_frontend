/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from "react";

interface CardsProps {
  data: any;
}

const Cards: FC<CardsProps> = ({ data }) => {
  return (
    <div className="border-2 transition-all flex flex-col gap-4 shadow hover:shadow-2xl border-[#A8D5E3] rounded-xl overflow-hidden p-4">
      <div className="w-full flex justify-center items-center h-[250px]">
        <img
          alt="product"
          src={data.imageUrl}
          className="w-fit h-full rounded-xl"
        />
      </div>
      <div className="flex-col flex gap-1">
        <p className="text-sm text-gray-900 font-semibold">{`${data.name}, `}
            <span className="text-[10px] text-gray-900 font-light italic">{data.category}</span>
        </p>
        <p className="text-xs text-gray-900 font-light">{data.description}</p>
        <p className="text-xs text-gray-900 font-semibold">$ {data.price}</p>
        <div className="flex justify-end items-start">
          <button className="bg-[#FF78AC] py-2 px-4 text-xs shadow rounded-md text-white font-semibold">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
