import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-32 text-center">
      <p className="text-sm font-medium text-zinc-500">404</p>
      <h1 className="text-2xl font-semibold text-zinc-900">
        This page doesn&apos;t exist.
      </h1>
      <p className="max-w-sm text-zinc-600">
        The tool or page you&apos;re looking for may have moved, or the link
        might be broken.
      </p>
      <Button href="/" className="mt-2">
        Back to home
      </Button>
    </div>
  );
}
