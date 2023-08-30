import React, { useState, useEffect } from 'react';
import "../../styles/xylophone.css";

const MusicComponent = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
      const loadedNotes = document.querySelectorAll('.sound');
      setNotes(loadedNotes);
    }, []);

    const play = (num) => {
        notes[num].pause();
        notes[num].currentTime = 0;
        notes[num].play();
        document.getElementById(num).style.fontWeight = "bold";
        document.getElementById(num).style.color = "#FCFBE3";
        setTimeout(() => {
          document.getElementById(num).style.fontWeight = "normal";
          document.getElementById(num).style.color = "#3a2f21";
        }, 300);
    };

    const playNote = (noteId) => {
        play(noteId);
    };

  const note1 = [0,0,0,3,5,  0,0,0,3,5,  3,3,2,2,1,1,0,  0,0,0,2,4,  0,0,0,2,4,  7,7,6,5,4,3,1,0];
  const tempo1 = [1,1,1,2,3,  1,1,1,2,3,  1,1,1,1,1,1,3,  1,1,1,2,3,  1,1,1,2,3,  2,1,1,1,1,1,1,1];

const note2 = [4,2,2,  3,1,1,  0,1,2,3,4,4,4 ];
const tempo2 = [1,1,2,  1,1,2,  1,1,1,1,1,1,2];

const note3 = [0,0,1,0,3,2,  0,0,1,0,4,3,  0,0,7,5,3,3,2,1,  6,6,5,3,4,3];
const tempo3 = [2,1,2,2,2,3,  2,1,2,2,2,3,  2,1,2,2,2,2,2,3,  2,1,2,2,2,3];

const note4 = [0,0,4,4,5,5,4,5,5,2,2,1,1,0,  4,4,3,3,2,2,1,4,4,3,3,2,2,1,  0,0,4,4,5,5,4,3,3,2,2,1,1,0];
const tempo4 = [2,2,2,2,2,2,4,2,2,2,2,2,2,3,  2,2,2,2,2,2,4,2,2,2,2,2,2,3,  2,2,2,2,2,2,4,2,2,2,2,2,2,3];

const note5 = [7,7,5,6,4,7,7,5,6,4,7,7,6,5,4,3,1,  6,6,5,4,3,1,1,2,3,4,4,3,2,1,0];
const tempo5 =[1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,  1,2,1,1,1,1,2,1,1,1,2,1,1,1,2];


  const rhythm = (tempoArray, num) => {
    let count = 0;
    for (let i = 0; i < num; i++) {
      count += tempoArray[i];
    }
    return count;
  };

  const handleClick = (noteArray, tempoArray) => {
    for (let i = 0; i < noteArray.length; i++) {
      setTimeout(() => {
        play(noteArray[i]);
      }, rhythm(tempoArray, i) * 350);
    }
  };


  return (
    <div>
    <div className="wrapper">
        <h3>Xylophone - Musical Instrument</h3>
        <div className="container">
            <div className="note note-do1" id="0" onClick={() =>playNote(0)}>
                <div className="screw1 screw1-do1"></div>
                <div className="screw2 screw2-do1"></div>
            </div>
            <div className="note note-re" id="1" onClick={() =>playNote(1)}>
                <div className="screw1 screw1-re"></div>
                <div className="screw2 screw2-re"></div>
            </div>
            <div className="note note-mi" id="2" onClick={() =>playNote(2)}>
                <div className="screw1 screw1-mi"></div>
                <div className="screw2 screw2-mi"></div>
            </div>
            <div className="note note-fa" id="3" onClick={() =>playNote(3)}>
                <div className="screw1 screw1-fa"></div>
                <div className="screw2 screw2-fa"></div>
            </div>
            <div className="note note-sol" id="4" onClick={() =>playNote(4)}>
                <div className="screw1 screw1-sol"></div>
                <div className="screw2 screw2-sol"></div>
            </div>
            <div className="note note-la" id="5" onClick={() =>playNote(5)}>
                <div className="screw1 screw1-la"></div>
                <div className="screw2 screw2-la"></div>
            </div>
            <div className="note note-si" id="6" onClick={() =>playNote(6)}>
                <div className="screw1 screw1-si"></div>
                <div className="screw2 screw2-si"></div>
            </div>
            <div className="note note-do2" id="7" onClick={() =>playNote(7)}>
                <div className="screw1 screw1-do2"></div>
                <div className="screw2 screw2-do2"></div>
            </div>
        </div>
        <div className="btn-group">
            <div id="btn1" className="btn btn-1" onClick={() => handleClick(note1, tempo1)}>
            <i className="fa fa-music" aria-hidden="true"></i>
            </div>
            <div id="btn2" className="btn btn-2" onClick={() => handleClick(note2, tempo2)}><i className="fa fa-music" aria-hidden="true">
            </i></div>
            <div id="btn3" className="btn btn-3"><i className="fa fa-music" aria-hidden="true"></i></div>
            <div id="btn4" className="btn btn-4"><i className="fa fa-music" aria-hidden="true"></i></div>
            <div id="btn5" className="btn btn-5"><i className="fa fa-music" aria-hidden="true"></i></div>
            <div id="btn6" className="btn btn-6"><i className="fa fa-music" aria-hidden="true"></i></div>
            <div id="btn7" className="btn btn-7"><i className="fa fa-music" aria-hidden="true"></i></div>
            <div id="btn8" className="btn btn-8"><i className="fa fa-music" aria-hidden="true"></i></div>
            <div id="btn9" className="btn btn-9"><i className="fa fa-music" aria-hidden="true"></i></div>

        </div>
    </div>
      <audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/1-DO.mp3" className="sound"></audio>
<audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/2-RE.mp3" className="sound"></audio>
<audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/3-MI.mp3" className="sound"></audio>
<audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/4-FA.mp3" className="sound"></audio>
<audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/5-SOL.mp3" className="sound"></audio>
<audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/6-LA.mp3" className="sound"></audio>
<audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/7-SI.mp3" className="sound"></audio>
<audio src="https://raw.githubusercontent.com/cartalan/Xilofono-Exercise/master/sound/8-DO.mp3" className="sound"></audio>

</div>
  );
};

export default MusicComponent;
