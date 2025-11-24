"use client";

import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const t = useTranslations("tooltips");

  return (
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu modal={false}>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
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
            locale="ar"
            className={`${
              currentLocale === "ar" ? "bg-gray-100 dark:bg-gray-700 text-black dark:text-white" : ""
            }`}
          >
            العربية
          </Link>
        </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipContent>
          <p>{t("languageSwitcher")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
