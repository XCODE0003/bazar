import { useState, useEffect } from "react";

export default function RadioSelect({ options, defaultValue, onChange }) {
  const [selectedOption, setSelectedOption] = useState(defaultValue || options[0]);

  useEffect(() => {
    if (defaultValue) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className={`bg-accent-100/80 backdrop-blur-2xl border  border-white/5 p-4 rounded-xl `}>
        {options.map((option) => (
          <div
            key={option.id || option.value}
            className="flex items-center gap-2 py-4 cursor-pointer"
            onClick={() => handleOptionClick(option)}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              selectedOption.value === option.value
                ? 'bg-primary'
                : 'border-2 border-white/5 bg-white/5'
            }`}>
              {selectedOption.value === option.value && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6666 10.1147L12.7946 3.98602L13.7379 4.92869L6.6666 12.0001L2.42993 7.76345L3.3726 6.82078L6.6666 10.1147Z" fill="white"/>
                </svg>
              )}
            </div>
            <span className="text-gray-100">{option.name}</span>
            {option.icon && (
              <div className="ml-auto">
                {option.icon}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



