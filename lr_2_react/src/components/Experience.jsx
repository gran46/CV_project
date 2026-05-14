function Experience() {
  return (
    <div className="mb-8">
      <h2 className="flex items-center text-[var(--text-main)] text-lg font-bold uppercase tracking-wider mb-4 mt-6 after:content-[''] after:flex-1 after:h-[1px] after:bg-[var(--accent-color)] after:ml-4 after:opacity-60">Досвід та Проекти</h2>
        <ol className="space-y-5 list-decimal pl-5 text-[var(--text-secondary)] text-sm">
            <li>
                <p>
                  <strong className="text-[var(--text-main)] block">Розробка консольних додатків на Python</strong><br></br>
                  Створення простих скриптів для автоматизації рутинних завдань та базових ігор під час навчання.</p>
              </li>
              <li>
                <p>
                  <strong className="text-[var(--text-main)] block">Курсова робота</strong><br></br>
                  Розробка веб-сайту на php. Досвід роботи з циклами, масивами та структурами даних.</p>
              </li>
        </ol>
    </div>
  )
}

export default Experience
