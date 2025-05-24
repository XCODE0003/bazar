import { useState, useEffect } from "react";

export default function Select({ options, defaultValue, onChange, className }) {
  const [activeOption, setActiveOption] = useState(defaultValue || options[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (defaultValue) {
      setActiveOption(defaultValue);
    }
  }, [defaultValue]);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col min-w-[200px] flex-shrink-0 gap-1 relative ${className}`}>
      <div
        className="bg-accent-200 w-full rounded-lg py-2.5 px-4 gap-1 flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        {activeOption.icon && (
          <img
            src={activeOption.icon}
            alt={activeOption.name}
            className="w-4 h-4 rounded-full mr-2"
          />
        )}
        {activeOption.name}
        <span className={`ml-2 ${isOpen ? "rotate-180" : ""} transition-all duration-300`}>
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.374879 0.528313C0.499897 0.403332 0.669436 0.333122 0.846212 0.333122C1.02299 0.333122 1.19253 0.403332 1.31754 0.528313L5.51288 4.72365L9.70821 0.528313C9.76971 0.464639 9.84327 0.413851 9.92461 0.378911C10.0059 0.343972 10.0934 0.325582 10.1819 0.324812C10.2705 0.324043 10.3582 0.340911 10.4402 0.374432C10.5221 0.407952 10.5965 0.457454 10.6591 0.520049C10.7217 0.582645 10.7712 0.657079 10.8048 0.73901C10.8383 0.820941 10.8551 0.908727 10.8544 0.997247C10.8536 1.08577 10.8352 1.17325 10.8003 1.25458C10.7653 1.33592 10.7146 1.40948 10.6509 1.47098L5.98421 6.13765C5.85919 6.26263 5.68965 6.33284 5.51288 6.33284C5.3361 6.33284 5.16656 6.26263 5.04154 6.13765L0.374879 1.47098C0.249898 1.34596 0.179687 1.17642 0.179687 0.999646C0.179687 0.82287 0.249898 0.653331 0.374879 0.528313Z"
              fill="#F0F0F0"
            />
          </svg>
        </span>
      </div>
      <div
        className={`dropdown-menu absolute top-12 left-0 w-full bg-accent-200 rounded-lg py-2.5 px-1 gap-1 flex flex-col z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 transform translate-y-0" : "opacity-0 pointer-events-none transform -translate-y-2"
        }`}
      >
        {options.map((option) => (
          <div
            key={option.id || option.code || option.value}
            className="cursor-pointer hover:bg-accent-100 py-1 px-2 rounded flex items-center gap-2"
            onClick={() => handleOptionClick(option)}
          >
            {option.icon && (
              <img
                src={option.icon}
                alt={option.name}
                className="w-4 h-4 rounded-full"
              />
            )}
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
}



