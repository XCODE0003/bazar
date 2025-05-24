import { useState, useEffect } from "react";

export default function SelectCategories({ options, defaultValue, onChange, className, title }) {
  const [activeOption, setActiveOption] = useState(defaultValue );
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
    <div className={`flex flex-col w-full gap-2 relative ${className}`}>
      <div
        className="category-select"
        onClick={toggleDropdown}
      >

        {activeOption?.name ? activeOption?.name : title}
        <span className={`ml-2 ${isOpen ? "rotate-180" : ""} transition-all duration-300`}>
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.949143 0.455451C1.02728 0.377338 1.13324 0.333456 1.24373 0.333456C1.35421 0.333456 1.46017 0.377338 1.53831 0.455451L4.16039 3.07753L6.78247 0.455451C6.82091 0.415655 6.86689 0.383912 6.91772 0.362075C6.96856 0.340238 7.02323 0.328744 7.07856 0.328263C7.13388 0.327782 7.18875 0.338325 7.23996 0.359275C7.29116 0.380225 7.33768 0.411164 7.37681 0.450286C7.41593 0.489408 7.44687 0.535929 7.46782 0.587136C7.48877 0.638343 7.49931 0.693209 7.49883 0.748534C7.49835 0.803859 7.48685 0.858534 7.46502 0.909369C7.44318 0.960204 7.41144 1.00618 7.37164 1.04462L4.45498 3.96128C4.37684 4.0394 4.27088 4.08328 4.16039 4.08328C4.04991 4.08328 3.94395 4.0394 3.86581 3.96128L0.949143 1.04462C0.87103 0.96648 0.827148 0.860519 0.827148 0.750034C0.827148 0.639549 0.87103 0.533587 0.949143 0.455451Z" fill="#787E87"></path></svg>
        </span>
      </div>
      <div
        className={`dropdown-menu absolute top-14 left-0 w-full bg-accent-200/80 backdrop-blur-md border border-white/5 rounded-lg py-2.5 px-3 gap-1 flex flex-col z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 transform translate-y-0" : "opacity-0 pointer-events-none transform -translate-y-2"
        }`}
      >
        {options.map((option) => (
          <div
            key={option.id || option.code || option.value}
            className={` ${option.value == "all" ? "!px-3 !py-5 !justify-center" : "!px-2 !py-1.5 !justify-start"} btn btn-border text-gray-100 flex items-start  gap-2`}
            onClick={() => handleOptionClick(option)}
          >
            {option.icon && (
              <img
                src={option.icon}
                alt={option.name}
                className="w-8 h-8 rounded-full"
              />
            )}
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
}



