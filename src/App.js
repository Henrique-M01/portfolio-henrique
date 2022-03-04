import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitPage from "./pages/InitPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <InitPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/projects" element={ <ProjectPage /> } />
        <Route path="/contact" element={ <ContactPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
