import { Dictionary } from "../../types";
import { LanguageButton } from "./LanguageButton";

export const LanguageSelect: React.FC<{
  dict: Dictionary,
}> = ({
  dict,
}) => {  
  return (
    <div className="flex flex-row gap-1">
      <LanguageButton languageCode="en" dict={dict} />
      <LanguageButton languageCode="zh" dict={dict} />
    </div>
  );
}
