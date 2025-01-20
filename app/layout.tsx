import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          {`
            :root {
              --primary: #0ea5e9;
              --primary-foreground: #ffffff;
              
              /* Light theme */
              --background: #ffffff;
              --foreground: #0f172a;
              --muted: #f1f5f9;
              --muted-foreground: #64748b;
              --accent: #f1f5f9;
              --accent-foreground: #0f172a;
              
              /* Dark theme */
              .dark {
                --background: #0f172a;
                --foreground: #ffffff;
                --muted: #1e293b;
                --muted-foreground: #94a3b8;
                --accent: #1e293b;
                --accent-foreground: #ffffff;
              }
            }

            /* Glowing effects */
            .glow {
              box-shadow: 0 0 20px rgba(14, 165, 233, 0.2);
            }

            .glow-text {
              text-shadow: 0 0 10px rgba(14, 165, 233, 0.3);
            }

            .glow-hover {
              transition: all 0.3s ease;
            }

            .glow-hover:hover {
              box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
              transform: translateY(-2px);
            }

            /* Animated background lines */
            .bg-lines {
              background-image: linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
              background-size: 50px 50px;
              animation: moveLines 20s linear infinite;
            }

            @keyframes moveLines {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 50px 50px;
              }
            }

            /* 3D Text effect */
            .text-3d {
              text-shadow: 0 1px 0 #ccc,
                         0 2px 0 #c9c9c9,
                         0 3px 0 #bbb,
                         0 4px 0 #b9b9b9,
                         0 5px 0 #aaa,
                         0 6px 1px rgba(0,0,0,.1),
                         0 0 5px rgba(0,0,0,.1),
                         0 1px 3px rgba(0,0,0,.3),
                         0 3px 5px rgba(0,0,0,.2),
                         0 5px 10px rgba(0,0,0,.25),
                         0 10px 10px rgba(0,0,0,.2),
                         0 20px 20px rgba(0,0,0,.15);
            }
          `}
        </style>
      </head>
      <body className={`${inter.className} bg-lines`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'