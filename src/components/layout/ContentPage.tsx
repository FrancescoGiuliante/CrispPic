export function ContentPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h1>
      <div className="flex flex-col gap-4 text-[15px] leading-7 text-zinc-700 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </article>
  );
}
