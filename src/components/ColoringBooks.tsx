"use client";

import Link from "next/link";

import { SVGS } from "@/svgs";
import { useV1Store } from "@/store/v1";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/16/solid";

export default function ColoringBooks() {
  const colorBooks = useV1Store((state) => state.colorBooks);

  const difficultyMap: any = {
    easy: {
      title: "Easy",
      stars: 1,
      description: "Simple designs for beginners",
      minClicks: 0,
      maxClicks: 15,
    },
    medium: {
      title: "Medium",
      stars: 2,
      description: "More complex designs for intermediate artists",
      minClicks: 16,
      maxClicks: 50,
    },
    hard: {
      title: "Hard",
      stars: 3,
      description: "Intricate designs for advanced artists",
      minClicks: 51,
      maxClicks: 1000,
    },
  };

  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const colorBooksByDifficulty = colorBooks.filter((book) => {
    const bookLength = book.originalColors.length;
    return (
      bookLength <= difficultyMap[selectedDifficulty].maxClicks &&
      bookLength >= difficultyMap[selectedDifficulty].minClicks
    );
  });

  if (!colorBooks || !colorBooks.length) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full">
      {/* add star filters to select difficulty */}
      <div className="flex justify-center items-center space-x-4 p-4">
        <h3 className="text-xl font-semibold">Difficulty:</h3>
        {Object.keys(difficultyMap).map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => setSelectedDifficulty(difficulty)}
            className={`flex items-center space-x-2 border ${
              selectedDifficulty === difficulty
                ? "bg-gray-100 border-yellow-600"
                : "hover:bg-gray-100"
            } p-2 rounded-md transition-all duration-300 ease-in-out`}
          >
            <StarIcon className="h-6 w-6 text-yellow-600" />
            {difficulty === "medium" && (
              <StarIcon className="h-6 w-6 text-yellow-600" />
            )}
            {difficulty === "hard" && (
              <>
                <StarIcon className="h-6 w-6 text-yellow-600" />
                <StarIcon className="h-6 w-6 text-yellow-600" />
              </>
            )}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-7xl overflow-hidden px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {colorBooksByDifficulty.map((book, index) => (
            <Link
              key={index + 1 + book.slug}
              href={`/color?book=${book.slug}`}
              className="group text-sm"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 h-96">
                <ColoringBookImage slug={book.slug} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{book.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ColoringBookImage({ slug }: { slug: string }) {
  const SVG = SVGS[slug];

  if (!SVG) {
    return null;
  }

  return <SVG fillColors={[]} onFill={() => {}} />;
}
