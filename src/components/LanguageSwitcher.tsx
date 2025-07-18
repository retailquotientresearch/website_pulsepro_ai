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
          className="border border-gray-200 dark:border-gray-700 h-9 px-3 font-mono text-sm text-gray-900 dark:text-white"
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
              currentLocale === "en" ? "bg-purple-50 dark:bg-purple-900/20" : ""
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
              currentLocale === "fr" ? "bg-purple-50 dark:bg-purple-900/20" : ""
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
              currentLocale === "hi" ? "bg-purple-50 dark:bg-purple-900/20" : ""
            }`}
          >
            हिन्दी
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
