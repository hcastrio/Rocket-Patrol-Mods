// Name: Horacio Castillo Del Rio
// Project Title: Rocket Patrol Mods
// Date: 04-30-2022
// Time: 14 Hours

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.image('menuscreen', './assets/menuscreen.png');
      }

    create() {
        this.menuscreen = this.add.tileSprite(0, 0, 640, 480, 'menuscreen').setOrigin(0, 0);
        // menu text configuration
        let menuConfig0 = {
            fontFamily: 'Bebas Neue',
            fontSize: '38px',
            color: '#000',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 0
        }
        // menu text
        this.add.text(game.config.width / 2 + 4, game.config.height / 2 - borderUISize - borderPadding - 20, 'ROCKET PATROL', menuConfig0).setOrigin(0.5);
        let menuConfig2 = {
          fontFamily: 'Lobster',
          fontSize: '22px',
          color: '#000',
          align: 'center',
          padding: {
          top: 5,
          bottom: 5,
          },
          fixedWidth: 0
        }
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding + 94, 'Use Arrows/Mouse to move & Space/Left Click to fire', menuConfig2).setOrigin(0.5);
        let menuConfig3 = {
          fontFamily: 'Lobster',
          fontSize: '22px',
          color: '#000',
          align: 'center',
          padding: {
          top: 5,
          bottom: 5,
          },
          fixedWidth: 0
        }
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding + borderUISize + borderPadding + 120, 'Press [N] for Novice or [E] for Expert', menuConfig3).setOrigin(0.5);
        // define keys
        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyN)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            smallshipSpeed: 10,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyE)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            smallshipSpeed: 10,
            gameTimer: 45000
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
    }
}
  