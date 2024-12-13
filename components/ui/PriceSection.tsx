import React from "react";
import Slider from "@/components/ui/slider";

const PriceSection = () => {
  return (
    <div>
      <AccordionTrigger>Price</AccordionTrigger>
      <AccordionContent className="pt-4" contentClassName="overflow-visible">
        <Slider
          defaultValue={[50, 200]}
          min={0}
          max={250}
          step={1}
          labels={["Min", "Max"]}
        />
      </AccordionContent>
    </div>
  );
};

export default PriceSection;
