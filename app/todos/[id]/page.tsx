// app/todos/[id]/page.tsx
interface TodoDetailPageProps {
  params: { id: string }; // URLパラメータの型
}

// Server Component
// params.id から動的に表示内容を切り替えられる。
export default function TodoDetailPage({ params }: TodoDetailPageProps) {
  const { id } = params;

  return (
    <section>
      <h2>TODO詳細</h2>
      <p>TODO ID: <b>{id}</b></p>
      <p>ここで詳細情報を表示する想定です。サーバーやDBからデータを取得できます。</p>
      <a href="/todos">← 戻る</a>
    </section>
  );
}
