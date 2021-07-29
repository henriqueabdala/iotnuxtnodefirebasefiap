// Express
const { Router } = require('express')
const router = Router()

// Johnny Five 
const { Board, Led } = require("johnny-five")
const board = new Board()

// Firebase
const firebase = require("firebase")
const firebaseConfig = require("./../config")
firebase.default.initializeApp(firebaseConfig);




board.on("ready", () => {
  const ledArduino = new Led(13);
  board.repl.inject({
    ledArduino
  });
  console.log("Arduino Inicializado!")
  const db = firebase.default.database().ref('led').on('value', snapshot => {
    let led = snapshot.val();
    if(led) {
      ledArduino.on()
    } else {
      ledArduino.off()
    }
  });
});

// Estado Inicial do Firebase
router.get('/arduino', (req, res) => {
  firebase.default.database().ref('led').once('value', snapshot => res.send(snapshot.val()));
});


// Post Acender/Apagar
router.post('/arduino', (req, res) => {
  if(req.body.led){
    firebase.default.database().ref('led').set(true)
    res.send("Lampada Acesa!")
  } else {
    firebase.default.database().ref('led').set(false)
    res.send("Lampada Apagada!")
  }
})
module.exports = router
