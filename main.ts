namespace SpriteKind {
    export const Attacker = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f c f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f c c f f f f f f f 
`
}
function Enemy1 (num: number) {
    x1 = scene.screenWidth() / 2 - 10 * (num / 2)
    for (let index = 0; index < num; index++) {
        enemy1 = sprites.create(img`
. . . 3 3 . . . 
. . . 3 3 . . . 
3 . . 3 3 . . 3 
3 3 3 3 3 3 3 3 
3 3 2 3 3 2 3 3 
. 3 3 6 6 3 3 . 
. 3 3 3 3 3 3 . 
. . 3 . . 3 . . 
`, SpriteKind.Enemy)
        enemy1.setPosition(x1, scene.screenHeight() * 0.5)
        x1 += 12
        enemy1.setVelocity(-5, 0)
    }
}
scene.onOverlapTile(SpriteKind.Attacker, myTiles.tile3, function (sprite, location) {
    sprite.setKind(SpriteKind.Enemy)
    sprite.y = scene.screenHeight() * 0.5
})
function Enemy3 (num: number) {
    x3 = scene.screenWidth() / 2 - 10 * (num / 2)
    for (let index = 0; index < num; index++) {
        enemy3 = sprites.create(img`
. . . 5 5 . . . 
5 5 . 5 5 . 5 5 
5 a 5 5 5 5 a 5 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 
5 5 4 . . 4 5 5 
. . . . . . . . 
`, SpriteKind.Enemy)
        enemy3.setPosition(x3, scene.screenHeight() * 0.3)
        x3 += 12
        enemy3.setVelocity(-5, 0)
    }
}
function Enemy2 (num: number) {
    x2 = scene.screenWidth() / 2 - 10 * (num / 2)
    for (let index = 0; index < num; index++) {
        enemy2 = sprites.create(img`
. . 7 7 7 7 . . 
. 7 7 4 4 7 7 . 
7 7 4 2 2 4 7 7 
7 7 4 2 2 4 7 7 
7 7 7 4 4 7 7 7 
. . 7 7 7 7 . . 
. . . 7 7 . . . 
. 7 7 . . 7 7 . 
`, SpriteKind.Enemy)
        enemy2.setPosition(x2, scene.screenHeight() * 0.4)
        x2 += 12
        enemy2.setVelocity(-5, 0)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
    remainingEnemy += -1
    if (remainingEnemy < 1) {
        currentLevel += 1
        newLevel(currentLevel)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
2 2 
2 2 
2 2 
2 2 
`, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Attacker, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(2)
    remainingEnemy += -1
    if (remainingEnemy < 1) {
        currentLevel += 1
        newLevel(currentLevel)
    }
})
sprites.onOverlap(SpriteKind.Attacker, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    otherSprite.destroy(effects.rings, 500)
    info.changeLifeBy(-1)
    pause(1000)
    newShip(1)
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile1, function (sprite, location) {
    sprite.setVelocity(5 * direction, 0)
})
function newLevel (num: number) {
    Enemy1(6 + num)
    Enemy2(8 + num)
    Enemy3(2 * num)
    remainingEnemy = 2 * num + (14 + 2 * num)
}
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile2, function (sprite, location) {
    sprite.setKind(SpriteKind.Attacker)
    sprite.setVelocity(0, 20)
})
function newShip (level: number) {
    mySprite = sprites.create(img`
. . . . . . . . . . 
. . . . 1 1 . . . . 
. . . . 1 1 . . . . 
1 . . 1 9 9 1 . . 1 
1 . 1 1 7 7 1 1 . 1 
1 1 1 7 7 7 7 1 1 1 
1 1 1 1 1 1 1 1 1 1 
1 . . . 2 2 . . . 1 
`, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
    mySprite.setPosition(scene.screenWidth() / 2, scene.screenHeight() * 0.9)
}
let RandomY = 0
let RandomX = 0
let mySprite: Sprite = null
let projectile: Sprite = null
let remainingEnemy = 0
let enemy2: Sprite = null
let x2 = 0
let enemy3: Sprite = null
let x3 = 0
let enemy1: Sprite = null
let x1 = 0
let currentLevel = 0
let direction = 0
game.showLongText("Galaxiga!  Press A to start.", DialogLayout.Bottom)
info.setScore(0)
info.setLife(3)
direction = 1
currentLevel = 1
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103030303030303030303`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3],
            TileScale.Sixteen
        ))
effects.starField.startScreenEffect()
newShip(1)
newLevel(currentLevel)
game.onUpdateInterval(2000, function () {
    direction = direction * -1
})
game.onUpdateInterval(10000, function () {
    tiles.setTileAt(tiles.getTileLocation(RandomX, RandomY), myTiles.tile1)
    RandomX = Math.randomRange(2, 8)
    RandomY = Math.randomRange(2, 3)
    tiles.setTileAt(tiles.getTileLocation(RandomX, RandomY), myTiles.tile2)
})
