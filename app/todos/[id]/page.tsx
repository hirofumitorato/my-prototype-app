import Link from 'next/link';

interface TodoDetailPageProps {
  params: Promise<{ id: string }>; // `Promise` の型を明示
}

// `async` を追加して `params` を `await` で解決する
export default async function TodoDetailPage({ params }: TodoDetailPageProps) {
  const resolvedParams = await params; // `params` を解決
  const { id } = resolvedParams;

  return (
    <section>
      <h2>TODO詳細</h2>
      <p>TODO ID: <b>{id}</b></p>
      <p>ここで詳細情報を表示する想定です。サーバーやDBからデータを取得できます。</p>
      <Link href="/todos">← 戻る</Link>
    </section>
  );
}
