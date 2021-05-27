led.enable(false)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
OLED.init(128, 64)
basic.forever(function () {
    if (smarthome.ReadNoise(AnalogPin.P2) > 110) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (smarthome.ReadNoise(AnalogPin.P2) > 80 && smarthome.ReadNoise(AnalogPin.P2) <= 110) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
basic.forever(function () {
    OLED.writeNumNewLine(smarthome.ReadNoise(AnalogPin.P1))
})
