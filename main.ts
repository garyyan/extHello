//% color="#31C7D5" weight=10 icon="\uf1d1"
namespace garyRobot {
    export enum Motors {
        Left = 0x1,
        Right = 0x2,
        Centre = 0x3
    }
    //% blockId=robotbit_motor_run block="电机|%index|速度 %speed"
    //% weight=85
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRun(index: Motors, speed: number): void {
        
    }
}