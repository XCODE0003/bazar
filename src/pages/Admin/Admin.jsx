import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Area, BarChart, Bar } from 'recharts';

export default function AdminPage(){
    // Данные для первого графика
    const visitData = [
      { name: '00:00', value: 0.2 },
      { name: '02:00', value: 0.5 },
      { name: '04:00', value: 0.2 },
      { name: '06:00', value: 0.3 },
      { name: '08:00', value: 0.2 },
      { name: '10:00', value: 0.9 },
      { name: '12:00', value: 0.4 },
      { name: '14:00', value: 0.7 },
      { name: '16:00', value: 0.5 },
      { name: '18:00', value: 0.3 },
      { name: '20:00', value: 0.4 },
      { name: '22:00', value: 0.2 },
    ];

    // Данные для второго графика
    const transactionData = [
      { name: 'ПН', BT: 25, СР: 65, ЧТ: 35, ПТ: 45, СБ: 55, ВС: 75 },
      { name: 'ВТ', BT: 45, СР: 55, ЧТ: 25, ПТ: 55, СБ: 45, ВС: 65 },
    ];

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

                {/* График посещаемости */}
                <div className="bg-accent-100 p-4 rounded-lg border border-white/5">
                  <div className="flex mb-3 gap-2">
                    <button className="bg-accent-200 text-xs px-3 py-1 rounded-lg">1д</button>
                    <button className="bg-accent-200 text-xs px-3 py-1 rounded-lg">7д</button>
                    <button className="bg-accent-200 text-xs px-3 py-1 rounded-lg">30д</button>
                    <button className="bg-accent-200 text-xs px-3 py-1 rounded-lg">Год</button>
                  </div>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                      data={visitData}
                      margin={{ top: 5, right: 10, bottom: 5, left: 10 }}
                    >
                      <defs>
                        <linearGradient id="colorVisit" x1="0" y1="1" x2="0" y2="0">
                          <stop offset="0%" stopColor="#543199" stopOpacity={0} />
                          <stop offset="100%" stopColor="#8B52FF" stopOpacity={0.8} />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="name"
                        stroke="#787E87"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis
                        stroke="#787E87"
                        domain={[0, 1]}
                        axisLine={false}
                        tickLine={false}
                        tickCount={5}
                        width={30}
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip
                        contentStyle={{ background: "#1E2023", border: "none", borderRadius: "8px" }}
                        labelStyle={{ color: "#fff" }}
                        formatter={(value) => [`${value}`, "Посещения"]}
                        cursor={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8B52FF"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4 }}
                        isAnimationActive={true}
                        animationDuration={1000}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="none"
                        fillOpacity={1}
                        fill="url(#colorVisit)"
                        isAnimationActive={true}
                        animationDuration={1000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
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

                {/* График сделок */}
                <div className="bg-accent-100 p-4 rounded-lg border border-white/5">
                  <div className="flex mb-3 gap-2">
                    <button className="bg-accent-200 text-xs px-3 py-1 rounded-lg">1д</button>
                    <button className="bg-accent-200 text-xs px-3 py-1 rounded-lg">7д</button>
                    <button className="bg-accent-200 text-xs px-3 py-1 rounded-lg">30д</button>
                    <button className="bg-accent-200 text-xs px-3 py-1 rounded-lg">1ч</button>
                  </div>
                  <ResponsiveContainer width="100%" height={190}>
                    <BarChart data={transactionData} barGap={2}>
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#787E87' }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#787E87' }}
                        width={30}
                      />
                      <Tooltip
                        contentStyle={{ background: "#1E2023", border: "none", borderRadius: "8px" }}
                        cursor={false}
                      />
                      <Bar dataKey="ПН" fill="#8B52FF" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="BT" fill="#543199" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="СР" fill="#8B52FF" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ЧТ" fill="#543199" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ПТ" fill="#8B52FF" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="СБ" fill="#543199" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ВС" fill="#8B52FF" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}