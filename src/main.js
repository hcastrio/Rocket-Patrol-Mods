// Name: Horacio Castillo Del Rio
// Project Title: Rocket Patrol Mods
// Date: 04-30-2022
// Time: 14 Hours

// Point Values: (Total Points: 100)

// - Track a high score that persists across scenes and display it in the UI (5)
// - Create a new scrolling tile sprite for the background (5)
// - Replace the UI borders with new artwork (10)
// - Display the time remaining (in seconds) on the screen (10)
// - Create a new title screen (e.g., new artwork, typography, layout) (10)
// - Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
// - Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
// - Implement mouse control for player movement and mouse click to fire (20)

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keySPACE, keyR, keyLEFT, keyRIGHT, mouse, keyN, keyE;
