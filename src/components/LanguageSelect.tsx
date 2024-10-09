<<<<<<< HEAD
import { Dictionary } from "../../types";
=======
import { ClassValue } from "clsx";
import Link from "next/link";
import { Dictionary } from "../../types";
import { cn } from "@/lib/utils";
>>>>>>> 68b24419416f0a5e1e0bb4990d5fb489e8cfe005
import { LanguageButton } from "./LanguageButton";

export const LanguageSelect: React.FC<{
  dict: Dictionary,
<<<<<<< HEAD
}> = ({
  dict,
=======
  className?: ClassValue,
}> = ({
  dict,
  className,
>>>>>>> 68b24419416f0a5e1e0bb4990d5fb489e8cfe005
}) => {  
  return (
    <div className="flex flex-row gap-1">
      {dict.language.current === "en" && (
        <>
          <p className="text-center rounded-base border-2 border-border dark:border-darkBorder bg-black px-4 py-2 text-sm font-base translate-x-boxShadowX translate-y-boxShadowY shadow-none">{dict.language.en}</p>
          <LanguageButton languageCode="zh" dict={dict} />
        </>
      ) || (
        <>
          <LanguageButton languageCode="en" dict={dict} />
          <p className="text-center rounded-base border-2 border-border dark:border-darkBorder bg-black px-4 py-2 text-sm font-base translate-x-boxShadowX translate-y-boxShadowY shadow-none">{dict.language.zh}</p>
        </>
      )}
    </div>
  );
}
