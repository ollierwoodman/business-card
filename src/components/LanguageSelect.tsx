import { Dictionary } from "../../types";
import { LanguageButton } from "./LanguageButton";

export const LanguageSelect: React.FC<{
  dict: Dictionary,
}> = ({
  dict,
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
