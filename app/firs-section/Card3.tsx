'use client'
import { LockClosedIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";

const Card3 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative max-w-xs rounded-3xl border border-neutral-800 bg-neutral-950 p-16" 
      style={{ backgroundColor: '#232323' }}
    >
    <div
      className="pointer-events-none absolute inset-0 transition duration-500"
      style={{
        borderRadius: '1.5rem', // Bu değer, dış div'in `rounded-3xl` sınıfına bağlı olarak ayarlanmalıdır.
        opacity,
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(173, 216, 230, .15) 0%, transparent 60%)`,
      }}
    />
      <div className="mb-4">
        <LockClosedIcon className="h-8 w-8 text-neutral-400" />
      </div>
      <h3 className="mb-2 font-medium tracking-tight text-neutral-100">
        Focused Security
      </h3>
      <p className="text-sm text-neutral-400">
        A spotlight on security, because the safety of your data is our
        priority.
      </p>
    </div>
  );
};

export default Card3;