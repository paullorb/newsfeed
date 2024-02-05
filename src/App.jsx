import '../src/styles/App.css'
import Structure from '../src/components/structure'
import Header from '../src/components/header'
import News from '../src/components/news'
import Footer from './components/footer'

export default function App() {

  return (
    <>
      <Structure>
        <Header />
        <News />
        <Footer />
      </Structure>
    </>
  )
}


