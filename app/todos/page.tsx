// app/todos/page.tsx
// Server Componentの例
// デモ用にサーバーサイドでダミーデータを用意
export default function TodosPage() {
  const todos = [
    { id: 1, title: '牛乳を買う' },
    { id: 2, title: '部屋を掃除する' },
    { id: 3, title: 'Next.jsを勉強する' },
  ];

  return (
    <section>
      <h2>TODO一覧</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <a href={`/todos/${todo.id}`}>
              {todo.id}: {todo.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
