// Enemies our player must avoid
var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.speed = this.fetch_speed();
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if (this.x < 500) {
        this.x += this.speed * dt;

    } else {
        this.x = -100;
        this.speed = this.fetch_speed();
    }
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

var max_speed = 20;
var min_speed = 15;

Enemy.prototype.fetch_speed = function() {
    return Math.floor(Math.random() * (max_speed - min_speed + 1) + min_speed) * 10;
};

// Drawing enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 430;
};

var points = 0;
var health = 2;

/* score is an id used in html and is used in showing alerts to user */
/* while points is used in internal working of js files */

Player.prototype.update = function() {
    for (var i = 0; i < 4; i++) {
        if ((this.x + 68 > allEnemies[i].x) && (this.x < allEnemies[i].x + 68) && (this.y + 68 > allEnemies[i].y) && (this.y < allEnemies[i].y + 68)) {
            health--;
            document.getElementById("lives").innerHTML = health;
            this.reset();
            if (health < 0) {

                if (points <= 4) {
                    alert("Score of " + points + " is very low, Go home kid. -_-");
                    points = 0;
                    health = 2;
                    document.getElementById("score").innerHTML = points;
                    document.getElementById("lives").innerHTML = health;
                } else if (points > 4 && points <= 10) {
                    alert("Nice Try, You scored " + points);
                    points = 0;
                    health = 2;
                    document.getElementById("score").innerHTML = points;
                    document.getElementById("lives").innerHTML = health;
                } else if (points > 10 && points <= 20) {
                    alert("A score of " + points + " well done !");
                    points = 0;
                    health = 2;
                    document.getElementById("score").innerHTML = points;
                    document.getElementById("lives").innerHTML = health;
                } else {
                    alert("You scored " + points + ", like a pro !");
                    points = 0;
                    health = 2;
                    document.getElementById("score").innerHTML = points;
                    document.getElementById("lives").innerHTML = health;
                }
            }
        }
    }
};

Player.prototype.handleInput = function(key) {
    if (key === 'up') {
        if (this.y > 40) {
            this.y -= 100;
        } else {
            this.reset();
            points++;
            if (points % 10 === 0) {
                health++;
                document.getElementById("lives").innerHTML = health;
            }
            document.getElementById("score").innerHTML = points;
        }
    } else if (key === 'down') {
        if (this.y < 430) {
            this.y += 100;
        } else {
            this.reset();
        }
    } else if (key === 'left') {
        if (this.x > 0)
            this.x -= 100;
    } else if (key === 'right') {
        if (this.x < 400)
            this.x += 100;
    }
};
var allEnemies = [
    new Enemy(0, 60),
    new Enemy(0, 60),
    new Enemy(0, 140),
    new Enemy(0, 210)
];
var player = new Player(200, 430);
// keyboard functioning
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});