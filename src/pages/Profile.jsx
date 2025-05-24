import UserProduct from "../components/Product/UserProduct";
import ReviewItem from "../components/ReviewItem";
import { useState } from "react";
import HistoryModal from "../components/HistoryModal";
export default function UserPage() {
  const [percent, setPercent] = useState(99);
  const degrees = (percent / 100) * 360;
  const [isChecked, setIsChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("settings");
  const [isOpen, setIsOpen] = useState(false);
  const [tradeLink, setTradeLink] = useState(
    "https://steamcommunity.com/tradeoffer/new/?partner=971441372&token=YTc98LzN"
  );
  const [profileLink, setProfileLink] = useState(
    "https://steamcommunity.com/id/Evelone192god"
  );
  const [displayName, setDisplayName] = useState("kinza");

  function renderSettings() {
    return (
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col max-w-[460px] w-full gap-8 ">
          <div className="flex flex-col gap-2.5">
            <p className="text-lg font-semibold">Steam Трейд Ссылка</p>
            <div className="p-2 flex items-center bg-accent-300 rounded-lg gap-[3px]">
              <div className="h-4 w-4 flex justify-center items-center bg-white/5 rounded-[3px]">
                <img
                  src="/assets/images/project/angry_eye.png"
                  className="w-2.5 h-2.5"
                />
              </div>
              <input
                className="text-xs text-gray-100 max-w-[250px] w-full"
                value={tradeLink}
                onChange={(e) => setTradeLink(e.target.value)}
              />
              <button className="btn btn-border !p-1 !px-4 !text-xs flex-shring-0 text-nowrap !rounded-[4px]">
                Найти здесь
              </button>
              <button className="btn btn-primary !p-1 !px-4 !text-xs flex-shring-0 !rounded-[4px]">
                Готово
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <p className="text-lg font-semibold">Ссылка на профиль Steam</p>
            <div className="p-2 flex items-center bg-accent-300 justify-between rounded-lg gap-[3px]">
              <div className="flex items-center w-full flex-1 gap-[3px]">
                <div className="h-4 w-4 flex justify-center items-center bg-white/5 rounded-[3px]">
                  <img
                    src="/assets/images/project/angry_eye.png"
                    className="w-2.5 h-2.5"
                  />
                </div>
                <input
                  className="text-xs text-gray-100 max-w-[250px] w-full"
                  value={profileLink}
                  onChange={(e) => setProfileLink(e.target.value)}
                />
              </div>
              <button className="btn btn-primary !p-1 !px-4 !text-xs flex-shring-0 !rounded-[4px]">
                Готово
              </button>
            </div>
          </div>
          <div className="flex items-center gap-1">
            Показывать ссылку на профиль
            <div className="checkbox relative w-[32px] h-[22px]">
              <input
                type="checkbox"
                id="customCheckbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor="customCheckbox"
                className="block w-full h-full cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="22"
                  viewBox="0 0 32 22"
                  fill="none"
                  className="pointer-events-none"
                >
                  <rect
                    y="0.941406"
                    width="32"
                    height="20.6923"
                    rx="10.3462"
                    fill={isChecked ? "#8B52FF" : "#1E1A24"}
                    className={`transition-colors duration-300 ${
                      isChecked ? "" : "bg-accent-300"
                    }`}
                  />
                  <path
                    d="M22.1543 2.63379C26.7042 2.63388 30.3076 6.557 30.3076 11.2881C30.3075 16.0191 26.7041 19.9413 22.1543 19.9414C17.6044 19.9414 14.0001 16.0192 14 11.2881C14 6.55695 17.6044 2.63379 22.1543 2.63379Z"
                    fill="#F0F0F0"
                    stroke={isChecked ? "#8B52FF" : "#1E1A24"}
                    strokeWidth="1.53846"
                    className="transition-all duration-300 transform origin-center"
                    style={{
                      transform: isChecked
                        ? "translateX(0)"
                        : "translateX(-10px)",
                    }}
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-lg font-semibold text-gray-100">
            Отображаемое имя
          </p>
          <div className="p-2 flex items-center bg-accent-300 justify-between rounded-lg gap-[3px]">
            <div className="flex items-center w-full flex-1 gap-[3px]">
              <input
                className="text-xs text-gray-100 max-w-[250px] w-full"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <button className="btn btn-primary !p-1 !px-4 !text-xs flex-shring-0 !rounded-[4px]">
              Изменить
            </button>
          </div>
        </div>
      </div>
    );
  }

  function renderReviews() {
    return (
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4 w-full flex-1 max-w-[480px] items-start">
          <p className="text-lg font-semibold text-gray-100">Сегодня</p>
          {Array.from({ length: 3 }).map((_, index) => (
            <ReviewItem
              key={index}
              name="Бабайка2"
              avatar="/assets/images/project/test_avatar1.png"
              text="Продавец не очень"
              positive={index % 2 === 0}
            />
          ))}
        </div>
        <div className="flex flex-col ">
          <img
            src="/assets/images/project/reviews_info.png"
            className="w-[400px] h-[200px]"
          />
          <div className="flex flex-col justify-center relative -top-5 gap-4">
            <p className="text-2xl text-center font-semibold">
              Как работают отзывы?
            </p>
            <p className="text-center font-normal max-w-[440px] text-white/75">
              Пользователи могут оставлять отзывы после завершения сделки. Для
              сделок проведенных на маркете, отображается сумма проведенной
              сделки.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex flex-col gap-5 mx-auto max-w-[1060px]">
      <div className="rounded-xl profile-bg flex flex-col items-center justify-center w-full gap-6 py-10">
        <div className="relative flex flex-col items-center justify-center gap-1">
          <img
            src="/assets/images/project/test_avatar1.png"
            alt="avatar"
            className="w-[98px] h-[98px] rounded-full z-50"
          />
          <div className="absolute bg-primary/65 w-[63px] h-[63px] rounded-full blur-[80px]"></div>
          <div className="flex-col flex items-center w-full gap-1">
            <p className="text-2xl font-extrabold">kinza</p>
            <div className="flex items-center max-w-[80px] w-full justify-between gap-1.5">
              <div className="lvl-bg py-[1px] px-1 rounded-sm">
                <span>5</span>
              </div>
              <div className="h-0.5 w-full bg-gray-100 rounded-full relative overflow-hidden ">
                <div className="bg-primary w-1/2 h-full rounded-full absolute left-0"></div>
              </div>
              <div className="lvl-bg py-[1px] px-1 rounded-sm">
                <span>6</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-100">
            <span className="text-primary">178</span>/ 216 опыта
          </div>
        </div>
      </div>
      <div className="flex gap-5 w-full h-full">
        <div className="flex flex-col gap-[27px] flex-1">
          <div className="flex py-2 px-5 rounded-lg bg-accent-300 justify-between items-center flex-1">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-gray-100">Обменов</p>
              <p className="text-2xl font-semibold">102</p>
            </div>
            <div className="bg-gray-100 rounded-lg w-[34px] h-[34px] flex items-center justify-center ">
              <svg
                width="12"
                height="17"
                viewBox="0 0 12 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.4396 1.11388L11.4831 4.15356C11.6142 4.28448 11.693 4.45874 11.7048 4.64366C11.7166 4.82857 11.6605 5.01142 11.547 5.1579L11.4838 5.22943L8.44036 8.27747C8.30375 8.41538 8.1196 8.49586 7.9256 8.50245C7.73159 8.50903 7.54241 8.44121 7.39677 8.31288C7.25113 8.18454 7.16004 8.00539 7.14216 7.8121C7.12428 7.61881 7.18095 7.426 7.30058 7.27312L7.36373 7.2016L9.10612 5.45693H1.05384C0.867345 5.45709 0.687287 5.38875 0.547861 5.2649C0.408436 5.14104 0.319354 4.97029 0.297534 4.78508L0.292969 4.69606C0.292993 4.50969 0.361413 4.32982 0.485252 4.19056C0.60909 4.05129 0.779734 3.96232 0.964816 3.94051L1.05384 3.93519H9.11145L7.36449 2.19051C7.23337 2.05959 7.15454 1.88533 7.14277 1.70042C7.131 1.5155 7.18711 1.33265 7.30058 1.18617L7.36373 1.11388C7.49465 0.982767 7.66891 0.903929 7.85383 0.892162C8.03874 0.880395 8.22159 0.936507 8.36808 1.04997L8.4396 1.11388ZM11.6984 12.2157L11.7037 12.3048C11.7037 12.4911 11.6353 12.671 11.5114 12.8103C11.3876 12.9495 11.217 13.0385 11.0319 13.0603L10.9429 13.0656H2.88982L4.63525 14.8103C4.76637 14.9412 4.8452 15.1155 4.85697 15.3004C4.86874 15.4853 4.81263 15.6682 4.69916 15.8146L4.63601 15.8862C4.50509 16.0173 4.33083 16.0961 4.14591 16.1079C3.961 16.1197 3.77815 16.0635 3.63166 15.9501L3.55938 15.8862L0.515904 12.8457C0.3849 12.7147 0.306202 12.5404 0.294575 12.3555C0.282948 12.1706 0.339191 11.9878 0.452751 11.8414L0.515904 11.7699L3.55938 8.72334C3.69599 8.58543 3.88014 8.50495 4.07415 8.49836C4.26815 8.49178 4.45733 8.5596 4.60298 8.68793C4.74862 8.81627 4.8397 8.99541 4.85758 9.18871C4.87546 9.382 4.81879 9.57481 4.69916 9.72769L4.63601 9.79921L2.89362 11.5439H10.9429C11.1292 11.5439 11.3091 11.6123 11.4484 11.7362C11.5876 11.86 11.6766 12.0306 11.6984 12.2157Z"
                  fill="#F0F0F0"
                />
              </svg>
            </div>
          </div>
          <div className="flex py-2 px-5 rounded-lg bg-accent-300 justify-between items-center flex-1">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-gray-100">Продаж</p>
              <p className="text-2xl font-semibold">102</p>
            </div>
            <div className="bg-gray-100 rounded-lg w-[34px] h-[34px] flex items-center justify-center ">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.642578 1.10383C0.642578 0.952489 0.702697 0.807348 0.80971 0.700335C0.916723 0.593322 1.06186 0.533203 1.2132 0.533203H1.63775C2.36054 0.533203 2.79421 1.01938 3.04149 1.47131C3.20659 1.7726 3.32604 2.12182 3.41962 2.43833C3.44493 2.43633 3.47031 2.43532 3.4957 2.43529H13.0046C13.6361 2.43529 14.0926 3.03939 13.9191 3.64729L12.5283 8.52347C12.4036 8.96084 12.1398 9.34567 11.7768 9.61969C11.4139 9.89371 10.9715 10.042 10.5167 10.0421H5.99124C5.53283 10.0421 5.0871 9.89159 4.72257 9.61365C4.35803 9.33571 4.09486 8.94575 3.97351 8.50369L3.39527 6.39466L2.43662 3.16264L2.43586 3.15656C2.31717 2.72516 2.20609 2.32116 2.04023 2.01987C1.88121 1.72695 1.75339 1.67445 1.63851 1.67445H1.2132C1.06186 1.67445 0.916723 1.61433 0.80971 1.50732C0.702697 1.40031 0.642578 1.25517 0.642578 1.10383ZM5.58799 13.8478C5.99157 13.8478 6.37861 13.6875 6.66398 13.4021C6.94934 13.1167 7.10966 12.7297 7.10966 12.3261C7.10966 11.9225 6.94934 11.5355 6.66398 11.2501C6.37861 10.9648 5.99157 10.8045 5.58799 10.8045C5.18442 10.8045 4.79738 10.9648 4.51201 11.2501C4.22665 11.5355 4.06633 11.9225 4.06633 12.3261C4.06633 12.7297 4.22665 13.1167 4.51201 13.4021C4.79738 13.6875 5.18442 13.8478 5.58799 13.8478ZM10.9138 13.8478C11.3174 13.8478 11.7044 13.6875 11.9898 13.4021C12.2752 13.1167 12.4355 12.7297 12.4355 12.3261C12.4355 11.9225 12.2752 11.5355 11.9898 11.2501C11.7044 10.9648 11.3174 10.8045 10.9138 10.8045C10.5103 10.8045 10.1232 10.9648 9.83785 11.2501C9.55248 11.5355 9.39216 11.9225 9.39216 12.3261C9.39216 12.7297 9.55248 13.1167 9.83785 13.4021C10.1232 13.6875 10.5103 13.8478 10.9138 13.8478Z"
                  fill="#F0F0F0"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 min-w-[450px] overflow-hidden px-4 py-5 gap-6 rounded-xl bg-accent-300 flex flex-col justify-center">
          <div className="flex gap-8 relative items-center justify-center w-full ">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[51px] bg-primary/65 rounded-lg blur-[80px]"></div>
            <p className="text-gray-100 font-semibold text-2xl absolute top-1 left-2">Рейтинг</p>
            <div className="flex flex-col gap-6">
              <svg
                width="160"
                height="140"
                viewBox="0 0 160 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4315 136.569C12.2433 125.38 4.62399 111.126 1.53718 95.6072C-1.54964 80.0887 0.0346269 64.0034 6.08964 49.3853C12.1446 34.7672 22.3984 22.2729 35.5544 13.4824C48.7103 4.69192 64.1775 -1.88681e-07 80 0C95.8225 1.88681e-07 111.29 4.69192 124.446 13.4824C137.602 22.2729 147.855 34.7672 153.91 49.3853C159.965 64.0034 161.55 80.0887 158.463 95.6072C155.376 111.126 147.757 125.38 136.569 136.569L125.255 125.255C134.205 116.304 140.301 104.901 142.77 92.4858C145.24 80.071 143.972 67.2027 139.128 55.5083C134.284 43.8138 126.081 33.8184 115.556 26.7859C105.032 19.7535 92.658 16 80 16C67.342 16 54.9683 19.7535 44.4435 26.7859C33.9188 33.8184 25.7157 43.8138 20.8717 55.5083C16.0277 67.2027 14.7603 80.071 17.2297 92.4858C19.3732 103.261 24.2483 113.275 31.3511 121.585C33.1454 123.684 33.1623 126.838 31.2096 128.79L26.967 133.033Z"
                  fill="white"
                  fillOpacity="0.1"
                />
                <g
                  clipPath="url(#paint0_angular_0_5677_clip_path)"
                  data-figma-skip-parse="true"
                >
                  <g transform="matrix(-0.0565 -0.0565 0.0565 -0.0565 80 80)">
                    <foreignObject
                      x="-1433.63"
                      y="-1433.63"
                      width="2867.26"
                      height="2867.26"
                    >
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          background: `conic-gradient(from 0deg, rgba(144, 89, 255, 1) 0deg, rgba(139, 82, 255, 1) ${degrees}deg, transparent ${degrees}deg)`,
                          height: "100%",
                          width: "100%",
                          opacity: 1,
                        }}
                      ></div>
                    </foreignObject>
                  </g>
                </g>

                <path
                  d="M26.967 133.033C25.0144 134.986 21.8353 134.995 20.0085 132.925C10.685 122.357 4.29812 109.487 1.53718 95.6072C-1.54964 80.0887 0.0346269 64.0034 6.08964 49.3853C12.1446 34.7672 22.3984 22.2729 35.5544 13.4824C48.7103 4.69192 64.1775 -1.88681e-07 80 0C95.8225 1.88681e-07 111.29 4.69192 124.446 13.4824C137.602 22.2729 147.855 34.7672 153.91 49.3853C159.965 64.0034 161.55 80.0887 158.463 95.6072C155.702 109.487 149.315 122.357 139.992 132.925C138.165 134.995 134.986 134.986 133.033 133.033L128.79 128.79C126.838 126.838 126.855 123.684 128.649 121.585C135.752 113.275 140.627 103.261 142.77 92.4858C145.24 80.071 143.972 67.2027 139.128 55.5083C134.284 43.8138 126.081 33.8184 115.556 26.7859C105.032 19.7535 92.658 16 80 16C67.342 16 54.9683 19.7535 44.4435 26.7859C33.9188 33.8184 25.7157 43.8138 20.8717 55.5083C16.0277 67.2027 14.7603 80.071 17.2297 92.4858C19.3732 103.261 24.2483 113.275 31.3511 121.585C33.1454 123.684 33.1623 126.838 31.2096 128.79L26.967 133.033Z"
                  data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.54509806632995605,&#34;g&#34;:0.32156863808631897,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.73958331346511841},{&#34;color&#34;:{&#34;r&#34;:0.56480658054351807,&#34;g&#34;:0.35096153616905212,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:0.54509806632995605,&#34;g&#34;:0.32156863808631897,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.73958331346511841},{&#34;color&#34;:{&#34;r&#34;:0.56480658054351807,&#34;g&#34;:0.35096153616905212,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-113.0,&#34;m01&#34;:113.0,&#34;m02&#34;:80.000007629394531,&#34;m10&#34;:-113.0,&#34;m11&#34;:-113.0,&#34;m12&#34;:193.0},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
                />

                <text
                  x="80"
                  y="80"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="40"
                  fontWeight="bold"
                >
                  {percent}%
                </text>
                <defs>
                  <clipPath id="paint0_angular_0_5677_clip_path">
                    <path d="M26.967 133.033C25.0144 134.986 21.8353 134.995 20.0085 132.925C10.685 122.357 4.29812 109.487 1.53718 95.6072C-1.54964 80.0887 0.0346269 64.0034 6.08964 49.3853C12.1446 34.7672 22.3984 22.2729 35.5544 13.4824C48.7103 4.69192 64.1775 -1.88681e-07 80 0C95.8225 1.88681e-07 111.29 4.69192 124.446 13.4824C137.602 22.2729 147.855 34.7672 153.91 49.3853C159.965 64.0034 161.55 80.0887 158.463 95.6072C155.702 109.487 149.315 122.357 139.992 132.925C138.165 134.995 134.986 134.986 133.033 133.033L128.79 128.79C126.838 126.838 126.855 123.684 128.649 121.585C135.752 113.275 140.627 103.261 142.77 92.4858C145.24 80.071 143.972 67.2027 139.128 55.5083C134.284 43.8138 126.081 33.8184 115.556 26.7859C105.032 19.7535 92.658 16 80 16C67.342 16 54.9683 19.7535 44.4435 26.7859C33.9188 33.8184 25.7157 43.8138 20.8717 55.5083C16.0277 67.2027 14.7603 80.071 17.2297 92.4858C19.3732 103.261 24.2483 113.275 31.3511 121.585C33.1454 123.684 33.1623 126.838 31.2096 128.79L26.967 133.033Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <p className="text-gray-100 max-w-[230px] mx-auto text-center text-[10px]">
            Рейтинг виден каждому покупателю и трейдеру. Не упускайте это из
            виду
          </p>
        </div>
        <div className="flex flex-col gap-[27px] flex-1">
          <div className="flex py-2 px-5 rounded-lg bg-accent-300 justify-between items-center flex-1">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-gray-100">Потрачено</p>
              <p className="text-2xl font-semibold">5 000 ₽</p>
            </div>
          </div>
          <div className="flex py-2 px-5 rounded-lg bg-accent-300 justify-between items-center flex-1">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-gray-100">Заработано</p>
              <p className="text-2xl font-semibold">20 000 ₽</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="flex justify-between border-b border-white/5 py-2">
          <div className="flex gap-10 text-lg items-center">
            <div
              onClick={() => setActiveTab("reviews")}
              className={`tab-item-border ${
                activeTab === "reviews" ? "active" : ""
              }`}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.90056 9.73287C10.3539 9.33687 10.8926 9.03154 11.4872 8.85154L11.8166 8.76487L12.0299 8.72487L12.2646 8.69154L12.5046 8.67154L12.7499 8.66487H22.7499C23.8565 8.66478 24.9213 9.08807 25.7258 9.84795C26.5303 10.6078 27.0136 11.6467 27.0766 12.7515L27.0832 12.9982V22.9982C27.0833 24.1051 26.6598 25.17 25.8997 25.9745C25.1395 26.779 24.1003 27.2622 22.9952 27.3249L22.7499 27.3315H12.7499C11.643 27.3316 10.5781 26.9081 9.77359 26.148C8.96905 25.3878 8.48589 24.3486 8.42323 23.2435L8.41656 22.9995V12.9995L8.42056 12.8009L8.43923 12.5475L8.4739 12.2929L8.5219 12.0449L8.60056 11.7475L8.70723 11.4329L8.82323 11.1635L8.93256 10.9475L9.0579 10.7302L9.25256 10.4409L9.37789 10.2769L9.5579 10.0689L9.7019 9.91954L9.90056 9.73287ZM17.7499 12.6662C17.5082 12.6662 17.2748 12.7537 17.0927 12.9126C16.9105 13.0714 16.7921 13.2908 16.7592 13.5302L16.7499 13.6662V16.9982H13.4166C13.1749 16.9982 12.9414 17.0857 12.7593 17.2446C12.5772 17.4034 12.4588 17.6228 12.4259 17.8622L12.4166 17.9982C12.4166 18.5049 12.7926 18.9222 13.2806 18.9889L13.4166 18.9982H16.7499V22.3329C16.7499 22.8395 17.1259 23.2582 17.6139 23.3235L17.7499 23.3329C17.9915 23.3329 18.225 23.2453 18.4071 23.0865C18.5893 22.9277 18.7077 22.7083 18.7406 22.4689L18.7499 22.3329V18.9982H22.0832C22.3251 18.9981 22.5587 18.9104 22.7409 18.7513C22.923 18.5922 23.0413 18.3725 23.0739 18.1329L23.0832 17.9995C23.0832 17.7579 22.9957 17.5244 22.8369 17.3423C22.678 17.1602 22.4586 17.0417 22.2192 17.0089L22.0832 16.9995H18.7499V13.6662C18.7499 13.4246 18.6624 13.1911 18.5035 13.009C18.3447 12.8268 18.1253 12.7084 17.8859 12.6755L17.7499 12.6662ZM18.5259 3.64354L18.5952 3.87954L19.5206 7.3302H12.7499C12.0056 7.3302 11.2686 7.47682 10.581 7.76168C9.89345 8.04654 9.2687 8.46406 8.74249 8.9904C8.21627 9.51674 7.79889 10.1416 7.5142 10.8293C7.2295 11.5169 7.08305 12.2539 7.08323 12.9982V21.5769C6.21633 21.5252 5.38491 21.2144 4.69669 20.6848C4.00847 20.1551 3.49515 19.431 3.22323 18.6062L3.1539 18.3715L0.565895 8.71154C0.279232 7.6427 0.412343 6.5047 0.937932 5.53087C1.46352 4.55704 2.34176 3.82119 3.39256 3.4742L3.62989 3.40487L13.2886 0.816872C14.3574 0.530209 15.4954 0.66332 16.4692 1.18891C17.4431 1.7145 18.1789 2.59274 18.5259 3.64354Z"
                  fill="#787E87"
                />
              </svg>
              Отзывы
            </div>
            <div
              onClick={() => setActiveTab("settings")}
              className={`tab-item-border ${
                activeTab === "settings" ? "active" : ""
              }`}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.90056 9.73287C10.3539 9.33687 10.8926 9.03154 11.4872 8.85154L11.8166 8.76487L12.0299 8.72487L12.2646 8.69154L12.5046 8.67154L12.7499 8.66487H22.7499C23.8565 8.66478 24.9213 9.08807 25.7258 9.84795C26.5303 10.6078 27.0136 11.6467 27.0766 12.7515L27.0832 12.9982V22.9982C27.0833 24.1051 26.6598 25.17 25.8997 25.9745C25.1395 26.779 24.1003 27.2622 22.9952 27.3249L22.7499 27.3315H12.7499C11.643 27.3316 10.5781 26.9081 9.77359 26.148C8.96905 25.3878 8.48589 24.3486 8.42323 23.2435L8.41656 22.9995V12.9995L8.42056 12.8009L8.43923 12.5475L8.4739 12.2929L8.5219 12.0449L8.60056 11.7475L8.70723 11.4329L8.82323 11.1635L8.93256 10.9475L9.0579 10.7302L9.25256 10.4409L9.37789 10.2769L9.5579 10.0689L9.7019 9.91954L9.90056 9.73287ZM17.7499 12.6662C17.5082 12.6662 17.2748 12.7537 17.0927 12.9126C16.9105 13.0714 16.7921 13.2908 16.7592 13.5302L16.7499 13.6662V16.9982H13.4166C13.1749 16.9982 12.9414 17.0857 12.7593 17.2446C12.5772 17.4034 12.4588 17.6228 12.4259 17.8622L12.4166 17.9982C12.4166 18.5049 12.7926 18.9222 13.2806 18.9889L13.4166 18.9982H16.7499V22.3329C16.7499 22.8395 17.1259 23.2582 17.6139 23.3235L17.7499 23.3329C17.9915 23.3329 18.225 23.2453 18.4071 23.0865C18.5893 22.9277 18.7077 22.7083 18.7406 22.4689L18.7499 22.3329V18.9982H22.0832C22.3251 18.9981 22.5587 18.9104 22.7409 18.7513C22.923 18.5922 23.0413 18.3725 23.0739 18.1329L23.0832 17.9995C23.0832 17.7579 22.9957 17.5244 22.8369 17.3423C22.678 17.1602 22.4586 17.0417 22.2192 17.0089L22.0832 16.9995H18.7499V13.6662C18.7499 13.4246 18.6624 13.1911 18.5035 13.009C18.3447 12.8268 18.1253 12.7084 17.8859 12.6755L17.7499 12.6662ZM18.5259 3.64354L18.5952 3.87954L19.5206 7.3302H12.7499C12.0056 7.3302 11.2686 7.47682 10.581 7.76168C9.89345 8.04654 9.2687 8.46406 8.74249 8.9904C8.21627 9.51674 7.79889 10.1416 7.5142 10.8293C7.2295 11.5169 7.08305 12.2539 7.08323 12.9982V21.5769C6.21633 21.5252 5.38491 21.2144 4.69669 20.6848C4.00847 20.1551 3.49515 19.431 3.22323 18.6062L3.1539 18.3715L0.565895 8.71154C0.279232 7.6427 0.412343 6.5047 0.937932 5.53087C1.46352 4.55704 2.34176 3.82119 3.39256 3.4742L3.62989 3.40487L13.2886 0.816872C14.3574 0.530209 15.4954 0.66332 16.4692 1.18891C17.4431 1.7145 18.1789 2.59274 18.5259 3.64354Z"
                  fill="#787E87"
                />
              </svg>
              Настройки
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <button className="btn btn-secondary">Инвентарь</button>
            <button className="btn btn-secondary" onClick={() => setIsOpen(true)}>История</button>
          </div>
        </div>
        {activeTab === "settings" ? renderSettings() : renderReviews()}
      </div>
      <HistoryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
