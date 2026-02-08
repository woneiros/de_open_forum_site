import Link from "next/link";

export default function PageNavBar() {
  return (
    <div className="border-b border-accent/30 px-4 py-2 font-mono text-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="hover:text-accent">
          {"← BACK TO HOME"}
        </Link>
      </div>
    </div>
  );
}
