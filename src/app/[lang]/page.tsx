import { getDictionary } from "./dictionaries";
import { Dictionary, Lang } from "../../../types";
import Body from "./body";

export default async function Page({ params: { lang } }: { params: { lang: Lang } }) {
  const dict = await getDictionary(lang) as Dictionary;

  return (
    <Body dict={dict} />
  );
}
