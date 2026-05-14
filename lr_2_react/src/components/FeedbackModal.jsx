// FeedbackModal.jsx
import { useState, useEffect } from 'react';

function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4"
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="relative w-full max-w-md rounded-xl bg-[var(--bg-color)] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <span 
          className="absolute right-5 top-3 cursor-pointer text-3xl text-[var(--text-secondary)] hover:text-[var(--text-main)]"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </span>

        <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-[var(--text-main)] after:hidden">
          Форма зворотного зв'язку
        </h2>

        <form 
          id="feedback-form" 
          action="https://formspree.io/f/mqegdrpr" 
          method="POST"
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xs font-semibold text-[var(--text-main)]">Ім’я</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="mt-1 rounded-md border border-[var(--line-color)] bg-[var(--sidebar-bg)] p-2 text-[var(--text-main)] outline-none focus:border-[var(--accent-color)]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs font-semibold text-[var(--text-main)]">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="mt-1 rounded-md border border-[var(--line-color)] bg-[var(--sidebar-bg)] p-2 text-[var(--text-main)] outline-none focus:border-[var(--accent-color)]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-xs font-semibold text-[var(--text-main)]">Номер телефону</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              className="mt-1 rounded-md border border-[var(--line-color)] bg-[var(--sidebar-bg)] p-2 text-[var(--text-main)] outline-none focus:border-[var(--accent-color)]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-xs font-semibold text-[var(--text-main)]">Повідомлення</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              required 
              className="mt-1 resize-none rounded-md border border-[var(--line-color)] bg-[var(--sidebar-bg)] p-2 text-[var(--text-main)] outline-none focus:border-[var(--accent-color)]"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-4 rounded-md bg-[var(--accent-color)] py-3 font-bold text-white transition-all hover:brightness-110 active:scale-95"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackModal;
