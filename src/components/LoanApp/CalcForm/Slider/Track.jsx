import React from "react";

export const Track = React.memo(({ source, target, getTrackProps }) => {
  return (
    <div
      className="slider--track"
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  );
});
