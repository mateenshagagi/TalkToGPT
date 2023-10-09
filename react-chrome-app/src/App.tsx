import Dictaphone from "./Dictaphone";
import React, { useState } from 'react';


function App() {
  const [transcript, setTranscript] = useState(''); // State variable to store the transcript value
  const handleTranscriptChange = (newTranscript) => {
    setTranscript(newTranscript); // Update the transcript value in the App component
  };

  const handleClick = () => {
    console.log("imported:" + transcript);
  };


  return (
    <div>
      <Dictaphone onTranscriptChange={handleTranscriptChange}></Dictaphone>
    </div>
  );
}

export default App;
