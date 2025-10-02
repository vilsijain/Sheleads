import { useState } from "react";
import HereMap from "./components/heremap";
import MentorDashboard from "./components/mentordashboard";
import Opportunities from "./components/Opportunities";
import Blogs from "./components/Blogs";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="p-6 font-sans">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🌸 SheLeads</h1>
        <nav className="space-x-4">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("mentors")}>Mentorship</button>
          <button onClick={() => setPage("opportunities")}>Opportunities</button>
          <button onClick={() => setPage("blogs")}>Blogs</button>
        </nav>
      </header>

      {page === "home" && (
        <>
          <h2 className="text-xl mb-4">Empowering the Next Generation of Women Leaders</h2>
          <HereMap />
        </>
      )}
      {page === "mentors" && <MentorDashboard />}
      {page === "opportunities" && <Opportunities />}
      {page === "blogs" && <Blogs />}
    </div>
  );
}

export default App;
