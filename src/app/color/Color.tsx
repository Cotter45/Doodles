"use client";

import { useEffect, useState } from "react";
import Vivus from "vivus";

import { SVGS } from "@/svgs";
import Crayon from "@/svgs/crayon";
import { useV1Store } from "@/store/v1";
import NotFound404 from "@/svgs/notfound";
import Drawer from "@/components/Drawer";
import ColorPicker from "@/components/ColorPicker";
import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/16/solid";

export default function Color({ book }: { book: string }) {
  const SVG = SVGS[book];
  const getBook = useV1Store((state) => state.getBook);
  const changeColorState = useV1Store((state) => state.changeColor);
  const setCurrentBook = useV1Store((state) => state.setCurrentBook);

  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("#FFFF00");
  const [fillColors, setFillColors] = useState<(string | null)[]>([]);
  const [undoStack, setUndoStack] = useState<(string | null)[][]>([]);
  const [redoStack, setRedoStack] = useState<(string | null)[][]>([]);

  const changeColor = (index: number) => {
    const newColors = [...fillColors];
    newColors[index] = currentColor;

    // Push the current state to the undo stack before changing
    setUndoStack([...undoStack, fillColors]);
    // Clear the redo stack whenever a new change is made
    setRedoStack([]);

    setFillColors(newColors);
    changeColorState(newColors[index], index);
  };

  const undo = () => {
    if (undoStack.length > 0) {
      const previousColors = undoStack.pop() ?? [];
      setRedoStack([...redoStack, fillColors]); // Push the current state to the redo stack
      setFillColors(previousColors);
      setUndoStack(undoStack);
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const nextColors = redoStack.pop() ?? [];
      setUndoStack([...undoStack, fillColors]); // Push the current state to the undo stack
      setFillColors(nextColors);
      setRedoStack(redoStack);
    }
  };

  useEffect(() => {
    const state = getBook(book);

    if (state) {
      setCurrentBook(state.title);
      setFillColors(state.fillColors);
    }
  }, [book, getBook, setCurrentBook]);

  useEffect(() => {
    const vivus = new Vivus("svg", {
      duration: 50,
      animTimingFunction: Vivus.EASE,
      type: "delayed",
    });

    vivus.reset().play();
  }, [SVG]);

  if (!SVG) {
    return <NotFound404 />;
  }

  return (
    <>
      <SVG fillColors={fillColors} onFill={changeColor} />

      <div className="fixed bottom-8 md:bottom-4 left-4 flex space-x-4">
        <button
          onClick={undo}
          className="flex items-center gap-2 border px-2 py-1 rounded-md hover:bg-gray-100"
        >
          <ArrowUturnLeftIcon className="h-6 w-6" />
          Undo
        </button>
        <button
          onClick={redo}
          className="flex items-center gap-2 border px-2 py-1 rounded-md hover:bg-gray-100"
        >
          <ArrowUturnRightIcon className="h-6 w-6" />
          Redo
        </button>
      </div>

      <button
        style={{
          backgroundColor: currentColor,
        }}
        className="fixed bottom-4 right-4 p-4 rounded-full w-24 h-24"
        onClick={() => setOpen(true)}
      >
        <Crayon />
      </button>

      <Drawer title={"Select Color"} open={open} setOpen={setOpen}>
        <ColorPicker
          selectedColor={currentColor}
          onColorSelected={(color) => {
            setOpen(false);
            setCurrentColor(color);
          }}
        />
      </Drawer>
    </>
  );
}
