export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }]
}

export default async function LangLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params;

  return (
    <div lang={lang}>
      {children}
    </div>
  );
}