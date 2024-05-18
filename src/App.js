import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackgroundVideo from "./assets/animatedSpace.mp4";
import "./App.css";

function App() {

  return (
    <>
      <Header />
      <main className="py-3">
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={BackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
