// app/layout.tsx
import './globals.css';  // グローバルCSSを使う場合など (任意)
import { ReactNode } from 'react';

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
            <a href="/" style={{ marginRight: '1rem' }}>Home</a>
            <a href="/about" style={{ marginRight: '1rem' }}>About</a>
            <a href="/todos" style={{ marginRight: '1rem' }}>Todos</a>
            <a href="/counter" style={{ marginRight: '1rem' }}>Counter</a>
            <a href="/api/hello" style={{ marginRight: '1rem' }}>API Hello</a>
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
