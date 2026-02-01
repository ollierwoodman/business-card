import './globals.css'

export default function Root({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html>
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