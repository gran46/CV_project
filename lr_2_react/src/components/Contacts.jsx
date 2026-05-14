function Contacts() {
  return (
    <div className="mb-6">
      <h2 className="flex items-center text-[var(--text-main)] text-lg font-bold uppercase tracking-wider mb-4 mt-6 after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--accent-color)] after:ml-4 after:opacity-60">Контакти</h2>
      <div className="text-[var(--text-secondary)] text-sm space-y-1">
        <p>+380 123 45 67</p>
        <p>oleh.dev@email.com</p>
        <p>Львів, Україна</p>
      </div>
    </div>
  )
}

export default Contacts
