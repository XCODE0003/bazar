import { useState } from "react";
import Select from "../components/Select";
import RadioSelect from "../components/SelectRadio";
import ProductAddCart from "../components/Product/ProductAddCart";
import { Link } from "react-router-dom";

const sortOptions = [
  {
    id: 1,
    value: "popular",
    name: "По популярности",
    icon: null,
  },
  {
    id: 2,
    value: "price_high",
    name: "По цене (дорогие)",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 0.75C13 0.335786 12.6642 0 12.25 0C11.8358 0 11.5 0.335786 11.5 0.75V13.3219L10.0529 11.7432C9.77297 11.4379 9.29855 11.4172 8.99321 11.6971C8.68787 11.977 8.66724 12.4515 8.94714 12.7568L11.6971 15.7568C11.8392 15.9118 12.0398 16 12.25 16C12.4602 16 12.6608 15.9118 12.8029 15.7568L15.5529 12.7568C15.8328 12.4515 15.8121 11.977 15.5068 11.6971C15.2015 11.4172 14.727 11.4379 14.4471 11.7432L13 13.3219V0.75ZM0.75 1.5C0.335786 1.5 0 1.83579 0 2.25C0 2.66421 0.335786 3 0.75 3H9.25C9.66421 3 10 2.66421 10 2.25C10 1.83579 9.66421 1.5 9.25 1.5H0.75ZM3 5.25C3 4.83579 3.33579 4.5 3.75 4.5H9.25C9.66421 4.5 10 4.83579 10 5.25C10 5.66421 9.66421 6 9.25 6H3.75C3.33579 6 3 5.66421 3 5.25ZM6.75 7.5C6.33579 7.5 6 7.83579 6 8.25C6 8.66421 6.33579 9 6.75 9H9.25C9.66421 9 10 8.66421 10 8.25C10 7.83579 9.66421 7.5 9.25 7.5H6.75Z"
          fill="#787E87"
          fillOpacity="0.6"
        />
      </svg>
    ),
  },
  {
    id: 3,
    value: "price_low",
    name: "По цене (дешёвые)",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 15.25C3 15.6642 3.33578 16 3.75 16C4.16421 16 4.5 15.6642 4.5 15.25L4.5 2.6781L5.94713 4.25679C6.22703 4.56213 6.70145 4.58276 7.00679 4.30287C7.31213 4.02297 7.33276 3.54855 7.05286 3.24321L4.30286 0.243205C4.16081 0.0882339 3.96023 -1.05255e-06 3.75 -1.07093e-06C3.53977 -1.08931e-06 3.33919 0.0882338 3.19713 0.243205L0.447132 3.2432C0.167237 3.54854 0.187864 4.02297 0.493204 4.30286C0.798543 4.58276 1.27297 4.56213 1.55286 4.25679L3 2.6781L3 15.25ZM15.25 14.5C15.6642 14.5 16 14.1642 16 13.75C16 13.3358 15.6642 13 15.25 13L6.75 13C6.33579 13 6 13.3358 6 13.75C6 14.1642 6.33579 14.5 6.75 14.5L15.25 14.5ZM13 10.75C13 11.1642 12.6642 11.5 12.25 11.5L6.75 11.5C6.33579 11.5 6 11.1642 6 10.75C6 10.3358 6.33579 10 6.75 10L12.25 10C12.6642 10 13 10.3358 13 10.75ZM9.25 8.5C9.66421 8.5 10 8.16421 10 7.75C10 7.33579 9.66421 7 9.25 7L6.75 7C6.33579 7 6 7.33579 6 7.75C6 8.16421 6.33579 8.5 6.75 8.5L9.25 8.5Z"
          fill="#787E87"
          fillOpacity="0.6"
        />
      </svg>
    ),
  },
  {
    id: 4,
    value: "rare",
    name: "По редкости",
    icon: null,
  },
];

export default function MainPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sort, setSort] = useState(sortOptions[0]);
  const [showSortModal, setShowSortModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="container flex flex-col flex-1 h-full gap-4 mx-auto">
      <div className="flex flex-col gap-[30px] p-[30px] bg-accent-300 rounded-2xl border border-white/5">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-semibold">Ваш инвентарь</h1>
          <p className="text-primary">55 предметов всего</p>
        </div>
        <div className="flex w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <div className="h-fit flex justify-between w-full">
              <div className="flex items-center justify-between w-full gap-3">
                <div className="input-wrapper !py-3 !px-5 min-w-[380px]">
                  <svg
                    width="27"
                    height="28"
                    viewBox="0 0 27 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.9929 26.6804L18.8225 19.51M11.6521 23.0952C5.71194 23.0952 0.896484 18.2798 0.896484 12.3396C0.896484 6.39944 5.71194 1.58398 11.6521 1.58398C17.5923 1.58398 22.4077 6.39944 22.4077 12.3396C22.4077 18.2798 17.5923 23.0952 11.6521 23.0952Z"
                      stroke="#787E87"
                      strokeWidth="1.7926"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Найти предмет"
                    className="input-field w-full"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button className="btn btn-primary">Выбрать все</button>

                  <div className="relative h-full">
                    <button
                      className="btn  !bg-accent-200   h-full flex items-center !px-2 min-w-[250px] !justify-between !text-gray-100 gap-2"
                      onClick={() => setShowSortModal(!showSortModal)}
                    >
                      {sort.name}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.182992 0.374643C0.300196 0.257474 0.459139 0.191652 0.624866 0.191652C0.790594 0.191652 0.949536 0.257474 1.06674 0.374643L4.99987 4.30777L8.93299 0.374643C8.99064 0.314949 9.05961 0.267335 9.13586 0.234579C9.21211 0.201824 9.29413 0.184583 9.37711 0.183861C9.4601 0.18314 9.5424 0.198954 9.61921 0.23038C9.69602 0.261805 9.7658 0.308213 9.82449 0.366896C9.88317 0.425579 9.92958 0.495362 9.961 0.572172C9.99243 0.648982 10.0082 0.731281 10.0075 0.814269C10.0068 0.897256 9.98956 0.979268 9.9568 1.05552C9.92405 1.13177 9.87643 1.20074 9.81674 1.25839L5.44174 5.63339C5.32454 5.75056 5.16559 5.81638 4.99987 5.81638C4.83414 5.81638 4.6752 5.75056 4.55799 5.63339L0.182992 1.25839C0.0658222 1.14119 0 0.982246 0 0.816518C0 0.65079 0.0658222 0.491848 0.182992 0.374643Z"
                          fill="#787E87"
                        />
                      </svg>
                    </button>

                    {showSortModal && (
                      <div className="absolute top-full right-0 mt-2 z-50 w-80">
                        <RadioSelect
                          options={sortOptions}
                          defaultValue={sort}
                          onChange={(option) => {
                            setSort(option);
                            setShowSortModal(false);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="2xl:grid-cols-6 gap-7 max-h-[815px] overflow-y-auto grid grid-cols-5">
              {Array.from({ length: 100 }).map((_, index) => (
                <ProductAddCart
                  key={index}
                  isAuthor={index % 2 === 0}
                  isInInventory={selectedItems.includes(index)}
                  setSelectedItem={() => {
                    if (selectedItems.includes(index)) {
                      setSelectedItems(
                        selectedItems.filter((item) => item !== index)
                      );
                    } else {
                      setSelectedItems([...selectedItems, index]);
                    }
                  }}
                  product={{
                    name: `Наклейка|Titan ${index + 1}`,
                    image: "/assets/images/skins/knife.png",
                    price: "361 215.18",
                    rarity: "field_tested",
                    phase: 0.05721636621,
                    condition: 50,
                  }}
                />
              ))}
            </div>
          </div>
          {selectedItems.length === 0
            ? itemsNoProducts()
            : itemsProducts({ items: selectedItems, isSuccess, setIsSuccess })}
        </div>
      </div>
    </div>
  );
}

function itemsNoProducts() {
  return (
    <div className="px-3.5 py-6 max-w-[400px] max-h-[850px] w-full bg-accent-200 rounded-2xl flex flex-col">
      <p className="text-2xl font-semibold">Выставить предметы</p>
      <div className="h-full flex justify-center items-center flex-col gap-3.5">
        <div className="text-gray-100 flex justify-center items-center flex-col gap-3.5 ">
          <svg
            width="171"
            height="214"
            viewBox="0 0 171 214"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_0_7616)">
              <path
                d="M130.906 0.503906H40.0957V116.258H130.906V0.503906Z"
                stroke="#787E87"
              />
              <path
                d="M131.1 82.1582H39.9004V173.358H131.1V82.1582Z"
                stroke="#787E87"
              />
            </g>
            <rect
              x="0.5"
              y="1.00391"
              width="170"
              height="211.754"
              rx="11.5"
              stroke="white"
              strokeOpacity="0.05"
            />
            <defs>
              <clipPath id="clip0_0_7616">
                <rect
                  y="0.503906"
                  width="171"
                  height="212.754"
                  rx="12"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <p className="text-2xl font-semibold">
            Упс, пока ничего не выбрано...
          </p>
          <p className="text-lg font-semibold">
            Выберите предметы для выставления
          </p>
        </div>
      </div>
      <div className="py-10  flex justify-center items-center gap-6 border-white/5 border-t-2">
        <button className="btn btn-border !py-2 !px-8 h-full">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7385 2.12861L16.0893 5.47513C16.2336 5.61927 16.3204 5.81112 16.3334 6.0147C16.3463 6.21828 16.2845 6.41959 16.1596 6.58086L16.0901 6.65961L12.7394 10.0153C12.589 10.1672 12.3862 10.2558 12.1727 10.263C11.9591 10.2703 11.7508 10.1956 11.5904 10.0543C11.4301 9.91303 11.3298 9.7158 11.3101 9.503C11.2904 9.2902 11.3528 9.07792 11.4845 8.90961L11.5541 8.83087L13.4724 6.91007H4.60721C4.40189 6.91025 4.20365 6.83502 4.05015 6.69866C3.89665 6.5623 3.79858 6.37431 3.77456 6.1704L3.76953 6.07239C3.76956 5.86722 3.84489 5.66919 3.98123 5.51587C4.11756 5.36254 4.30543 5.26459 4.5092 5.24058L4.60721 5.23472H13.4782L11.5549 3.31392C11.4106 3.16979 11.3238 2.97793 11.3108 2.77435C11.2978 2.57077 11.3596 2.36946 11.4845 2.20819L11.5541 2.12861C11.6982 1.98426 11.8901 1.89746 12.0936 1.8845C12.2972 1.87155 12.4985 1.93333 12.6598 2.05824L12.7385 2.12861ZM16.3263 14.3512L16.3322 14.4492C16.3322 14.6543 16.2568 14.8524 16.1205 15.0057C15.9842 15.159 15.7963 15.257 15.5925 15.281L15.4945 15.2868H6.62853L8.55016 17.2076C8.69451 17.3518 8.78131 17.5436 8.79426 17.7472C8.80722 17.9508 8.74544 18.1521 8.62052 18.3134L8.551 18.3921C8.40686 18.5365 8.215 18.6233 8.01142 18.6362C7.80784 18.6492 7.60653 18.5874 7.44526 18.4625L7.36568 18.3921L4.01497 15.0448C3.87074 14.9005 3.7841 14.7086 3.7713 14.505C3.7585 14.3015 3.82042 14.1002 3.94544 13.939L4.01497 13.8603L7.36568 10.5062C7.51608 10.3544 7.71882 10.2658 7.93241 10.2585C8.146 10.2513 8.35428 10.326 8.51462 10.4672C8.67497 10.6085 8.77524 10.8058 8.79493 11.0186C8.81462 11.2314 8.75222 11.4437 8.62052 11.612L8.551 11.6907L6.63271 13.6115H15.4945C15.6997 13.6115 15.8977 13.6868 16.051 13.8232C16.2044 13.9595 16.3023 14.1474 16.3263 14.3512Z"
              fill="#F0F0F0"
            />
          </svg>
          Обмен
        </button>
        <button className="btn btn-border !py-2 !px-8 h-full">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-0.00976562 1.49205C-0.00976562 1.34393 0.049071 1.20189 0.153801 1.09716C0.258531 0.99243 0.400576 0.933594 0.548686 0.933594H0.964174C1.67155 0.933594 2.09597 1.40939 2.33797 1.85169C2.49954 2.14655 2.61645 2.48832 2.70803 2.79808C2.73281 2.79612 2.75764 2.79513 2.78249 2.7951H12.0885C12.7066 2.7951 13.1533 3.38631 12.9835 3.98125L11.6224 8.75341C11.5004 9.18145 11.2422 9.55807 10.887 9.82624C10.5317 10.0944 10.0988 10.2395 9.65368 10.2396H5.22479C4.77616 10.2397 4.33994 10.0923 3.98318 9.82033C3.62642 9.54832 3.36887 9.16667 3.2501 8.73405L2.68421 6.67001L1.74601 3.50694L1.74526 3.50098C1.6291 3.07879 1.52039 2.68341 1.35807 2.38855C1.20245 2.10188 1.07735 2.0505 0.964919 2.0505H0.548686C0.400576 2.0505 0.258531 1.99166 0.153801 1.88693C0.049071 1.7822 -0.00976562 1.64016 -0.00976562 1.49205ZM4.83015 13.9641C5.22511 13.9641 5.6039 13.8072 5.88318 13.528C6.16246 13.2487 6.31936 12.8699 6.31936 12.4749C6.31936 12.08 6.16246 11.7012 5.88318 11.4219C5.6039 11.1426 5.22511 10.9857 4.83015 10.9857C4.43519 10.9857 4.0564 11.1426 3.77712 11.4219C3.49784 11.7012 3.34095 12.08 3.34095 12.4749C3.34095 12.8699 3.49784 13.2487 3.77712 13.528C4.0564 13.8072 4.43519 13.9641 4.83015 13.9641ZM10.0424 13.9641C10.4373 13.9641 10.8161 13.8072 11.0954 13.528C11.3747 13.2487 11.5316 12.8699 11.5316 12.4749C11.5316 12.08 11.3747 11.7012 11.0954 11.4219C10.8161 11.1426 10.4373 10.9857 10.0424 10.9857C9.64741 10.9857 9.26862 11.1426 8.98934 11.4219C8.71006 11.7012 8.55316 12.08 8.55316 12.4749C8.55316 12.8699 8.71006 13.2487 8.98934 13.528C9.26862 13.8072 9.64741 13.9641 10.0424 13.9641Z"
              fill="#F0F0F0"
            />
          </svg>
          Маркет
        </button>
      </div>
    </div>
  );
}
function itemsProducts({ items, isSuccess, setIsSuccess }) {
  return (
    <div className="px-3.5 py-6 max-w-[400px] max-h-[850px] w-full bg-accent-200 rounded-2xl flex flex-col relative overflow-hidden">
      {/* Success overlay */}
      {isSuccess && (
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-50 animate-success-fade-in">
          <div className="flex flex-col items-center gap-4 animate-success-scale-in">
            <svg
              width="142"
              height="105"
              viewBox="0 0 142 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-check-draw"
            >
              <path
                d="M45.0241 85.1274L14.5229 54.6262C11.3824 51.4857 6.29074 51.4857 3.15027 54.6262C0.00980532 57.7666 0.00980532 62.8583 3.15027 65.9988L39.3378 102.186C42.4782 105.327 47.5699 105.327 50.7104 102.186L139.169 13.728C142.309 10.5875 142.309 5.49582 139.169 2.35535C136.028 -0.785116 130.937 -0.785116 127.796 2.35535L45.0241 85.1274Z"
                fill="#65FF6F"
              />
            </svg>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Успешно выставлено!
              </h3>
              <p className="text-gray-300">
                Активные сделки будут появляться в{" "}
                <Link to="/" className="text-primary">
                  Офферах
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      <div
        className={`flex justify-between items-center transition-opacity duration-500 ${
          isSuccess ? "opacity-30" : "opacity-100"
        }`}
      >
        <p className="text-2xl font-semibold">
          {items.length} предмета на продажу
        </p>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.3125"
            y="0.5"
            width="46.1878"
            height="46.8675"
            rx="23.0939"
            stroke="#FF0000"
          />
          <path
            d="M21.6876 14.7579H27.1252C27.1252 13.2563 25.9079 12.0391 24.4064 12.0391C22.9049 12.0391 21.6876 13.2563 21.6876 14.7579ZM19.6485 14.7579C19.6485 12.1302 21.7787 10 24.4064 10C27.0341 10 29.1643 12.1302 29.1643 14.7579H36.9807C37.5438 14.7579 38.0003 15.2143 38.0003 15.7774C38.0003 16.3405 37.5438 16.7969 36.9807 16.7969H35.1876L33.5943 33.2608C33.3415 35.8738 31.1455 37.8675 28.5203 37.8675H20.2925C17.6673 37.8675 15.4713 35.8738 15.2185 33.2608L13.6252 16.7969H11.832C11.269 16.7969 10.8125 16.3405 10.8125 15.7774C10.8125 15.2143 11.269 14.7579 11.832 14.7579H19.6485ZM22.3673 21.215C22.3673 20.6519 21.9108 20.1954 21.3478 20.1954C20.7847 20.1954 20.3282 20.6519 20.3282 21.215V31.4104C20.3282 31.9735 20.7847 32.4299 21.3478 32.4299C21.9108 32.4299 22.3673 31.9735 22.3673 31.4104V21.215ZM27.465 20.1954C26.9019 20.1954 26.4455 20.6519 26.4455 21.215V31.4104C26.4455 31.9735 26.9019 32.4299 27.465 32.4299C28.0281 32.4299 28.4846 31.9735 28.4846 31.4104V21.215C28.4846 20.6519 28.0281 20.1954 27.465 20.1954Z"
            fill="#FF4E4E"
            fillOpacity="0.51"
          />
        </svg>
      </div>
      <div
        className={`h-full flex w-full justify-start items-start flex-col gap-3.5 transition-opacity duration-500 ${
          isSuccess ? "opacity-30" : "opacity-100"
        }`}
      >
        <div className="text-gray-100 w-full flex justify-center items-center flex-col gap-3.5 ">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div
        className={`py-10 flex justify-center items-center gap-6 border-white/5 border-t-2 transition-opacity duration-500 ${
          isSuccess ? "opacity-30" : "opacity-100"
        }`}
      >
        <div className="flex flex-col gap-10 w-full px-5">
          {!isSuccess ? (
            <>
              <div className="flex items-center justify-between text-xl ">
                <p className="text-gray-100">Вы получите</p>
                <p>₽ 361 215.18</p>
              </div>
              <div className="flex items-center justify-between gap-6 ">
                <button className="btn !text-lg btn-border h-full">
                  Назад
                </button>
                <button
                  onClick={() => setIsSuccess(true)}
                  className="btn !text-lg btn-primary !px-8 h-full"
                >
                  Выставить
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-between gap-6">
              <button
                onClick={() => setIsSuccess(false)}
                className="btn !text-lg btn-border h-full"
              >
                Назад
              </button>
              <button className="btn !text-lg btn-primary !px-8 h-full">
                Выставить
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div className="flex flex-col pb-3 border-b border-white/5 gap-3 w-full">
      <div className="flex items-center justify-between relative pt-2 z-50 overflow-hidden ">
        <div className="flex relative gap-3 items-center ">
          <div className="absolute top-0 left-0 w-full h-full border-field_tested border-b-[0.35px] max-w-[100px]"></div>
          <div className="max-w-[80px] z-40 ">
            <img
              src="/assets/images/skins/knife.png"
              alt=""
              className="h-13 w-auto"
            />
          </div>
          <div className="flex flex-col ">
            <p className="text-sm font-semibold text-gray-100">★ Нож-бабочка</p>
            <p className="text-sm ">Убийство</p>
            <p className="text-sm text-gray-100 ">После полевых испытаний</p>
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 bg-field_tested rounded-full w-10 h-12 left-0 z-30 blur-2xl"></div>
      </div>
      <div className="grid grid-cols-2">
        <div className="py-1.5 px-2.5 rounded-lg bg-accent-400/70 flex items-center justify-start">
          <p className="text-sm text-gray-100 font-semibold">52 365.18₽</p>
        </div>
        <div className="flex items-center justify-end">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9442 9.15837C15.8512 9.06464 15.7406 8.99024 15.6188 8.93947C15.4969 8.88871 15.3662 8.86257 15.2342 8.86257C15.1022 8.86257 14.9715 8.88871 14.8496 8.93947C14.7278 8.99024 14.6172 9.06464 14.5242 9.15837L12.2342 11.4584L9.94421 9.15837C9.75591 8.97006 9.50051 8.86427 9.23421 8.86427C8.96791 8.86427 8.71251 8.97006 8.52421 9.15837C8.33591 9.34667 8.23012 9.60206 8.23012 9.86837C8.23012 10.1347 8.33591 10.3901 8.52421 10.5784L10.8242 12.8684L8.52421 15.1584C8.43048 15.2513 8.35609 15.3619 8.30532 15.4838C8.25455 15.6056 8.22841 15.7364 8.22841 15.8684C8.22841 16.0004 8.25455 16.1311 8.30532 16.2529C8.35609 16.3748 8.43048 16.4854 8.52421 16.5784C8.61717 16.6721 8.72777 16.7465 8.84963 16.7973C8.97149 16.848 9.1022 16.8742 9.23421 16.8742C9.36622 16.8742 9.49693 16.848 9.61879 16.7973C9.74065 16.7465 9.85125 16.6721 9.94421 16.5784L12.2342 14.2784L14.5242 16.5784C14.6172 16.6721 14.7278 16.7465 14.8496 16.7973C14.9715 16.848 15.1022 16.8742 15.2342 16.8742C15.3662 16.8742 15.4969 16.848 15.6188 16.7973C15.7406 16.7465 15.8512 16.6721 15.9442 16.5784C16.0379 16.4854 16.1123 16.3748 16.1631 16.2529C16.2139 16.1311 16.24 16.0004 16.24 15.8684C16.24 15.7364 16.2139 15.6056 16.1631 15.4838C16.1123 15.3619 16.0379 15.2513 15.9442 15.1584L13.6442 12.8684L15.9442 10.5784C16.0379 10.4854 16.1123 10.3748 16.1631 10.2529C16.2139 10.1311 16.24 10.0004 16.24 9.86837C16.24 9.73635 16.2139 9.60565 16.1631 9.48379C16.1123 9.36193 16.0379 9.25133 15.9442 9.15837ZM19.3042 5.79837C18.3817 4.84326 17.2783 4.08144 16.0583 3.55735C14.8382 3.03326 13.526 2.7574 12.1982 2.74586C10.8704 2.73432 9.55363 2.98734 8.32467 3.49015C7.09571 3.99296 5.97919 4.73549 5.04026 5.67442C4.10133 6.61334 3.3588 7.72986 2.85599 8.95883C2.35318 10.1878 2.10017 11.5046 2.11171 12.8324C2.12324 14.1602 2.39911 15.4724 2.9232 16.6924C3.44729 17.9125 4.20911 19.0159 5.16421 19.9384C6.08668 20.8935 7.19012 21.6553 8.41016 22.1794C9.6302 22.7035 10.9424 22.9793 12.2702 22.9909C13.598 23.0024 14.9148 22.7494 16.1438 22.2466C17.3727 21.7438 18.4892 21.0012 19.4282 20.0623C20.3671 19.1234 21.1096 18.0069 21.6124 16.7779C22.1152 15.5489 22.3683 14.2321 22.3567 12.9044C22.3452 11.5766 22.0693 10.2644 21.5452 9.04432C21.0211 7.82428 20.2593 6.72083 19.3042 5.79837ZM17.8942 18.5284C16.5863 19.8378 14.8647 20.6532 13.023 20.8357C11.1813 21.0182 9.33322 20.5564 7.79373 19.5291C6.25425 18.5019 5.11857 16.9726 4.58018 15.2018C4.0418 13.4311 4.13402 11.5285 4.84112 9.81815C5.54823 8.10779 6.82648 6.69551 8.4581 5.82193C10.0897 4.94834 11.9738 4.6675 13.7892 5.02724C15.6047 5.38698 17.2393 6.36506 18.4145 7.79483C19.5896 9.2246 20.2328 11.0176 20.2342 12.8684C20.2378 13.9197 20.0328 14.9612 19.6311 15.9327C19.2295 16.9043 18.6391 17.7865 17.8942 18.5284Z"
              fill="#AE090C"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NoTradeLink() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <svg
        width="241"
        height="242"
        viewBox="0 0 241 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.767578"
          width="240"
          height="240"
          rx="11.5"
          stroke="white"
          stroke-opacity="0.05"
        />
        <rect
          x="56"
          y="23.7676"
          width="129"
          height="129"
          rx="64.5"
          stroke="white"
          stroke-opacity="0.2"
        />
        <rect
          x="56"
          y="88.7676"
          width="129"
          height="129"
          rx="64.5"
          stroke="white"
          stroke-opacity="0.2"
        />
      </svg>
      <div className="flex flex-col gap-2.5">
        <p className="text-[28px] font-semibold text-white">
          Эх.. Пока что у тебя нет предметов
        </p>
        <p className="text-gray-100">
          Попробуй вставить
          <Link to="/" className="text-primary">
            трейд-ссылку
          </Link>
        </p>
      </div>
      <div className="p-2 flex items-center bg-accent-300 rounded-lg gap-[3px]">
        <div className="h-4 w-4 flex justify-center items-center bg-white/5 rounded-[3px]">
          <img
            src="/assets/images/project/angry_eye.png"
            className="w-2.5 h-2.5"
          />
        </div>
        <input
          className="text-xs text-gray-100 max-w-[250px] w-full"
        />
        <button className="btn btn-border !p-1 !px-4 !text-xs flex-shring-0 text-nowrap !rounded-[4px]">
          Найти здесь
        </button>
        <button className="btn btn-primary !p-1 !px-4 !text-xs flex-shring-0 !rounded-[4px]">
          Готово
        </button>
      </div>
    </div>
  );
}
