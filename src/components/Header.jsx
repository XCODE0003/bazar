import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import SelectLangs from "./SelectLangs";
import BalanceModal from "./BalanceModal";
import AboutItemModal from "./AboutItemModal";
import { useModal } from "../hooks/useModal";
import Cart from "./Header/Cart";
import Notify from "./Header/Notify";
import UserMenu from "./Header/UserMenu";
import Offers from "./Header/Offers";
import LoginModal from "./LoginModal";
export default function Header() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <header className="container w-full mx-auto py-2 px-6 flex justify-between bg-accent-100 rounded-lg items-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <Link to="/exchange" className="btn-transparent btn">
              Обмен
            </Link>
            <Link to="/exchange" className="btn-transparent btn">
              Маркет
            </Link>
          </div>
          <Offers />
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center gap-5">
        <div
          onClick={openModal}
          className="flex hover:opacity-80 flex-shrink-0 cursor-pointer transition-all duration-300 items-center gap-1 font-semibold rounded-full px-4 py-2.5 bg-accent-200/60 text-sm "
        >
          6 000 ₽
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.51172 0.5C11.654 0.5 15.0117 3.85775 15.0117 8C15.0117 12.1422 11.654 15.5 7.51172 15.5C3.36947 15.5 0.0117188 12.1422 0.0117188 8C0.0117188 3.85775 3.36947 0.5 7.51172 0.5ZM7.51172 4.25C7.37579 4.25001 7.24446 4.29923 7.14202 4.38858C7.03958 4.47792 6.97295 4.60133 6.95447 4.736L6.94922 4.8125V7.4375H4.32422C4.1817 7.43754 4.04451 7.49168 3.94037 7.58898C3.83624 7.68628 3.77291 7.81947 3.7632 7.96166C3.75349 8.10385 3.79811 8.24442 3.88804 8.35497C3.97798 8.46553 4.10653 8.53782 4.24772 8.55725L4.32422 8.5625H6.94922V11.1875C6.94926 11.33 7.0034 11.4672 7.1007 11.5713C7.19799 11.6755 7.33119 11.7388 7.47338 11.7485C7.61557 11.7582 7.75614 11.7136 7.86669 11.6237C7.97725 11.5337 8.04954 11.4052 8.06897 11.264L8.07422 11.1875V8.5625H10.6992C10.8417 8.56246 10.9789 8.50832 11.0831 8.41102C11.1872 8.31372 11.2505 8.18053 11.2602 8.03834C11.27 7.89615 11.2253 7.75558 11.1354 7.64503C11.0455 7.53447 10.9169 7.46218 10.7757 7.44275L10.6992 7.4375H8.07422V4.8125C8.07422 4.66332 8.01496 4.52024 7.90947 4.41475C7.80398 4.30926 7.6609 4.25 7.51172 4.25Z"
              fill="#8B52FF"
            />
          </svg>
        </div>
        <SelectLangs />
        <Cart />
        <Notify />
        <UserMenu />
      </div>
      <LoginModal isOpen={false} onClose={closeModal} />
      <BalanceModal isOpen={isOpen} onClose={closeModal} />
      <AboutItemModal isOpen={false} onClose={closeModal} />
    </header>
  );
}
