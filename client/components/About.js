import React, { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    document.title = 'CloudNotes - About';
},[]);
  return (
    <div className='container'>
      <div className="card text-dark bg-light mb-3" >
        <div className="card-header">About</div>
        <div className="card-body">
          <h5 className="card-title">Cloud Notes</h5>
          <p>Welcome to CloudNotes, your ultimate note-taking solution built on the powerful MERN stack. With CloudNotes, you can create, access, and manage your notes from anywhere, on any device, with ease.</p>
          <p>Our platform offers a seamless user experience, allowing you to sign up and log in effortlessly to access your personalized notes securely stored in the cloud. Whether you're jotting down ideas, organizing tasks, or capturing inspiration, CloudNotes ensures that your data is always at your fingertips.</p>
          <p>Our fully responsive design ensures that you can access your notes on the go, whether you're using a desktop, laptop, tablet, or smartphone. The intuitive and easy-to-use UI makes navigation a breeze, allowing you to focus on what matters most – your notes.</p>
          <p>CloudNotes prioritizes both speed and security. Our lightning-fast performance ensures that you can create, update, and delete notes without any delays. Meanwhile, our robust security measures, backed by MongoDB's secure storage, ensure that your data remains protected at all times.</p>
          <p>Experience the simplicity, speed, and security of CloudNotes today, and take your note-taking to the next level.</p>
        </div>
      </div>
    </div>
  )
}

export default About

