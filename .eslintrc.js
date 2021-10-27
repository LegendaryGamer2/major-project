//save this file as .eslintrc.js in the root of your project folder
module.exports = {
    "env": {
        "es6": true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
      "blockBindings": true,
      "defaultParams": true,
      "forOf": true
    },
    "rules": {
        // enable additional rules
        "indent": ["warn", 2],
        "quotes": ["warn", "double"],
        "semi": ["error", "always"],
        "no-extra-parens": ["warn", "all"],
        "curly": ["error", "all"],
        "eqeqeq": ["warn", "always"],
        "no-floating-decimal": ["warn"],
        "brace-style": ["warn", "stroustrup"],
        "no-var": ["warn"],

        // override default options for rules from base configurations
        //"comma-dangle": ["warn", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
        "no-unused-vars": "off"
    },
    "globals": {
      //allow direct access to the DOM without errors
      "document": true,
      "window": true,  
      "console": true,
      "Matter":true,
      "Helpers":true,
      "Bodies": true,
      "World": true,

      //allow timing functions in JS
      "setTimeout": true,
      "setInterval": true,

      //p5js globals
      "storeItem": true,
      "getItem": true,
      "clearStorage": true,
      "removeItem": true,
      
      "remove": true,
      "canvas": true,
      "width": true,
      "height": true,
      "drawingContext": true,
      "frameCount": true,
      "pmouseX": true,
      "pmouseY": true,
      "mouseX": true,
      "mouseY": true,
      "pwinMouseX": true,
      "pwinMouseY": true,
      "ptouchX": true,
      "ptouchY": true,
      "touchX": true,
      "touchY": true,
      "registerPreloadMethod": true,
      "registerMethod": true,
      "alpha": true,
      "blue": true,
      "brightness": true,
      "color": true,
      "green": true,
      "hue": true,
      "lerpColor": true,
      "lightness": true,
      "red": true,
      "saturation": true,
      "background": true,
      "clear": true,
      "colorMode": true,
      "fill": true,
      "noFill": true,
      "noStroke": true,
      "stroke": true,
      "float": true,
      "int": true,
      "str": true,
      "boolean": true,
      "byte": true,
      "char": true,
      "unchar": true,
      "hex": true,
      "unhex": true,
      "append": true,
      "arrayCopy": true,
      "concat": true,
      "reverse": true,
      "shorten": true,
      "shuffle": true,
      "sort": true,
      "splice": true,
      "subset": true,
      "join": true,
      "match": true,
      "matchAll": true,
      "nf": true,
      "nfc": true,
      "nfp": true,
      "nfs": true,
      "split": true,
      "splitTokens": true,
      "trim": true,
      "print": true,
      "println": true,
      "focused": true,
      "cursor": true,
      "frameRate": true,
      "getFrameRate": true,
      "setFrameRate": true,
      "noCursor": true,
      "displayWidth": true,
      "displayHeight": true,
      "windowWidth": true,
      "windowHeight": true,
      "fullscreen": true,
      "pixelDensity": true,
      "displayDensity": true,
      "getURL": true,
      "getURLPath": true,
      "getURLParams": true,
      "createImage": true,
      "saveCanvas": true,
      "saveFrames": true,
      "loadImage": true,
      "image": true,
      "tint": true,
      "noTint": true,
      "imageMode": true,
      "pixels": true,
      "blend": true,
      "copy": true,
      "filter": true,
      "get": true,
      "loadPixels": true,
      "set": true,
      "updatePixels": true,
      "loadFont": true,
      "createInput": true,
      "createReader": true,
      "loadBytes": true,
      "loadJSON": true,
      "loadStrings": true,
      "loadTable": true,
      "loadXML": true,
      "parseXML": true,
      "selectFolder": true,
      "selectInput": true,
      "httpGet": true,
      "httpPost": true,
      "httpDo": true,
      "beginRaw": true,
      "beginRecord": true,
      "createOutput": true,
      "createWriter": true,
      "endRaw": true,
      "endRecord": true,
      "saveBytes": true,
      "save": true,
      "saveJSON": true,
      "saveJSONObject": true,
      "saveJSONArray": true,
      "saveStream": true,
      "saveStrings": true,
      "saveXML": true,
      "selectOutput": true,
      "saveTable": true,
      "writeFile": true,
      "downloadFile": true,
      "isKeyPressed": true,
      "keyIsPressed": true,
      "key": true,
      "keyCode": true,
      "keyIsDown": true,
      "deviceOrientation": true,
      "accelerationX": true,
      "accelerationY": true,
      "accelerationZ": true,
      "pAccelerationX": true,
      "pAccelerationY": true,
      "pAccelerationZ": true,
      "rotationX": true,
      "rotationY": true,
      "rotationZ": true,
      "pRotationX": true,
      "pRotationY": true,
      "pRotationZ": true,
      "turnAxis": true,
      "setMoveThreshold": true,
      "setShakeThreshold": true,
      "winMouseX": true,
      "winMouseY": true,
      "mouseButton": true,
      "mouseIsPressed": true,
      "isMousePressed": true,
      "day": true,
      "hour": true,
      "minute": true,
      "millis": true,
      "month": true,
      "second": true,
      "year": true,
      "touches": true,
      "touchIsDown": true,
      "createVector": true,
      "abs": true,
      "ceil": true,
      "constrain": true,
      "dist": true,
      "exp": true,
      "floor": true,
      "lerp": true,
      "log": true,
      "mag": true,
      "map": true,
      "max": true,
      "min": true,
      "norm": true,
      "pow": true,
      "round": true,
      "sq": true,
      "sqrt": true,
      "randomSeed": true,
      "random": true,
      "randomGaussian": true,
      "noise": true,
      "noiseDetail": true,
      "noiseSeed": true,
      "acos": true,
      "asin": true,
      "atan": true,
      "atan2": true,
      "cos": true,
      "sin": true,
      "tan": true,
      "degrees": true,
      "radians": true,
      "angleMode": true,
      "createCanvas": true,
      "resizeCanvas": true,
      "noCanvas": true,
      "createGraphics": true,
      "blendMode": true,
      "arc": true,
      "ellipse": true,
      "circle": true,
      "square": true,
      "line": true,
      "point": true,
      "quad": true,
      "rect": true,
      "triangle": true,
      "ellipseMode": true,
      "noSmooth": true,
      "rectMode": true,
      "smooth": true,
      "strokeCap": true,
      "strokeJoin": true,
      "strokeWeight": true,
      "bezier": true,
      "bezierDetail": true,
      "bezierPoint": true,
      "bezierTangent": true,
      "curve": true,
      "curveDetail": true,
      "curveTightness": true,
      "curvePoint": true,
      "curveTangent": true,
      "beginContour": true,
      "beginShape": true,
      "bezierVertex": true,
      "curveVertex": true,
      "endContour": true,
      "endShape": true,
      "quadraticVertex": true,
      "vertex": true,
      "exit": true,
      "noLoop": true,
      "loop": true,
      "push": true,
      "pop": true,
      "pushStyle": true,
      "popStyle": true,
      "redraw": true,
      "size": true,
      "applyMatrix": true,
      "popMatrix": true,
      "printMatrix": true,
      "pushMatrix": true,
      "resetMatrix": true,
      "rotate": true,
      "rotateX": true,
      "rotateY": true,
      "rotateZ": true,
      "scale": true,
      "shearX": true,
      "shearY": true,
      "translate": true,
      "textAlign": true,
      "textLeading": true,
      "textSize": true,
      "textStyle": true,
      "textWidth": true,
      "textAscent": true,
      "textDescent": true,
      "text": true,
      "textFont": true,
      "plane": true,
      "sphere": true,
      "ellipsoid": true,
      "cylinder": true,
      "cone": true,
      "torus": true,
      "box": true,
      "normalMaterial": true,
      "texture": true,
      "basicMaterial": true,
      "ambientMaterial": true,
      "specularMaterial": true,
      "ambientLight": true,
      "directionalLight": true,
      "pointLight": true,
      "camera": true,
      "perspective": true,
      "ortho": true,
      "orbitControl": true,
      "P2D": true,
      "WEBGL": true,
      "ARROW": true,
      "CROSS": true,
      "HAND": true,
      "MOVE": true,
      "TEXT": true,
      "WAIT": true,
      "HALF_PI": true,
      "PI": true,
      "QUARTER_PI": true,
      "TAU": true,
      "TWO_PI": true,
      "DEGREES": true,
      "RADIANS": true,
      "CORNER": true,
      "CORNERS": true,
      "RADIUS": true,
      "RIGHT": true,
      "LEFT": true,
      "CENTER": true,
      "TOP": true,
      "BOTTOM": true,
      "BASELINE": true,
      "POINTS": true,
      "LINES": true,
      "TRIANGLES": true,
      "TRIANGLE_FAN": true,
      "TRIANGLE_STRIP": true,
      "QUADS": true,
      "QUAD_STRIP": true,
      "CLOSE": true,
      "OPEN": true,
      "CHORD": true,
      "PIE": true,
      "PROJECT": true,
      "SQUARE": true,
      "ROUND": true,
      "BEVEL": true,
      "MITER": true,
      "RGB": true,
      "HSB": true,
      "HSL": true,
      "AUTO": true,
      "ALT": true,
      "BACKSPACE": true,
      "CONTROL": true,
      "DELETE": true,
      "DOWN_ARROW": true,
      "ENTER": true,
      "ESCAPE": true,
      "LEFT_ARROW": true,
      "OPTION": true,
      "RETURN": true,
      "RIGHT_ARROW": true,
      "SHIFT": true,
      "TAB": true,
      "UP_ARROW": true,
      "BLEND": true,
      "ADD": true,
      "DARKEST": true,
      "LIGHTEST": true,
      "DIFFERENCE": true,
      "EXCLUSION": true,
      "MULTIPLY": true,
      "SCREEN": true,
      "REPLACE": true,
      "OVERLAY": true,
      "HARD_LIGHT": true,
      "SOFT_LIGHT": true,
      "DODGE": true,
      "BURN": true,
      "THRESHOLD": true,
      "GRAY": true,
      "OPAQUE": true,
      "INVERT": true,
      "POSTERIZE": true,
      "DILATE": true,
      "ERODE": true,
      "BLUR": true,
      "NORMAL": true,
      "ITALIC": true,
      "BOLD": true,
      "LINEAR": true,
      "QUADRATIC": true,
      "BEZIER": true,
      "CURVE": true,

      //p5js sound globals
      "getAudioContext": true,
      "isSupported": true,
      "isFileSupported": true,
      "getMasterVolume": true,
      "masterVolume": true,
      "sampleRate": true,
      "freqToMidi": true,
      "midiToFreq": true,
      "soundFormats": true,
      "disposeSound": true,
      "loadSound": true,
      "createConvolver": true,
      "setBPM": true,
      "saveSound": true,
      "userStartAudio": true,
      "soundOut": true,

      //p5js dom globals
      "select": true,
      "selectAll": true,
      "removeElements": true,
      "createDiv": true,
      "createP": true,
      "createSpan": true,
      "createImg": true,
      "createA": true,
      "createSlider": true,
      "createButton": true,
      "createCheckbox": true,
      "createSelect": true,
      "createRadio": true,
      "createFileInput": true,
      "createVideo": true,
      "createAudio": true,
      "VIDEO": true,
      "AUDIO": true,
      "createCapture": true,
      "createElement": true,

      //p5js.collide globals
      "collidePointPoint": true,
      "collidePointCircle": true,
      "collidePointEllipse": true,
      "collidePointRect": true,
      "collidePointLine": true,
      "collidePointArc": true,
      "collideRectRect": true,
      "collideCircleCircle": true,
      "collideRectCircle": true,
      "collideLineLine": true,
      "collideLineCircle": true,
      "collideLineRect": true,
      "collidePointPoly": true,
      "collideCirclePoly": true,
      "collideRectPoly": true,
      "collideLinePoly": true,
      "collidePolyPoly": true,
      "collidePointTriangle": true
  },
}
