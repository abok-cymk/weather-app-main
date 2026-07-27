import "./globals.css"
import { cn } from "@/lib/utils";
import { dmSans } from "@/app/fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", dmSans.variable)}
    >
      <body suppressHydrationWarning className="max-w-5xl mx-auto px-6 lg:px-2 py-4">
        {children}
      </body>
    </html>
  )
}
