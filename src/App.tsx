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
      
      <div className='flex'>
      <LatestArticle />
      <Blog />
      </div>
    </>
  )
}

export default App
