import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useIsMobile } from '../useIsMobile';


type HeaderProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  const { theme, setTheme } = useContext(ThemeContext);
 
  const isMobile = useIsMobile();
  console.log(isMobile);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'theme1' | 'theme2' | 'theme3');
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md flex flex-col gap-y-3 md:flex-row items-center justify-between px-4 py-3 z-30`}>
     
      <div className={`text-lg font-bold ${theme==='theme3'&&'text-black'}`}>
        {
          (theme === 'theme2'&& isMobile) ? <button className="block md:hidden absolute top-4 left-4 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button> : <span>🌈</span>
        }
        <span className={`${theme === 'theme2' && isMobile?'ml-8':'ml-0'}`}>Multi-Theme App</span>
      </div>

      <nav className="flex gap-4">
        <Link to="/" className="hover:underline font-medium">Home</Link>
        <Link to="/about" className="hover:underline font-medium">About</Link>
        <Link to="/contact" className="hover:underline font-medium">Contact</Link>
      </nav>

      <select
        value={theme}
        onChange={handleChange}
        className="ml-4 border rounded px-2 py-1"
      >
        <option value="theme1" className='text-black'>Theme 1</option>
        <option value="theme2" className='text-black'>Theme 2</option>
        <option value="theme3" className='text-black'>Theme 3</option>
      </select>
    </header>
  );
};

export default Header;
