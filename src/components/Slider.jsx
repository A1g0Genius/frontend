import React, { useEffect, useRef } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

export const Slider = () => {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = noUiSlider.create(sliderRef.current, {
      start: [offset.offset],
      step: 0.5,
      range: {
        min: -12,
        max: 12,
      },
    });

    slider.on("change", (values) => {
      const value = parseFloat(values[0]);
      dispatch(
        updateTimeZone({
          index,
          timeZone: { name: offset.name, offset: value },
        })
      );
    });

    return () => {
      slider.destroy();
    };
  }, [index, offset.name, offset.offset, dispatch]);
  return <div>Slider</div>;
};
