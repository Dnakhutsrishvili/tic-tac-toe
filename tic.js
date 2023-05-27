const mainGame = {

    playerOneScore: 0,
    playerTwoScore: 0,

    board: document.querySelector("#board"),
    cubeArray: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    WINNING_COMBINATIONS: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],


    startBoard: function (order) {
        console.log(order)
        let clickOrder = order
        let popup = document.createElement("div")
        popup.className = "popup"
        let popupBox = document.createElement("div")
        popupBox.className = "popupBox"
        popup.appendChild(popupBox)
        let message = document.createElement("h1")
        message.className = "message"
        popupBox.appendChild(message)
        let score = document.createElement("p")
        popupBox.appendChild(score)
        let resetButton = document.createElement("button")
        resetButton.innerHTML = "Reset"
        resetButton.className = "reset"
        popupBox.appendChild(resetButton)
        this.board.className = "board"



        this.cubeArray.forEach((cube, index) => {
            let cubeItem = document.createElement("div");
            cubeItem.className = "cubeItem"
            cubeItem.innerHTML = cube
            this.board.appendChild(cubeItem)
            cubeItem.addEventListener("click", () => {
                if (this.cubeArray[index] == " ") {
                    clickOrder++
                    if (clickOrder % 2 == 0) {
                        let Ovisual = document.createElement("div")
                        Ovisual.className = "O"
                        cubeItem.appendChild(Ovisual)
                        this.cubeArray.splice(index, 1, "O")
                    } else {
                        let Xvisual = document.createElement("div")
                        Xvisual.className = "X"
                        cubeItem.appendChild(Xvisual)
                        this.cubeArray.splice(index, 1, "X")
                    }
                }
                let Xindexes = []
                let Oindexes = []
                this.cubeArray.map((item, index) => {
                    if (item == "X") {
                        Xindexes.push(index)
                    }
                    if (item == "O") {
                        Oindexes.push(index)
                    }
                })
                let gameState = null
                this.WINNING_COMBINATIONS.map((winnings) => {
                    if (Xindexes.toString().includes(winnings.toString()[0]) && Xindexes.toString().includes(winnings.toString()[2]) && Xindexes.toString().includes(winnings.toString()[4])) {
                        this.playerOneScore++
                        gameState = "player One wins"
                        this.board.appendChild(popup)
                    } else if (Oindexes.toString().includes(winnings.toString()[0]) && Oindexes.toString().includes(winnings.toString()[2]) && Oindexes.toString().includes(winnings.toString()[4])) {
                        this.playerTwoScore++
                        gameState = "player Two wins"
                        this.board.appendChild(popup)
                    } else if (Xindexes.length > 4 || Oindexes.length > 4 && gameState == null) {
                        gameState = "Draw"
                        this.board.appendChild(popup)
                    }
                })
                score.innerHTML = `Player one score : ${this.playerOneScore}  \n Player two score : ${this.playerTwoScore}`
                message.innerHTML = gameState
                resetButton.addEventListener("click", () => {
                    gameState = null
                    this.cubeArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
                    Xindexes = []
                    Oindexes = []
                    this.board.removeChild(popup)
                    let allcubes = document.querySelectorAll(".cubeItem")

                    allcubes.forEach((cube) => {
                        while (cube.hasChildNodes()) {
                            cube.removeChild(cube.firstChild)
                        }
                    })

                })
                console.log(Xindexes)
            })
        })

    }


}
