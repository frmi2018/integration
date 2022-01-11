/*
Version modifié du tutoriel

Remise en forme du javaScript avec des fonctions
Mise en page auto selon le nombre de brique
Ajout couleur brique
Ajout des niveaux
Augmentation vitesse de la balle selon niveau (max 5)
*/

var canvas = document.getElementById("myCanvas"); // assigner une zone graphique (élément HTML <canvas>) &agrave; la variable canvas
var ctx = canvas.getContext("2d"); //définition du contexte de représentation
var ballRadius = 5; // rayon balle
let x = canvas.width/2; // position x balle
let y = canvas.height-30; // position y balle
let speedBall = 2; //vitesse de la balle
let dx = speedBall; // direction x balle
let dy = -speedBall; // direction y balle
var paddleHeight = 10; // hauteur raquette
var paddleWidth = 75; // largeur raquette
var paddleX = (canvas.width-paddleWidth)/2; // position x de la raquette (au centre de la raquette)
var rightPressed = false; // test touche droite clavier
var leftPressed = false; // test touche gauche clavier
var brickRowCount = 6 // nb de ligne de brique
var brickColumnCount = 10 ; // nb de colonne de brique
var brickHeight = 10; // hauteur brique
var brickPadding = 2; // espace entre brique
var brickOffsetTop = 60; // position haut
var brickOffsetLeft = 30; // position gauche
var brickWidth = (((canvas.width - (brickOffsetLeft * 2)) - ((brickColumnCount - 1) * brickPadding)) / brickColumnCount);
var bricks = []; // création d'un tableau de brique
var spaceScore = 20; // espace pour affiche Score/vies et niveau

// création d'un niveau de jeu
function createBricks() {
    for(var c=0; c<brickColumnCount; c++) { // pour toutes les colonnes
        bricks[c] = []; // ajouter colonne dans tableau brique
        for(var r=0; r<brickRowCount; r++) { // pour toutes les lignes
            bricks[c][r] = { x: 0, y: 0, status: 1 }; // ajouter objet coordonnés x,y et status (visible ou pas) &agrave; chaque brique de colonne c et ligne r
        }
    }
}
// Quelle touche appuyé ?
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}
// Quelle touche relaché ?
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
// mouvement de la souris
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft; // e.clientX position horizontale de la souris dans la fen&ecirc;tre de visualisation
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
// test collision balle et brique
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) { // brique visible ?
                // coordonnés x,y balle dans brique ?
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy; // changer direction y de la balle
                    b.status = 0; // cacher brique
                    nbBrick -=1; // enlever une brique
                    score++; // augmenter score
                    if(nbBrick == 0) {
                        alert("YOU WIN, CONGRATS!\nVotre score : "+score)
                        level +=1;
                        nbBrick = brickRowCount*brickColumnCount;
                        createBricks();
                        if (speedBall <= 4) {
                            speedBall ++;
                        }
                        init();
                    }
                }
            }
        }
    }
}
// afficher score
function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score "+score, 8, 20);
}
// afficher vies
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}
// afficher level
function drawLevel() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Level: "+level, canvas.width-280, 20);
}
// afficher balle
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); // dessin balle
    ctx.fillStyle = "#0095DD"; // couleur remplissage
    ctx.fill(); // remplir balle
    ctx.closePath();
}
// afficher raquette
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight); // dessiner un rectangle au coordonnés x,y
    ctx.fillStyle = "#0095DD"; // couleur de remplissage
    ctx.fill(); // remplir le rectangle
    ctx.closePath();
}
// afficher les briques
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) { // pour toutes les colonnes
        for(var r=0; r<brickRowCount; r++) { // pour toutes les lignes
            if (bricks[c][r].status == 1) { // test si brique visible ou pas
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft; // Position X = (colonne x (largeur + espace brique)) + décalage gauche
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop; // Position Y = (ligne x (hauteur + espace brique)) + décalage haut
            bricks[c][r].x = brickX; // ajouter coordonné X &agrave; la brique colonne c et ligne r
            bricks[c][r].y = brickY; // ajouter coordonné Y &agrave; la brique colonne c et ligne r
            ctx.beginPath(); // ?
            ctx.rect(brickX, brickY, brickWidth, brickHeight); // dessiner un rectangle au coordonnés x,y
            switch(r) {
                case 0:
                ctx.fillStyle = "#0095DD"; // couleur de remplissage
                break;
                case 1:
                ctx.fillStyle = 'orange'; // couleur de remplissage
                break;
                case 2:
                ctx.fillStyle = 'brown'; // couleur de remplissage
                break;
                case 3:
                ctx.fillStyle = 'yellow'; // couleur de remplissage
                break;
                case 4:
                ctx.fillStyle = 'green'; // couleur de remplissage
                break;
                case 5:
                ctx.fillStyle = 'blue'; // couleur de remplissage
                break;
            }
            ctx.fill(); // remplir le rectangle
            ctx.closePath(); // ?
            }
        }
    }
} 
function moveBall() {
    // balle touche écran gauche ou droite ?
    // si position x balle + direction x supérieur largeur écran de jeu - taille balle ou position x balle + direction x inférieur rayon balle
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx; // inverser direction x de la balle
    }
    // balle en haut de l'écran ?
    // si position y balle + direction y balle inférieur rayon balle
    if(y + dy < ballRadius+spaceScore) {
        dy = -dy; // inverser direction y de la balle
    }
    // SINON SI position PLUS direction y balle SUPERIEUR hauteur écran de jeu MOINS le rayon balle
    else if(y + dy > canvas.height-ballRadius) {
        // balle sur raquette ?
        // SI position x balle SUPERIEUR position x raquette ET position x balle INFERIEUR position x raquette PLUS largeur raquette
        if(x > paddleX && x < paddleX + paddleWidth) {
            // SI position y balle EGAL position y balle MOINS hauteur raquette
            if(y = y-paddleHeight){
            dy = -dy  ; // inverser direction y balle
			}
        } else {
            lives--;
            if(!lives) {
                alert("GAME OVER\nVotre score : "+score);
                newGame();
                createBricks();
            } else {
                init();
            }
        }
    }
}
function init() {
    // réinitialiser position balle et raquette
    x = canvas.width/2;
    y = canvas.height-30;
    dx = speedBall;
    dy = -speedBall;
    paddleX = (canvas.width-paddleWidth)/2;
}
function newGame(){
    score = 0; // score joueur
    lives = 3; // vie joueur
    level = 1; // niveau jeu
    speedBall = 2;
    nbBrick = brickRowCount*brickColumnCount;
    createBricks();
    init();
}
function player() {
    // test touche droite et si raquette touche pas le bord gauche de l'écran de jeu
    // SI touche droite pressé ET position x raquette INFERIEUR largeur écran de jeu MOINS largeur raquette    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7; // déplacer raquette vers la droite de 7 pixels
    }
    // test touche gauche et si raquette touche pas le bord droit de l'écran de jeu
    // SINON SI touche gauche pressé ET position x raquette SUPERIEUR &agrave; 0
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7; // déplacer raquette vers la gauche de 7 pixels
    }
}
function draw() { // affichage des éléments du jeu
    ctx.clearRect(0, 0, canvas.width, canvas.height); // effacer ecran du jeu
    drawBricks(); // afficher briques
    drawBall(); // afficher balle
    drawPaddle(); // afficher raquette
    drawScore(); // afficher score
    drawLives(); // afficher vie
    drawLevel(); // afficher level
    collisionDetection(); // test collision balle/brique
    moveBall(); // déplacer la balle
    player(); // test touche et souris
    // déplacer balle
    x += dx;
    y += dy;
    requestAnimationFrame(draw); // fonction recursive (boucle sur elle-m&ecirc;me)
}

// écoute des évènements
document.addEventListener("keydown", keyDownHandler, false); // test si touche clavier appuyé
document.addEventListener("keyup", keyUpHandler, false); // test si touche clavier relaché
document.addEventListener("mousemove", mouseMoveHandler, false); // 

// Programme principal
newGame();
draw();