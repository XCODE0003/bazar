import { useState } from "react";
import Select from "../components/Select";
import AsideFilter from "../components/AsideFilter";
import UserProduct from "../components/Product/UserProduct";
import FilterCategories from "../components/Project/FilterCategories";
const sortOptions = [
  {
    id: 1,
    name: "По популярности",
    value: "popular",
  },
  {
    id: 2,
    name: "По цене",
    value: "price",
  },
  {
    id: 3,
    name: "По редкости",
    value: "rare",
  },
];
export default function MainPage() {
  const [selectedItems, setSelectedItem] = useState([]);
  const [sort, setSort] = useState(sortOptions[0]);
  return (
    <div className="container flex flex-col flex-1 h-full gap-4 mx-auto">
        <FilterCategories />
      <div className="flex w-full gap-8">
        <AsideFilter />
        <div className="flex flex-col w-full gap-4">
          <div className="h-fit flex justify-between w-full">
            <div className="flex items-center justify-between w-full gap-3">
              <div className="flex gap-2">
                <button className="btn btn-secondary !px-2">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5117 9.00146C19.2465 9.00146 18.9922 9.10682 18.8046 9.29436C18.6171 9.48189 18.5117 9.73625 18.5117 10.0015C18.5236 11.8745 17.882 13.693 16.6974 15.1439C15.5127 16.5948 13.8593 17.5871 12.0217 17.9501C10.1841 18.313 8.2775 18.0238 6.63022 17.1322C4.98295 16.2407 3.69813 14.8026 2.99704 13.0657C2.29596 11.3288 2.22251 9.40178 2.78934 7.61654C3.35617 5.8313 4.52779 4.2996 6.10242 3.28524C7.67705 2.27089 9.55612 1.83738 11.416 2.05938C13.2758 2.28137 15.0001 3.14498 16.2917 4.50146H13.8917C13.6265 4.50146 13.3722 4.60682 13.1846 4.79436C12.9971 4.98189 12.8917 5.23625 12.8917 5.50146C12.8917 5.76668 12.9971 6.02103 13.1846 6.20857C13.3722 6.39611 13.6265 6.50146 13.8917 6.50146H18.4217C18.6869 6.50146 18.9413 6.39611 19.1288 6.20857C19.3164 6.02103 19.4217 5.76668 19.4217 5.50146V1.00146C19.4217 0.736248 19.3164 0.481894 19.1288 0.294358C18.9413 0.106821 18.6869 0.00146455 18.4217 0.00146455C18.1565 0.00146455 17.9022 0.106821 17.7146 0.294358C17.5271 0.481894 17.4217 0.736248 17.4217 1.00146V2.77146C15.7564 1.17952 13.5925 0.211417 11.2957 0.0307936C8.99901 -0.14983 6.71035 0.468109 4.81664 1.78015C2.92293 3.0922 1.54033 5.01787 0.90255 7.23165C0.26477 9.44544 0.410932 11.8115 1.31633 13.93C2.22173 16.0484 3.83082 17.7893 5.87162 18.8583C7.91241 19.9273 10.2597 20.2589 12.5168 19.7969C14.7738 19.335 16.8021 18.1079 18.2589 16.3231C19.7156 14.5383 20.5114 12.3053 20.5117 10.0015C20.5117 9.73625 20.4064 9.48189 20.2188 9.29436C20.0313 9.10682 19.7769 9.00146 19.5117 9.00146Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <Select
                options={sortOptions}
                defaultValue={sort}
                onChange={setSort}
              />
            </div>
          </div>
          <div className="2xl:grid-cols-6 gap-7 grid grid-cols-5">
            {Array.from({ length: 100 }).map((_, index) => (
              <UserProduct
                key={index}
                isAuthor={index % 2 === 0}
                product={{
                  name: `Наклейка|Titan ${index + 1}`,
                  image: "/assets/images/skins/knife.png",
                  price: "361 215.18",
                  rarity: "field_tested",
                  phase: 0.05721636621,
                  condition: 50,


                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
