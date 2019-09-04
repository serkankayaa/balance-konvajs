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

    var firstLeftMaxValue = leftLine.points()[getIndexOfMax(leftLine)];
    var firstRightMaxValue = rightLine.points()[getIndexOfMax(rightLine)];
    var rectShape = setRectangle(gameArea);
    var circleShape = setCircle(gameArea);
    var triangleShape = setTriangle(gameArea);

    layer.add(gameArea, leftLine, rightLine, middleLine,
        box1, box2, box1Mouth, box2Mouth, rectShape, circleShape, triangleShape);

    stage.add(layer);

    function setRectangle() {
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

        return rectShape;
    }

    function setCircle(gameArea) {
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

        return circleShape;
    }

    function setTriangle(gameArea) {
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

        return triangleShape;
    }

    rectShape.on('click', function (e) {
        var selectedShape = e.target;

        if (selectedShape.attrs.isParent && rectShapes.length <= 10) {
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
                x: gameArea.x() + 550,
                y: gameArea.y() + 200,
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
                x: gameArea.x() + 600,
                y: gameArea.y() + 210,
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
            // selectedShape.fill('green');
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