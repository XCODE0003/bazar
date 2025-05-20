import { useState } from "react";
import Modal from "./Modal/Modal";

const UserModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");



  return (
    <Modal isOpen={isOpen} onClose={onClose}>
  <div className="admin_modal_rect">
    <div className="admin_modal_rect_content">
      <p className="admin_modal_rect_tittle">Настройка пользователя</p>
      <img src="/assets/img/admin_modal_image.png" alt="" className="admin_modal_rect_image"/>
      <p className="admin_modal_rect_nickname">User1</p>
      <div className="admin_modal_rect_stats">
        <p className="admin_modal_rect_stats_text">Обменов <span>102</span></p>
        <p className="admin_modal_rect_stats_text">Продаж <span>102</span></p>
      </div>
      <div className="admin_modal_rect_buttons">
        <button className="admin_modal_rect_button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.3207 2.60317C12.6229 1.79894 11.3747 1.79894 10.677 2.60317L2.43154 12.107C1.44852 13.24 2.25334 15.0038 3.7534 15.0038H6.9994V17.2508C6.9994 18.2173 7.7829 19.0008 8.7494 19.0008H15.2494C16.2159 19.0008 16.9994 18.2173 16.9994 17.2508V15.0038H20.2442C21.7443 15.0038 22.5491 13.24 21.5661 12.107L13.3207 2.60317ZM7.75 20.5C7.33579 20.5 7 20.8358 7 21.25C7 21.6642 7.33579 22 7.75 22H16.25C16.6642 22 17 21.6642 17 21.25C17 20.8358 16.6642 20.5 16.25 20.5H7.75Z" fill="#2ECE70"/>
</svg> Повысить</button>
   <button className="admin_modal_rect_button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 7C11.8188 7.00001 11.6437 7.06564 11.5071 7.18477C11.3705 7.30389 11.2816 7.46845 11.257 7.648L11.25 7.75V11.25H7.75C7.55998 11.2501 7.37706 11.3222 7.23821 11.452C7.09936 11.5817 7.01493 11.7593 7.00197 11.9489C6.98902 12.1385 7.04852 12.3259 7.16843 12.4733C7.28835 12.6207 7.45975 12.7171 7.648 12.743L7.75 12.75H11.25V16.25C11.2501 16.44 11.3222 16.6229 11.452 16.7618C11.5817 16.9006 11.7593 16.9851 11.9489 16.998C12.1385 17.011 12.3259 16.9515 12.4733 16.8316C12.6207 16.7117 12.7171 16.5402 12.743 16.352L12.75 16.25V12.75H16.25C16.44 12.7499 16.6229 12.6778 16.7618 12.548C16.9006 12.4183 16.9851 12.2407 16.998 12.0511C17.011 11.8615 16.9515 11.6741 16.8316 11.5267C16.7117 11.3793 16.5402 11.2829 16.352 11.257L16.25 11.25H12.75V7.75C12.75 7.55109 12.671 7.36032 12.5303 7.21967C12.3897 7.07902 12.1989 7 12 7Z" fill="#2ECE70"/>
</svg> Пополнить</button>
      </div>
      <button className="admin_modal_rect_bottom_button justify-center !flex items-center "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM19.5 12C19.5 10.3802 18.9865 8.88031 18.1134 7.65428L7.65428 18.1134C8.88031 18.9865 10.3802 19.5 12 19.5C16.1421 19.5 19.5 16.1421 19.5 12ZM16.3456 5.88653C15.1196 5.01347 13.6198 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 13.6198 5.01347 15.1196 5.88653 16.3456L16.3456 5.88653Z" fill="#FF4B4F"/>
</svg> Заблокировать</button>
    </div>
  </div>
    </Modal>
  );
};

export default UserModal;
