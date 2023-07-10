// Makin pictures undraggable
    document.getElementById("rspPlayerIMG").setAttribute("draggable", false);
    document
      .getElementById("rspComputerIMG")
      .setAttribute("draggable", false);

// Initializng Dynamical Data
     let totalMatches = 0
     let playerWINS = 0
     let computerWINS = 0
     let ties = 0


// Rules:
// Rock, Scissors, Paper ... Rock
//   0   >   1     >   2 >    0
// 0 > 1 Rock(0) > Scissors(1)
// 1 < 0 Scissors(1) > Paper(2)
// 2 > 0 Paper > Rock(0)


     let Rock = () => {
      totalMatches++
      // Computer Choice
      let computerRSP = Math.floor(Math.random() * 3);
      let imgRSP = ['rock','scissors','paper']
      let computerChoosenRSP_IMG = imgRSP[computerRSP]

      // Player image to change
      document.getElementById("rspPlayerIMG").src = "media/" + 'rock' + ".png";
      // Computer image to change
      document.getElementById("rspComputerIMG").src = "media/" + computerChoosenRSP_IMG + ".png";
      // Both images to move closer
      document.querySelector('main').style.justifyContent = 'center'

      if (computerRSP === 0) {
        ties++
        document.getElementById('ties').innerHTML = `Draws: ${ties}`
        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
        document.getElementById('winnerIS').innerHTML = 'Draw'

      }

      else if (computerRSP === 1) {
        playerWINS++;
        document.getElementById('playerWINS').innerHTML = `Player Wins: ${playerWINS}`
        document.getElementById('winnerIS').innerHTML = 'Winner: Player'

        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
      }

      else if (computerRSP === 2) {
        computerWINS++;
        document.getElementById('computerWINS').innerHTML = `Computer Wins: ${computerWINS}`
        document.getElementById('winnerIS').innerHTML = 'Winner: Computer'

        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
        }


    }
    let Scissors = () => {
      console.log("Scissors Pressed")
      totalMatches++

      // Computer Choice
      let computerRSP = Math.floor(Math.random() * 3);
      let imgRSP = ['rock','scissors','paper']

      let computerChoosenRSP_IMG = imgRSP[computerRSP]
      document.getElementById("rspPlayerIMG").src = "media/" + 'scissors' + ".png";
      document.getElementById("rspComputerIMG").src = "media/" + computerChoosenRSP_IMG + ".png";
      document.querySelector('main').style.justifyContent = 'center'

      if (computerRSP === 0) {
        computerWINS++;
        document.getElementById('computerWINS').innerHTML = `Computer Wins: ${computerWINS}`
        document.getElementById('winnerIS').innerHTML = 'Winner: Computer'

        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
        }

      else if (computerRSP === 1) {
        ties++
        document.getElementById('ties').innerHTML = `Draws: ${ties}`
        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
        document.getElementById('winnerIS').innerHTML = 'Draw'
      }

        else  if (computerRSP === 2) {
        playerWINS++;
        document.getElementById('playerWINS').innerHTML = `Player Wins: ${playerWINS}`
        document.getElementById('winnerIS').innerHTML = 'Winner: Player'
        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
      }


    }

    let Paper = () => {
      console.log("Paper Pressed")
      totalMatches++


      // Computer Choice
      let computerRSP = Math.floor(Math.random() * 3);
      let imgRSP = ['rock','scissors','paper']

      let computerChoosenRSP_IMG = imgRSP[computerRSP]
      document.getElementById("rspPlayerIMG").src = "media/" + 'paper' + ".png";
      document.getElementById("rspComputerIMG").src = "media/" + computerChoosenRSP_IMG + ".png";
      document.querySelector('main').style.justifyContent = 'center'


      if (computerRSP === 0) {
        playerWINS++;
        document.getElementById('playerWINS').innerHTML = `Player Wins: ${playerWINS}`
        document.getElementById('winnerIS').innerHTML = 'Winner: Player'
        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
      }
      else  if (computerRSP === 1) {
        computerWINS++;
        document.getElementById('computerWINS').innerHTML = `Computer Wins: ${computerWINS}`
        document.getElementById('winnerIS').innerHTML = 'Winner: Computer'
        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
        }

      else if (computerRSP === 2) {
        ties++
        document.getElementById('ties').innerHTML = `Draws: ${ties}`
        document.getElementById('winnerIS').innerHTML = 'Draw'
        document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
      }
          }



          let Reset = () => {
      document.getElementById('reset').addEventListener('click', () => {
      totalMatches = 0
      playerWINS = 0
      computerWINS = 0
      ties = 0
      document.getElementById('ties').innerHTML = `Draws: ${ties}`
      document.getElementById('playerWINS').innerHTML = `Player Wins: ${playerWINS}`
      document.getElementById('totalMatches').innerHTML = `Total Matches: ${totalMatches}`
      document.getElementById('computerWINS').innerHTML = `Computer Wins: ${computerWINS}`

      document.getElementById('rspPlayerIMG').src = "/media/rsp.png"
      document.getElementById('rspComputerIMG').src = "/media/rsp.png"

    })
  }

  console.log(`totalMatches: ${totalMatches}, playerWINS: ${playerWINS}, computerWINS: ${computerWINS}, Draws: ${ties}`)



