// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// create a polyline
//const polyline1 = [
  [[0, 0],
  [125, 125]],
  [[0, 125],
  [125, 0]]
//]

//const coveredPolylines = bt.iteratePoints(polyline1, (pt, t) => {
//  const [x, y] = pt
//  return [x, y+20]
//})

// draw it
//drawLines(polyline1)
//drawLines(coveredPolylines);

//const polylines = [[[10, 10], [20, 20], [30, 10]]];
//bt.originate(polylines);

//const polylines = [[[0, 0], [10, 10], [20, 5], [30, 10]]];
//bt.resample(polylines, 5);

//const polylines = [[[0, 0], [5, 10], [5, 10], [12, 4], [27, 24]]];
//bt.simplify(polylines, 5);

//const polylines = [[[0, 0], [10, 10], [20, 20]]];
//bt.trim(polylines, 0.25, 0.75);

//const polyline1 = [[0, 0], [10, 10]];
//const polyline2 = [[10, 10], [20, 20]]
//const polylines = [polyline1, polyline2];
//bt.merge(polylines);

//const polylines1 = [[[0, 0], [10, 10]]];
//const polylines2 = [[[20, 20], [30, 30]]];
//bt.join(polylines1, polylines2);

// const originalPolylines = [[[0, 0], [10, 10]]];
//const polylines = bt.copy(originalPolylines);

// const polylinesToCut = [[[0, 0], [10, 10], [20, 0]]];
// const cuttingPolylines = [[[5, 5], [15, 5]]];
// bt.cut(polylinesToCut, cuttingPolylines);

const basePolylines = [[[0, 0], [10, 10], [20, 0]]];
const coveringPolylines = [[[5, -5], [15, 15]]];
bt.cover(basePolylines, coveringPolylines);
drawLines(Polylines)