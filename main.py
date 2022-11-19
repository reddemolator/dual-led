def led_walk():
    strip.shift(1)
    strip.show()
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
def led_build(num: number):
    strip.set_pixel_color(0, num)
    strip.show()
    strip.shift(1)
    control.wait_micros(50000)
def portals():
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
def rainbow():
    strip.show_rainbow(1, led_count)
    strip.show()
    control.wait_micros(10000000)
    for index4 in range(led_count):
        strip.shift(1)
        strip.set_pixel_color(0,
            neopixel.rgb(randint(1, 255), randint(1, 255), randint(1, 255)))
        strip.show()
        control.wait_micros(100000)
def train():
    strip.clear()
    for index5 in range(led_count / 6):
        bulid_train()
        for index6 in range(6):
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
def RG():
    strip.clear()
    for index7 in range(16):
        strip.clear()
        strip.set_pixel_color(0, neopixel.rgb(255, 25, 10))
        strip.set_pixel_color(1, neopixel.rgb(100, 255, 25))
        for index8 in range(led_count / 2):
            strip.shift(2)
            strip.set_pixel_color(0, neopixel.rgb(255, 25, 10))
            strip.set_pixel_color(1, neopixel.rgb(100, 255, 25))
            strip.show()
            control.wait_micros(20000)
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
    for index9 in range(2):
        led_build(neopixel.rgb(red, green, blue))
        led_build(neopixel.rgb(max(0, red - 55), max(0, green - 55), max(0, blue - 55)))
        led_build(neopixel.rgb(max(0, red - 115), max(0, green - 115), max(0, blue - 115)))
        led_build(neopixel.rgb(max(0, red - 165), max(0, green - 165), max(0, blue - 165)))
        led_build(neopixel.rgb(max(0, red - 215), max(0, green - 215), max(0, blue - 215)))
        led_build(neopixel.rgb(max(0, red - 230), max(0, green - 230), max(0, blue - 230)))
blue = 0
green = 0
red = 0
strip: neopixel.Strip = None
led_count = 0
led_count = 48
strip = neopixel.create(DigitalPin.P0, led_count, NeoPixelMode.RGB)
strip2 = neopixel.create(DigitalPin.P1, led_count, NeoPixelMode.RGB)

def on_forever():
    portals()
basic.forever(on_forever)
