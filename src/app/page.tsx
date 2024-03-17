import ColoringBooks from "@/components/ColoringBooks";

export default function Home() {
  return (
    <main className="relative w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col w-full p-4">
        <h1 className="text-4xl font-bold mb-2">Doodles</h1>
        <p>
          A collection of tap to color doodles. Click on a doodle to start
          coloring.
        </p>
      </div>
      <ColoringBooks />
    </main>
  );
}
