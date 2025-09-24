import Link from "next/link";
import { Chrome } from "lucide-react";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { NavbarActions } from "./navbar-actions";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";

export default async function Navbar({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link
            className="flex flex-col place-items-end items-center relative"
            href={`/${lang}`}
          >
            <div className="flex items-center">
              <Image
                src="https://gestordepartes.com/layouts_v2/images/logob.webp"
                alt="Parts"
                width={100}
                height={100}
                className="hidden md:block"
                priority
              />
              <span>-</span>
              <Image
                src={`https://www.gestordepartes.com/assets/images/categorias/caterpillar.svg`}
                alt="Parts"
                className="flex rounded-md ml-2"
                width={50}
                height={50}
                priority
              />
            </div>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex-1 md:flex-none">
            <div className="hidden items-center space-x-4 md:flex">
              <Link
                href={`/${lang}/blog`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {dict.nav.blog}
              </Link>
              <Link
                href={`/${lang}/pricing`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {dict.nav.pricing}
              </Link>
            </div>
          </div>
          <NavbarActions lang={lang} dict={dict} />
          <MobileNav lang={lang} dict={dict} />
        </nav>
      </div>
    </header>
  );
}
