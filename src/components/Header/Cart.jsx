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
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 200);

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
        className="relative text-gray-100 hover:text-white flex-shrink-0 cursor-pointer transition-all duration-300"
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
            fill="currentColor"
          />
        </svg>
        <div className="absolute text-white -top-1.5 -right-2 text-sm w-4 h-4 rounded-full bg-primary flex items-center justify-center">
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
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9442 9.15837C15.8512 9.06464 15.7406 8.99024 15.6188 8.93947C15.4969 8.88871 15.3662 8.86257 15.2342 8.86257C15.1022 8.86257 14.9715 8.88871 14.8496 8.93947C14.7278 8.99024 14.6172 9.06464 14.5242 9.15837L12.2342 11.4584L9.94421 9.15837C9.75591 8.97006 9.50051 8.86427 9.23421 8.86427C8.96791 8.86427 8.71251 8.97006 8.52421 9.15837C8.33591 9.34667 8.23012 9.60206 8.23012 9.86837C8.23012 10.1347 8.33591 10.3901 8.52421 10.5784L10.8242 12.8684L8.52421 15.1584C8.43048 15.2513 8.35609 15.3619 8.30532 15.4838C8.25455 15.6056 8.22841 15.7364 8.22841 15.8684C8.22841 16.0004 8.25455 16.1311 8.30532 16.2529C8.35609 16.3748 8.43048 16.4854 8.52421 16.5784C8.61717 16.6721 8.72777 16.7465 8.84963 16.7973C8.97149 16.848 9.1022 16.8742 9.23421 16.8742C9.36622 16.8742 9.49693 16.848 9.61879 16.7973C9.74065 16.7465 9.85125 16.6721 9.94421 16.5784L12.2342 14.2784L14.5242 16.5784C14.6172 16.6721 14.7278 16.7465 14.8496 16.7973C14.9715 16.848 15.1022 16.8742 15.2342 16.8742C15.3662 16.8742 15.4969 16.848 15.6188 16.7973C15.7406 16.7465 15.8512 16.6721 15.9442 16.5784C16.0379 16.4854 16.1123 16.3748 16.1631 16.2529C16.2139 16.1311 16.24 16.0004 16.24 15.8684C16.24 15.7364 16.2139 15.6056 16.1631 15.4838C16.1123 15.3619 16.0379 15.2513 15.9442 15.1584L13.6442 12.8684L15.9442 10.5784C16.0379 10.4854 16.1123 10.3748 16.1631 10.2529C16.2139 10.1311 16.24 10.0004 16.24 9.86837C16.24 9.73635 16.2139 9.60565 16.1631 9.48379C16.1123 9.36193 16.0379 9.25133 15.9442 9.15837ZM19.3042 5.79837C18.3817 4.84326 17.2783 4.08144 16.0583 3.55735C14.8382 3.03326 13.526 2.7574 12.1982 2.74586C10.8704 2.73432 9.55363 2.98734 8.32467 3.49015C7.09571 3.99296 5.97919 4.73549 5.04026 5.67442C4.10133 6.61334 3.3588 7.72986 2.85599 8.95883C2.35318 10.1878 2.10017 11.5046 2.11171 12.8324C2.12324 14.1602 2.39911 15.4724 2.9232 16.6924C3.44729 17.9125 4.20911 19.0159 5.16421 19.9384C6.08668 20.8935 7.19012 21.6553 8.41016 22.1794C9.6302 22.7035 10.9424 22.9793 12.2702 22.9909C13.598 23.0024 14.9148 22.7494 16.1438 22.2466C17.3727 21.7438 18.4892 21.0012 19.4282 20.0623C20.3671 19.1234 21.1096 18.0069 21.6124 16.7779C22.1152 15.5489 22.3683 14.2321 22.3567 12.9044C22.3452 11.5766 22.0693 10.2644 21.5452 9.04432C21.0211 7.82428 20.2593 6.72083 19.3042 5.79837ZM17.8942 18.5284C16.5863 19.8378 14.8647 20.6532 13.023 20.8357C11.1813 21.0182 9.33322 20.5564 7.79373 19.5291C6.25425 18.5019 5.11857 16.9726 4.58018 15.2018C4.0418 13.4311 4.13402 11.5285 4.84112 9.81815C5.54823 8.10779 6.82648 6.69551 8.4581 5.82193C10.0897 4.94834 11.9738 4.6675 13.7892 5.02724C15.6047 5.38698 17.2393 6.36506 18.4145 7.79483C19.5896 9.2246 20.2328 11.0176 20.2342 12.8684C20.2378 13.9197 20.0328 14.9612 19.6311 15.9327C19.2295 16.9043 18.6391 17.7865 17.8942 18.5284Z" fill="#AE090C"/>
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
