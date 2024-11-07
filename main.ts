/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mohammed Afheej
 * Created on: November 2024
 * This program 
*/
// setup
radio.setGroup(91)
let distanceOfObject: number
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    //distanceOfObject
    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // if distance is greater than 10
    if (distanceOfObject > 10) {
        basic.showIcon(IconNames.Triangle)
        radio.sendString("To Close")
        basic.showIcon(IconNames.Happy)
    }
})

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})
