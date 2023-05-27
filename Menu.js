const Menu = {
    board: document.querySelector(".board"),

    mainMenu: function () {
        this.board.classList.remove("board");

        let mainMenuCont = document.createElement("div")
        mainMenuCont.className = "main"

        let text = document.createElement("p")
        text.innerHTML = "Choose symbol to start"
        let playerForm = document.createElement("form")
        let playerOption = document.createElement("select")
        let Xoption = document.createElement("option")
        Xoption.value = 0
        Xoption.innerHTML = "X"
        let Ooption = document.createElement("option")
        Ooption.value = 1
        Ooption.innerHTML = "O"
        let startButton = document.createElement("button")
        this.board.appendChild(playerForm)
        startButton.innerHTML = "Start"
        this.board.appendChild(mainMenuCont)
        mainMenuCont.appendChild(text)
        mainMenuCont.appendChild(playerForm)
        playerForm.appendChild(playerOption)
        playerForm.appendChild(startButton)
        playerOption.appendChild(Xoption)
        playerOption.appendChild(Ooption)
        startButton.addEventListener("click", () => { mainGame.startBoard(playerOption.value), this.board.removeChild(mainMenuCont) })
    }
}

Menu.mainMenu()