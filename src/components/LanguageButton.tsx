import { ClassValue } from "clsx";
import Link from "next/link";
import { Dictionary } from "../../types";
import { cn } from "@/lib/utils";

export const LanguageButton: React.FC<{
  languageCode: "en" | "zh",
  dict: Dictionary,
  className?: ClassValue,
}> = ({ 
  languageCode,
  dict,
  className,
}) => {
  const languageName = dict.language[languageCode];
  
  return (
    <Link 
      href={`/${languageCode}`}
      className={cn(
        'flex text-text cursor-pointer items-center justify-center rounded-base border-2 border-border dark:border-darkBorder bg-main px-4 py-2 text-xs font-base shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none',
        className,
      )}
    >
      {languageName}
    </Link>
  );
}
