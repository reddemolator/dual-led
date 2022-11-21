def fade_color():
    strip.clear()
    for index in range(4):
        trailing2("red")
        trailing2("green")
        trailing2("blue")
        trailing2("yellow")
        trailing2("purple")
        trailing2("turcoaz")
def sparks():
    strip.clear()
    for index2 in range(1000):
        strip.clear()
        for index3 in range(2):
            strip.set_pixel_color(randint(0, led_count),
                neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            strip.show()
def OneDown():
    global total_leds, counter, counter2
    strip.clear()
    strip2.clear()
    total_leds = led_count * 2
    counter = 0
    counter2 = 0
    for index4 in range(total_leds):
        while counter < total_leds:
            if counter2 < led_count:
                strip.set_pixel_color(counter - 1, neopixel.colors(NeoPixelColors.BLACK))
                strip.set_pixel_color(counter, neopixel.colors(NeoPixelColors.RED))
                strip.show()
                counter = counter + 1
                control.wait_micros(100000)
                if counter == led_count:
                    strip.set_pixel_color(counter - 1, neopixel.colors(NeoPixelColors.BLACK))
                    strip.show()
                    counter = 0
                    break
            else:
                while counter <= total_leds - counter2:
                    strip.set_pixel_color(counter - 1, neopixel.colors(NeoPixelColors.BLACK))
                    strip.set_pixel_color(counter, neopixel.colors(NeoPixelColors.RED))
                    strip.show()
                    counter = counter + 1
                    control.wait_micros(100000)
                counter2 = counter2 + 1
                counter = 0
                if counter2 > total_leds:
                    break
        while counter < led_count - counter2:
            strip2.set_pixel_color(counter - 1, neopixel.colors(NeoPixelColors.BLACK))
            strip2.set_pixel_color(counter, neopixel.colors(NeoPixelColors.RED))
            strip2.show()
            counter = counter + 1
            control.wait_micros(100000)
        counter2 = counter2 + 1
        counter = 0
    counter = 0
    for index5 in range(led_count):
        strip.set_pixel_color(counter, neopixel.colors(NeoPixelColors.BLACK))
        strip.show()
        control.wait_micros(100000)
        counter = counter + 1
    counter = 0
    for index6 in range(led_count):
        strip2.set_pixel_color(counter, neopixel.colors(NeoPixelColors.BLACK))
        strip2.show()
        control.wait_micros(100000)
        counter = counter + 1
def led_build(num: number):
    strip.set_pixel_color(0, num)
    strip.show()
    strip.shift(1)
    control.wait_micros(50000)
def end_to_end():
    global walk_counter
    walk_counter = 0
    for index7 in range(led_count):
        strip.set_pixel_color(walk_counter, neopixel.colors(NeoPixelColors.RED))
        strip.show()
        strip.set_pixel_color(walk_counter, neopixel.rgb(0, 0, 0))
        walk_counter += 1
        control.wait_micros(500000)
    strip.show()
    walk_counter = 0
    for index8 in range(led_count):
        strip2.set_pixel_color(walk_counter, neopixel.colors(NeoPixelColors.RED))
        strip2.show()
        strip2.set_pixel_color(walk_counter, neopixel.rgb(0, 0, 0))
        walk_counter += 1
        control.wait_micros(500000)
def rainbow():
    strip.show_rainbow(1, led_count)
    strip.show()
    control.wait_micros(10000000)
    for index9 in range(led_count):
        strip.shift(1)
        strip.set_pixel_color(0,
            neopixel.rgb(randint(1, 255), randint(1, 255), randint(1, 255)))
        strip.show()
        control.wait_micros(100000)
def RG():
    strip.clear()
    for index10 in range(16):
        strip.clear()
        strip.set_pixel_color(0, neopixel.rgb(255, 25, 10))
        strip.set_pixel_color(1, neopixel.rgb(100, 255, 25))
        for index11 in range(led_count / 2):
            strip.shift(2)
            strip.set_pixel_color(0, neopixel.rgb(255, 25, 10))
            strip.set_pixel_color(1, neopixel.rgb(100, 255, 25))
            strip.show()
            control.wait_micros(20000)
def led_walk():
    strip.shift(1)
    strip.show()
def train():
    strip.clear()
    for index12 in range(led_count / 6):
        bulid_train()
        for index13 in range(6):
            led_walk()
            control.wait_micros(50000)
    bulid_train()
def bulid_train():
    led_build(neopixel.colors(NeoPixelColors.ORANGE))
    led_build(neopixel.colors(NeoPixelColors.INDIGO))
    led_build(neopixel.colors(NeoPixelColors.GREEN))
    led_build(neopixel.colors(NeoPixelColors.YELLOW))
    led_build(neopixel.colors(NeoPixelColors.RED))
    led_build(neopixel.colors(NeoPixelColors.BLUE))
def trailing2(text: str):
    global red, green, blue
    if text == "red":
        red = 255
        green = 0
        blue = 0
    elif text == "green":
        red = 0
        green = 255
        blue = 0
    elif text == "blue":
        red = 0
        green = 0
        blue = 255
    elif text == "yellow":
        red = 255
        green = 255
        blue = 0
    elif text == "purple":
        red = 255
        green = 0
        blue = 255
    elif text == "turcoaz":
        red = 0
        green = 255
        blue = 255
    else:
        pass
    for index14 in range(2):
        led_build(neopixel.rgb(red, green, blue))
        led_build(neopixel.rgb(max(0, red - 55), max(0, green - 55), max(0, blue - 55)))
        led_build(neopixel.rgb(max(0, red - 115), max(0, green - 115), max(0, blue - 115)))
        led_build(neopixel.rgb(max(0, red - 165), max(0, green - 165), max(0, blue - 165)))
        led_build(neopixel.rgb(max(0, red - 215), max(0, green - 215), max(0, blue - 215)))
        led_build(neopixel.rgb(max(0, red - 230), max(0, green - 230), max(0, blue - 230)))
blue = 0
green = 0
red = 0
walk_counter = 0
counter2 = 0
counter = 0
strip2: neopixel.Strip = None
strip: neopixel.Strip = None
led_count = 0
total_leds = 0
# led_count = 0
# led_count = 8
total_leds = led_count * 2
led_count = 8
strip = neopixel.create(DigitalPin.P0, led_count, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, led_count, NeoPixelMode.RGB)

def on_forever():
    OneDown()
basic.forever(on_forever)
