import { AdSlot } from "@/components/ads/AdSlot";

const steps = [
  {
    title: "Upload your image",
    description: "Drag and drop or select a file. Nothing leaves your device.",
  },
  {
    title: "Tell us the requirement",
    description:
      "A maximum file size, exact dimensions, or a format — whatever the form, site, or platform asks for.",
  },
  {
    title: "Download the result",
    description:
      "We handle the resizing, compression, or conversion, and confirm the result meets your target.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <section className="flex w-full max-w-3xl flex-col items-center gap-6 px-6 pt-20 pb-16 text-center sm:pt-28">
        <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/15 dark:text-zinc-400">
          Private by default — processed in your browser
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          What do you need your image to fit?
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          Tell us the file size, dimensions, or format you need. We do the
          compressing, resizing, and converting — no software, no signup, no
          uploads to a server.
        </p>
      </section>

      <section
        aria-labelledby="how-it-works"
        className="w-full max-w-4xl px-6 py-12"
      >
        <h2
          id="how-it-works"
          className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-500"
        >
          How it works
        </h2>
        <ol className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-400 dark:text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="w-full max-w-3xl px-6 py-8 text-center">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Your images never leave your device. Everything runs locally in
          your browser — nothing is uploaded, stored, or seen by us.
        </p>
      </section>

      <div className="w-full max-w-4xl px-6">
        <AdSlot placement="below-content" />
      </div>
    </div>
  );
}
