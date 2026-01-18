import './App.css'
import Blog from './components/Blog'
import Header from './components/Header'
import HeroComp from './components/HeroComp'
import LatestArticle from './components/LatestArticle'

function App() {
  return (
    <>
      <Header></Header>
      <HeroComp></HeroComp>
      
      <div className='flex flex-col md:flex-row max-w-7xl mx-auto'>
        <div className='md:w-1/3 lg:w-1/4'>
          <LatestArticle />
        </div>
        <div className='md:w-2/3 lg:w-3/4'>
          <Blog />
        </div>
      </div>
    </>
  )
}

export default App
