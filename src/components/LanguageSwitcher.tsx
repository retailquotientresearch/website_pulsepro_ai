"use client";

import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Button from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="border border-border h-9 px-3 font-mono text-sm text-foreground"
          aria-label="Change language"
        >
          {currentLocale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={5}>
        <DropdownMenuItem asChild>
          <Link
            href={pathname}
            locale="en"
            className={`${
              currentLocale === "en" ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white" : ""
            }`}
          >
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={pathname}
            locale="fr"
            className={`${
              currentLocale === "fr" ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white" : ""
            }`}
          >
            Français
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={pathname}
            locale="hi"
            className={`${
              currentLocale === "hi" ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white" : ""
            }`}
          >
            हिन्दी
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
