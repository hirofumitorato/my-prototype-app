import './globals.css';  // グローバルCSSを使う場合など (任意)
import { ReactNode } from 'react';
import Link from 'next/link';  // Link をインポート

export const metadata = {
  title: 'My Prototype App',
  description: 'Next.js 13 App Router Prototype',
};

// layout.tsx は配下のすべてのページの共通レイアウトを定義
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header style={{ backgroundColor: '#eee', padding: '1rem' }}>
          <nav>
            <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
            <Link href="/todos" style={{ marginRight: '1rem' }}>Todos</Link>
            <Link href="/counter" style={{ marginRight: '1rem' }}>Counter</Link>
            <Link href="/api/hello" style={{ marginRight: '1rem' }}>API Hello</Link>
          </nav>
        </header>
        <main style={{ margin: '1rem' }}>{children}</main>
        <footer style={{ backgroundColor: '#eee', padding: '1rem', marginTop: '2rem' }}>
          <p style={{ textAlign: 'center' }}>© 2025 My Prototype Inc.</p>
        </footer>
      </body>
    </html>
  );
}
