import { getNameRation } from "../../utils";
import RareLine from "./rareLine";
import { useState } from "react";
import AboutItemModal from "../AboutItemModal";

export default function ProductAddCart({
  product,
  isInInventory = false,
  setSelectedItem = () => {},
  classNameBtn = "bg-gradient-to-tr from-primary to-primary/80",
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div  className=" rounded-2xl min-h-[310px] flex-shrink-0 bg-accent-200 flex flex-col gap-2.5 overflow-hidden ">
      <div
        onClick={() => setIsOpenModal(true)}
        className={`p-1.5 hover:opacity-80 cursor-pointer transition-all duration-300 py-2.5 bg-white/3 overflow-hidden relative border-b  border-${product.rarity}  flex flex-col items-center justify-center`}
      >
        <div className="flex items-center justify-start w-full">
          <h3 className="text-sm px-2  font-semibold ">{product.name}</h3>
        </div>
        <div className="flex items-center z-30 justify-center">
          <img src={product.image} alt={product.name} />
        </div>
        <div
          className={`absolute -bottom-18 left-1/2 -translate-x-1/2 blur-[55px]  w-[132px] h-[132px]  bg-${product.rarity} rounded-full`}
        ></div>
      </div>
      <div className="flex  flex-col gap-0.5 px-2.5">
        <div className="flex items-start ">
          <div className="flex flex-col w-fit  ">
            <div className="flex items-center gap-1">
              <p className=" font-semibold w-fit">~{product.price}₽</p>
              <img src="/assets/images/project/csmarket.svg" alt="csmarket" />
            </div>

            <p className="text-sm leading-none font-medium text-gray-100 w-fit">
              {getNameRation(product.rarity)}
            </p>
          </div>
        </div>
        <div className="pt-2 pr-8 pb-1 max-w-[110px]">
          <RareLine valuePercent={product.condition} />
        </div>
        <p className="text-sm leading-none font-medium text-gray-100">{product.phase}</p>
      </div>
      <button
        onClick={() => setSelectedItem(product)}
        className={
          "btn justify-center items-center !rounded-t-none flex !py-1.5 hover:opacity-90 z-50 !cursor-pointer overflow-hidden relative group !border-none " +

          (isInInventory ? "" : "btn-primary-light")
        }
      >
        <div className={`
          absolute inset-0 w-full h-full transition-all duration-300 ease-in-out
          ${classNameBtn}
          ${isInInventory ? "opacity-100" : "opacity-0 scale-90"}
          xrounded-md
        `}></div>
        <div className="relative z-10 transition-transform duration-300 ease-in-out transform
          group-hover:scale-110 group-active:scale-95">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: isInInventory ? 'rotate(45deg) scale(1.2)' : 'rotate(0deg) scale(1)',
            }}
          >
            <path
              d="M11.0121 2.08691V20.2869M1.91211 11.1869H20.1121"
              stroke={isInInventory ? "white" : "#8B52FF"}
              strokeWidth="1.8"
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
        </div>
      </button>
      <AboutItemModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </div>
  );
}
