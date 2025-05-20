import { getNameRation } from "../../utils";
import { UserProductInfo } from "./userProductInfo";
import RareLine from "./rareLine";
import AboutItemModal from "../AboutItemModal";
import { useState } from "react";
export default function UserProduct({ product, isAuthor = false }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(true)} className="rounded-2xl hover:opacity-80 cursor-pointer transition-all duration-300 bg-accent-200 flex flex-col gap-2.5 overflow-hidden ">
      <div
        className={`p-1.5 py-2.5 bg-white/4 overflow-hidden relative border-b  border-${product.rarity}  flex flex-col items-center justify-center`}
      >
        <div className="flex items-center justify-start w-full">
          <h3 className="text-sm px-2 font-semibold">{product.name}</h3>
        </div>
        <div className="flex items-center z-30 justify-center">
          <img src={product.image} alt={product.name} />
        </div>
        <div
          className={`absolute -bottom-24 left-1/2 -translate-x-1/2 blur-3xl  w-38 h-38 bg-${product.rarity} rounded-full`}
        ></div>
      </div>
      <div className="flex flex-col gap-0.5 px-2.5">
        <div className="flex flex-col w-fit ">
          <div className="flex items-center gap-1">
            <p className=" font-semibold w-fit text-lg">~{product.price}₽</p>
            <img src="/assets/images/project/csmarket.svg" alt="csmarket" />
          </div>

          <p className="text-sm leading-none font-medium text-gray-100 w-fit">
            {getNameRation(product.rarity)}
          </p>
        </div>
        <div className="pt-3.5 pr-8 pb-2 max-w-[140px]">
          <RareLine valuePercent={product.condition} />
        </div>
        <p className="text-sm leading-none font-medium text-gray-100">{product.phase}</p>
        <div className="py-4 w-full flex items-center gap-2">
          {UserProductInfo(isAuthor)}
        </div>
      </div>
      <AboutItemModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>

  );
}
