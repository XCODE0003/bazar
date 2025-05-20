import SelectCategories from "../SelectCategories";

export default function FilterCategories() {
  const options = [
    {
      id: 1,
      name: "Все",
      value: "all"
    },
    {
      id: 2,
      name: "USP-S",
      value: "usp-s",
      icon: "/assets/images/weapon/usp.png"
    },
    {
      id: 3,
      name: "Glock",
      value: "glock",
      icon: "/assets/images/weapon/glock.png"
    },
    {
      id: 4,
      name: "Desert Eagle",
      value: "desert-eagle",
      icon: "/assets/images/weapon/desert-eagle.png"
    },
    {
      id: 5,
      name: "Tec-9",
      value: "tec-9",
      icon: "/assets/images/weapon/tec-9.png"
    },
    {
      id: 6,
      name: "P250",
      value: "p250",
      icon: "/assets/images/weapon/p250.png"
    },
    {
      id: 7,
      name: "Five-Seven",
      value: "five-seven",
      icon: "/assets/images/weapon/five-seven.png"
    },

    {
      id: 9,
      name: "CZ75-Auto",
      value: "cz75-auto",
      icon: "/assets/images/weapon/cz75.png"
    }
  ]
  return (
    <div className="flex w-full   rounded-xl justify-between items-center py-1.5  bg-accent-300">
      <SelectCategories
        options={options}
        title="Винтовки"
      />
      <SelectCategories
        options={options}
        title="Пистолеты"
      />
      <SelectCategories
        options={options}
        title="Пистолеты-пулемёты"
      />
      <SelectCategories
        options={options}
        title="Тяжёлое"
      />
      <SelectCategories
        options={options}
        title="Ножи"
      />
      <SelectCategories
        options={options}
        title="Перчатки"
      />
      <SelectCategories
        options={options}
        title="Другое"
      />
    </div>
  );
}
