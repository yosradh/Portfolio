import Header from "./Components/1-header/header"
import Hero from "./Components/2-hero/hero"
import Content from "./Components/3-content/content"
import Contact from "./Components/4-contact/contact"
import Footer from "./Components/5-footer/footer"
import Competances from "./Components/6-Comptences/Competances"
import NoPage from "./Components/NoPage"
import './index.css';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="containerApp">
        <Header />

          <Routes>
              <Route index path="/" element={<Hero />} />
              <Route index path="/competance" element={<Competances />} />
              <Route path="/project" element={<Content />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
          </Routes>

        <div className="divider" />
        <Footer />

    </div>
  )
}

export default App
