import { useState } from "react";
import Modal from "./Modal/Modal";

const BalanceModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePayment = () => {
    console.log(`Оплата ${amount} руб. методом: ${paymentMethod}`);

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col pb-3 border-b border-white/5 gap-2">
          <p className="text-2xl font-semibold">Пополнение баланса</p>
          <p className="text-sm text-gray-100">Добавьте средства в Базар</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">Введите сумму пополнения</p>
              <div className="input-wrapper min-w-[300px]">
                ₽
                <input
                  type="text"
                  placeholder="0"
                  className="w-full"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm text-gray-100">
                Или сразу выберете предложенную сумму
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setAmount("1500")}
                  className="btn btn-primary !text-xs text-nowrap !px-3"
                >
                  ₽1 500
                </button>
                <button
                  onClick={() => setAmount("5000")}
                  className="btn btn-primary !text-xs text-nowrap !px-3"
                >
                  ₽5 000
                </button>
                <button
                  onClick={() => setAmount("10000")}
                  className="btn btn-primary !text-xs text-nowrap !px-3"
                >
                  ₽10 000
                </button>
                <button
                  onClick={() => setAmount("25000")}
                  className="btn btn-primary !text-xs text-nowrap !px-3"
                >
                  ₽25 000
                </button>
                <button
                  onClick={() => setAmount("50000")}
                  className="btn btn-primary !text-xs text-nowrap !px-3"
                >
                  ₽50 000
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between min-h-[240px] items-stretch">
            <div
              className={`!min-w-[220px] min-h-[230px] px-6 pb-9 pt-2 items-center overflow-hidden justify-center bg-accent-200 rounded-lg flex flex-col gap-8 relative cursor-pointer ${
                paymentMethod === "card" ? "border border-primary" : ""
              }`}
              onClick={() => setPaymentMethod("card")}
            >
              <div className="justify-end w-full flex items-center gap-0.5">
                <div className="small-tag">RUB</div>
              </div>
              <svg
                width="118"
                height="60"
                viewBox="0 0 118 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M67.5 15.9844L73.4585 26.7152V33.2607L67.507 43.9705L67.5 15.9844Z"
                  fill="#8B52FF"
                />
                <path
                  d="M90.3789 22.8108L95.9623 19.3629L107.389 19.3522L90.3789 29.8513V22.8108Z"
                  fill="#8B52FF"
                />
                <path
                  d="M90.3472 15.9214L90.3786 30.1286L84.4062 26.4312V5.19385L90.3472 15.9214Z"
                  fill="#8B52FF"
                />
                <path
                  d="M107.389 19.3519L95.9615 19.3627L90.3472 15.9214L84.4062 5.19385L107.389 19.3519Z"
                  fill="#8B52FF"
                />
                <path
                  d="M90.3786 44.03V37.1371L84.4062 33.5099L84.4095 54.7683L90.3786 44.03Z"
                  fill="#8B52FF"
                />
                <path
                  d="M95.9477 40.6135L73.4581 26.7152L67.5 15.9844L107.364 40.5994L95.9477 40.6135Z"
                  fill="#8B52FF"
                />
                <path
                  d="M84.4102 54.7685L90.3785 44.0304L95.948 40.6139L107.364 40.5999L84.4102 54.7685Z"
                  fill="#8B52FF"
                />
                <path
                  d="M67.5078 43.9708L84.4555 33.5106L78.7577 29.9883L73.4594 33.261L67.5078 43.9708Z"
                  fill="#8B52FF"
                />
                <g clip-path="url(#clip0_0_1)">
                  <path
                    d="M0.884766 26.1442V41.4611C0.884766 45.872 4.46037 49.4476 8.87119 49.4476H52.0828C56.4936 49.4476 60.0692 45.872 60.0692 41.4611V26.1442C60.0692 25.3772 59.4473 24.7553 58.6803 24.7553H2.27371C1.50666 24.7553 0.884766 25.3772 0.884766 26.1442ZM15.6616 35.8668H11.9578C10.6154 35.8668 9.52712 34.7786 9.52712 33.4362C9.52712 32.0938 10.6154 31.0055 11.9578 31.0055H15.6616C17.004 31.0055 18.0923 32.0938 18.0923 33.4362C18.0923 34.7786 17.004 35.8668 15.6616 35.8668ZM60.0692 18.505V18.0035C60.0692 13.5927 56.4936 10.0171 52.0828 10.0171H8.87119C4.46037 10.0171 0.884766 13.5927 0.884766 18.0035V18.505C0.884766 19.2721 1.50666 19.894 2.27371 19.894H58.6803C59.4473 19.894 60.0692 19.2721 60.0692 18.505Z"
                    fill="#8B52FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_1">
                    <rect
                      width="59.1845"
                      height="59.1845"
                      fill="white"
                      transform="translate(0.884766 0.140015)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-[100px] h-[48px] rounded-full bg-primary blur-3xl flex items-center gap-1"></div>
              <div className="flex flex-col text-center gap-1">
                <p className="">Банковская карта/СБП</p>
                <p className="text-xs text-gray-100">Visa/Mastercard/Мир</p>
              </div>
            </div>
            <div
              className={`!min-w-[220px] min-h-[230px] px-6 pb-9 pt-2 items-center overflow-hidden justify-center bg-accent-200 rounded-lg flex flex-col gap-8 relative cursor-pointer ${
                paymentMethod === "crypto" ? "border border-primary" : ""
              }`}
              onClick={() => setPaymentMethod("crypto")}
            >
              <div className="justify-end w-full flex items-center gap-0.5">
                <div className="small-tag">Solana</div>
                <div className="small-tag">ETH</div>
                <div className="small-tag">BTC</div>
                <div className="small-tag">USC</div>
              </div>
              <svg
                width="122"
                height="60"
                viewBox="0 0 122 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_2699)">
                  <path
                    d="M91.5048 0.198975C85.6519 0.198975 79.9305 1.93455 75.064 5.18623C70.1975 8.43792 66.4045 13.0597 64.1647 18.467C61.9249 23.8744 61.3389 29.8244 62.4807 35.5649C63.6226 41.3053 66.441 46.5782 70.5796 50.7168C74.7182 54.8554 79.9911 57.6738 85.7315 58.8156C91.4719 59.9575 97.422 59.3715 102.829 57.1317C108.237 54.8919 112.858 51.0989 116.11 46.2324C119.362 41.3659 121.097 35.6445 121.097 29.7916C121.097 25.9055 120.332 22.0573 118.845 18.467C117.358 14.8767 115.178 11.6144 112.43 8.86646C109.682 6.11853 106.42 3.93875 102.829 2.45158C99.239 0.964411 95.3909 0.198975 91.5048 0.198975ZM100.193 36.302L92.8364 46.8666C92.6854 47.0791 92.4858 47.2524 92.2541 47.372C92.0224 47.4916 91.7655 47.554 91.5048 47.554C91.244 47.554 90.9871 47.4916 90.7554 47.372C90.5238 47.2524 90.3241 47.0791 90.1731 46.8666L82.8164 36.302C82.7496 36.1997 82.716 36.0793 82.7204 35.9572C82.7247 35.8352 82.7667 35.7174 82.8406 35.6202C82.9145 35.5229 83.0167 35.4509 83.1332 35.414C83.2496 35.3772 83.3747 35.3772 83.4911 35.4142L90.7945 37.8408C91.2549 37.9986 91.7547 37.9986 92.215 37.8408L99.5214 35.4142C99.6376 35.3781 99.7622 35.3787 99.878 35.416C99.9939 35.4532 100.095 35.5253 100.169 35.6223C100.242 35.7194 100.284 35.8367 100.288 35.9583C100.293 36.08 100.259 36.2 100.193 36.302ZM101.241 30.1171L91.5048 33.4019L81.7717 30.129C81.6484 30.0878 81.5355 30.02 81.4412 29.9305C81.347 29.8409 81.2735 29.7317 81.2261 29.6106C81.1786 29.4894 81.1584 29.3594 81.1668 29.2296C81.1752 29.0998 81.212 28.9735 81.2746 28.8595L90.0843 12.8794C90.2281 12.6299 90.4351 12.4226 90.6845 12.2785C90.9338 12.1344 91.2168 12.0586 91.5048 12.0586C91.7928 12.0586 92.0757 12.1344 92.3251 12.2785C92.5744 12.4226 92.7814 12.6299 92.9252 12.8794L101.735 28.8742C101.795 28.9875 101.83 29.1123 101.837 29.2402C101.844 29.3681 101.823 29.4961 101.777 29.6153C101.73 29.7345 101.657 29.8422 101.565 29.9308C101.472 30.0195 101.362 30.0871 101.241 30.129V30.1171Z"
                    fill="#8B52FF"
                  />
                </g>
                <g clip-path="url(#clip1_0_2699)">
                  <path
                    d="M36.4479 34.3637C36.4502 38.546 29.289 38.0697 27.0071 38.072V30.6577C29.2913 30.6577 36.4479 30.0023 36.4479 34.3637ZM59.781 29.7919C59.781 46.1349 46.5314 59.3845 30.1884 59.3845C13.8453 59.3845 0.595703 46.1349 0.595703 29.7919C0.595703 13.4489 13.8453 0.199219 30.1884 0.199219C46.5314 0.199219 59.781 13.4477 59.781 29.7919ZM38.272 28.0637C40.2244 27.0696 41.4451 25.3171 41.1596 22.3995C40.7758 18.4103 37.3334 17.074 32.9858 16.6925V11.1601H29.6185V16.5468C28.733 16.5468 27.8279 16.5642 26.9297 16.5827V11.1601H23.5647V16.6913C22.8341 16.7064 22.1186 16.7202 21.4204 16.7202V16.7029L16.7746 16.7017V20.2991C16.7746 20.2991 19.2622 20.2517 19.2206 20.2979C20.5846 20.2979 21.0285 21.0898 21.158 21.7741V28.0776C21.2528 28.0776 21.3753 28.0822 21.514 28.1007H21.158V36.9299C21.0967 37.3588 20.8447 38.0443 19.8922 38.0454C19.935 38.0836 17.4439 38.0454 17.4439 38.0454L16.7746 42.067H21.1568C21.9729 42.067 22.7752 42.0821 23.5624 42.0867V47.6827H26.9274V42.1456C27.851 42.1653 28.7446 42.1722 29.6173 42.1711V47.6827H32.9835V42.0971C38.6465 41.7723 42.6092 40.3458 43.1016 35.0295C43.4993 30.7479 41.4844 28.8382 38.2708 28.066L38.272 28.0637ZM34.8816 23.9034C34.8816 19.935 28.9087 20.5395 27.0083 20.5395V27.2638C28.9087 27.2638 34.8804 27.7077 34.8816 23.9034Z"
                    fill="#8B52FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_2699">
                    <rect
                      width="59.1853"
                      height="59.1853"
                      fill="white"
                      transform="translate(61.9121 0.198975)"
                    />
                  </clipPath>
                  <clipPath id="clip1_0_2699">
                    <rect
                      width="59.1853"
                      height="59.1853"
                      fill="white"
                      transform="translate(0.595703 0.199219)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-[100px] h-[48px] rounded-full bg-primary blur-3xl flex items-center gap-1"></div>
              <div className="flex flex-col text-center gap-1">
                <p className="">Криптовалюта</p>
                <p className="text-xs text-gray-100">
                  Bitcoin/Ethereum/Solana и др.
                </p>
              </div>
            </div>
            <div
              className={`!min-w-[220px] min-h-[230px] px-6 pb-9 pt-2 items-center overflow-hidden justify-center bg-accent-200 rounded-lg flex flex-col gap-8 relative cursor-pointer ${
                paymentMethod === "cardKZ" ? "border border-primary" : ""
              }`}
              onClick={() => setPaymentMethod("cardKZ")}
            >
              <div className="justify-end w-full flex items-center gap-0.5">
                <div className="small-tag">KZT</div>
              </div>
              <svg
                width="60"
                height="40"
                viewBox="0 0 60 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.667969 16.1443V31.4613C0.667969 35.8721 4.24357 39.4477 8.65439 39.4477H51.866C56.2768 39.4477 59.8524 35.8721 59.8524 31.4613V16.1443C59.8524 15.3773 59.2305 14.7554 58.4635 14.7554H2.05691C1.28987 14.7554 0.667969 15.3773 0.667969 16.1443ZM15.4448 25.8669H11.741C10.3986 25.8669 9.31032 24.7787 9.31032 23.4363C9.31032 22.0939 10.3986 21.0056 11.741 21.0056H15.4448C16.7872 21.0056 17.8755 22.0939 17.8755 23.4363C17.8755 24.7787 16.7872 25.8669 15.4448 25.8669ZM59.8524 8.50516V8.00363C59.8524 3.59281 56.2768 0.0172119 51.866 0.0172119H8.65439C4.24357 0.0172119 0.667969 3.59281 0.667969 8.00363V8.50516C0.667969 9.2722 1.28987 9.8941 2.05691 9.8941H58.4635C59.2305 9.8941 59.8524 9.2722 59.8524 8.50516Z"
                  fill="#8B52FF"
                />
              </svg>

              <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-[100px] h-[48px] rounded-full bg-primary blur-3xl flex items-center gap-1"></div>
              <div className="flex flex-col text-center gap-1">
                <p className="">Банковская карта КЗ</p>
                <p className="text-xs text-gray-100">Visa/Mastercard/Мир</p>
              </div>
            </div>
          </div>

          {paymentMethod && (
            <div className="relative max-w-[450px] mx-auto w-full rounded-lg p-6 mt-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-100 px-6 py-1">
                <p className="text-xl font-semibold">Итого</p>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between items-center">
                  <p className="text-gray-100">Сумма пополнения</p>
                  <p className="font-medium">₽ {amount || 0}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-100">Комиссия</p>
                  <p className="font-medium">₽ 0</p>
                </div>
                <div className="h-[1px] w-full bg-white/5 my-2"></div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Всего</p>
                  <p className="text-lg font-semibold">₽ {amount || 0}</p>
                </div>
              </div>

              <button
                className="btn btn-primary w-full py-3 text-base font-medium"
                disabled={!amount || amount === "0"}
                onClick={() => handlePayment()}
              >
                Оплатить
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default BalanceModal;
