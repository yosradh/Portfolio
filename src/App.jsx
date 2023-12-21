import Header from "./Components/1-header/header"
import Hero from "./Components/2-hero/hero"
import Content from "./Components/3-content/content"
import Contact from "./Components/4-contact/contact"
import Footer from "./Components/5-footer/footer"
import './index.css';


function App() {

  return (
    <div class="containerApp">
        <Header />
        <Hero />
        <div className="divider" />
        <Content />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />

    </div>
  )
}

export default App
