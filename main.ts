input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    balls += 1
    basic.showNumber(balls)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # # . .
        . # . # .
        `)
    strikes += 1
    basic.showNumber(strikes)
})
input.onGesture(Gesture.Shake, function () {
    balls += 0
    strikes += 0
})
let strikes = 0
let balls = 0
basic.showIcon(IconNames.Heart)
basic.showNumber(0)
basic.forever(function () {
	
})
