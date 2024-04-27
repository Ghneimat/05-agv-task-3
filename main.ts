function junction5 () {
    while (L2 == 1 && R2 == 0 && (L1 == 1 && R1 == 1) && junction == 5) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        basic.pause(400)
        junction = 6
    }
}
function route_3 () {
    line_tracking()
    junction1()
}
function junction4R () {
    while (junction == 4 && R2 == 1) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        basic.pause(450)
        junction = 5
    }
}
function junction7 () {
    while (junction == 7 && (L1 == 0 && R1 == 0 && R2 == 1)) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        basic.pause(400)
        junction = 0
    }
}
function route_4 () {
    line_tracking()
    junction1()
    junction2()
    junction3()
    junction4L()
    junction7()
}
function junction1 () {
    while (L2 == 1 && R2 == 0 && junction == 1) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        basic.pause(400)
        junction = 2
    }
}
function read_grayscale () {
    L1 = 0
    L2 = 0
    R1 = 0
    R2 = 0
    M = 0
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL1) == 1) {
        L1 = 1
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR1) == 1) {
        R1 = 1
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1) {
        M = 1
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorL2) == 1) {
        L2 = 1
    }
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorR2) == 1) {
        R2 = 1
    }
}
function line_tracking () {
    read_grayscale()
    if (maqueenPlusV2.readLineSensorState(maqueenPlusV2.MyEnumLineSensor.SensorM) == 1) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
    } else {
        if (L1 == 0 && R1 == 1) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 120)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
        }
        if (L1 == 1 && R1 == 0) {
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 30)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 120)
        }
        if (L1 == 0 && R1 == 0 && (L2 == 0 && R2 == 0)) {
            maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
            basic.pause(500)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
            maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        }
    }
}
function junction4L () {
    while (junction == 4 && L2 == 1) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Backward, 50)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Forward, 50)
        basic.pause(450)
        junction = 7
    }
}
function junction2 () {
    while (L1 == 0 && R1 == 1 && junction == 2) {
        junction = 3
    }
}
function junction6 () {
    while (L1 == 0 && R1 == 0 && (L2 == 0 && R2 == 1) && junction == 6) {
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.LeftMotor, maqueenPlusV2.MyEnumDir.Forward, 70)
        maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.RightMotor, maqueenPlusV2.MyEnumDir.Backward, 60)
        basic.pause(400)
        junction = 0
    }
}
function route_1 () {
    line_tracking()
    junction1()
    junction2()
    junction3()
    junction4R()
}
function route_2 () {
    line_tracking()
    junction1()
    junction2()
    junction3()
    junction4R()
    junction5()
    junction6()
}
function junction3 () {
    while (L2 == 1 && R2 == 1 && junction == 3) {
        basic.pause(400)
        junction = 4
    }
}
let M = 0
let R1 = 0
let L1 = 0
let R2 = 0
let L2 = 0
let junction = 0
maqueenPlusV2.I2CInit()
junction = 1
basic.forever(function () {
    route_1()
})
