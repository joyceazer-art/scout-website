import { useState } from "react";
import "./App.css";

import Leaders from "./Pages/Leaders";
import GroupPage from "./Pages/GroupPage";
import ContactUs from "./Pages/ContactUs";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("home");


  return (
    <main className={page === "home" ? "home" : "page"}>

      {/* =========================
          NAVIGATION
          ========================= */}

      <nav className="navbar">

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>


        <div className="logo">

          <img
            className="first-logo"
            src="/images/scout-logo.jpeg"
            alt="XVII Cairo Scout"
          />

          <img
            className="second-logo"
            src="/images/wadi el nile.jpeg"
            alt="Second organization logo"
          />

        </div>

      </nav>


      {/* =========================
          HAMBURGER MENU
          ========================= */}

      <div
        className={`side-menu ${menuOpen ? "open" : ""}`}
      >

        <button
          className="close-button"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>


        <div className="menu-content">

          {/* Home */}

          <button
            onClick={() => {
              setPage("home");
              setMenuOpen(false);
            }}
          >
            Home
          </button>


          {/* Our Story */}

          <button>
            Our Story
          </button>


          {/* Jeannettes */}

          <button
            onClick={() => {
              setPage("jeannettes");
              setMenuOpen(false);
            }}
          >
            Jeannettes
          </button>


          {/* Guides */}

          <button
            onClick={() => {
              setPage("guides");
              setMenuOpen(false);
            }}
          >
            Guides
          </button>


          {/* Rangers */}

          <button
            onClick={() => {
              setPage("rangers");
              setMenuOpen(false);
            }}
          >
            Ranger
          </button>


          {/* Leaders */}

          <button
            onClick={() => {
              setPage("leaders");
              setMenuOpen(false);
            }}
          >
            Our Leaders
          </button>


          {/* Contact */}

          <button
  onClick={() => {
    setPage("contact");
    setMenuOpen(false);
  }}
>
  Contact Us
</button>

        </div>

      </div>


      {/* =========================
          HOME
          ========================= */}

      {page === "home" && (

        <div className="home-content">

          <h1>
            One more memory, one more piece
          </h1>

          <p>
            Friendship • Adventure • Service
          </p>

        </div>
        

      )}


      {/* =========================
          LEADERS
          ========================= */}

      {page === "leaders" && (
        <Leaders />
      )}
      {/* =========================
    CONTACT US
    ========================= */}

{page === "contact" && (
  <ContactUs />
)}


      {/* =========================
          GROUP PAGES
          ========================= */}

      {(
        page === "jeannettes" ||
        page === "guides" ||
        page === "rangers"
      ) && (

          <GroupPage type={page} />

        )}

    </main>
  );
}


export default App;