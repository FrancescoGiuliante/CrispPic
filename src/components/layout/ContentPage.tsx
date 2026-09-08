/**
 * Prose shell for the long-form pages (about, contact, faq, privacy, terms).
 *
 * Typography is set here once, with descendant selectors, so each page can
 * stay plain semantic HTML instead of repeating utility classes on every
 * paragraph and heading.
 */
export function ContentPage({
  title,
  lead,
  children,
}: {
  title: string;
  /** Optional standfirst under the H1. */
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl">{title}</h1>
      {lead && <p className="mt-3 text-[17px] leading-7 text-fg-secondary">{lead}</p>}
      <div
        className="mt-8 flex flex-col gap-4 text-[15px] leading-7 text-fg-secondary
          [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-fg
          [&_strong]:font-semibold [&_strong]:text-fg
          [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-accent-hover
          [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:ps-5 [&_li]:list-disc"
      >
        {children}
      </div>
    </article>
  );
}
