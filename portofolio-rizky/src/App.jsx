import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </main>
        <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500 mt-12">
          &copy; {new Date().getFullYear()} Rizky Januar Afrizal. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;