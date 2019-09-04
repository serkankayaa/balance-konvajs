$(document).ready(function () {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
    });

    var layer = new Konva.Layer();

    var selectedShapes = [];
    var rectShapes = [];
    var triangleShapes = [];
    var circleShapes = [];
    var box1ShapeValues = [];

    var box2ShapeValue = 15;
    var totalValue = 0;
    var leftPlus = 0;

    // var firstLeftMaxValue = getIndexOfMaxValue(leftLine);
    // var firstRightMaxValue = getIndexOfMaxValue(rightLine);
    var rectShape = setRectangle(gameArea);
    var circleShape = setCircle(gameArea);
    var triangleShape = setTriangle(gameArea);

    layer.add(gameArea, rectShape, circleShape, triangleShape);
    stage.add(layer);

    setGame(7, 225);

    function setGame(balanceNumber, alignRate) {
        balanceXLeft = 100;
        balanceXRight = 150;
        balanceXMiddle = 150;
        balanceXBox1 = 60;
        balanceXBox2 = 162;
        balanceBox1Mouth = 98;
        balanceBox2Mouth = 200;

        for (let i = 0; i < balanceNumber; i++) {
            if (i == balanceNumber - 1) {

            }
            else {
                var seatedLeftLine = new Konva.Line({
                    x: gameArea.x() + balanceXLeft,
                    y: gameArea.y() + 100,
                    points: [0, 0, 0, 100, 0, 0, 50, 0],
                    stroke: '#96ce9d',
                    name: 'leftLine',
                    strokeWidth: 5,
                    lineCap: 'round',
                    lineJoin: 'round'
                });

                balanceXLeft += alignRate;

                var seatedRightLine = new Konva.Line({
                    x: gameArea.x() + balanceXRight,
                    y: gameArea.y() + 100,
                    points: [0, 0, 50, 0, 50, 0, 50, 100],
                    stroke: '#96ce9d',
                    strokeWidth: 5,
                    name: 'rightLine',
                    lineCap: 'round',
                    lineJoin: 'round'
                });

                balanceXRight += alignRate;

                var seatedMiddleLine = new Konva.Line({
                    x: gameArea.x() + balanceXMiddle,
                    y: gameArea.y() + 75,
                    points: [0, 0, 0, 25, 0, 0, 0, 0],
                    stroke: '#96ce9d',
                    strokeWidth: 5,
                    name: 'middleLine',
                    lineCap: 'round',
                    lineJoin: 'round'
                });

                balanceXMiddle += alignRate;

                var seatedBox1 = new Konva.Line({
                    x: gameArea.x() + balanceXBox1,
                    y: gameArea.y() + 210,
                    points: [0, 0, 0, 75, 75, 75, 75, 0],
                    stroke: '#e28b40',
                    strokeWidth: 5,
                    name: 'box1',
                    lineCap: 'round',
                    lineJoin: 'round'
                });

                balanceXBox1 += alignRate;

                var seatedBox2 = new Konva.Line({
                    x: gameArea.x() + balanceXBox2,
                    y: gameArea.y() + 210,
                    points: [0, 0, 0, 75, 75, 75, 75, 0],
                    stroke: '#e28b40',
                    strokeWidth: 5,
                    name: 'box2',
                    lineCap: 'round',
                    lineJoin: 'round'
                });

                balanceXBox2 += alignRate;

                var seatedBox1Mouth = new Konva.Ellipse({
                    x: gameArea.x() + balanceBox1Mouth,
                    y: seatedBox1.y(),
                    radiusX: 38,
                    radiusY: 5,
                    name: 'box1Mouth',
                    stroke: '#e28b40',
                    strokeWidth: 4
                });

                balanceBox1Mouth += alignRate;

                var seatedBox2Mouth = new Konva.Ellipse({
                    x: gameArea.x() + balanceBox2Mouth,
                    y: seatedBox1.y(),
                    radiusX: 38,
                    radiusY: 5,
                    name: 'box2Mouth',
                    stroke: '#e28b40',
                    strokeWidth: 4
                });

                balanceBox2Mouth += alignRate;
            }

            layer.add(seatedLeftLine, seatedRightLine, seatedMiddleLine, seatedBox1, seatedBox2, seatedBox1Mouth, seatedBox2Mouth);
            stage.add(layer);
        }
    }

    function setRectangle() {
        var rectShape = new Konva.Line({
            x: gameArea.x() + 1050,
            y: gameArea.y() + 200,
            points: [0, 0, 0, 25, 25, 25, 25, 0],
            stroke: 'black',
            strokeWidth: 1,
            fill: '#b53d5a',
            closed: true,
            globalCompositeOperation: 'xor',
            isParent: true,
        });

        return rectShape;
    }

    function setCircle(gameArea) {
        var circleShape = new Konva.Circle({
            x: gameArea.x() + 1100,
            y: gameArea.y() + 210,
            radius: 13,
            fill: '#416f85',
            stroke: 'black',
            strokeWidth: 1,
            globalCompositeOperation: 'xor',
            isParent: true
        });

        return circleShape;
    }

    function setTriangle(gameArea) {
        var triangleShape = new Konva.Line({
            x: gameArea.x() + 1125,
            y: gameArea.y() + 200,
            points: [0, 0, 0, 25, 25, 25, 25, 25],
            fill: '#416f85',
            stroke: 'black',
            strokeWidth: 1,
            closed: true,
            globalCompositeOperation: 'xor',
            isParent: true,
        });

        return triangleShape;
    }

    rectShape.on('click', function (e) {
        var selectedShape = e.target;

        if (selectedShape.attrs.isParent && rectShapes.length <= 10) {
            var shape = new Konva.Line({
                x: rectShape.x(),
                y: rectShape.y(),
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
            var shape = new Konva.Line({
                x: triangleShape.x(),
                y: triangleShape.y(),
                points: [0, 0, 0, 25, 25, 25, 25, 25],
                fill: '#416f95',
                stroke: 'black',
                strokeWidth: 1,
                closed: true,
                draggable: true,
                value: 2
            });

            shape.stroke('green');
            shape.strokeWidth(3);

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
            var shape = new Konva.Circle({
                x: circleShape.x(),
                y: circleShape.y(),
                radius: 13,
                fill: '#416f85',
                stroke: 'black',
                strokeWidth: 1,
                draggable: true,
                value: 3,
            });

            shape.stroke('green');
            shape.strokeWidth(3);

            circleShapes.push(shape);

            layer.add(shape);
            stage.add(layer);
        }
        else {
            return;
        }
    });

    layer.on('dragend', function (e) {
        var selectedShape = e.target;
        var targetRect = e.target.getClientRect();

        if (haveIntersection(box1.getClientRect(), targetRect)) {
            selectedShapes.push(selectedShape);
            var selectedValue = selectedShape.attrs.value;

            box1ShapeValues.push(selectedValue);

            totalValue = box1ShapeValues.reduce(function (a, b) {
                return a + b;
            }, 0);

            leftPlus += selectedValue;

            leftLine.points()[getIndexOfMax(leftLine)] = firstLeftMaxValue + leftPlus;

            box1.y(gameArea.y() + 210 + leftPlus);
            box1Mouth.y(box1.y());

            rightLine.points()[getIndexOfMax(rightLine)] = firstRightMaxValue - leftPlus;

            box2.y(gameArea.y() + 210 - leftPlus);
            box2Mouth.y(box2.y());

            selectedShapes.forEach(element => {
                element.y(box1.y() + leftPlus);
            });

            layer.draw();
        } else {
            selectedShape.fill('red');
            box1ShapeValues.shift();

            layer.draw();
        }
    });

    function getIndexOfMaxValue(selectedShape) {
        var maxIndex = selectedShape.points().reduce(function (highestIndex, element, index, array) {
            return element > array[highestIndex] ? index : highestIndex;
        }, 0);

        return selectedShape.points()[maxIndex];
    }

    function getIndexOfMax(selectedShape) {
        var maxIndex = selectedShape.points().reduce(function (highestIndex, element, index, array) {
            return element > array[highestIndex] ? index : highestIndex;
        }, 0);

        return maxIndex;
    }

    function haveIntersection(r1, r2) {
        return !(
            r2.x > r1.x + r1.width ||
            r2.x + r2.width < r1.x ||
            r2.y > r1.y + r1.height ||
            r2.y + r2.height < r1.y
        );
    }
});