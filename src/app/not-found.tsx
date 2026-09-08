import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

// Rendered outside both the (tool) and (content) route groups, so it brings
// its own Header/Footer rather than inheriting one.
export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <NotFoundContent />
      <Footer />
    </div>
  );
}
