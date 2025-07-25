import { UserProductInfo } from "../components/Product/userProductInfo";
import RareLine from "../components/Product/rareLine";
import { useState } from "react";

const DEAL_STATUSES = {
  THINKING: "THINKING",
  OFFER_SENT: "OFFER_SENT",
  OFFER_ACTION: "OFFER_ACTION",
  OFFER_RECEIVED: "OFFER_RECEIVED",
  OFFER_NOT_RECEIVED: "OFFER_NOT_RECEIVED",
  COMPLETED: "COMPLETED",
  CANCELED: "CANCELED",
};

function DealStatus({ status, onReceiveOffer, onNotReceiveOffer }) {
  const statusConfig = {
    [DEAL_STATUSES.THINKING]: {
      text: "Продавец думает над предложением",
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.5C8.68629 6.5 6 9.18629 6 12.5C6 15.8137 8.68629 18.5 12 18.5C15.3137 18.5 18 15.8137 18 12.5C18 9.18629 15.3137 6.5 12 6.5Z"
            stroke="#787E87"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      buttons: null,
    },
    [DEAL_STATUSES.OFFER_SENT]: {
      text: "Продавец отправляет трейд-оффер",
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.5C8.68629 6.5 6 9.18629 6 12.5C6 15.8137 8.68629 18.5 12 18.5C15.3137 18.5 18 15.8137 18 12.5C18 9.18629 15.3137 6.5 12 6.5Z"
            stroke="#787E87"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      buttons: null,
    },
    [DEAL_STATUSES.OFFER_ACTION]: {
      text: "",
      icon: null,
      buttons: (
        <div className="flex flex-col gap-2">
          <button
            onClick={onNotReceiveOffer}
            className="!py-2 !px-4 btn bg-white/35 text-white !text-sm rounded-lg flex items-center justify-center gap-2"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7566 6.24375C11.082 6.56919 11.082 7.09683 10.7566 7.42226L9.67915 8.49969L10.7566 9.57712C11.082 9.90256 11.082 10.4302 10.7566 10.7556C10.4311 11.0811 9.9035 11.0811 9.57806 10.7556L8.50063 9.6782L7.42324 10.7556C7.0978 11.081 6.57017 11.081 6.24473 10.7556C5.91929 10.4302 5.91929 9.90252 6.24473 9.57709L7.32212 8.49969L6.24473 7.4223C5.91929 7.09686 5.91929 6.56922 6.24473 6.24379C6.57017 5.91835 7.0978 5.91835 7.42324 6.24379L8.50063 7.32118L9.57806 6.24375C9.9035 5.91832 10.4311 5.91832 10.7566 6.24375ZM1.83398 8.49967C1.83398 4.81778 4.81875 1.83301 8.50065 1.83301C12.1825 1.83301 15.1673 4.81778 15.1673 8.49967C15.1673 12.1816 12.1825 15.1663 8.50065 15.1663C4.81875 15.1663 1.83398 12.1816 1.83398 8.49967ZM8.50065 3.49967C5.73923 3.49967 3.50065 5.73825 3.50065 8.49967C3.50065 11.2611 5.73923 13.4997 8.50065 13.4997C11.2621 13.4997 13.5007 11.2611 13.5007 8.49967C13.5007 5.73825 11.2621 3.49967 8.50065 3.49967Z"
                fill="#F0F0F0"
              />
            </svg>
            Я не получил Трейд-оффер
          </button>
          <button
            onClick={onReceiveOffer}
            className="btn btn-primary !py-2 !px-4  !text-sm rounded-lg flex items-center justify-center gap-2"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.5C0 3.63401 3.13401 0.5 7 0.5C10.866 0.5 14 3.63401 14 7.5C14 11.366 10.866 14.5 7 14.5C3.13401 14.5 0 11.366 0 7.5ZM7 2.25C4.1005 2.25 1.75 4.6005 1.75 7.5C1.75 10.3995 4.1005 12.75 7 12.75C9.89949 12.75 12.25 10.3995 12.25 7.5C12.25 4.6005 9.89949 2.25 7 2.25Z"
                fill="#F0F0F0"
              />
              <g clip-path="url(#clip0_0_2925)">
                <path
                  d="M9.42285 5.12109C9.59333 5.00822 9.82541 5.02658 9.97559 5.17676C10.1257 5.32694 10.1441 5.55903 10.0312 5.72949L9.97559 5.79785L6.30078 9.47266C6.15072 9.62272 5.91849 9.64188 5.74805 9.5293L5.67969 9.47266L4.17578 7.96973C4.00435 7.7983 4.00445 7.52012 4.17578 7.34863C4.34726 7.17716 4.6254 7.17716 4.79688 7.34863L5.98926 8.54102L9.35449 5.17676L9.42285 5.12109Z"
                  fill="#F0F0F0"
                  stroke="#F0F0F0"
                  stroke-width="0.21"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_2925">
                  <rect
                    width="8.01818"
                    height="7.35"
                    fill="white"
                    transform="translate(3.15039 3.65039)"
                  />
                </clipPath>
              </defs>
            </svg>
            Я получил Трейд-оффер
          </button>
        </div>
      ),
    },
    [DEAL_STATUSES.OFFER_NOT_RECEIVED]: {
      text: "Я не получил Трейд-оффер",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H7V11H17V13Z"
            fill="#B2B2B2"
          />
        </svg>
      ),
      buttons: null,
    },
    [DEAL_STATUSES.OFFER_RECEIVED]: {
      text: "Я получил Трейд-оффер",
      icon: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.5C0 3.63401 3.13401 0.5 7 0.5C10.866 0.5 14 3.63401 14 7.5C14 11.366 10.866 14.5 7 14.5C3.13401 14.5 0 11.366 0 7.5ZM7 2.25C4.1005 2.25 1.75 4.6005 1.75 7.5C1.75 10.3995 4.1005 12.75 7 12.75C9.89949 12.75 12.25 10.3995 12.25 7.5C12.25 4.6005 9.89949 2.25 7 2.25Z"
            fill="#F0F0F0"
          />
          <g clip-path="url(#clip0_0_2925)">
            <path
              d="M9.42285 5.12109C9.59333 5.00822 9.82541 5.02658 9.97559 5.17676C10.1257 5.32694 10.1441 5.55903 10.0312 5.72949L9.97559 5.79785L6.30078 9.47266C6.15072 9.62272 5.91849 9.64188 5.74805 9.5293L5.67969 9.47266L4.17578 7.96973C4.00435 7.7983 4.00445 7.52012 4.17578 7.34863C4.34726 7.17716 4.6254 7.17716 4.79688 7.34863L5.98926 8.54102L9.35449 5.17676L9.42285 5.12109Z"
              fill="#F0F0F0"
              stroke="#F0F0F0"
              stroke-width="0.21"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_2925">
              <rect
                width="8.01818"
                height="7.35"
                fill="white"
                transform="translate(3.15039 3.65039)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      buttons: null,
    },
    [DEAL_STATUSES.COMPLETED]: {
      text: "Сделка завершена...",
      icon: (
        <svg
          width="25"
          height="14"
          viewBox="0 0 25 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00098 7.50049L11.9507 12.4502L22.5582 1.84375M2.05078 7.55078L7.00053 12.5005M17.607 1.89404L12.3037 7.19734"
            stroke="#787E87"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      buttons: null,
    },
    [DEAL_STATUSES.CANCELED]: {
      text: "Сделка отменена",
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.98611 2.98611L12.0139 12.0139M7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5C14 11.0899 11.0899 14 7.5 14Z"
            stroke="#787E87"
            stroke-width="1.44444"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      buttons: null,
    },
  };

  const currentStatus =
    statusConfig[status] || statusConfig[DEAL_STATUSES.THINKING];

  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 gap-1 text-gray-100">
      {currentStatus.text && (
        <span className="font-medium">{currentStatus.text}</span>
      )}
      {currentStatus.icon}
      {currentStatus.buttons}
    </div>
  );
}

export default function DealPage() {
  const [dealStatus, setDealStatus] = useState(DEAL_STATUSES.OFFER_ACTION);

  const handleReceiveOffer = () => setDealStatus(DEAL_STATUSES.COMPLETED);
  const handleNotReceiveOffer = () =>
    setDealStatus(DEAL_STATUSES.OFFER_NOT_RECEIVED);

  return (
    <div className="flex max-w-[1052px] mx-auto flex-col gap-2">
      <p className="text-[22px] font-medium text-gray-100">
        ID сделки: 0000052
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex w-full gap-4">
          <div className="rounded-lg bg-accent-300 max-w-[300px] flex flex-col gap-2.5 overflow-hidden ">
            <div
              className={`p-1.5 py-2.5 bg-white/5  overflow-hidden relative border-b  border-field_tested  flex flex-col items-center justify-center`}
            >
              <div className="absolute w-full top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
                <div className="flex justify-between px-3 items-center">
                  <div className="cursor-pointer hover:bg-white/10 transition-all duration-300 h-6 w-6 rounded-sm flex justify-center items-center bg-white/5">
                    <svg
                      width="5"
                      height="10"
                      viewBox="0 0 5 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.83164 8.95572C4.93503 8.85231 4.99311 8.71207 4.99311 8.56583C4.99311 8.4196 4.93503 8.27936 4.83164 8.17595L1.36124 4.70554L4.83164 1.23514C4.88431 1.18427 4.92633 1.12341 4.95523 1.05613C4.98413 0.988851 4.99934 0.916487 4.99998 0.843263C5.00062 0.770039 4.98666 0.697422 4.95893 0.629648C4.93121 0.561874 4.89026 0.500301 4.83848 0.448523C4.7867 0.396744 4.72513 0.355795 4.65735 0.328066C4.58958 0.300338 4.51696 0.286385 4.44374 0.287021C4.37051 0.287658 4.29815 0.302871 4.23087 0.331773C4.16359 0.360675 4.10273 0.402686 4.05186 0.455358L0.191569 4.31565C0.0881843 4.41907 0.0301065 4.55931 0.0301065 4.70554C0.0301065 4.85177 0.0881843 4.99201 0.191569 5.09543L4.05186 8.95572C4.15528 9.05911 4.29552 9.11719 4.44175 9.11719C4.58798 9.11719 4.72823 9.05911 4.83164 8.95572Z"
                        fill="#F0F0F0"
                      />
                    </svg>
                  </div>
                  <div className="cursor-pointer hover:bg-white/10 transition-all duration-300 h-6 w-6 rounded-sm flex justify-center items-center bg-white/5">
                    <svg
                      width="5"
                      height="10"
                      viewBox="0 0 5 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.168358 8.95572C0.0649728 8.85231 0.00689438 8.71207 0.00689438 8.56583C0.00689438 8.4196 0.0649728 8.27936 0.168358 8.17595L3.63876 4.70554L0.168358 1.23514C0.115687 1.18427 0.073674 1.12341 0.044772 1.05613C0.01587 0.988851 0.000657215 0.916487 2.09202e-05 0.843263C-0.000615375 0.770039 0.0133379 0.697422 0.0410663 0.629648C0.0687948 0.561874 0.109743 0.500301 0.161522 0.448523C0.213301 0.396744 0.274874 0.355795 0.342648 0.328066C0.410421 0.300338 0.483039 0.286385 0.556262 0.287021C0.629486 0.287658 0.70185 0.302871 0.769132 0.331773C0.836414 0.360675 0.897265 0.402686 0.948137 0.455358L4.80843 4.31565C4.91182 4.41907 4.96989 4.55931 4.96989 4.70554C4.96989 4.85177 4.91182 4.99201 4.80843 5.09543L0.948137 8.95572C0.844721 9.05911 0.704477 9.11719 0.558247 9.11719C0.412017 9.11719 0.271774 9.05911 0.168358 8.95572Z"
                        fill="#F0F0F0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center z-30  justify-center">
                <img src="/assets/images/skins/knife.png" alt="knife" />
              </div>
              <div
                className={`absolute -bottom-18 left-1/2 blur-2xl -translate-x-1/2 w-42 h-42 bg-field_tested rounded-full`}
              ></div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex w-full flex-col gap-0.5 px-2.5">
                <div className="pt-3.5 pr-8 pb-2">
                  <RareLine valuePercent="25" />
                </div>
                <p className="text-xs font-medium text-gray-100">
                  0.15721636621
                </p>
              </div>
              <div className="py-4  flex-shrink-0 flex items-center px-2.5 gap-2">
                <div className="py-1 px-2.5 bg-accent-200 rounded-lg hover:bg-white/10 cursor-pointer transition-all duration-300">
                  {UserProductInfo(false)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="bg-accent-300 w-full py-6 flex gap-2 px-4 rounded-lg">
              <div className="flex flex-col gap-1 ">
                <span className="text-lg font-semibold">
                  ★ Нож-бабочка | Убийство
                </span>
                <span className="font-bold text-gray-100">~ 52 365.18 ₽</span>
              </div>
              <span className="text-xs text-gray-100 font-semibold">
                +9 других
              </span>
            </div>
            <div className="bg-accent-300 h-full w-full py-6 flex flex-col gap-6 px-4 rounded-lg">
              <div className="flex flex-col gap-1 ">
                <span className="text-lg font-semibold">
                  Вы хотите купить данный предмет стоимостью{" "}
                  <span className="text-sm text-gray-100">52 365.18 ₽</span> .
                </span>
                <span className=" text-gray-100 font-semibold">
                  Этот предмет будет передан Вам после подтверждения сделки.
                  <br /> Следите за обновлениями в Telegram-боте
                </span>
              </div>
              <div className="flex rounded-full w-fit bg-accent-200 items-center text-gray-100  transition-all duration-300 hover:text-white cursor-pointer py-1.5 px-8 gap-2">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.86521 0.511252C4.94971 0.795202 0.976506 4.60285 0.481106 9.5044C0.446406 9.84775 0.441406 9.9741 0.441406 10.5054C0.441406 11.0535 0.446206 11.1654 0.486156 11.5503C0.965856 16.1714 4.58146 19.86 9.19626 20.4362C9.99706 20.5362 11.065 20.5266 11.8672 20.4121C16.5368 19.7456 20.1165 15.8826 20.4272 11.1744C20.4466 10.8804 20.4344 9.83175 20.4087 9.57765C19.8602 4.1644 15.2502 0.200202 9.86521 0.511252ZM14.7188 6.5402C15.0214 6.62245 15.118 6.8678 15.0612 7.4097C14.9266 8.69385 14.4773 11.5512 14.0002 14.1578C13.8087 15.2044 13.6194 15.5103 13.1633 15.5103C12.8307 15.5103 12.6088 15.4126 12.043 15.0169C11.7638 14.8217 11.7643 14.8221 11.2425 14.4748C11.0064 14.3177 10.6086 14.0499 10.3587 13.8797C10.1088 13.7095 9.77246 13.4822 9.61131 13.3745C9.06616 13.0102 8.93066 12.8614 8.92856 12.6245C8.92641 12.3833 9.06746 12.2204 10.1582 11.2044C11.6367 9.82725 12.339 9.13775 12.4051 8.99835C12.4701 8.86145 12.3433 8.74205 12.1785 8.7848C12.0686 8.8133 11.1359 9.42375 9.03026 10.8453C7.71291 11.7347 7.69076 11.7489 7.47661 11.8415C6.96686 12.0617 6.62126 12.0244 5.27236 11.6031C4.84476 11.4695 4.71556 11.4262 4.59196 11.375C4.01936 11.1375 4.10471 10.7749 4.80661 10.4631C4.90271 10.4205 6.50691 9.72445 7.77536 9.1751C12.0755 7.31285 13.7901 6.62345 14.3525 6.5305C14.4555 6.51345 14.6383 6.5183 14.7188 6.5402Z"
                    fill="#BDBDBD"
                    fill-opacity="0.1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3526 6.53055C13.7902 6.6235 12.0756 7.3129 7.77547 9.17515C6.50702 9.7245 4.90282 10.4205 4.80672 10.4631C4.10482 10.7749 4.01947 11.1375 4.59207 11.375C4.71567 11.4262 4.84487 11.4695 5.27247 11.6031C6.62137 12.0244 6.96697 12.0617 7.47672 11.8415C7.69087 11.7489 7.71302 11.7347 9.03037 10.8453C11.136 9.4238 12.0687 8.81335 12.1786 8.78485C12.3434 8.7421 12.4702 8.8615 12.4052 8.9984C12.3391 9.1378 11.6368 9.8273 10.1583 11.2044C9.06757 12.2204 8.92652 12.3833 8.92867 12.6245C8.93077 12.8614 9.06627 13.0102 9.61142 13.3745C9.77257 13.4822 10.1089 13.7095 10.3588 13.8797C10.6087 14.0499 11.0065 14.3177 11.2426 14.4748C11.7644 14.8221 11.7639 14.8217 12.0431 15.0169C12.6089 15.4126 12.8308 15.5103 13.1634 15.5103C13.6195 15.5103 13.8088 15.2044 14.0003 14.1578C14.4774 11.5512 14.9267 8.6939 15.0613 7.40975C15.1103 6.9419 15.0352 6.67385 14.8284 6.57945C14.7049 6.523 14.5157 6.5036 14.3526 6.53055Z"
                    fill="#FBFBFB"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.86521 0.511252C4.94971 0.795202 0.976506 4.60285 0.481106 9.5044C0.446406 9.84775 0.441406 9.9741 0.441406 10.5054C0.441406 11.0535 0.446206 11.1654 0.486156 11.5503C0.965856 16.1714 4.58146 19.86 9.19626 20.4362C9.99706 20.5362 11.065 20.5266 11.8672 20.4121C16.5368 19.7456 20.1165 15.8826 20.4272 11.1744C20.4466 10.8804 20.4344 9.83175 20.4087 9.57765C19.8602 4.1644 15.2502 0.200202 9.86521 0.511252ZM14.7188 6.5402C15.0214 6.62245 15.118 6.8678 15.0612 7.4097C14.9266 8.69385 14.4773 11.5512 14.0002 14.1578C13.8087 15.2044 13.6194 15.5103 13.1633 15.5103C12.8307 15.5103 12.6088 15.4126 12.043 15.0169C11.7638 14.8217 11.7643 14.8221 11.2425 14.4748C11.0064 14.3177 10.6086 14.0499 10.3587 13.8797C10.1088 13.7095 9.77246 13.4822 9.61131 13.3745C9.06616 13.0102 8.93066 12.8614 8.92856 12.6245C8.92641 12.3833 9.06746 12.2204 10.1582 11.2044C11.6367 9.82725 12.339 9.13775 12.4051 8.99835C12.4701 8.86145 12.3433 8.74205 12.1785 8.7848C12.0686 8.8133 11.1359 9.42375 9.03026 10.8453C7.71291 11.7347 7.69076 11.7489 7.47661 11.8415C6.96686 12.0617 6.62126 12.0244 5.27236 11.6031C4.84476 11.4695 4.71556 11.4262 4.59196 11.375C4.01936 11.1375 4.10471 10.7749 4.80661 10.4631C4.90271 10.4205 6.50691 9.72445 7.77536 9.1751C12.0755 7.31285 13.7901 6.62345 14.3525 6.5305C14.4555 6.51345 14.6383 6.5183 14.7188 6.5402Z"
                    fill="#BDBDBD"
                    fill-opacity="0.1"
                  />
                </svg>
                Телеграм-бот
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full py-5 px-8 bg-accent-300 rounded-lg items-center justify-between gap-7">
          <div className="flex flex-shrink-0 justify-center items-center flex-col gap-3">
            <img
              src="/assets/images/project/test_avatar1.png"
              className="w-20 h-20 rounded-full"
            />
            <span className="text-sm font-medium">Покупатель</span>
          </div>
          <div className="h-[1px] bg-white/10 w-full"></div>

          <DealStatus
            status={dealStatus}
            onReceiveOffer={handleReceiveOffer}
            onNotReceiveOffer={handleNotReceiveOffer}
          />

          <div className="h-[1px] bg-white/10 w-full"></div>
          <div className="flex flex-shrink-0 justify-center items-center flex-col gap-3">
            <img
              src="/assets/images/project/test_avatar1.png"
              className="w-20 h-20 rounded-full"
            />
            <span className="text-sm font-medium">Продавец</span>
          </div>
        </div>
      </div>
    </div>
  );
}
