import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "山田太郎 - データサイエンティスト",
  description: "データサイエンティスト山田太郎のポートフォリオサイトです。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <main className="max-w-4xl mx-auto px-4 py-12">{children}</main>
        <footer className="text-center mt-12 py-4 border-t border-accent bg-white bg-opacity-90">
          <p>&copy; 2023 山田太郎. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

