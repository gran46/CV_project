import { useEffect, useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/25/comments")
      .then(res => res.json())
      .then(data => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="mt-10">
      <h2 className="flex items-center text-[var(--text-main)] text-lg font-bold uppercase tracking-wider mb-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--accent-color)] after:ml-4 after:opacity-60">
        Відгуки
      </h2>
      {loading ? <p>Завантаження...</p> : (
        <div className="space-y-4">
          {comments.map(c => (
            <div key={c.id} className="border-b border-[var(--line-color)] pb-4">
              <h4 className="text-[var(--text-main)] font-bold text-sm">{c.name}</h4>
              <p className="text-[var(--text-secondary)] text-xs mt-1">{c.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Comments;