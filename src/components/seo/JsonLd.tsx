/**
 * Renders one or more JSON-LD blocks. A server component, so the schema
 * markup is in the HTML a crawler receives and costs the client bundle
 * nothing.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
