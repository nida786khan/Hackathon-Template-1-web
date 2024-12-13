"use client";

import * as React from "react";
import Slider from "@/components/ui/slider";
import * as SliderPrimitive from "@radix-ui/react-slider";
import clsx from "clsx";

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  min: number;
  max: number;
  step?: number;
  defaultValue?: [number, number];
  labels?: [string, string];
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    { className, min, max, step = 1, defaultValue = [min, max], labels, ...props },
    ref
  ) => {
    const [values, setValues] = React.useState<[number, number]>(defaultValue);

    const handleValueChange = (newValues: [number, number]) => {
      setValues(newValues);
    };

    return (
      <div className="w-full relative">
        <SliderPrimitive.Root
          ref={ref}
          className={clsx("relative flex w-full items-center", className)}
          min={min}
          max={max}
          step={step}
          value={values}
          onValueChange={handleValueChange}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200">
            <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
          </SliderPrimitive.Track>
          {labels && (
            <div className="absolute top-0 flex w-full justify-between text-xs">
              <span>{labels[0]}</span>
              <span>{labels[1]}</span>
            </div>
          )}
        </SliderPrimitive.Root>
      </div>
    );
  }
);

Slider.displayName = "Slider";
export { Slider };


