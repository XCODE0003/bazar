import { useState, useEffect } from "react";
import { useMenuContext } from "../../context/MenuContext";

export default function Notify() {
  const [isAnimating, setIsAnimating] = useState(false);
  const { isMenuOpen, openSpecificMenu } = useMenuContext();
  const menuId = "notify";
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

  const toggleNotify = () => {
    if (isOpen) {
      openSpecificMenu(null);
    } else {
      openSpecificMenu(menuId);
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <div
        onClick={toggleNotify}
        className="text-gray-100 hover:text-white flex-shrink-0 cursor-pointer transition-all duration-300"
      >
        <svg
          width="24"
          height="26"
          viewBox="0 0 29 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.82871 27.0881H19.1957C19.0086 28.1948 18.4355 29.1995 17.5782 29.924C16.7209 30.6485 15.6347 31.046 14.5122 31.046C13.3898 31.046 12.3036 30.6485 11.4462 29.924C10.5889 29.1995 10.0159 28.1948 9.82871 27.0881ZM14.5122 0.171417C17.6617 0.171417 20.6821 1.42253 22.9091 3.64952C25.1361 5.87652 26.3872 8.89697 26.3872 12.0464V18.3798L28.6324 23.3831C28.7345 23.6119 28.7777 23.8626 28.7583 24.1124C28.7389 24.3623 28.6574 24.6033 28.5212 24.8136C28.3849 25.0239 28.1983 25.1968 27.9783 25.3167C27.7583 25.4366 27.5118 25.4996 27.2612 25.5H1.76955C1.51864 25.5 1.27173 25.4372 1.0513 25.3173C0.830863 25.1975 0.643914 25.0244 0.50747 24.8138C0.371027 24.6032 0.289425 24.3619 0.270096 24.1117C0.250766 23.8616 0.294322 23.6105 0.396798 23.3815L2.63721 18.3782V12.0258L2.64513 11.63C2.75344 8.55493 4.05113 5.64196 6.26479 3.50479C8.47845 1.36763 11.4352 0.171562 14.5122 0.171417Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {(isOpen || isAnimating) && (
        <div
          className="absolute top-full z-50 right-0 w-full min-w-[330px] bg-accent-200 rounded-lg p-4 mt-2 shadow-lg"
          style={{
            animation: isOpen
              ? "fadeIn 0.2s forwards"
              : "fadeOut 0.2s forwards",
          }}
        >
          <div className="flex flex-col gap-4 overflow-y-auto w-full">
            <div className="text-xl font-semibold">Уведомления</div>
            <div className="flex flex-col gap-3 w-full">
              <NotifyItem />
              <NotifyItem />
              <NotifyItem />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NotifyItem({ item }) {
  return (
    <div className="flex cursor-pointer items-center gap-1.5 w-full px-2.5 py-1 rounded-lg hover:bg-accent-400 transition-all duration-300">
      <div className="h-[22px] w-[22px] rounded-full relative">
        <div className="absolute -bottom-1 flex items-center justify-center -right-1 bg-green-200 rounded-full w-4 h-4 border-[1.5px] border-[#0A0A0E]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_177_93)">
              <path
                d="M6.33223 1.129L7.93975 2.73451C8.009 2.80366 8.05065 2.89571 8.05686 2.99337C8.06308 3.09104 8.03344 3.18762 7.97351 3.26499L7.94015 3.30277L6.33263 4.9127C6.26048 4.98554 6.16321 5.02806 6.06074 5.03153C5.95827 5.03501 5.85835 4.99919 5.78142 4.9314C5.7045 4.86362 5.65639 4.769 5.64694 4.6669C5.6375 4.56481 5.66743 4.46297 5.73061 4.38222L5.76397 4.34444L6.68428 3.42293H2.43118C2.33267 3.42302 2.23757 3.38692 2.16393 3.3215C2.09028 3.25609 2.04323 3.1659 2.03171 3.06807L2.0293 3.02105C2.02931 2.92262 2.06545 2.82761 2.13086 2.75405C2.19627 2.6805 2.2864 2.6335 2.38416 2.62198L2.43118 2.61917H6.68709L5.76437 1.69766C5.69512 1.62851 5.65348 1.53647 5.64726 1.4388C5.64105 1.34113 5.67069 1.24455 5.73061 1.16718L5.76397 1.129C5.83312 1.05975 5.92516 1.0181 6.02283 1.01189C6.1205 1.00567 6.21708 1.03531 6.29445 1.09524L6.33223 1.129ZM8.05348 6.99283L8.0563 7.03986C8.05628 7.13829 8.02014 7.23329 7.95474 7.30685C7.88933 7.38041 7.79919 7.42741 7.70144 7.43892L7.65442 7.44174H3.40091L4.32283 8.36325C4.39208 8.4324 4.43372 8.52444 4.43994 8.62211C4.44615 8.71978 4.41652 8.81636 4.35659 8.89373L4.32323 8.93151C4.25408 9.00076 4.16204 9.0424 4.06437 9.04862C3.9667 9.05483 3.87012 9.02519 3.79275 8.96526L3.75457 8.93151L2.14705 7.32559C2.07785 7.25639 2.03629 7.16432 2.03015 7.06665C2.024 6.96899 2.05371 6.87243 2.11369 6.79511L2.14705 6.75733L3.75457 5.1482C3.82672 5.07536 3.92399 5.03285 4.02646 5.02938C4.12893 5.0259 4.22885 5.06172 4.30578 5.1295C4.38271 5.19729 4.43081 5.29191 4.44026 5.394C4.4497 5.4961 4.41977 5.59794 4.35659 5.67869L4.32323 5.71646L3.40292 6.63797H7.65442C7.75285 6.63799 7.84786 6.67413 7.92141 6.73954C7.99497 6.80495 8.04197 6.89508 8.05348 6.99283Z"
                fill="#F0F0F0"
              />
            </g>
            <defs>
              <clipPath id="clip0_177_93">
                <rect
                  width="9.64513"
                  height="9.64513"
                  fill="white"
                  transform="translate(0.220703 0.207855)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <img
          src="/assets/images/project/test_avatar.png"
          alt=""
          className="h-full w-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium">Trader777</p>
          <p className="text-gray-100/80 text-[8px]">12:00</p>
        </div>
        <p className="text-gray-100 text-sm font-normal">
          Отправил вам предложение обмена
        </p>
      </div>
    </div>
  );
}
