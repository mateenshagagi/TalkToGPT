import { text } from 'node:stream/consumers';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime/runtime'

function MouseOver(event) {
    if (event.target.firstChild == null){ //if hovering over mic
      event.target.parentNode.parentNode.style.background = "rgb(25, 195, 125)";
      event.target.parentNode.style.fill = "white";
    } else {
      event.target.style.background = "rgb(25, 195, 125)";
      event.target.firstChild.style.fill = "white";
    }

  }
  function MouseOut(event){
    if (event.target.firstChild != null){
      event.target.style.background = "";
      event.target.firstChild.style.fill = "#6a6c7b";
    }
  }

const Dictaphone = ({ onTranscriptChange }) => {

    let on = false;

    const [message, setMessage] = useState('');
    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
    } = useSpeechRecognition();

    useEffect(() => {
      onTranscriptChange(transcript); // Call the callback function with the updated transcript value

      const textarea = (document.getElementById("prompt-textarea") as HTMLInputElement)
      if (textarea) {
        textarea.value = transcript;      
      }
    }, [transcript, onTranscriptChange]);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
    }

    let i = 0;
    const click = (event) => {
      SpeechRecognition.stopListening();
      i++;
      if(i % 2 == 1){
        SpeechRecognition.startListening({
          continuous: true,
          language: 'en-US',
         });
      }
    }

 return (
    <button onClick={click} onMouseOver={MouseOver} onMouseOut={MouseOut}>
        <svg id='mic' fill="#6a6c7b" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512" className="absolute p-1 rounded-md md:bottom-3 gizmo:md:bottom-2.5 md:p-0 md:right-2 dark:hover:bg-gray-800 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple gizmo:enabled:bg-transparent text-white gizmo:text-gray-500 gizmo:dark:text-gray-300 bottom-1.5 transition-colors disabled:opacity-40">
        <g>
            <path d="m406.3,129c-11.3,0-20.4,9.1-20.4,20.4v31.2h-40.2v-80c0-49.4-40.2-89.6-89.6-89.6s-89.6,40.2-89.6,89.6v80h-40.2v-31.2c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v100.6c0,84 65.7,153.4 150.3,163.2v47h-23c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h86.9c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-23v-47c84.5-9.7 150.3-79.2 150.3-163.2v-100.6c-0.3-11.3-9.5-20.4-20.7-20.4zm-199.1-28.4c0-26.9 21.9-48.8 48.8-48.8 26.9,0 48.8,21.9 48.8,48.8v152.4c0,26.9-21.9,48.8-48.8,48.8-26.9,0-48.8-21.9-48.8-48.8v-152.4zm48.8,272.9c-71.6,0-129.9-55.4-129.9-123.5v-28.5h40.2v31.5c0,49.4 40.2,89.6 89.6,89.6s89.6-40.2 89.6-89.6v-31.5h40.2v28.5c0.2,68.1-58.1,123.5-129.7,123.5z"/>
        </g>
        </svg>
    </button>
 );
};

export default Dictaphone;