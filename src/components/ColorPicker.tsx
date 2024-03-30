import React, { useState } from "react";

const ColorPicker = ({
  selectedColor,
  onColorSelected,
}: {
  selectedColor: string;
  onColorSelected: (color: string) => void;
}) => {
  const colors = [
    "#FF0000", // Red
    "#FFA500", // Orange
    "#FFFF00", // Yellow
    "#00FF00", // Green
    "#0000FF", // Blue
    "#4B0082", // Indigo
    "#9400D3", // Violet
    "#FF00FF", // Pink
    "#00FFFF", // Cyan
    "#006400", // Dark Green
    "#800080", // Purple
    "#000000", // Black
    "#FFFFFF", // White
    "#A52A2A", // Brown
    "#808080", // Grey
    "#FFD700", // Gold
    "#C0C0C0", // Silver
    "#FF4500", // Orange Red
  ];

  const handleColorSelect = (color: string) => {
    onColorSelected(color);
  };

  return (
    <div className="flex justify-center flex-wrap w-full p-4 z-[10000]">
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => handleColorSelect(color)}
          style={{
            backgroundColor: color,
            border:
              selectedColor === color ? "5px solid black" : "1px solid grey",
            transform: selectedColor === color ? "scale(1.1)" : "scale(1)",
          }}
          className="w-24 h-24 rounded-full cursor-pointer m-1 transition-all duration-300 ease-in-out"
        />
      ))}
    </div>
  );
};

export default ColorPicker;
