import React from "react";
import { Marquee } from "./Marquee";

export function MarqueeDemo() {
  const items = [
    { id: 1, text: "Item 1", color: "bg-red-500" },
    { id: 2, text: "Item 2", color: "bg-blue-500" },
    { id: 3, text: "Item 3", color: "bg-green-500" },
    { id: 4, text: "Item 4", color: "bg-yellow-500" },
    { id: 5, text: "Item 5", color: "bg-purple-500" },
  ];

  return (
    <div className="w-full py-8 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Marquee Demo
      </h2>

      {/* Basic Marquee */}
      <Marquee speed={50} className="mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${item.color} text-white px-6 py-3 rounded-lg min-w-[200px] text-center`}
          >
            {item.text}
          </div>
        ))}
      </Marquee>

      {/* Reverse Direction with Hover Pause */}
      <Marquee direction="right" speed={30} pauseOnHover className="mb-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg min-w-[200px] text-center border border-gray-600"
          >
            Hover to pause - {item.text}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
