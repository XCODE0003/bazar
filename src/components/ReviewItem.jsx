export default function ReviewItem({ name, avatar, text, positive = true }) {
  return (
    <div className="review-item">
      <div className="flex items-center gap-1.5 ">
        <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col gap-1 text-sm">
          <p>{name}</p>
          <p className="text-gray-100">{text}</p>
        </div>
      </div>
      <ReviewIcon positive={positive} />
    </div>
  );
}

function ReviewIcon({ positive }) {
  if (positive) {
    return (
      <div className="flex items-center gap-1.5 relative w-9 h-9">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center rounded-full">
          👍🏻
        </div>
        <svg
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="36"
            height="36"
            rx="18"
            transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 36 0.0429688)"
            fill="url(#paint0_linear_0_5506)"
            fill-opacity="0.1"
          />
          <rect
            x="-0.5"
            y="0.5"
            width="35"
            height="35"
            rx="17.5"
            transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 35 0.0429687)"
            stroke="url(#paint1_linear_0_5506)"
            stroke-opacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_5506"
              x1="18"
              y1="0"
              x2="18"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3AFF5E" />
              <stop offset="1" stop-color="#239938" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_5506"
              x1="18"
              y1="0"
              x2="18"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3AFF5E" />
              <stop offset="1" stop-color="#239938" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-1.5 relative w-9 h-9">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center rounded-full">
          👎🏻
        </div>
        <svg
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="36"
            height="36"
            rx="18"
            transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 36 0.0429688)"
            fill="url(#paint0_linear_0_5515)"
            fill-opacity="0.1"
          />
          <rect
            x="-0.5"
            y="0.5"
            width="35"
            height="35"
            rx="17.5"
            transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 35 0.0429687)"
            stroke="url(#paint1_linear_0_5515)"
            stroke-opacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_5515"
              x1="18"
              y1="0"
              x2="18"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF3A3E" />
              <stop offset="1" stop-color="#74090B" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_5515"
              x1="18"
              y1="0"
              x2="18"
              y2="36"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF3A3E" />
              <stop offset="1" stop-color="#992325" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
}
