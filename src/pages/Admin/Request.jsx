import InfoWithdrawModal from "../../components/InfoWithdrawModal";
import { useState } from "react";

export default function RequestPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="admin_main_dash admin_main_requests">
        <div className="admin_main_deal">
          <div className="admin_main_deal_content">
            <h1 className="admin_main_deal_tittle">Заявки</h1>

            <div className="admin_main_deal_up">
              <div className="admin_main_deal_up_item">
                <div className="admin_main_deal_up_item_filter">
                  <p className="admin_main_deal_up_item_filter_text">
                    Фильтр по:
                  </p>
                  <div className="admin_main_deal_up_item_filter_select">
                    <p className="admin_main_deal_up_item_filter_selected">
                      хз
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                      >
                        <path
                          d="M0.175179 0.874521C0.292384 0.757352 0.451326 0.691529 0.617054 0.691529C0.782781 0.691529 0.941724 0.757352 1.05893 0.874521L4.99205 4.80765L8.92518 0.874521C8.98283 0.814827 9.0518 0.767213 9.12805 0.734457C9.2043 0.701702 9.28631 0.684461 9.3693 0.683739C9.45229 0.683018 9.53459 0.698832 9.6114 0.730258C9.68821 0.761683 9.75799 0.808091 9.81667 0.866774C9.87536 0.925457 9.92177 0.995239 9.95319 1.07205C9.98462 1.14886 10.0004 1.23116 9.99971 1.31415C9.99899 1.39713 9.98175 1.47915 9.94899 1.5554C9.91623 1.63165 9.86862 1.70062 9.80893 1.75827L5.43393 6.13327C5.31672 6.25044 5.15778 6.31626 4.99205 6.31626C4.82633 6.31626 4.66738 6.25044 4.55018 6.13327L0.175179 1.75827C0.0580097 1.64107 -0.0078125 1.48212 -0.0078125 1.3164C-0.0078125 1.15067 0.0580097 0.991726 0.175179 0.874521Z"
                          fill="white"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Найти человека"
                  className="admin_main_deal_up_item_search"
                />
              </div>
            </div>

            <div className="admin_main_deal_tabble">
              <table className="admin_main_deal_tabble_main">
                <thead>
                  <tr>
                    <td>
                      <p className="admin_main_deal_tabble_main_tittle">
                        Ник пользователя
                      </p>
                    </td>
                    <td>
                      <p className="admin_main_deal_tabble_main_tittle">
                        Время
                      </p>
                    </td>
                    <td>
                      <p className="admin_main_deal_tabble_main_tittle">
                        ID сделки
                      </p>
                    </td>
                    <td>
                      <p className="admin_main_deal_tabble_main_tittle">
                        Сумма
                      </p>
                    </td>
                    <td>
                      <p className="admin_main_deal_tabble_main_tittle">
                        Действие
                      </p>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="admin_main_deal_tabble_main_line">
                    <td className="admin_main_deal_tabble_main_text">
                      <img
                        src="/assets/img/admin_requests_icon.svg"
                        alt=""
                      />kinza
                    </td>
                    <td className="admin_main_deal_tabble_main_time">
                      1 Апреля 2024
                    </td>
                    <td className="admin_main_deal_tabble_main_text">#00001</td>
                    <td className="admin_main_deal_tabble_main_summa">₽4509</td>
                    <td>
                      <button
                        className="admin_main_deal_tabble_main_accept !mx-auto   flex items-start justify-start gap-2"
                        onClick={() => setIsOpen(true)}
                        >Ожидает подтверждения
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M1.87109 12.474L7.22993 7.11518L1.87109 1.75635"
                            stroke="white"
                            stroke-width="1.78628"
                            stroke-linecap="square"
                          /></svg
                      ></button>
                    </td>
                  </tr>

                  <tr className="admin_main_deal_tabble_main_line">
                    <td className="admin_main_deal_tabble_main_text">
                      <img
                        src="/assets/img/admin_requests_icon.svg"
                        alt=""
                      />kinza
                    </td>
                    <td className="admin_main_deal_tabble_main_time">
                      1 Апреля 2024
                    </td>
                    <td className="admin_main_deal_tabble_main_text">#00001</td>
                    <td className="admin_main_deal_tabble_main_summa">₽4509</td>
                    <td>
                      <a
                        href="#!"
                        className="admin_main_deal_tabble_main_accept"
                        >Ожидает подтверждения
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M1.87109 12.474L7.22993 7.11518L1.87109 1.75635"
                            stroke="white"
                            stroke-width="1.78628"
                            stroke-linecap="square"
                          /></svg
                      ></a>
                    </td>
                  </tr>
                  <tr className="admin_main_deal_tabble_main_line">
                    <td className="admin_main_deal_tabble_main_text">
                      <img
                        src="/assets/img/admin_requests_icon.svg"
                        alt=""
                      />kinza
                    </td>
                    <td className="admin_main_deal_tabble_main_time">
                      1 Апреля 2024
                    </td>
                    <td className="admin_main_deal_tabble_main_text">#00001</td>
                    <td className="admin_main_deal_tabble_main_summa">₽4509</td>
                    <td>
                      <a
                        href="#!"
                        className="admin_main_deal_tabble_main_accept"
                        >Ожидает подтверждения
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M1.87109 12.474L7.22993 7.11518L1.87109 1.75635"
                            stroke="white"
                            stroke-width="1.78628"
                            stroke-linecap="square"
                          /></svg
                      ></a>
                    </td>
                  </tr>
                  <tr className="admin_main_deal_tabble_main_line">
                    <td className="admin_main_deal_tabble_main_text">
                      <img
                        src="/assets/img/admin_requests_icon.svg"
                        alt=""
                      />kinza
                    </td>
                    <td className="admin_main_deal_tabble_main_time">
                      1 Апреля 2024
                    </td>
                    <td className="admin_main_deal_tabble_main_text">#00001</td>
                    <td className="admin_main_deal_tabble_main_summa">₽4509</td>
                    <td>
                      <a
                        href="#!"
                        className="admin_main_deal_tabble_main_accept"
                        >Ожидает подтверждения
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9"
                          height="14"
                          viewBox="0 0 9 14"
                          fill="none"
                        >
                          <path
                            d="M1.87109 12.474L7.22993 7.11518L1.87109 1.75635"
                            stroke="white"
                            stroke-width="1.78628"
                            stroke-linecap="square"
                          /></svg
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="admin_main_deal_paggination">
              <button className="admin_main_deal_paggination_item_text">
                Назад
              </button>
              <div className="admin_main_deal_paggination_buttons">
                <button className="admin_main_deal_paggination_button">
                  1
                </button>
                <button className="admin_main_deal_paggination_button">
                  2
                </button>
                <button className="admin_main_deal_paggination_button">
                  3
                </button>
                <button className="admin_main_deal_paggination_button">
                  4
                </button>
                <button className="admin_main_deal_paggination_button">
                  5
                </button>
                <button className="admin_main_deal_paggination_button">
                  6
                </button>
              </div>
              <button className="admin_main_deal_paggination_item_text">
                Вперед
              </button>
            </div>
          </div>
        </div>
        <InfoWithdrawModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    )
}