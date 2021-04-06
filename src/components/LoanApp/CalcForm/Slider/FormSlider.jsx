import React from "react";
import { Slider, Handles, Tracks, Rail, Ticks } from "react-compound-slider";
import { Handle } from "./Handle";
import { Track } from "./Track";
import { Tick } from "./Tick";
import "./slider.scss";

export const FormSlider = React.memo(
  ({ domain, value, step, onHandleChange, count }) => {
    return (
      <div className="slider">
        <Slider
          className="slider--style"
          domain={domain}
          values={value}
          step={step}
          mode={2}
          onChange={onHandleChange}
        >
          <div className="slider--rail-style" />
          <Rail>
            {({ getRailProps }) => (
              <div className="slider--rail-style" {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map((handle) => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={count}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map((tick) => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    );
  }
);
