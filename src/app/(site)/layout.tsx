import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nProvider>
      <SmoothScroll />
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </I18nProvider>
  );
}
