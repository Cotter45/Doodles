import BackButton from "@/components/BackButton";
import NotFound404 from "@/svgs/notfound";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center max-w-full">
      <BackButton />
      <NotFound404 />
    </div>
  );
}
