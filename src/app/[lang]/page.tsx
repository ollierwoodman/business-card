import { getDictionary } from "./dictionaries";
import { Dictionary, Lang } from "../../../types";
import Body from "./body";

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang) as Dictionary;

  return (
    <Body dict={dict} />
  );
}
