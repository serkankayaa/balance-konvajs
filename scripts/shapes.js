var gameArea = new Konva.Line({
    x: 200,
    y: 100,
    points: [0, 0, 0, 700, 1200, 700, 1200, 0],
    stroke: 'green',
    strokeWidth: 1,
    closed: true,
    globalCompositeOperation: '',
});

var balanceObject = {
    leftArm: 'leftLine',
    rightArm: 'rightLine',
    middleLine: 'middleLine',
    leftChamber: 'leftChamber',
    rightChamber: 'rightChamber',
    leftMouth: 'leftMouth',
    rightMouth: 'rightMouth' 
}

var game1 = {
    name: 'game1',
    triangleValue: 5,
    rectValue: 3,
    circleValue: 2,
    leftChamber: [
        { triangleCount: 1, rectCount: 1, circleCount: 0 },
        { triangleCount: 2, rectCount: 0, circleCount: 1 },
        { triangleCount: 0, rectCount: 0, circleCount: 2 },
        { triangleCount: 1, rectCount: 1, circleCount: 1 },
    ],
    rightChamber: [
        { triangleCount: 1, rectCount: 0, circleCount: 2 },
        { triangleCount: 1, rectCount: 2, circleCount: 0 },
        { triangleCount: 1, rectCount: 1, circleCount: 1 },
        { triangleCount: 0, rectCount: 1, circleCount: 1 },
    ],
}

// var leftLine = new Konva.Line({
//     x: gameArea.x() + 100,
//     y: gameArea.y() + 100,
//     points: [0, 0, 0, 100, 0, 0, 50, 0],
//     stroke: '#96ce9d',
//     strokeWidth: 5,
//     lineCap: 'round',
//     lineJoin: 'round'
// });

// var rightLine = new Konva.Line({
//     x: gameArea.x() + 150,
//     y: gameArea.y() + 100,
//     points: [0, 0, 50, 0, 50, 0, 50, 100],
//     stroke: '#96ce9d',
//     strokeWidth: 5,
//     lineCap: 'round',
//     lineJoin: 'round'
// });

// var middleLine = new Konva.Line({
//     x: gameArea.x() + 150,
//     y: gameArea.y() + 75,
//     points: [0, 0, 0, 25, 0, 0, 0, 0],
//     stroke: '#96ce9d',
//     strokeWidth: 5,
//     lineCap: 'round',
//     lineJoin: 'round'
// });

// var box1 = new Konva.Line({
//     x: gameArea.x() + 60,
//     y: gameArea.y() + 210,
//     points: [0, 0, 0, 75, 75, 75, 75, 0],
//     stroke: '#e28b40',
//     strokeWidth: 5,
//     lineCap: 'round',
//     lineJoin: 'round'
// });

// var box2 = new Konva.Line({
//     x: gameArea.x() + 162,
//     y: gameArea.y() + 210,
//     points: [0, 0, 0, 75, 75, 75, 75, 0],
//     stroke: '#e28b40',
//     strokeWidth: 5,
//     lineCap: 'round',
//     lineJoin: 'round'
// });

// var box1Mouth = new Konva.Ellipse({
//     x: gameArea.x() + 98,
//     y: box1.y(),
//     radiusX: 38,
//     radiusY: 5,
//     stroke: '#e28b40',
//     strokeWidth: 4
// });

// var box2Mouth = new Konva.Ellipse({
//     x: gameArea.x() + 200,
//     y: box1.y(),
//     radiusX: 38,
//     radiusY: 5,
//     stroke: '#e28b40',
//     strokeWidth: 4
// });
