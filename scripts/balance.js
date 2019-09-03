$(document).ready(function () {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();

    var gameArea = new Konva.Line({
        x: 500,
        y: 100,
        points: [0, 0, 0, 700, 700, 700, 700, 0],
        stroke: 'green',
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: '',
    });

    var leftLine = new Konva.Line({
        x: gameArea.x() + 100,
        y: gameArea.y() + 100,
        points: [0, 0, 0, 100, 0, 0, 50, 0],
        stroke: 'red',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    });

    var rightLine = new Konva.Line({
        x: gameArea.x() + 150,
        y: gameArea.y() + 100,
        points: [0, 0, 50, 0, 50, 0, 50, 100],
        stroke: 'red',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    });

    var middleLine = new Konva.Line({
        x: gameArea.x() + 150,
        y: gameArea.y() + 75,
        points: [0, 0, 0, 25, 0, 0, 0, 0],
        stroke: 'red',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    });

    var box1 = new Konva.Line({
        x: gameArea.x() + 60,
        y: gameArea.y() + 210,
        points: [0, 0, 0, 75, 75, 75, 75, 0],
        stroke: 'green',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    });

    var box2 = new Konva.Line({
        x: gameArea.x() + 162,
        y: gameArea.y() + 210,
        points: [0, 0, 0, 75, 75, 75, 75, 0],
        stroke: 'green',
        strokeWidth: 5,
        lineCap: 'round',
        lineJoin: 'round'
    });

    var box1Mouth = new Konva.Ellipse({
        x: gameArea.x() + 98,
        y: box1.y(),
        radiusX: 38,
        radiusY: 5,
        stroke: 'green',
        strokeWidth: 4
    });

    var box2Mouth = new Konva.Ellipse({
        x: gameArea.x() + 200,
        y: box1.y(),
        radiusX: 38,
        radiusY: 5,
        stroke: 'green',
        strokeWidth: 4
    });

    var rectShape = new Konva.Line({
        x: gameArea.x() + 500,
        y: gameArea.y() + 200,
        points: [0, 0, 0, 25, 25, 25, 25, 0],
        stroke: 'black',
        strokeWidth: 1,
        fill: '#b53d5a',
        closed: true,
        globalCompositeOperation: 'xor',
        isParent: true,
    });

    var triangleShape = new Konva.Line({
        x: gameArea.x() + 550,
        y: gameArea.y() + 200,
        points: [0, 0, 0, 25, 25, 25, 25, 25],
        fill: '#416f85',
        stroke: 'black',
        strokeWidth: 1,
        closed: true,
        globalCompositeOperation: 'xor',
        isParent: true,
    });

    var circleShape = new Konva.Circle({
        x: gameArea.x() + 600,
        y: gameArea.y() + 210,
        radius: 13,
        fill: '#416f85',
        stroke: 'black',
        strokeWidth: 1,
        globalCompositeOperation: 'xor',
        isParent: true
    });

    layer.add(gameArea, leftLine, rightLine, middleLine,
        box1, box2, box1Mouth, box2Mouth, rectShape, triangleShape, circleShape);

    stage.add(layer);

    var rectShapes = [];
    var triangleShapes = [];
    var circleShapes = [];

    rectShape.on('click', function (e) {
        var selectedShape = e.target;

        if (selectedShape.attrs.isParent && rectShapes.length <= 10) {
            for (let i = 0; i < 1; i++) {
                var shape = new Konva.Line({
                    x: gameArea.x() + 500,
                    y: gameArea.y() + 200,
                    points: [0, 0, 0, 25, 25, 25, 25, 0],
                    stroke: 'black',
                    strokeWidth: 1,
                    fill: '#b53d5a',
                    closed: true,
                    draggable: true,
                    value: 5,
                });

                shape.stroke('green');
                shape.strokeWidth(3);
            }

            rectShapes.push(shape);

            layer.add(shape);
            stage.add(layer);
        }
        else {
            return;
        }
    });

    triangleShape.on('click', function (e) {
        var selectedShape = e.target;

        if (selectedShape.attrs.isParent && triangleShapes.length <= 10) {
            for (let i = 0; i < 1; i++) {
                var shape = new Konva.Line({
                    x: gameArea.x() + 550,
                    y: gameArea.y() + 200,
                    points: [0, 0, 0, 25, 25, 25, 25, 25],
                    fill: '#416f95',
                    stroke: 'black',
                    strokeWidth: 1,
                    closed: true,
                    draggable: true
                });

                shape.stroke('green');
                shape.strokeWidth(3);
            }

            triangleShapes.push(shape);

            layer.add(shape);
            stage.add(layer);
        }
        else {
            return;
        }
    });

    circleShape.on('click', function (e) {
        var selectedShape = e.target;

        if (selectedShape.attrs.isParent && circleShapes.length <= 10) {
            for (let i = 0; i < 1; i++) {
                var shape = new Konva.Circle({
                    x: gameArea.x() + 600,
                    y: gameArea.y() + 210,
                    radius: 13,
                    fill: '#416f85',
                    stroke: 'black',
                    strokeWidth: 1,
                    draggable: true
                });

                shape.stroke('green');
                shape.strokeWidth(3);
            }

            circleShapes.push(shape);

            layer.add(shape);
            stage.add(layer);
        }
        else {
            return;
        }
    });
});