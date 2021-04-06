import React from "react";

export const Handle = React.memo(
  ({ handle: { id, value, percent }, getHandleProps }) => {
    return (
      <div
        style={{
          left: `${percent}%`,
        }}
        className="slider--handle"
        {...getHandleProps(id)}
      >
        <div className="slider--value">{value}</div>
      </div>
    );
  }
);
