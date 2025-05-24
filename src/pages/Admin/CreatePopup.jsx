import { useState } from "react";

export default function CreatePopup() {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 ? (
        <CreatePopupStep1 setStep={setStep} />
      ) : (
        <CreatePopupStep2 />
      )}
    </div>
  );
}
function CreatePopupStep1({ setStep }) {
  return (
    <div className="flex flex-col gap-28 py-10 px-8 bg-accent-300/80 border border-white/5 rounded-xl">
      <div className="text-2xl font-semibold">Настройка pop-up окна</div>
      <div className="grid grid-cols-2 gap-24">
        <div className="flex flex-col gap-9 items-start justify-start">
          <div className="flex gap-2.5 items-center">
            <div className=" text-[#2C0327] flex justify-center items-center font-semibold text-lg h-9 w-9  rounded-full bg-primary">
              1
            </div>
            <p className="text-xl font-medium ">Выбор картинки для pop-up</p>
          </div>
          <div className="flex gap-6 py-5 border w-full border-white/5 rounded-xl justify-center items-center">
            <div className="flex gap-2.5 items-center">
              <svg
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.6917 25.4746C53.8509 25.4746 53.0445 25.8086 52.45 26.4031C51.8555 26.9977 51.5215 27.804 51.5215 28.6448V39.3599L46.8296 34.6681C45.173 33.0245 42.9339 32.1022 40.6003 32.1022C38.2666 32.1022 36.0275 33.0245 34.3709 34.6681L32.1518 36.9189L24.2898 29.0252C22.6331 27.3816 20.394 26.4593 18.0604 26.4593C15.7267 26.4593 13.4877 27.3816 11.831 29.0252L7.13916 33.7487V15.9641C7.13916 15.1233 7.47316 14.317 8.06768 13.7225C8.6622 13.1279 9.46855 12.7939 10.3093 12.7939H35.6707C36.5114 12.7939 37.3178 12.4599 37.9123 11.8654C38.5068 11.2709 38.8408 10.4646 38.8408 9.62378C38.8408 8.783 38.5068 7.97666 37.9123 7.38213C37.3178 6.78761 36.5114 6.45361 35.6707 6.45361H10.3093C7.78699 6.45361 5.36795 7.45561 3.58439 9.23917C1.80082 11.0227 0.798828 13.4418 0.798828 15.9641V54.7035C0.807182 57.0383 1.73838 59.2751 3.38934 60.9261C5.0403 62.5771 7.27709 63.5082 9.61189 63.5166H49.0488C49.9078 63.5097 50.7616 63.3817 51.5849 63.1362V63.1362C53.4155 62.6227 55.027 61.5229 56.1723 60.0053C57.3176 58.4878 57.9334 56.6364 57.9252 54.7352V28.6448C57.9253 28.2231 57.8413 27.8056 57.678 27.4168C57.5147 27.028 57.2755 26.6756 56.9744 26.3804C56.6733 26.0852 56.3163 25.853 55.9243 25.6975C55.5323 25.5419 55.1133 25.4662 54.6917 25.4746ZM10.3093 57.1763C9.46855 57.1763 8.6622 56.8423 8.06768 56.2478C7.47316 55.6532 7.13916 54.8469 7.13916 54.0061V42.6886L16.3009 33.5268C16.7643 33.0661 17.3911 32.8075 18.0445 32.8075C18.6979 32.8075 19.3248 33.0661 19.7881 33.5268L43.4693 57.1763H10.3093ZM51.5215 54.0061C51.5011 54.62 51.3029 55.2147 50.9509 55.718L36.6217 41.3254L38.8725 39.1063C39.0998 38.8744 39.3711 38.6901 39.6705 38.5643C39.9699 38.4385 40.2914 38.3737 40.6161 38.3737C40.9409 38.3737 41.2624 38.4385 41.5618 38.5643C41.8611 38.6901 42.1324 38.8744 42.3597 39.1063L51.5215 48.3315V54.0061ZM61.032 6.45361H57.8618V3.28345C57.8618 2.44267 57.5278 1.63632 56.9333 1.0418C56.3388 0.44728 55.5324 0.113281 54.6917 0.113281C53.8509 0.113281 53.0445 0.44728 52.45 1.0418C51.8555 1.63632 51.5215 2.44267 51.5215 3.28345V6.45361H48.3513C47.5105 6.45361 46.7042 6.78761 46.1097 7.38213C45.5151 7.97666 45.1812 8.783 45.1812 9.62378C45.1812 10.4646 45.5151 11.2709 46.1097 11.8654C46.7042 12.4599 47.5105 12.7939 48.3513 12.7939H51.5215V15.9641C51.5215 16.8049 51.8555 17.6112 52.45 18.2058C53.0445 18.8003 53.8509 19.1343 54.6917 19.1343C55.5324 19.1343 56.3388 18.8003 56.9333 18.2058C57.5278 17.6112 57.8618 16.8049 57.8618 15.9641V12.7939H61.032C61.8728 12.7939 62.6791 12.4599 63.2736 11.8654C63.8682 11.2709 64.2021 10.4646 64.2021 9.62378C64.2021 8.783 63.8682 7.97666 63.2736 7.38213C62.6791 6.78761 61.8728 6.45361 61.032 6.45361V6.45361Z"
                  fill="#787E87"
                />
              </svg>

              <label
                htmlFor="image"
                className="flex flex-col gap-2 cursor-pointer"
              >
                <input type="file" id="image" className="hidden" />
                <p className="text-[22px] font-medium">
                  Выберите изображение для pop-up
                </p>
                <p className="text-lg font-medium">
                  Перетащить сюда или{" "}
                  <span className="text-primary">выбрать файл</span>
                </p>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 items-start justify-start">
          <div className="flex gap-2.5 items-center">
            <div className=" text-[#2C0327] flex justify-center items-center font-semibold text-lg h-9 w-9  rounded-full bg-primary">
              3
            </div>
            <p className="text-xl font-medium ">
              Напишите основной текст для pop-up
            </p>
          </div>
          <div className="flex gap-6 py-5 border px-5 w-full border-white/5 rounded-xl justify-center items-center">
            <textarea
              className="w-full h-full resize-none outline-none"
              rows={6}
              placeholder="Напишите основной текст для pop-up"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-9 items-start justify-start">
          <div className="flex gap-2.5 items-center">
            <div className=" text-[#2C0327] flex justify-center items-center font-semibold text-lg h-9 w-9  rounded-full bg-primary">
              3
            </div>
            <p className="text-xl font-medium ">
              Напишите заголовок для pop-up
            </p>
          </div>
          <div className="flex gap-6 py-5 border px-5 w-full border-white/5 rounded-xl justify-center items-center">
            <textarea
              className="w-full h-full resize-none outline-none"
              rows={4}
              placeholder="Введите свое сообщение здесь..."
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col gap-9 items-start justify-start">
          <div className="flex gap-2.5 items-center">
            <div className=" text-[#2C0327] flex justify-center items-center font-semibold text-lg h-9 w-9  rounded-full bg-primary">
              4
            </div>
            <p className="text-xl font-medium ">Настройка кнопки перехода</p>
          </div>
          <div className="flex gap-6 h-full py-5 border w-full border-white/5 rounded-xl justify-center items-center">
            <div className="flex gap-2.5 items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.6917 25.4746C53.8509 25.4746 53.0445 25.8086 52.45 26.4031C51.8555 26.9977 51.5215 27.804 51.5215 28.6448V39.3599L46.8296 34.6681C45.173 33.0245 42.9339 32.1022 40.6003 32.1022C38.2666 32.1022 36.0275 33.0245 34.3709 34.6681L32.1518 36.9189L24.2898 29.0252C22.6331 27.3816 20.394 26.4593 18.0604 26.4593C15.7267 26.4593 13.4877 27.3816 11.831 29.0252L7.13916 33.7487V15.9641C7.13916 15.1233 7.47316 14.317 8.06768 13.7225C8.6622 13.1279 9.46855 12.7939 10.3093 12.7939H35.6707C36.5114 12.7939 37.3178 12.4599 37.9123 11.8654C38.5068 11.2709 38.8408 10.4646 38.8408 9.62378C38.8408 8.783 38.5068 7.97666 37.9123 7.38213C37.3178 6.78761 36.5114 6.45361 35.6707 6.45361H10.3093C7.78699 6.45361 5.36795 7.45561 3.58439 9.23917C1.80082 11.0227 0.798828 13.4418 0.798828 15.9641V54.7035C0.807182 57.0383 1.73838 59.2751 3.38934 60.9261C5.0403 62.5771 7.27709 63.5082 9.61189 63.5166H49.0488C49.9078 63.5097 50.7616 63.3817 51.5849 63.1362V63.1362C53.4155 62.6227 55.027 61.5229 56.1723 60.0053C57.3176 58.4878 57.9334 56.6364 57.9252 54.7352V28.6448C57.9253 28.2231 57.8413 27.8056 57.678 27.4168C57.5147 27.028 57.2755 26.6756 56.9744 26.3804C56.6733 26.0852 56.3163 25.853 55.9243 25.6975C55.5323 25.5419 55.1133 25.4662 54.6917 25.4746ZM10.3093 57.1763C9.46855 57.1763 8.6622 56.8423 8.06768 56.2478C7.47316 55.6532 7.13916 54.8469 7.13916 54.0061V42.6886L16.3009 33.5268C16.7643 33.0661 17.3911 32.8075 18.0445 32.8075C18.6979 32.8075 19.3248 33.0661 19.7881 33.5268L43.4693 57.1763H10.3093ZM51.5215 54.0061C51.5011 54.62 51.3029 55.2147 50.9509 55.718L36.6217 41.3254L38.8725 39.1063C39.0998 38.8744 39.3711 38.6901 39.6705 38.5643C39.9699 38.4385 40.2914 38.3737 40.6161 38.3737C40.9409 38.3737 41.2624 38.4385 41.5618 38.5643C41.8611 38.6901 42.1324 38.8744 42.3597 39.1063L51.5215 48.3315V54.0061ZM61.032 6.45361H57.8618V3.28345C57.8618 2.44267 57.5278 1.63632 56.9333 1.0418C56.3388 0.44728 55.5324 0.113281 54.6917 0.113281C53.8509 0.113281 53.0445 0.44728 52.45 1.0418C51.8555 1.63632 51.5215 2.44267 51.5215 3.28345V6.45361H48.3513C47.5105 6.45361 46.7042 6.78761 46.1097 7.38213C45.5151 7.97666 45.1812 8.783 45.1812 9.62378C45.1812 10.4646 45.5151 11.2709 46.1097 11.8654C46.7042 12.4599 47.5105 12.7939 48.3513 12.7939H51.5215V15.9641C51.5215 16.8049 51.8555 17.6112 52.45 18.2058C53.0445 18.8003 53.8509 19.1343 54.6917 19.1343C55.5324 19.1343 56.3388 18.8003 56.9333 18.2058C57.5278 17.6112 57.8618 16.8049 57.8618 15.9641V12.7939H61.032C61.8728 12.7939 62.6791 12.4599 63.2736 11.8654C63.8682 11.2709 64.2021 10.4646 64.2021 9.62378C64.2021 8.783 63.8682 7.97666 63.2736 7.38213C62.6791 6.78761 61.8728 6.45361 61.032 6.45361V6.45361Z"
                  fill="#787E87"
                />
              </svg>

              <label
                htmlFor="image"
                className="flex flex-col gap-2 cursor-pointer"
              >
                <input type="file" id="image" className="hidden" />

                <div className="input-wrapper ">
                  <input
                    type="text"
                    placeholder="Введите ссылку в кнопке"
                    className="input-field min-w-[200px]"
                  />

                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => setStep(2)} className="btn btn-primary w-fit">
        Следующий шаг
      </button>
    </div>
  );
}
function CreatePopupStep2() {
  return (
    <div className="flex flex-col gap-28 py-10 px-8 bg-accent-300/80 border border-white/5 rounded-xl">
      <div className="flex flex-col gap-8">
        <div className="text-2xl font-semibold">Настройка pop-up окна</div>
        <div className="text-lg font-semibold">Предпросмотр и сохранение</div>
        <div className="flex justify-between items-center border border-white/5 rounded-xl p-5">
          <div className="flex flex-col justify-center items-center gap-2.5 ">
            <div className="bg_test_popup min-h-[500px]  rounded-xl min-w-[770px] w-full relative">
              <div className="max-w-[300px] flex-col text-center gap-3 flex w-full h-full justify-center items-center absolute  top-1/2 -translate-y-1/2 border border-white/5 rounded-xl left-1/2 -translate-x-1/2 max-h-[350px] px-6 bg-accent-300/80">
                <div className="absolute top-3 right-3 cursor-pointer">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.05469 0.363281L9.45592 8.76451M1.05469 8.76451L9.45592 0.363281"
                      stroke="white"
                      stroke-width="0.700102"
                    />
                  </svg>
                </div>
                <img
                  src="/assets/images/project/test_img.png"
                  className="h-32 w-32 "
                  alt=""
                  srcset=""
                />
                <div className="flex flex-col gap-2">
                  <p className="text-[11px] leading-4 text-white font-normal">
                    🔥 Бесплатные скины в Telegram!
                  </p>
                  <p className="text-[9px] leading-4 text-white font-normal">
                    Присоединяйся к нашему Telegram-боту и получи бонус на
                    баланс, успевай, акция ограничена! Удобные сделки, быстрый
                    обмен, лучшие скины - теперь прямо в Telegram.
                  </p>
                  <button className="btn btn-border text-[8px] !py-1.5 leading-none">
                    <img
                      src="/assets/images/project/tg.png"
                      className="h-4 w-4"
                      alt="Telegram"
                    />
                    Перейти в Telegram
                  </button>
                </div>
              </div>
            </div>
            <p className="text-2xl font-semibold text-gray-100">Desktop</p>
          </div>
        </div>
      </div>

      <div className="w-full justify-center flex items-center gap-2">
        <button className="btn btn-border w-fit">Назад</button>
        <button className="btn btn-primary w-fit">Сохранить и выложить</button>
      </div>
    </div>
  );
}
