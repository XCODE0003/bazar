import { useState, useEffect } from "react";
import { useMenuContext } from "../../context/MenuContext";

export default function Offers() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { isMenuOpen, openSpecificMenu } = useMenuContext();
  const menuId = "offers";
  const isOpen = isMenuOpen(menuId);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isOpen, isAnimating]);

  const toggleOffers = () => {
    if (isOpen) {
      openSpecificMenu(null);
    } else {
      openSpecificMenu(menuId);
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <button
        onClick={toggleOffers}
        className="flex items-center cursor-pointer  relative transition-colors duration-300 text-lg font-semibold gap-2"
      >
        Офферы
        <svg
          className={`${
            isOpen ? "rotate-180" : ""
          } transition-transform duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
        >
          <path
            d="M0.553094 0.874094C0.685926 0.741302 0.86606 0.666704 1.05389 0.666704C1.24171 0.666704 1.42184 0.741302 1.55468 0.874094L6.01222 5.33164L10.4698 0.874094C10.5351 0.806441 10.6133 0.752478 10.6997 0.715355C10.7861 0.678232 10.879 0.658692 10.9731 0.657875C11.0672 0.657058 11.1604 0.67498 11.2475 0.710596C11.3345 0.746211 11.4136 0.798807 11.4801 0.865315C11.5466 0.931822 11.5992 1.01091 11.6348 1.09796C11.6705 1.18501 11.6884 1.27828 11.6876 1.37234C11.6867 1.46639 11.6672 1.55934 11.6301 1.64576C11.593 1.73218 11.539 1.81034 11.4713 1.87568L6.51301 6.83401C6.38018 6.9668 6.20004 7.0414 6.01222 7.0414C5.82439 7.0414 5.64426 6.9668 5.51143 6.83401L0.553094 1.87568C0.420302 1.74285 0.345703 1.56271 0.345703 1.37489C0.345703 1.18706 0.420302 1.00693 0.553094 0.874094Z"
            fill="#F0F0F0"
          />
        </svg>
        <div className="h-5 w-5 rounded-full flex items-center justify-center bg-primary absolute -top-3 right-1.5 text-sm">
1
        </div>
      </button>

      {(isOpen || isAnimating) && (
        <div
          className="absolute top-12 z-50 left-1/2 overflow-y-hidden max-h-[480px] -translate-x-1/2 w-full min-w-[400px] bg-accent-300/80 backdrop-blur-lg border border-white/5 rounded-lg p-4 mt-2 shadow-lg"
          style={{
            animation: isOpen
              ? "fadeIn 0.2s forwards"
              : "fadeOut 0.2s forwards",
          }}
        >
          <div className="flex flex-col gap-2.5 overflow-y-hidden w-full">
            <div className="flex items-center mx-auto h-fit justify-center p-1 w-fit bg-accent-200 rounded-lg">
              <div className="flex items-center mx-auto w-fit gap-1">
                <button className="btn hover:bg-accent-400/70 hover:!px-2 !px-1 !py-2">
                  Обмены
                </button>
                <button className="btn hover:bg-accent-400/70 hover:!px-2 !px-1 !py-2">
                  Продажи
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 w-full hidden-scrollbar max-h-[400px] overflow-y-scroll">
              <OffersItem />
              <OffersItem />
              <OffersItem />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function OffersItem() {
  const items = [
    { image: "/assets/images/skins/knife.png" },
    { image: "/assets/images/skins/knife.png" },
    { image: "/assets/images/skins/knife.png" },
    { image: "/assets/images/skins/knife.png" },
    { image: "/assets/images/skins/knife.png" },
  ];
  return (
    <div className="flex flex-col gap-3.5 p-4 bg-accent-200/60 rounded-lg">
      <div className="flex gap-3 items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="/assets/images/project/test_avatar.png"
          alt="offer"
        />
        <div className="w-full flex flex-col gap-2 ">
          <p className="text-base leading-none  font-medium text-white">
            Trader777
          </p>
          <p className="text-[15px] leading-none font-normal text-gray-100">
            Предложил вам обмен!
          </p>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.29308 19.707C8.10561 19.5194 8.00029 19.2651 8.00029 19C8.00029 18.7348 8.10561 18.4805 8.29308 18.293L14.5861 12L8.29308 5.70697C8.19757 5.61473 8.12139 5.50438 8.06898 5.38238C8.01657 5.26037 7.98898 5.12915 7.98783 4.99637C7.98668 4.86359 8.01198 4.73191 8.06226 4.60902C8.11254 4.48612 8.18679 4.37447 8.28069 4.28058C8.37458 4.18668 8.48623 4.11243 8.60913 4.06215C8.73202 4.01187 8.8637 3.98657 8.99648 3.98772C9.12926 3.98887 9.26048 4.01646 9.38249 4.06887C9.50449 4.12128 9.61483 4.19746 9.70708 4.29297L16.7071 11.293C16.8946 11.4805 16.9999 11.7348 16.9999 12C16.9999 12.2651 16.8946 12.5194 16.7071 12.707L9.70708 19.707C9.51955 19.8944 9.26525 19.9998 9.00008 19.9998C8.73492 19.9998 8.48061 19.8944 8.29308 19.707Z"
            fill="#787E87"
          />
        </svg>
      </div>
      <div className="h-[1px] w-full bg-[#F0F0F0]/5"></div>
      <div className="flex items-center justify-center gap-5">
        <ExchangeItems items={items} />
        <svg className="flex-shrink-0"
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.207 0.29196L15.207 4.28696C15.3793 4.45903 15.4829 4.68806 15.4984 4.93109C15.5139 5.17412 15.4401 5.41444 15.291 5.60696L15.208 5.70096L11.208 9.70696C11.0285 9.88821 10.7864 9.99399 10.5315 10.0026C10.2765 10.0113 10.0278 9.92216 9.83642 9.75349C9.64501 9.58483 9.5253 9.34937 9.5018 9.09534C9.47829 8.8413 9.55278 8.58788 9.71 8.38696L9.793 8.29296L12.083 5.99996H1.5C1.25489 6.00017 1.01825 5.91036 0.835001 5.74758C0.651756 5.58479 0.534677 5.36038 0.506 5.11696L0.5 4.99996C0.500032 4.75503 0.589956 4.51862 0.752715 4.33559C0.915474 4.15255 1.13975 4.03562 1.383 4.00696L1.5 3.99996H12.09L9.794 1.70696C9.62168 1.53489 9.51806 1.30586 9.50259 1.06283C9.48713 0.819802 9.56088 0.579482 9.71 0.38696L9.793 0.29196C9.96507 0.119636 10.1941 0.0160205 10.4371 0.000555023C10.6802 -0.0149105 10.9205 0.0588368 11.113 0.20796L11.207 0.29196ZM15.49 14.883L15.497 15C15.497 15.2449 15.407 15.4813 15.2443 15.6643C15.0815 15.8474 14.8573 15.9643 14.614 15.993L14.497 16H3.913L6.207 18.293C6.37932 18.465 6.48294 18.6941 6.4984 18.9371C6.51387 19.1801 6.44012 19.4204 6.291 19.613L6.208 19.707C6.03593 19.8793 5.8069 19.9829 5.56387 19.9984C5.32084 20.0138 5.08052 19.9401 4.888 19.791L4.793 19.707L0.793 15.711C0.620824 15.5388 0.517392 15.3097 0.502111 15.0666C0.48683 14.8236 0.560749 14.5834 0.71 14.391L0.793 14.297L4.793 10.293C4.97254 10.1117 5.21457 10.0059 5.46955 9.99728C5.72453 9.98863 5.97317 10.0778 6.16458 10.2464C6.35599 10.4151 6.4757 10.6505 6.4992 10.9046C6.52271 11.1586 6.44822 11.412 6.291 11.613L6.208 11.707L3.918 14H14.497C14.7419 14 14.9783 14.0899 15.1614 14.2527C15.3444 14.4154 15.4613 14.6397 15.49 14.883Z"
            fill="#787E87"
          />
        </svg>
        <ExchangeItems items={items} />
      </div>
      <div className="flex items-center justify-between text-gray-100">
        <p className="font-medium">
          193 180 ₽~
        </p>
        <p className="font-medium">
        ~193 180 ₽
        </p>
      </div>
    </div>
  );
}

function ExchangeItems({ items }) {
  return (
    <div className="flex items-center">
      {items?.slice(0, 3).map((item, index) => (
        <div
          key={index}
          className="w-12 h-12 rounded-full bg-[#1A1A24] flex items-center justify-center -mr-4.5 last:mr-0 border-2 border-accent-300"
        >
          <img
            src={item.image || "/assets/images/project/test_avatar.png"}
            alt="item"
            className="w-8 h-8 object-contain"
          />
        </div>
      ))}
      {items?.length > 3 && (
        <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center text-white/60 text-lg font-medium -ml-1  border-2 border-accent-300">
          {items.length > 9 ? "9+" : items.length}
        </div>
      )}
    </div>
  );
}
