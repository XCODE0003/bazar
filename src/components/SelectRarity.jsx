import { useState, useEffect, useRef } from "react";

export default function SelectRarity() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedRarity, setCheckedRarity] = useState([]);
  const dropdownRef = useRef(null);
  const rarityOptions = [
    {
      id: 1,
      name: "Ширпотреб",
      value: 0,
      color: "linear-gradient(195deg, #FC9A02 83.35%, #FF8000 95.69%)",
    },
    {
      id: 2,
      name: "Промышленное качество",
      value: 1,
      color: "linear-gradient(195deg, #FF0909 35.53%, #561711 95.69%)",
    },
    {
      id: 3,
      name: "Армейское качество",
      value: 2,
      color: "linear-gradient(195deg, #FF09DE 35.53%, #BF244B 95.69%)",
    },
    {
      id: 4,
      name: "Запрещенное",
      value: 3,
      color: "linear-gradient(195deg, #B909FF 35.53%, #8624BF 95.69%)",
    },
    {
      id: 5,
      name: "Засекреченное",
      value: 4,
      color: "linear-gradient(195deg, #4640FF 35.53%, #220EDA 95.69%)",
    },
    {
      id: 6,
      name: "Тайное",
      value: 5,
      color: "linear-gradient(195deg, #40DCFF 35.53%, #0E77DA 95.69%)",
    },
    {
      id: 7,
      name: "Контрабанда",
      value: 6,
      color: "linear-gradient(184deg, #C5C5C5 27.34%, #232425 130.96%)",
    },
  ];

  const handleCheckboxChange = (rarityId) => {
    if (checkedRarity.includes(rarityId)) {
      setCheckedRarity(checkedRarity.filter((id) => id !== rarityId));
    } else {
      setCheckedRarity([...checkedRarity, rarityId]);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getSelectedNames = () => {
    if (checkedRarity.length === 0) return "Любая...";
    return checkedRarity
      .map(id => rarityOptions.find(option => option.id === id)?.name)
      .join(", ");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="py-1.5 px-2.5 relative flex justify-between items-center text-sm font-semibold text-gray-100 bg-accent-200 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{getSelectedNames()}</p>
        <svg className={`${isOpen ? 'rotate-180' : ''} flex-shrink-0 transition-transform duration-300`}  width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.6466 12.4519C6.27353 12.7681 5.72647 12.7681 5.3534 12.4519L0.782233 8.57725C0.48444 8.32483 0.360759 7.92219 0.465495 7.54613L2.26951 1.06859C2.38996 0.636091 2.78389 0.336882 3.23284 0.336882L8.76716 0.336882C9.21611 0.336882 9.61004 0.636091 9.73049 1.06859L11.5345 7.54613C11.6392 7.9222 11.5156 8.32483 11.2178 8.57725L6.6466 12.4519Z" fill="white" fill-opacity="0.6"/>
</svg>

      </div>

      {isOpen && (
        <div className="px-3 py-5 absolute top-full left-0 w-full mt-1 rounded-xl bg-accent-200 backdrop-blur-3xl border border-white/25 z-10">
          {rarityOptions.map((rarity) => (
            <div key={rarity.id} className="flex items-center gap-2 py-1.5 hover:bg-white/10 rounded cursor-pointer" onClick={() => handleCheckboxChange(rarity.id)}>
              <div className="relative w-5 h-5 flex items-center justify-center">
                <input
                  type="checkbox"
                  id={`rarity-${rarity.id}`}
                  checked={checkedRarity.includes(rarity.id)}
                  onChange={() => {}}
                  className="absolute opacity-0 w-0 h-0"
                />
                <div className={`w-5 h-5 border ${checkedRarity.includes(rarity.id) ? 'border-white' : 'border-gray-500'} rounded transition-colors flex items-center justify-center`}>
                  {checkedRarity.includes(rarity.id) && (
                    <svg className="flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
              <span
                className="text-sm font-semibold text-transparent bg-clip-text"
                style={{
                  background: rarity.color,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {rarity.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
