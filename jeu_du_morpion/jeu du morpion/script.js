// definition de jouer 1 et joueur 2
const player1 = "X";
const player2 = "O";
var playTime = player1;

// vérifier si le jeu est fini
var gameOver = false;

atualizaMostrador();
inicializarEspacos();

// fonction qui vérifie si gameover = true
// elle check aussi si le tour est du joueur1 (player1), en utilisant le querySelectorAll pour afficher l’image qui correspond au jouer qui est censé à jouer.
// setAttribute atribue une source de l’image X au joueur qui commence la partie.
function atualizaMostrador(){

    if (gameOver) {
        return;
    }

    if (playTime == player1) {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "img/x.png")
    } else {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "img/o.png")
    }   
    
}

function inicializarEspacos() {
    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function() {

            var audio = new Audio('blop.mp3');
            var audio2 = new Audio('pop.mp3');
            


            // si gameover, ne plus accepter aucun click
            if (gameOver) {
                return;
            }

            // si l’espace où il y était censé à avoir une image est égale à 0 et si c’est le joueur 1 qui joue, insérer un X (si c’est le player 2 qui joue, insérer un "O")
            if(this.getElementsByTagName('img').length == 0) {
                if (playTime == player1) {
                    
                    this.innerHTML = "<img src='img/x.png'>"; // si c’est le tour su player1, insérer l’image correspondante au player1, donc X
                    this.setAttribute("tour", player1); // Attribuer "tour" à player1 une fois qu’iel joue
                    playTime = player2; // une fois que le joueur 1 a joué, on passe le tour au joueur 2. Donc on fait une affectation de la variable "playTime" au joueur opposé
                    audio.play();

                } else {

                    this.innerHTML = "<img src='img/o.png'>"; // si c’est le tour su player2, insérer l’image correspondante au player2, donc O
                    this.setAttribute("tour", player2); // Attribuer "tour" à player2 une fois qu’iel joue.
                    playTime = player1; // une fois que le joueur 2 a joué, on passe le tour au joueur 1. Donc on fait une affectation de la variable "playTime" au joueur opposé
                    audio2.play();
                }
                atualizaMostrador();
                verificarVencedor();
            }
        });
    }
}

// fonction qui remet tout à zéro. Enlève toutes les images du carré et enlève l’attribute "tour" de chaque element espaço
function reinit() {

    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";

    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    document.getElementById("a1").setAttribute("tour", "");
    document.getElementById("a2").setAttribute("tour", "");
    document.getElementById("a3").setAttribute("tour", "");

    document.getElementById("b1").setAttribute("tour", "");
    document.getElementById("b2").setAttribute("tour", "");
    document.getElementById("b3").setAttribute("tour", "");

    document.getElementById("c1").setAttribute("tour", "");
    document.getElementById("c2").setAttribute("tour", "");
    document.getElementById("c3").setAttribute("tour", "");

    // fonction qui dit au programme que gameOver est false, donc on peut recliquer sur les carrés.
    gameOver = false;

    // fonction qui sert à cacher le texte qui dit qui a été le gagnant de l dernière partie.
    document.getElementById('textovencedor').innerText = "";
}




// il y a un problème dans cette fonction. Elle affiche "null a gagné" dès que j’ouvre la page et clique sur un espace

function verificarVencedor() {
    var a1 = document.getElementById("a1").getAttribute("tour");
    var a2 = document.getElementById("a2").getAttribute("tour");
    var a3 = document.getElementById("a3").getAttribute("tour");

    var b1 = document.getElementById("b1").getAttribute("tour");
    var b2 = document.getElementById("b2").getAttribute("tour");
    var b3 = document.getElementById("b3").getAttribute("tour");

    var c1 = document.getElementById("c1").getAttribute("tour");
    var c2 = document.getElementById("c2").getAttribute("tour");
    var c3 = document.getElementById("c3").getAttribute("tour");

    //créer variable "vainqueur", qui sera vide parce qu’on ne sait pas encore qui a gagné.
    var vencedor = "";

    // vérifier chaque combinaison gagnante du jeux en prennant un item qui est repeté pour chaque combinaison
    if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "") ) {
        vencedor = a1;
    } else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) {
        vencedor = b2;
    } else if ((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")) {
        vencedor = c3;
    } 

     if (vencedor != "") {
        gameOver = true;
        document.getElementById('textovencedor').innerText = vencedor + " a gagné !";
    } else if (a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3)
    {
        console.log("Match Nul")
        gameOver = true;
        document.getElementById('textovencedor').innerText = "Match Nul !";
    }
    

}





// essayer de faire les lignes