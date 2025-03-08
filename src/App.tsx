import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Awards from './components/Awards';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {

  var style = 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hero-pattern ';
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 hero-pattern">
        <ThemeToggle />
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Header />
          <div className="space-y-16">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl"></div>
              <Experience />
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl"></div>
              <Projects />
            </div>
            <Education />
            <Skills />
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl"></div>
              <Awards />
            </div>
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 ">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 dark:bg-blue-950 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 dark:bg-[#290545] rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-96 h-56 bg-pink-300 dark:bg-[#3d071d] rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;