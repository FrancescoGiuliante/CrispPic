import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <p className="text-sm font-medium text-zinc-500">404</p>
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        This page doesn&apos;t exist.
      </h1>
      <p className="max-w-sm text-zinc-600 dark:text-zinc-400">
        The tool or page you&apos;re looking for may have moved, or the link
        might be broken.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Back to home
      </Link>
    </div>
  );
}
