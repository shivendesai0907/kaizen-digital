"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: string;
  duration?: number;
}

export default function Counter({ value, duration = 2 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse the value
    const match = value.match(/(\d+\.?\d*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(match[0]);
    const prefix = value.substring(0, match.index);
    const suffix = value.substring(match.index! + match[0].length);
    const isDecimal = match[0].includes(".");
    const decimalPlaces = isDecimal ? match[0].split(".")[1].length : 0;

    const controls = animate(0, targetNumber, {
      duration: duration,
      ease: "easeOut",
      onUpdate(value) {
        let formatted = value.toFixed(decimalPlaces);
        setDisplayValue(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [value, isInView, duration]);

  return <span ref={ref}>{displayValue}</span>;
}
