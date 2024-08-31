// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// store final lines here
// const finalLines = [];

// // create a polyline
// const polyline = [
//   [30, 90],
//   [100, 90],
//   [100, 30],
//   [30, 30],
//   [30, 90]
// ];

// add the polyline to the final lines
// finalLines.push(polyline);

// transform lines using the toolkit
// bt.rotate(finalLines, 45);

// draw it
//drawLines(finalLines);

// thicken an open curve
// const polylines0 = [[[0, 0], [10, 10], [20, 0]]];
// bt.offset(polylines0, 3);

// // expand a closed curve
// const polylines1 = [[[0, 0], [10, 10], [20, 0], [0, 0]]];
// bt.offset(polylines1, 2);

// // thicken a closed curve
// const polylines2 = [[[0, 0], [10, 10], [20, 0], [0, 0]]];
// bt.offset(polylines2, 3, { endType: "openRound" });

const finalLines = []

// drawLines(polylines0)
const curve1 = [[15, 90], [15, 95], [17, 100], [22, 101]]
const lines = bt.catmullRom(curve1, 100); // Returns a polyline with 100 points forming a smooth curve through the specified points
finalLines.push(lines)

const polyline = [[22, 101], [30, 101], [30, 97], [50, 97]]
finalLines.push(polyline)

const curve2 = [[50, 97], [52, 95], [55, 94], [58, 95], [60, 97]]
const lines0 = bt.catmullRom(curve2, 100); // Returns a polyline with 100 points forming a smooth curve through the specified points
finalLines.push(lines0)

const curve3 = [[95, 90], [95, 95], [93, 100], [88, 101]]
const lines1 = bt.catmullRom(curve3, 100)
finalLines.push(lines1)

const polyline1 = [[88, 101], [80, 101], [80, 97], [60, 97]]
finalLines.push(polyline1)

const polyline2 = [[95, 90], [95, 40]]
finalLines.push(polyline2)

const polyline3 = [[15, 90], [15, 40]]
finalLines.push(polyline3)

const curve4 = [[15, 40], [15, 30], [17, 25], [20, 20], [25, 15], [40, 10]]
const lines2 = bt.catmullRom(curve4, 1000); // Returns a polyline with 100 points forming a smooth curve through the specified points
finalLines.push(lines2)

const polyline4 = [[40, 10], [65, 10], [95, 40]]
finalLines.push(polyline4)

drawLines(finalLines)