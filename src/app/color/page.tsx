import Color from "./Color";
import BackButton from "@/components/BackButton";

export default async function ColorPage(
  props: {
    searchParams: Promise<{ book: string }>;
  }
) {
  const searchParams = await props.searchParams;
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
