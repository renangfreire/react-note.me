import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Loading } from "./pages/Loading"
import { Notes } from "./pages/Notes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/loading" Component={Loading} />
        <Route path="/notes" Component={Notes} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
