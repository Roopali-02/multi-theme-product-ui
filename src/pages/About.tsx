import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
const About = () => {
   const { theme } = useContext(ThemeContext);

  return (
    <div className='text-center my-10 min-h-screen'>
      <h1 className="text-3xl font-semibold mb-4">About</h1>
      <p className={`text-2xl font-medium ${theme !== 'theme2' ?'text-[#3A6073]':'text-white'}`}>
      🚧  We are currently working on this section. Check back soon to learn more about the app and our goals!
      </p>
    </div>
  )
}

export default About