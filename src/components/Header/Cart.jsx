import { useState, useEffect } from "react";
import { useMenuContext } from "../../context/MenuContext";

export default function Cart() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { isMenuOpen, openSpecificMenu } = useMenuContext();
  const menuId = "cart";
  const isOpen = isMenuOpen(menuId);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else if (isAnimating) {
      // Устанавливаем таймер для завершения анимации закрытия
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 200); // 200ms совпадает с длительностью анимации

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleCart = () => {
    if (isOpen) {
      openSpecificMenu(null);
    } else {
      openSpecificMenu(menuId);
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <div
        className="relative hover:opacity-80 flex-shrink-0 cursor-pointer transition-all duration-300"
        onClick={toggleCart}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.470703 1.72917C0.470703 1.41422 0.595814 1.11218 0.818514 0.889477C1.04121 0.666777 1.34326 0.541666 1.6582 0.541666H2.5417C4.04587 0.541666 4.94837 1.55342 5.46295 2.49392C5.80654 3.12092 6.05512 3.84767 6.24987 4.50633C6.30255 4.50217 6.35536 4.50006 6.4082 4.5H26.1967C27.5109 4.5 28.4609 5.75717 28.0999 7.02225L25.2055 17.1698C24.946 18.08 24.397 18.8809 23.6417 19.4511C22.8863 20.0214 21.9657 20.33 21.0192 20.3302H11.6015C10.6476 20.3302 9.71999 20.0169 8.96137 19.4385C8.20275 18.8601 7.65508 18.0486 7.40254 17.1287L6.1992 12.7397L4.2042 6.01367L4.20262 6.001C3.95562 5.10325 3.72445 4.2625 3.37929 3.6355C3.04837 3.02592 2.78237 2.91667 2.54329 2.91667H1.6582C1.34326 2.91667 1.04121 2.79155 0.818514 2.56886C0.595814 2.34616 0.470703 2.04411 0.470703 1.72917ZM10.7624 28.25C11.6022 28.25 12.4077 27.9164 13.0015 27.3225C13.5954 26.7286 13.929 25.9232 13.929 25.0833C13.929 24.2435 13.5954 23.438 13.0015 22.8442C12.4077 22.2503 11.6022 21.9167 10.7624 21.9167C9.92252 21.9167 9.11706 22.2503 8.5232 22.8442C7.92933 23.438 7.5957 24.2435 7.5957 25.0833C7.5957 25.9232 7.92933 26.7286 8.5232 27.3225C9.11706 27.9164 9.92252 28.25 10.7624 28.25ZM21.8457 28.25C22.6856 28.25 23.491 27.9164 24.0849 27.3225C24.6787 26.7286 25.0124 25.9232 25.0124 25.0833C25.0124 24.2435 24.6787 23.438 24.0849 22.8442C23.491 22.2503 22.6856 21.9167 21.8457 21.9167C21.0058 21.9167 20.2004 22.2503 19.6065 22.8442C19.0127 23.438 18.679 24.2435 18.679 25.0833C18.679 25.9232 19.0127 26.7286 19.6065 27.3225C20.2004 27.9164 21.0058 28.25 21.8457 28.25Z"
            fill="#787E87"
          />
        </svg>
        <div className="absolute -top-1.5 -right-2 text-sm w-4 h-4 rounded-full bg-primary flex items-center justify-center">
          5
        </div>
      </div>

      {(isOpen || isAnimating) && (
        <div
          className="absolute top-full z-[60] right-0 w-full min-w-[400px] bg-accent-200 rounded-lg p-4 mt-2 shadow-lg"
          style={{
            animation: isOpen ? "fadeIn 0.2s forwards" : "fadeOut 0.2s forwards"
          }}
        >
          <div className="flex flex-col gap-12 overflow-y-auto w-full">
            <div className="text-xl font-semibold">Корзина</div>
            <div className="flex flex-col gap-8">
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">Общая цена</p>
              <p className="text-lg font-semibold">₽104 730.36</p>
            </div>
            <div className="flex items-center gap-2.5">
              <button className="btn btn-primary !text-sm flex-1">Купить</button>
              <button className="btn bg-white/30 !text-sm">Очистить</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}

function CartItem() {
  return (
    <div className="flex flex-col pb-3 border-b border-white/5 gap-3">
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
        <button>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.07213 3.68207H10.6072C10.6072 2.70588 9.81586 1.91453 8.83967 1.91453C7.86348 1.91453 7.07213 2.70588 7.07213 3.68207ZM5.74647 3.68207C5.74647 1.97374 7.13134 0.588867 8.83967 0.588867C10.548 0.588867 11.9329 1.97374 11.9329 3.68207H17.0146C17.3806 3.68207 17.6774 3.97883 17.6774 4.3449C17.6774 4.71097 17.3806 5.00773 17.0146 5.00773H15.8488L14.813 15.7113C14.6486 17.41 13.2209 18.7062 11.5142 18.7062H6.16511C4.45841 18.7062 3.03077 17.41 2.86637 15.7113L1.83055 5.00773H0.664782C0.298712 5.00773 0.00195312 4.71097 0.00195312 4.3449C0.00195312 3.97883 0.298712 3.68207 0.664782 3.68207H5.74647ZM7.51401 7.87999C7.51401 7.51392 7.21726 7.21716 6.85119 7.21716C6.48512 7.21716 6.18836 7.51392 6.18836 7.87999V14.5083C6.18836 14.8743 6.48512 15.1711 6.85119 15.1711C7.21726 15.1711 7.51401 14.8743 7.51401 14.5083V7.87999ZM10.8282 7.21716C10.4621 7.21716 10.1653 7.51392 10.1653 7.87999V14.5083C10.1653 14.8743 10.4621 15.1711 10.8282 15.1711C11.1942 15.1711 11.491 14.8743 11.491 14.5083V7.87999C11.491 7.51392 11.1942 7.21716 10.8282 7.21716Z"
              fill="#FF4E4E"
            />
          </svg>
        </button>
        <div className="absolute top-1/2 -translate-y-1/2 bg-field_tested rounded-full w-10 h-12 left-0 z-30 blur-2xl"></div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">52 365.18₽</p>
        <div className="flex items-center gap-2 text-gray-100 text-sm">
          <img
            src="/assets/images/project/test_avatar.png"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
          Бабайка
        </div>
      </div>
    </div>
  );
}
