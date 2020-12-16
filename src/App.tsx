import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <h1>Videos</h1>

        <h2>Know your Food Portions</h2>

       
        <div className="row">
          <iframe className="col2-3 portionVideo" src="//www.youtube.com/embed/SAzOz_V5SKg"></iframe>
        </div>
        

        <h2>Safety</h2>
        <div className="row">
          <iframe className="col1-3" src="https://www.youtube.com/embed/oUVCWNQFGTc"></iframe>
          <iframe className="col1-3" src="https://www.youtube.com/embed/uPiCGs4E7qc"></iframe>
          
        </div>

        <h2>Cutting</h2>
        <div className="row">
          <iframe className="col1-3" src="https://www.youtube.com/embed/-Y2Jbqgtigo"></iframe>
          <iframe className="col1-3" src="https://www.youtube.com/embed/JNEo_h8aw4o"></iframe>
          <iframe className="col1-3" src="https://www.youtube.com/embed/-SSs1OMo_9M"></iframe>
        </div>

        <footer>
          <p>Copyright</p>
        </footer>

      </body>
    </div>
  );
}

export default App;
