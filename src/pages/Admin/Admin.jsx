export default function AdminPage(){
    return (
        <div className="admin_main_dash">
        <div className="admin_main_dash_sections">
          <div className="admin_main_dash_section">

            <div className="admin_main_dash_section_graf">
              <div className="admin_main_dash_section_graf_content">
                <h1 className="admin_main_dash_section_graf_tittle">
                  <img src="/assets/img/admin_dash_graf.svg" alt="" />
                  График посещаемости
                </h1>
                <h4 className="admin_main_dash_section_graf_text">Следите за изменениями все время и анализируйте полученную информацию</h4>
                <img src="/assets/img/admin_graf.png" alt="" className="admin_main_dash_section_graf_img" />
              </div>
            </div>

            <div className="admin_main_dash_section_bottom">
              <div className="admin_main_dash_section_bottom_latest">
                <div className="admin_main_dash_section_bottom_latest_content">
                  <div className="admin_main_dash_section_bottom_latest_up">
                    <p className="admin_main_dash_section_bottom_latest_up_tittle">Последние пользователи</p>
                    <a href="#!" className="admin_main_dash_section_bottom_latest_up_all">Посмотреть всех</a>
                  </div>
                  <div className="admin_main_dash_section_bottom_latest_blocks">
                    <div className="admin_main_dash_section_bottom_latest_block">
                      <div className="admin_main_dash_section_bottom_latest_block_content">
                        <p className="admin_main_dash_section_bottom_latest_block_nickname">
                          <img src="/assets/img/admin_lastest_avatar.png" alt="" className="admin_main_dash_section_bottom_latest_block_avatar" />
                          X1ine
                          <img src="/assets/img/admin_dash_arrow.svg" alt="" className="admin_main_dash_section_bottom_latest_block_arrow" />
                        </p>
                      </div>
                    </div>
                    <div className="admin_main_dash_section_bottom_latest_block">
                      <div className="admin_main_dash_section_bottom_latest_block_content">
                        <p className="admin_main_dash_section_bottom_latest_block_nickname">
                          <img src="/assets/img/admin_lastest_avatar.png" alt="" className="admin_main_dash_section_bottom_latest_block_avatar" />
                          X1ine
                          <img src="/assets/img/admin_dash_arrow.svg" alt="" className="admin_main_dash_section_bottom_latest_block_arrow" />
                        </p>
                      </div>
                    </div>
                    <div className="admin_main_dash_section_bottom_latest_block">
                      <div className="admin_main_dash_section_bottom_latest_block_content">
                        <p className="admin_main_dash_section_bottom_latest_block_nickname">
                          <img src="/assets/img/admin_lastest_avatar.png" alt="" className="admin_main_dash_section_bottom_latest_block_avatar" />
                          X1ine
                          <img src="/assets/img/admin_dash_arrow.svg" alt="" className="admin_main_dash_section_bottom_latest_block_arrow" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="admin_main_dash_section_bottom_stats">
                <div className="admin_main_dash_section_bottom_stat_block">
                  <div className="admin_main_dash_section_bottom_stat_block_content">
                    <p className="admin_main_dash_section_bottom_stat_block_tittle">Пополнений</p>
                    <p className="admin_main_dash_section_bottom_stat_block_text">5</p>
                  </div>
                </div>
                <div className="admin_main_dash_section_bottom_stat_block">
                  <div className="admin_main_dash_section_bottom_stat_block_content">
                    <p className="admin_main_dash_section_bottom_stat_block_tittle">Выводов</p>
                    <p className="admin_main_dash_section_bottom_stat_block_text">2</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="admin_main_dash_section">
            <div className="admin_main_dash_section_stats">
              <div className="admin_main_dash_section_stat_block">
                <div className="admin_main_dash_section_stat_block_content">
                  <h3 className="admin_main_dash_section_stat_block_tittle">
                    <img src="/assets/img/admin_dash_btc.svg" alt="" />
                    Всего заработано в Криптовалюте
                  </h3>
                  <p className="admin_main_dash_section_stat_block_price">0.0000075 <span>BTC</span></p>
                </div>
              </div>
              <div className="admin_main_dash_section_stat_block">
                <div className="admin_main_dash_section_stat_block_content">
                  <h3 className="admin_main_dash_section_stat_block_tittle">
                    <img src="/assets/img/admin_dash_rub.svg" alt="" />
                    Всего заработано в Рублях
                  </h3>
                  <p className="admin_main_dash_section_stat_block_price"><span>₽</span> 52 365.18</p>
                </div>
              </div>
            </div>

            <div className="admin_main_dash_section_alls">
              <div className="admin_main_dash_section_alls_content">
                <h3 className="admin_main_dash_section_stat_block_tittle">
                  <img src="/assets/img/admin_dash_all.svg" alt="" />
                  Сделки
                </h3>
                <p className="admin_main_dash_section_graf_text">Деньги не спят. Анализ это ключ к пониманию.</p>
                <img src="/assets/img/admin_graf2.png" alt="" className="admin_main_dash_section_alls_grafs" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );

}