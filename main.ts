function led_walk () {
    strip.shift(1)
    strip.show()
}
function fade_color () {
    strip.clear()
    for (let index = 0; index < 4; index++) {
        trailing2("red")
        trailing2("green")
        trailing2("blue")
        trailing2("yellow")
        trailing2("purple")
        trailing2("turcoaz")
    }
}
function sparks () {
    strip.clear()
    for (let index = 0; index < 1000; index++) {
        strip.clear()
        for (let index = 0; index < 2; index++) {
            strip.setPixelColor(randint(0, led_count), neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            strip.show()
        }
    }
}
function led_build (num: number) {
    strip.setPixelColor(0, num)
    strip.show()
    strip.shift(1)
    control.waitMicros(50000)
}
function rainbow () {
    strip.showRainbow(1, led_count)
    strip.show()
    control.waitMicros(10000000)
    for (let index = 0; index < led_count; index++) {
        strip.shift(1)
        strip.setPixelColor(0, neopixel.rgb(randint(1, 255), randint(1, 255), randint(1, 255)))
        strip.show()
        control.waitMicros(100000)
    }
}
function train () {
    strip.clear()
    for (let index = 0; index < led_count / 6; index++) {
        bulid_train()
        for (let index = 0; index < 6; index++) {
            led_walk()
            control.waitMicros(50000)
        }
    }
    bulid_train()
}
function bulid_train () {
    led_build(neopixel.colors(NeoPixelColors.Orange))
    led_build(neopixel.colors(NeoPixelColors.Indigo))
    led_build(neopixel.colors(NeoPixelColors.Green))
    led_build(neopixel.colors(NeoPixelColors.Yellow))
    led_build(neopixel.colors(NeoPixelColors.Red))
    led_build(neopixel.colors(NeoPixelColors.Blue))
}
function RG () {
    strip.clear()
    for (let index = 0; index < 16; index++) {
        strip.clear()
        strip.setPixelColor(0, neopixel.rgb(255, 25, 10))
        strip.setPixelColor(1, neopixel.rgb(100, 255, 25))
        for (let index = 0; index < led_count / 2; index++) {
            strip.shift(2)
            strip.setPixelColor(0, neopixel.rgb(255, 25, 10))
            strip.setPixelColor(1, neopixel.rgb(100, 255, 25))
            strip.show()
            control.waitMicros(20000)
        }
    }
}
function trailing2 (text: string) {
    if (text == "red") {
        red = 255
        green = 0
        blue = 0
    } else if (text == "green") {
        red = 0
        green = 255
        blue = 0
    } else if (text == "blue") {
        red = 0
        green = 0
        blue = 255
    } else if (text == "yellow") {
        red = 255
        green = 255
        blue = 0
    } else if (text == "purple") {
        red = 255
        green = 0
        blue = 255
    } else if (text == "turcoaz") {
        red = 0
        green = 255
        blue = 255
    } else {
    	
    }
    for (let index = 0; index < 2; index++) {
        led_build(neopixel.rgb(red, green, blue))
        led_build(neopixel.rgb(Math.max(0, red - 55), Math.max(0, green - 55), Math.max(0, blue - 55)))
        led_build(neopixel.rgb(Math.max(0, red - 115), Math.max(0, green - 115), Math.max(0, blue - 115)))
        led_build(neopixel.rgb(Math.max(0, red - 165), Math.max(0, green - 165), Math.max(0, blue - 165)))
        led_build(neopixel.rgb(Math.max(0, red - 215), Math.max(0, green - 215), Math.max(0, blue - 215)))
        led_build(neopixel.rgb(Math.max(0, red - 230), Math.max(0, green - 230), Math.max(0, blue - 230)))
    }
}
let blue = 0
let green = 0
let red = 0
let strip: neopixel.Strip = null
let led_count = 0
led_count = 48
strip = neopixel.create(DigitalPin.P0, led_count, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P1, led_count, NeoPixelMode.RGB)
basic.forever(function () {
    train()
    sparks()
    fade_color()
    RG()
    rainbow()
})
