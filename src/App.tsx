import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Presentation from "./pages/Presentation"
import Error404 from "./pages/Error404"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Presentation />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
