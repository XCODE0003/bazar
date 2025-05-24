import { useState } from "react";
import Modal from "./Modal/Modal";

const InfoWithdrawModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="!bg-accent-200/50 !backdrop-blur-3xl"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center gap-2.5">
          <div className="flex items-center gap-2 text-white text-xl ">
            <img
              src="/assets/images/project/test_avatar.png"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            Бабайка
          </div>
          <div className="bg-accent-200 text-gray-100 w-fit py-5 px-8 rounded-lg flex items-center justify-center gap-2">
            <span className="loader"></span>
            Ожидает подтверждения
          </div>
          <p className="text-gray-100 text-xl">Подробности об операции</p>
          <div className="border-white/5 min-w-[500px] w-full border px-6 py-5 rounded-xl flex flex-col gap-10">
            <div className="flex items-center justify-between text-xl font-semibold">
              <p className="text-gray-100 ">Создана</p>
              <p className="text-white ">Сегодня в 12:00</p>
            </div>
            <div className="flex items-center justify-between text-xl font-semibold">
              <p className="text-gray-100 ">Заявка</p>
              <p className="text-white ">77с9580..6са47</p>
            </div>
            <div className="flex items-center justify-between text-xl font-semibold">
              <p className="text-gray-100 ">Баланс пользователя</p>
              <p className="text-white ">3 000 ₽</p>
            </div>
            <div className="flex items-center justify-between text-xl font-semibold">
              <p className="text-gray-100 ">Выводит</p>
              <p className="text-white ">975 ₽</p>
            </div>
            <div className="flex items-center justify-between text-xl font-semibold">
              <p className="text-gray-100 ">Реквизиты</p>
              <p className="text-white ">1346777</p>
            </div>
          </div>
          <div className="flex gap-5 items-center mt-2.5">
            <button className="btn btn-success w-fit">
              Подтвердить вручную
            </button>
            <span className="text-gray-100 text-lg">или</span>
            <button className="btn btn-success w-fit">
              Подтвердить (КАССА)
            </button>
          </div>
          <button className="btn btn-danger w-fit">Отменить</button>
        </div>
      </div>
    </Modal>
  );
};

export default InfoWithdrawModal;
