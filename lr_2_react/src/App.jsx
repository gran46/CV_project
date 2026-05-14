import ThemeToggle from './components/ThemeToggle';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import Comments from './components/Comments';
import FeedbackModal from './components/FeedbackModal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-10 bg-[var(--sidebar-bg)]">
      <ThemeToggle />
      
      <div className="resume-container flex flex-col md:flex-row bg-[var(--bg-color)] max-w-[900px] w-full shadow-2xl overflow-hidden">
        <aside className="md:w-1/3 bg-[var(--sidebar-bg)] p-8 border-r border-[var(--line-color)]">
          <header className="mb-10">
            <h1 className="text-[var(--accent-color)] text-4xl font-bold uppercase leading-tight tracking-tighter">
              Олег<br/>Рубай
            </h1>
          </header>
          <AboutMe />
          <Education />
          <Contacts />
        </aside>
        
        <main className="md:w-2/3 p-10">
          <Experience />
          <HardSkills />
          <SoftSkills />
          <Comments />
        </main>
      </div>

      <Footer />
      
      <FeedbackModal />
    </div>
  );
}

export default App;