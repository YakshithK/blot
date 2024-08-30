setDocDimensions(800, 600)

const polylines = [
  [[0, 0], [100, 100], [200, 200]]
]

const scaledPolylines = bt.scale(polylines, 2)
drawLines(scaledPolylines)

const nonUniformlyScaledPolylines = bt.scale(polylines, [2, 3])
///drawLines(nonUniformlyScaledPolylines)

const rotatedPolylines = bt.rotate(polylines, 90)
///drawLines(rotatedPolylines)

const translatedPolylines = bt.translate(polylines, [100, 100])
///drawLines(translatedPolylines)

const resampledPolylines = bt.resample(polylines, 1000)
//drawLines(resampledPolylines)

const simplifiedPolylines = bt.simplify(polylines, 1)
//drawLines(resampledPolylines)