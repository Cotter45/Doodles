import Color from "./Color";
import BackButton from "@/components/BackButton";

export default function ColorPage({
  searchParams,
}: {
  searchParams: { book: string };
}) {
  const book = searchParams.book;
  return (
    <main className="relative min-w-screen min-h-screen flex flex-col">
      <BackButton />
      <div className="min-w-screen min-h-screen flex flex-col justify-center items-center">
        <Color book={book} />
      </div>
    </main>
  );
}
