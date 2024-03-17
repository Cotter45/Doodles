import Link from "next/link";

function BackArrow() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  );
}

export default function BackButton() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 fixed top-5 left-2 font-bold text-xl hover:underline"
    >
      <BackArrow />
      <span>Back</span>
    </Link>
  );
}
