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
function OneDown () {
    strip.clear()
    strip2.clear()
    total_leds = led_count * 2
    counter = 0
    counter2 = 0
    for (let index = 0; index < total_leds; index++) {
        while (counter < total_leds) {
            if (counter2 < led_count) {
                strip.setPixelColor(counter - 1, neopixel.colors(NeoPixelColors.Black))
                strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
                strip.show()
                counter = counter + 1
                control.waitMicros(100000)
                if (counter == led_count) {
                    strip.setPixelColor(counter - 1, neopixel.colors(NeoPixelColors.Black))
                    strip.show()
                    counter = 0
                    break;
                }
            } else {
                while (counter <= total_leds - counter2) {
                    strip.setPixelColor(counter - 1, neopixel.colors(NeoPixelColors.Black))
                    strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
                    strip.show()
                    counter = counter + 1
                    control.waitMicros(100000)
                }
                counter2 = counter2 + 1
                counter = 0
                if (counter2 > total_leds) {
                    break;
                }
            }
        }
        while (counter < led_count - counter2) {
            strip2.setPixelColor(counter - 1, neopixel.colors(NeoPixelColors.Black))
            strip2.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
            strip2.show()
            counter = counter + 1
            control.waitMicros(100000)
        }
        counter2 = counter2 + 1
        counter = 0
    }
    counter = 0
    for (let index = 0; index < led_count; index++) {
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        control.waitMicros(100000)
        counter = counter + 1
    }
    counter = 0
    for (let index = 0; index < led_count; index++) {
        strip2.setPixelColor(counter, neopixel.colors(NeoPixelColors.Black))
        strip2.show()
        control.waitMicros(100000)
        counter = counter + 1
    }
}
function led_build (num: number) {
    strip.setPixelColor(0, num)
    strip.show()
    strip.shift(1)
    control.waitMicros(50000)
}
function end_to_end () {
    walk_counter = 0
    for (let index = 0; index < led_count; index++) {
        strip.setPixelColor(walk_counter, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.setPixelColor(walk_counter, neopixel.rgb(0, 0, 0))
        walk_counter += 1
        control.waitMicros(500000)
    }
    strip.show()
    walk_counter = 0
    for (let index = 0; index < led_count; index++) {
        strip2.setPixelColor(walk_counter, neopixel.colors(NeoPixelColors.Red))
        strip2.show()
        strip2.setPixelColor(walk_counter, neopixel.rgb(0, 0, 0))
        walk_counter += 1
        control.waitMicros(500000)
    }
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
function led_walk () {
    strip.shift(1)
    strip.show()
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
let walk_counter = 0
let counter2 = 0
let counter = 0
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
let led_count = 0
let total_leds = 0
// led_count = 0
// led_count = 8
total_leds = led_count * 2
led_count = 8
strip = neopixel.create(DigitalPin.P0, led_count, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, led_count, NeoPixelMode.RGB)
basic.forever(function () {
    OneDown()
})
