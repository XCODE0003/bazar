
export default function DealsPage() {
    return (
        <div className="admin_main_dash">
    <div className="admin_main_deal">
      <div className="admin_main_deal_content">
        <h1 className="admin_main_deal_tittle">Сделки</h1>
        <p className="admin_main_deal_text">250 сделок найдено</p>

        <div className="admin_main_deal_up">
          <div className="admin_main_deal_up_sort_items">
            <p className="admin_main_deal_up_sort_item">Все сделки</p>
            <p className="admin_main_deal_up_sort_item">Активные</p>
            <p className="admin_main_deal_up_sort_item">Завершенные</p>
          </div>
          <div className="admin_main_deal_up_item">
            <div className="admin_main_deal_up_item_filter">
              <p className="admin_main_deal_up_item_filter_text">
                Фильтр по:
              </p>
              <div className="admin_main_deal_up_item_filter_select">
                <p className="admin_main_deal_up_item_filter_selected">
                  Статусу
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
              placeholder="Найти сделку"
              className="admin_main_deal_up_item_search"
            />
          </div>
        </div>

        <div className="admin_main_deal_tabble">
          <table className="admin_main_deal_tabble_main">
            <thead>
              <tr>
                <td><p className="admin_main_deal_tabble_main_tittle">id <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
<path d="M1.5 1.5L4.5 4.5L7.5 1.5" stroke="white" strokeLinecap="square"/>
</svg></p> </td>
                <td><p className="admin_main_deal_tabble_main_tittle">Офферант </p></td>
                <td><p className="admin_main_deal_tabble_main_tittle">Акцептант </p></td>
                <td><p className="admin_main_deal_tabble_main_tittle">Дата <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
<path d="M1.5 1.5L4.5 4.5L7.5 1.5" stroke="white" strokeLinecap="square"/>
</svg></p></td>
                <td><p className="admin_main_deal_tabble_main_tittle">Сумма сделки </p></td>
                <td> <p className="admin_main_deal_tabble_main_tittle">Статус </p></td>
                <td> <p className="admin_main_deal_tabble_main_tittle">Действие </p></td>
              </tr>
            </thead>
            <tbody>
              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_end"><img src="/assets/img/admin_deal_end.svg" alt="" />Завершена</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>

              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_active"><img src="/assets/img/admin_deal_active.svg" alt="" />Активна</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>

              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_wait"><img src="/assets/img/admin_deal_wait.svg" alt="" />В обработке администарцией</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>

              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_end"><img src="/assets/img/admin_deal_end.svg" alt="" />Завершена</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>

              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_active"><img src="/assets/img/admin_deal_active.svg" alt="" />Активна</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>

              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_wait"><img src="/assets/img/admin_deal_wait.svg" alt="" />В обработке администарцией</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>

              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_end"><img src="/assets/img/admin_deal_end.svg" alt="" />Завершена</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>

              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_active"><img src="/assets/img/admin_deal_active.svg" alt="" />Активна</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>

              <tr className="admin_main_deal_tabble_main_line">
                <td className="admin_main_deal_tabble_main_text">#2506</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text"><img src="/assets/img/admin_deal_icon.svg" alt="" />User1</td>
                <td className="admin_main_deal_tabble_main_text">1 Апреля 2024</td>
                <td className="admin_main_deal_tabble_main_text">₽4509</td>
                <td><div className="admin_main_deal_tabble_main_text_status admin_main_deal_tabble_main_text_status_wait"><img src="/assets/img/admin_deal_wait.svg" alt="" />В обработке администарцией</div></td>
                <td><a href="#!" className="admin_main_deal_tabble_main_lin">Перейти в сделку</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="admin_main_deal_paggination">
            <button className="admin_main_deal_paggination_item_text">Назад</button>
          <div className="admin_main_deal_paggination_buttons">
            <button className="admin_main_deal_paggination_button">1</button>
            <button className="admin_main_deal_paggination_button">2</button>
            <button className="admin_main_deal_paggination_button">3</button>
            <button className="admin_main_deal_paggination_button">4</button>
            <button className="admin_main_deal_paggination_button">5</button>
            <button className="admin_main_deal_paggination_button">6</button>
          </div>
            <button className="admin_main_deal_paggination_item_text">Назад</button>
        </div>
      </div>
    </div>
  </div>)
}