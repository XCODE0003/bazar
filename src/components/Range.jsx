import { useState, useEffect, useRef } from "react";

export default function DualRangeSlider({
  min = 0,
  max = 100,
  step = 1,
  defaultMinValue = 25,
  defaultMaxValue = 75,
  onChange,
  className,
  bgColor = 'bg-[#24242C]',
  rangeColor = false,
}) {
  const [minValue, setMinValue] = useState(defaultMinValue);
  const [maxValue, setMaxValue] = useState(defaultMaxValue);
  const rangeRef = useRef(null);
  const range = max - min;

  useEffect(() => {
    if (rangeRef.current) {
      const minPercent = ((minValue - min) / range) * 100;
      const maxPercent = ((maxValue - min) / range) * 100;

      rangeRef.current.style.left = `${minPercent}%`;
      rangeRef.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, maxValue, min, range]);

  useEffect(() => {
    setMinValue(defaultMinValue);
    setMaxValue(defaultMaxValue);
  }, [defaultMinValue, defaultMaxValue]);

  const handleMinChange = (e) => {
    const newMinValue = Math.min(+e.target.value, maxValue - step);
    setMinValue(newMinValue);
    if (onChange) {
      onChange({ min: newMinValue, max: maxValue });
    }
  };

  const handleMaxChange = (e) => {
    const newMaxValue = Math.max(+e.target.value, minValue + step);
    setMaxValue(newMaxValue);
    if (onChange) {
      onChange({ min: minValue, max: newMaxValue });
    }
  };

  return (
    <div className={`relative w-full h-fit ${className}`}>
      <div className="relative w-full h-2 bg-accent-100 rounded-full">
        <div className={`absolute h-full ${bgColor} rounded-[4px] w-full`}>
        </div>
        <div
          ref={rangeRef}
          className={`absolute h-full  rounded-[4px] ${rangeColor ? "bg-primary" : 'bg-transparent'}`}
        ></div>
      </div>

      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full min-range h-2 -mt-1 bg-transparent appearance-none pointer-events-none"
          style={{
            WebkitAppearance: 'none',
            zIndex: 3,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full max-range h-2 -mt-1 bg-transparent appearance-none pointer-events-none"
          style={{
            WebkitAppearance: 'none',
            zIndex: 4,
          }}
        />
      </div>


    </div>
  );
}
