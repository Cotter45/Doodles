"use client";

import Link from "next/link";

import { SVGS } from "@/svgs";
import { useV1Store } from "@/store/v1";

export default function ColoringBooks() {
  const colorBooks = useV1Store((state) => state.colorBooks);

  if (!colorBooks || !colorBooks.length) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {colorBooks.map((book, index) => (
            <Link
              key={index + 1 + book.slug}
              href={`/color?book=${book.slug}`}
              className="group text-sm"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <ColoringBookImage slug={book.slug} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{book.title}</h3>
              {/* <p className="mt-2 font-medium text-gray-900">{product.price}</p> */}
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
