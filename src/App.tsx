import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import About from "./pages/About"
import ErrorPage from "./pages/ErrorPage"
import ProjectDetails from "./pages/ProjectDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App
