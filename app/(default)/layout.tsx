import Footer from "@/components/ui/footer";
import SiteHeader from "@/components/site-header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="relative flex grow flex-col">{children}</main>
      <Footer />
    </>
  );
}
