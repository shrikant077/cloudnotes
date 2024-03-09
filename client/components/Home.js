import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import simple from '../simple.jpg'
import fast from '../fast.jpg'
import secure from '../secured.jpg'
const Home = () => {
  useEffect(()=>{
    document.title = 'CloudNotes';
},[]);
  return (
    <>
      <div style={{ backgroundImage: "linear-gradient(to right top, #ff6f91, #ff8a7a, #ffad67, #ffd360, #f9f871)", width: "100vw", height: "90vh", marginTop: "-10px" }}>
        <div className="d-flex justify-content-center align-items-center flex-column w-100 p-3 h-100">
          <motion.h1
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            style={{
              color: "#ffffff", fontSize: "4em", fontFamily: "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif", fontWeight: "900", textShadow: "4px 3px 0px #301934",
              lineHeight: "1.2", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#000000", WebkitTextFillColor: "transparent"
            }}>Store your Notes on Secured Cloud</motion.h1>
          <motion.p
            whileInView={{ x: [0, -100], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            style={{ fontSize: "2rem", fontFamily: "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif", fontWeight: "600", WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#000000", WebkitTextFillColor: "transparent", marginLeft: "6.5rem" }}
          >Note Taking made even simpler and secure</motion.p>
        </div>
      </div>
      <div className="container">
        <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="card m-5 shadow">
          <div className="card-body d-flex align-items-center">
            <div style={{width: "100px"}}>
              <img src={simple} alt="" width={"90px"}/>
            </div>
            <div>
            <h2>Simple</h2>
            <p>Our design is elegantly minimalistic, making note-taking as easy as ABC, even for the most tech-challenged among us.</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="card m-5 shadow">
          <div className="card-body d-flex align-items-center">
            <div style={{width: "100px"}}>
              <img src={fast} alt="" width={"100px"}/>
            </div>
            <div>
            <h2>Fast</h2>
            <p>Our app's simplicity meets speed for a seamless experience that's simply unbeatable.</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="card m-5 shadow">
          <div className="card-body d-flex align-items-center">
            <div style={{width: "100px"}}>
              <img src={secure} alt="" width={"85px"}/>
            </div>
            <div>
            <h2>Secured</h2>
            <p>Your data is under lock and key, guarded like a vault, ensuring peace of mind with every click.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home
