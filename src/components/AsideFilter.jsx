import Range from "./Range";
import { useState, useEffect } from "react";
import SelectRarity from "./SelectRarity";
export default function AsideFilter() {
  const rarityOptions = [
    { id: 1, name: "Обычный", value: 0 },
    { id: 2, name: "Редкий", value: 1 },
    { id: 3, name: "Эпический", value: 2 },
    { id: 4, name: "Легендарный", value: 3 },
  ];
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [rangePrice, setRangePrice] = useState({ min: 1000, max: 10000 });
  const [maxMinPrice, setMaxMinPrice] = useState([0, 30000]);
  const [minCondition, setMinCondition] = useState(0);
  const [maxCondition, setMaxCondition] = useState(1);
  const [rangeCondition, setRangeCondition] = useState({ min: 0, max: 1 });
  const [rangePhase, setRangePhase] = useState({ min: 0, max: 9999 });
  const [rarity, setRarity] = useState(rarityOptions[0]);

  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isConditionOpen, setIsConditionOpen] = useState(true);
  const [isPhaseOpen, setIsPhaseOpen] = useState(true);
  const [isRarityOpen, setIsRarityOpen] = useState(true);
  const [isPatternOpen, setIsPatternOpen] = useState(true);

  function handleRangePhaseChange(newRange) {
    setRangePhase(newRange);
  }
  function handleRangePriceChange(newRange) {
    setMinPrice(newRange.min);
    setMaxPrice(newRange.max);
    setRangePrice(newRange);
  }
  function handleRangeConditionChange(newRange) {
    setMinCondition(newRange.min);
    setMaxCondition(newRange.max);
    setRangeCondition(newRange);
  }
  function handleRangeMinConditionChange(newRange) {
    setMinCondition(newRange.min);
    setRangeCondition(newRange);
  }
  function handleRangeMaxConditionChange(newRange) {
    setMaxCondition(newRange.max);
    setRangeCondition(newRange);
  }

  const handleMinInputChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    if (value <= maxMinPrice[1] && value <= maxPrice) {
      setMinPrice(value);
      setRangePrice((prev) => ({ ...prev, min: value }));
    }
  };

  const handleMaxInputChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    console.log(value);
    if (value >= minPrice && value <= maxMinPrice[1]) {
      setMaxPrice(value);
      setRangePrice((prev) => ({ ...prev, max: value }));
    }
  };

  const handlePriceTagClick = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    setRangePrice({ min, max });
  };

  const resetFilters = () => {
    setMinPrice(1000);
    setMaxPrice(5000);
    setRangePrice({ min: 1000, max: 10000 });
    setMinCondition(0);
    setMaxCondition(1);
    setRangeCondition({ min: 0, max: 1 });
    setRangePhase({ min: 0, max: 9999 });
    setRarity(rarityOptions[0]);
  };

  return (
    <div className="bg-accent-300 h-fit max-w-[330px] w-full flex-shrink-0 rounded-xl px-4 py-6">
      <div className="input-wrapper">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1121 12.6L9.91211 9.39999M6.71211 11C4.06114 11 1.91211 8.85096 1.91211 6.19999C1.91211 3.54903 4.06114 1.39999 6.71211 1.39999C9.36308 1.39999 11.5121 3.54903 11.5121 6.19999C11.5121 8.85096 9.36308 11 6.71211 11Z"
            stroke="#787E87"
            strokeWidth="2"
          />
        </svg>
        <input type="text" placeholder="Найти предметы..." />
      </div>
      <div className="flex flex-col gap-2.5 px-2 py-2.5">
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
          >
            <p className="text-sm font-semibold">Стоимость</p>
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${!isPriceOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M13.9337 8.08922C13.7775 8.24545 13.5655 8.33321 13.3446 8.33321C13.1236 8.33321 12.9117 8.24545 12.7554 8.08922L7.51125 2.84505L2.26708 8.08922C2.19021 8.16881 2.09825 8.2323 1.99658 8.27597C1.89491 8.31965 1.78556 8.34263 1.67491 8.3436C1.56427 8.34456 1.45453 8.32347 1.35212 8.28157C1.24971 8.23967 1.15666 8.17779 1.07842 8.09955C1.00017 8.02131 0.938295 7.92826 0.896395 7.82585C0.854494 7.72344 0.833409 7.6137 0.834372 7.50305C0.835333 7.3924 0.858322 7.28305 0.901997 7.18138C0.94567 7.07971 1.00915 6.98776 1.08875 6.91089L6.92208 1.07755C7.07835 0.921328 7.29028 0.833566 7.51125 0.833566C7.73222 0.833566 7.94414 0.921328 8.10041 1.07755L13.9337 6.91089C14.09 7.06716 14.1777 7.27908 14.1777 7.50005C14.1777 7.72102 14.09 7.93295 13.9337 8.08922Z"
                fill="#F0F0F0"
              />
            </svg>
          </div>

          {isPriceOpen && (
            <>
              <Range
                min={0}
                max={30000}
                step={100}
                defaultMinValue={rangePrice.min}
                defaultMaxValue={rangePrice.max}
                onChange={handleRangePriceChange}
                rangeColor={true}
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white/70 font-semibold">От</span>
                  <div className="input-wrapper px-2 py-1.5 overflow-hidden">
                    <svg className="flex-shrink-0" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.50586 1.78125V4.67578H4.64844C5.18359 4.67578 5.5918 4.54883 5.87305 4.29492C6.1543 4.03711 6.29492 3.67969 6.29492 3.22266C6.29492 2.77344 6.1543 2.42188 5.87305 2.16797C5.5918 1.91016 5.18555 1.78125 4.6543 1.78125H3.50586ZM5.84961 7.79297H3.50586V9H1.99414V7.79297H0.898438V6.80859H1.99414V5.84766H0.898438V4.6875H1.99414V0.544922H5.08789C5.9043 0.544922 6.56445 0.794922 7.06836 1.29492C7.57617 1.79492 7.83008 2.43359 7.83008 3.21094C7.83008 3.98438 7.57031 4.62109 7.05078 5.12109C6.53125 5.61719 5.85547 5.86523 5.02344 5.86523H3.50586V6.80859H5.84961V7.79297Z" fill="white"/>
                    </svg>
                    <input
                      type="text"
                      value={minPrice}
                      onChange={handleMinInputChange}
                      placeholder="0"
                      className="text-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white/70 font-semibold">До</span>
                  <div className="input-wrapper px-2 py-1.5 overflow-hidden">
                    <svg className="flex-shrink-0" width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.50586 1.78125V4.67578H4.64844C5.18359 4.67578 5.5918 4.54883 5.87305 4.29492C6.1543 4.03711 6.29492 3.67969 6.29492 3.22266C6.29492 2.77344 6.1543 2.42188 5.87305 2.16797C5.5918 1.91016 5.18555 1.78125 4.6543 1.78125H3.50586ZM5.84961 7.79297H3.50586V9H1.99414V7.79297H0.898438V6.80859H1.99414V5.84766H0.898438V4.6875H1.99414V0.544922H5.08789C5.9043 0.544922 6.56445 0.794922 7.06836 1.29492C7.57617 1.79492 7.83008 2.43359 7.83008 3.21094C7.83008 3.98438 7.57031 4.62109 7.05078 5.12109C6.53125 5.61719 5.85547 5.86523 5.02344 5.86523H3.50586V6.80859H5.84961V7.79297Z" fill="white"/>
                    </svg>
                    <input
                      type="text"
                      value={maxPrice}
                      onChange={handleMaxInputChange}
                      placeholder="0"
                      className="text-xs"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center w-full justify-between">
                <div className="tag cursor-pointer" onClick={() => handlePriceTagClick(0, 1000)}>
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.15527 1.21484L1.70312 3.16797V3.21191L5.15527 5.05762V5.96582L0.863281 3.56836V2.875L5.15527 0.306641V1.21484Z" fill="#787E87"/>
                  </svg>
                  ₽1000
                </div>
                <div className="tag cursor-pointer" onClick={() => handlePriceTagClick(1000, 5000)}>₽1000-₽5000</div>
                <div className="tag cursor-pointer" onClick={() => handlePriceTagClick(5000, 25000)}>₽5000-₽25к</div>
                <div className="tag cursor-pointer" onClick={() => handlePriceTagClick(25000, 30000)}>
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.863281 1.20996V0.301758L5.15527 2.87012V3.56348L0.863281 5.96094V5.05273L4.31543 3.20703V3.16309L0.863281 1.20996Z" fill="#787E87"/>
                  </svg>
                  ₽25К
                </div>
              </div>
            </>
          )}

          <div className="h-[1px] bg-white/20 w-full"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsConditionOpen(!isConditionOpen)}
          >
            <p className="text-sm font-semibold">Поношенность</p>
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${!isConditionOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M13.9337 8.08922C13.7775 8.24545 13.5655 8.33321 13.3446 8.33321C13.1236 8.33321 12.9117 8.24545 12.7554 8.08922L7.51125 2.84505L2.26708 8.08922C2.19021 8.16881 2.09825 8.2323 1.99658 8.27597C1.89491 8.31965 1.78556 8.34263 1.67491 8.3436C1.56427 8.34456 1.45453 8.32347 1.35212 8.28157C1.24971 8.23967 1.15666 8.17779 1.07842 8.09955C1.00017 8.02131 0.938295 7.92826 0.896395 7.82585C0.854494 7.72344 0.833409 7.6137 0.834372 7.50305C0.835333 7.3924 0.858322 7.28305 0.901997 7.18138C0.94567 7.07971 1.00915 6.98776 1.08875 6.91089L6.92208 1.07755C7.07835 0.921328 7.29028 0.833566 7.51125 0.833566C7.73222 0.833566 7.94414 0.921328 8.10041 1.07755L13.9337 6.91089C14.09 7.06716 14.1777 7.27908 14.1777 7.50005C14.1777 7.72102 14.09 7.93295 13.9337 8.08922Z"
                fill="#F0F0F0"
              />
            </svg>
          </div>

          {isConditionOpen && (
            <>
              <Range
                min={0}
                max={1}
                step={0.1}
                defaultMinValue={rangeCondition.min}
                defaultMaxValue={rangeCondition.max}
                onChange={handleRangeConditionChange}
                bgColor="bg-condition"
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white/70 font-semibold">Мин</span>
                  <div className="input-wrapper px-2 py-1.5 overflow-hidden">
                    <input
                      type="text"
                      value={minCondition}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value) || 0;
                        if (value <= maxCondition) {
                          setMinCondition(value);
                          setRangeCondition((prev) => ({ ...prev, min: value }));
                        }
                      }}
                      placeholder="0"
                      className="text-xs !text-gray-100"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white/70 font-semibold">Макс</span>
                  <div className="input-wrapper px-2 py-1.5 overflow-hidden">
                    <input
                      type="text"
                      value={maxCondition}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value) || 0;
                        if (value >= minCondition) {
                          setMaxCondition(value);
                          setRangeCondition((prev) => ({ ...prev, max: value }));
                        }
                      }}
                      placeholder="0"
                      className="text-xs  !text-gray-100"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center w-full justify-between">
                <div className="tag">FN</div>
                <div className="tag">MW</div>
                <div className="tag">FT</div>
                <div className="tag">WW</div>
                <div className="tag">BS</div>
              </div>
            </>
          )}

          <div className="h-[1px] bg-white/20 w-full"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsPhaseOpen(!isPhaseOpen)}
          >
            <p className="text-sm font-semibold">Фаза</p>
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${!isPhaseOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M13.9337 8.08922C13.7775 8.24545 13.5655 8.33321 13.3446 8.33321C13.1236 8.33321 12.9117 8.24545 12.7554 8.08922L7.51125 2.84505L2.26708 8.08922C2.19021 8.16881 2.09825 8.2323 1.99658 8.27597C1.89491 8.31965 1.78556 8.34263 1.67491 8.3436C1.56427 8.34456 1.45453 8.32347 1.35212 8.28157C1.24971 8.23967 1.15666 8.17779 1.07842 8.09955C1.00017 8.02131 0.938295 7.92826 0.896395 7.82585C0.854494 7.72344 0.833409 7.6137 0.834372 7.50305C0.835333 7.3924 0.858322 7.28305 0.901997 7.18138C0.94567 7.07971 1.00915 6.98776 1.08875 6.91089L6.92208 1.07755C7.07835 0.921328 7.29028 0.833566 7.51125 0.833566C7.73222 0.833566 7.94414 0.921328 8.10041 1.07755L13.9337 6.91089C14.09 7.06716 14.1777 7.27908 14.1777 7.50005C14.1777 7.72102 14.09 7.93295 13.9337 8.08922Z"
                fill="#F0F0F0"
              />
            </svg>
          </div>

          {isPhaseOpen && (
            <>
              <Range
                min={0}
                max={9999}
                step={1}
                defaultMinValue={rangePhase.min}
                defaultMaxValue={rangePhase.max}
                onChange={handleRangePhaseChange}
                bgColor="bg-phase"
              />
              <div className="flex flex-wrap gap-2 items-center w-full justify-center ">
                <div className="tag !w-fit !px-4 !rounded-sm">Фаза 1</div>
                <div className="tag !w-fit !px-4 !rounded-sm">Фаза 2</div>
                <div className="tag !w-fit !px-4 !rounded-sm">Фаза 3</div>
                <div className="tag !w-fit !px-4 !rounded-sm">Фаза 4</div>
                <div className="tag !w-fit !px-4 !rounded-sm">Изумруд</div>
                <div className="tag !w-fit !px-4 !rounded-sm">Рубин</div>
                <div className="tag !w-fit !px-4 !rounded-sm">Сапфир</div>
              </div>
            </>
          )}

          <div className="h-[1px] bg-white/20 w-full"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsRarityOpen(!isRarityOpen)}
          >
            <p className="text-sm font-semibold">Редкость</p>
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${!isRarityOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M13.9337 8.08922C13.7775 8.24545 13.5655 8.33321 13.3446 8.33321C13.1236 8.33321 12.9117 8.24545 12.7554 8.08922L7.51125 2.84505L2.26708 8.08922C2.19021 8.16881 2.09825 8.2323 1.99658 8.27597C1.89491 8.31965 1.78556 8.34263 1.67491 8.3436C1.56427 8.34456 1.45453 8.32347 1.35212 8.28157C1.24971 8.23967 1.15666 8.17779 1.07842 8.09955C1.00017 8.02131 0.938295 7.92826 0.896395 7.82585C0.854494 7.72344 0.833409 7.6137 0.834372 7.50305C0.835333 7.3924 0.858322 7.28305 0.901997 7.18138C0.94567 7.07971 1.00915 6.98776 1.08875 6.91089L6.92208 1.07755C7.07835 0.921328 7.29028 0.833566 7.51125 0.833566C7.73222 0.833566 7.94414 0.921328 8.10041 1.07755L13.9337 6.91089C14.09 7.06716 14.1777 7.27908 14.1777 7.50005C14.1777 7.72102 14.09 7.93295 13.9337 8.08922Z"
                fill="#F0F0F0"
              />
            </svg>
          </div>

          {isRarityOpen && (
            <SelectRarity

            />
          )}

          <div className="h-[1px] bg-white/20 w-full"></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsPatternOpen(!isPatternOpen)}
          >
            <p className="text-sm font-semibold">Паттерн</p>
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${!isPatternOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M13.9337 8.08922C13.7775 8.24545 13.5655 8.33321 13.3446 8.33321C13.1236 8.33321 12.9117 8.24545 12.7554 8.08922L7.51125 2.84505L2.26708 8.08922C2.19021 8.16881 2.09825 8.2323 1.99658 8.27597C1.89491 8.31965 1.78556 8.34263 1.67491 8.3436C1.56427 8.34456 1.45453 8.32347 1.35212 8.28157C1.24971 8.23967 1.15666 8.17779 1.07842 8.09955C1.00017 8.02131 0.938295 7.92826 0.896395 7.82585C0.854494 7.72344 0.833409 7.6137 0.834372 7.50305C0.835333 7.3924 0.858322 7.28305 0.901997 7.18138C0.94567 7.07971 1.00915 6.98776 1.08875 6.91089L6.92208 1.07755C7.07835 0.921328 7.29028 0.833566 7.51125 0.833566C7.73222 0.833566 7.94414 0.921328 8.10041 1.07755L13.9337 6.91089C14.09 7.06716 14.1777 7.27908 14.1777 7.50005C14.1777 7.72102 14.09 7.93295 13.9337 8.08922Z"
                fill="#F0F0F0"
              />
            </svg>
          </div>

          {isPatternOpen && (
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="0"
                className="text-xs"
              />
            </div>
          )}

          <div className="h-[1px] bg-white/20 w-full"></div>
        </div>
        <button className="btn btn-primary" onClick={resetFilters}>Сбросить фильтры</button>
      </div>
    </div>
  );
}
