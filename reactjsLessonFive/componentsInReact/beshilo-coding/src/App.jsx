import './App.css'
// Creating Multiple Components 
import Header from './components/header/Header'

import Footer from './components/footer/Footer'
import MainBody from './components/body/MainBody'

// Declaration of APP component
function App() {

  return (
    <>
      < Header />
      < MainBody />
      
      <Footer />
    </>
  )
}

export default App
