export default function RareLine({ valuePercent }) {
    return (
        <div className={`relative w-full h-fit `}>
        <div className="relative w-full h-1 bg-accent-100 rounded-full">
          <div className={`absolute h-full bg-condition rounded-full w-full`}>
          </div>
          <div
            className={`absolute h-full  rounded-full bg-transparent`}
          ></div>
        </div>

        <div className="relative">
          <input
            type="range"
            disabled
            value={valuePercent}
            className="absolute w-full max-range h-1.5 -mt-1 bg-transparent appearance-none pointer-events-none"
            style={{
              WebkitAppearance: 'none',
              zIndex: 3,
            }}
          />


        </div>


      </div>
    )
}