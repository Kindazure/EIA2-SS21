namespace Memory {

    //class for cards-objects
    class Card {
        pair: number;
        letter: string;

        constructor(_pair: number, _color: string) {
            this.pair = _pair;
            this.letter = _color;
        }
    }

    let time: Date;

    //important start arrays
    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cards: Card[] = [];
    let maxCards: number;
    let newCards: Card[];
    let data: string[] = [];
    let cardColor: string;
    let backCardColor: string;
    let fontColor: string;
    let cardsize: number;
    let font: string;

    setTimeout(function (): void { document.getElementById("startButton").addEventListener("click", startButton); }, 1000);

    //function for the beginning of the game
    function startButton(): void {

        let form: FormData = new FormData(document.forms[0]);

        let allinputs: HTMLCollectionOf<HTMLInputElement> = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName("input");
        
        for (let i: number = 4; i < allinputs.length; i++) {
            if  (allinputs[i].checked) {
                font = allinputs[i].value;
            }
        }



        let i: number = 0;
        for (var entry of form.entries()) {
            console.log(entry);
            data[i] = entry[1].toString();
            i++;
        }
        console.log(data);

        console.log(form.get("Radiogroup"));
        maxCards = +data[0] * 2;
        cardColor = data[1];
        fontColor = data[2];
        backCardColor = data[3];
        cardsize = +data[4] / 100;
        startGame();
    }

    //start function
    function startGame(): void {
        time = new Date();

        genCard();
        newCards = shuffleArray(cards.slice(0));
        showCards(newCards);
    }

    //generates the cards
    function genCard(): void {
        for (let i: number = 0; i < maxCards; i += 2) {
            let newCard: Card = new Card(i, letters[i]);
            cards[i] = newCard;
            cards[i + 1] = newCard;
        }
    }

    //shows the cards
    function showCards(cardsForDis: Card[]): void {
        let spielfeld: HTMLDivElement = <HTMLDivElement>document.getElementById("spielfeld");
        let k: number = 0;
        let j: number = 0;
        for (let i: number = 0; i < cardsForDis.length; i++) {
            let divKarte: HTMLDivElement = document.createElement("div");
            divKarte.setAttribute("class", "cards");
            divKarte.setAttribute("id", "id_" + i);
            divKarte.addEventListener("click", function (): void {
                turnAround(i);
            });
            if (i % 10 == 0 && i != 0) {
                k++;
                j = 0;
            }
            divKarte.innerHTML += "<div class='abdeck'></div>";
            divKarte.innerHTML += "<p class='saetze' id='satz_" + i + "'style=font-family:" + font + " style=color:'" + fontColor + "'>" + cardsForDis[i].letter + "</p>";
            divKarte.innerHTML += "<div class='backgroundCard' id='color_" + i + "' style='background-color:" + cardColor + ";'></div>";
            divKarte.style.backgroundImage = "url('https://www.transparenttextures.com/patterns/binding-dark.png')";
            divKarte.style.backgroundColor = backCardColor;
            divKarte.style.transform = "scale(" + cardsize + "," + cardsize + ")";

            //randomization of rotation and position
            divKarte.style.left = 152 * cardsize * j + "px";
            divKarte.style.top = 150 * cardsize * k + "px";
            let rotation: number = (Math.random() * 15) - 7.5;
            let randomUp: number = Math.random() * 10;
            let randomLeft: number = Math.random() * 10;

            divKarte.style.transform = "translate(" + randomUp + "px," + randomLeft + "px) rotate(" + rotation + "deg)";
            spielfeld.appendChild(divKarte);
            j++;
        }
    }

    //arrays and variables for game progress
    let turnedCards: number = 0;
    let oldCard: Card;
    let oldCardDiv: HTMLDivElement;
    let oldID: number;

    //main function for card selection
    function turnAround(id: number): void {
        if (oldID != id) {
            turnedCards += 1;
            if (turnedCards == 1 || turnedCards == 2) {
                let currentDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("id_" + id);
                let currentCard: Card = newCards[id];

                //making cards visible
                document.getElementById("color_" + id).style.opacity = "100%";
                document.getElementById("satz_" + id).style.opacity = "100%";

                //turn over first card
                if (turnedCards == 1) {
                    oldCard = currentCard;
                    oldCardDiv = currentDiv;
                    oldID = id;

                    //turn over second card
                } else {

                    //if you found a pair
                    if (oldCard.pair == currentCard.pair) {

                        setTimeout(function (): void {
                            currentDiv.remove();
                            oldCardDiv.remove();
                            turnedCards = 0;
                            oldID = null;

                            if (document.getElementById("spielfeld").innerHTML == "") {
                                win();
                            }
                        }, 2000);

                        //two different cards
                    } else {
                        setTimeout(function (): void {

                            document.getElementById("color_" + id).style.opacity = "0%";
                            document.getElementById("color_" + oldID).style.opacity = "0%";
                            document.getElementById("satz_" + id).style.opacity = "0%";
                            document.getElementById("satz_" + oldID).style.opacity = "0%";
                            turnedCards = 0;
                            oldID = null;
                        }, 2000);

                    }
                }
            }
        }
    }

    //sound 
    let soundPlayer: HTMLAudioElement = new Audio("fanfare.mp3");
    soundPlayer.volume = 0.2;

    //function for the win
    function win(): void {
        let backWin: HTMLDivElement = <HTMLDivElement>document.getElementById("Backwin");
        backWin.style.opacity = "100%";
        let newTime: Date = new Date();
        let gametime: number = time.getSeconds() - newTime.getSeconds();
        let gametime2: number = time.getMinutes() - newTime.getMinutes();

        if (gametime < 0) {
            gametime = - gametime;
        }
        if (gametime2 < 0) {
            gametime2 = - gametime2;
        }

        soundPlayer.play();
        //win text
        backWin.innerHTML = "<p>" + "You has won!" + "<br> Playtime: " + gametime2 + "m" + gametime + "s</p>";
    }

    //randomized cards-array
    function shuffleArray(array: Card[]): Card[] {
        for (let i: number = array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            let temp: Card = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}