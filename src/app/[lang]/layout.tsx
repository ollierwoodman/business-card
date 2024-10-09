import '../globals.css'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }]
}

export default function Root({ children, params }: Readonly<{ children: React.ReactNode, params: { lang: string } }>) {
  return (
    <html lang={params.lang}>
      <head>
        <title>Ollie Woodman</title>
      </head>
      <body
        className='bg-bg dark:bg-darkBg text-text dark:text-darkText min-h-screen'
      >
        {children}
      </body>
    </html>
  )
}