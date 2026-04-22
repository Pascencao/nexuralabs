import Footer from "@/components/ui/footer";
import SiteHeader from "@/components/site-header";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function DefaultLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "es";
  const dict = getDictionary(locale);

  return (
    <>
      <SiteHeader dict={dict} locale={locale} />
      <main className="relative flex grow flex-col">{children}</main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
