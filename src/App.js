import logo from './logo.svg';
import './App.css';
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

function App() {
  const [displayText, setDisplayText] = useState("Press a button");

  const playAudio=(audioId, buttonText)=>{
    const audio=document.getElementById(audioId);
    if(audio){
      audio.currentTime=0;
      audio.play();
      setDisplayText(`You pressed '${buttonText}'`);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        
        <p id="title-text">
          Drum Machine
        </p>
        <div id="drum-machine">

        <button class="drum-pad" id="heater-1" onClick={()=>playAudio('Q','Heater 1')}
        onKeyDown={(e) => {
          if (e.key === 'Q') {
            playAudio('Q', 'Heater 1');
          }
        }}>Q
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className='clip' id='Q'/></button>

        <button class="drum-pad" id="heater-2" onClick={()=>playAudio('W','Heater 2')}
        onKeyDown={(e) => {
          if (e.key === 'W') {
            playAudio('W', 'Heater 1');
          }
        }}>W
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className='clip' id='W'/></button>

        <button class="drum-pad" id="heater-3" onClick={()=>playAudio('E','Heater 3')}
        onKeyDown={(e) => {
          if (e.key === 'E') {
            playAudio('E', 'Heater 1');
          }
        }}>E
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className='clip' id='E'/></button>

        <button class="drum-pad" id="heater-4"onClick={()=>playAudio('A','Heater 4')}
        onKeyDown={(e) => {
          if (e.key === 'A') {
            playAudio('A', 'Heater 1');
          }
        }}>A
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className='clip' id='A'/></button>

        <button class="drum-pad" id="clap" onClick={()=>playAudio('S','Clap')}
        onKeyDown={(e) => {
          if (e.key === 'S') {
            playAudio('S', 'Heater 1');
          }
        }}>S
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className='clip' id='S'/></button>

        <button class="drum-pad" id="open-hh" onClick={()=>playAudio('D','Open-HH')}
        onKeyDown={(e) => {
          if (e.key === 'D') {
            playAudio('D', 'Heater 1');
          }
        }}>D
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className='clip' id='D'/></button>

        <button class="drum-pad" id="kick-n'-hat" onClick={()=>playAudio('Z',`Kick-n'hat`)}
        onKeyDown={(e) => {
          if (e.key === 'Z') {
            playAudio('Z', 'Heater 1');
          }
        }}>Z
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className='clip' id='Z'/></button>

        <button class="drum-pad" id="kick" onClick={()=>playAudio('X','Kick')}
        onKeyDown={(e) => {
          if (e.key === 'X') {
            playAudio('X', 'Heater 1');
          }
        }}>X
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className='clip' id='X'/></button>

        <button class="drum-pad" id="closed-hh" onClick={()=>playAudio('C','Closed-HH')}
        onKeyDown={(e) => {
          if (e.key === 'C') {
            playAudio('C', 'Heater 1');
          }
        }}>C
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className='clip' id='C'/></button>

        <div id="display">{displayText}</div>
        </div>
  
      </div>
    </div>
  );
}

export default App;
