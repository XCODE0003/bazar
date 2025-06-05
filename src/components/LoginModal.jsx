import { useState } from "react";
import Modal from "./Modal/Modal";

const LoginModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Автоматический переход к следующему полю
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleOpenTelegram = () => {
    // Логика открытия Telegram
    window.open("https://t.me/", "_blank");
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={
        "!bg-accent-200/80 !rounded-xl backdrop-blur-3xl max-w-[500px]"
      }
    >
      <div className="flex flex-col gap-8 text-center py-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold ">
            Вход через Telegram
          </h2>
          <p className="text-base text-gray-100 leading-relaxed">
          Введите 6-значный код для авторизации. Его можно получить в боте.

            <br />
            <span className="text-gray-400">о можно получить в боте.</span>
          </p>
        </div>

        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-14 h-14 text-center text-2xl !border-solid font-bold !border !border-white/5 rounded-xl text-white ransition-all duration-200 hover:border-gray-500"
              maxLength="1"
              inputMode="numeric"
              pattern="[0-9]*"
            />
          ))}
        </div>

        <button
          onClick={handleOpenTelegram}
          disabled={!isCodeComplete}
          className={`
            btn btn-primary !w-fit mx-auto
          `}
        >
          Открыть Telegram
        </button>


      </div>
    </Modal>
  );
};

export default LoginModal;
