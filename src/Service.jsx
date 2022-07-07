import React from "react";
import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './sptotext.css';


const Services = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  useEffect(() => {
      SpeechRecognition.startListening({ continuous: true })
      console.log('listening starts');
  }, []);
  

  return (
<>
<div class="main-block-speech">
      <h1>Speech Recognition</h1>
      <form action="/">
      <div id="grad1">
<form>
      <div >
     



          <div class="account-type">
              {/* <input value={transcript}/> */}
              <textarea value={transcript}></textarea>
          </div>
          <div class="btn-block-speech-bt-speech">

              <button onClick={resetTranscript}>Clear Text</button>
              {/* <button onClick={}></button> */}

              <button onClick={(e) => { e.preventDefault(); SpeechRecognition.stopListening(); console.log('listening Stop...'); }}>Stop Listening</button>
          </div>
          <div class="btn-block-speech-speech">
             <hr />
              <span>
                  <p> 
                     <b>This React App Created by Ganesh Modi&#128515;</b>
                  </p>
              </span>
<hr />
              <p> <b>SpeechRecognition
                  by</b></p>
                      <div class="btn-block">
                          <h1>Jio intern</h1>
                          <p>Ganesh1.Modi@ril.com</p>
                      </div>
          </div>
      </div>
      
      </form>

      <hr />
      </div>

      </form>
    </div>
      </>
      
  )
}



export default Services;
