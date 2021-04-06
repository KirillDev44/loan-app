import React from "react";

export const Tick = React.memo(({ tick, count }) => {
  return (
    <div>
      <div
        className="slider--tick"
        style={{
          left: `${tick.percent}%`,
        }}
      />
      <div
        className="slider--tick-value"
        style={{
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {tick.value}
      </div>
    </div>
  );
});
