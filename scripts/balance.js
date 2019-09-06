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
    var games = [];
    var balances = [];

    var totalValue = 0;
    var leftPlus = 0;
    var game = game1;
    var rectangleValue = game.rectValue;
    var triangleValue = game.triangleValue;
    var circleValue = game.circleValue;

    // var firstLeftMaxValue = getIndexOfMaxValue(leftLine);
    // var firstRightMaxValue = getIndexOfMaxValue(rightLine);
    var rectShape = setRectangle(gameArea, 1050);
    var circleShape = setCircle(gameArea, 1100);
    var triangleShape = setTriangle(gameArea, 1125);

    layer.add(gameArea, rectShape, circleShape, triangleShape);
    stage.add(layer);

    prepareGame(game);

    function chunk(array, size) {
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
            const last = chunked_arr[chunked_arr.length - 1];
            if (!last || last.length === size) {
                chunked_arr.push([array[i]]);
            } else {
                last.push(array[i]);
            }
        }
        return chunked_arr;
    }

    function prepareGame(game) {
        var balanceCount = game.leftChamber.length;
        var rate = 7;
        setBalances(balanceCount, 225);
        games = chunk(games, rate);

        for (let i = 0; i < games.length; i++) {
            for (let j = 0; j < rate; j++) {
                if (games[i][j].attrs.name == balanceObject.leftChamber) {
                    if (game.leftChamber[i].triangleCount > 0) {
                        seatTriangle(game.leftChamber[i].triangleCount, games[i][j].attrs.x + 5, games[i][j].attrs.y + 50);
                        layer.draw();
                    }

                    if (game.leftChamber[i].rectCount > 0) {
                        seatRectangle(game.leftChamber[i].rectCount, games[i][j].attrs.x + 30, games[i][j].attrs.y + 50);
                        layer.draw();
                    }

                    if (game.leftChamber[i].circleCount > 0) {
                        seatCircle(game.leftChamber[i].circleCount, games[i][j].attrs.x + 61, games[i][j].attrs.y + 60);
                        layer.draw();
                    }
                }

                if (games[i][j].attrs.name == balanceObject.rightChamber) {
                    if (game.rightChamber[i].triangleCount > 0) {
                        seatTriangle(game.rightChamber[i].triangleCount, games[i][j].attrs.x + 5, games[i][j].attrs.y + 50);
                        layer.draw();
                    }

                    if (game.rightChamber[i].rectCount > 0) {
                        seatRectangle(game.rightChamber[i].rectCount, games[i][j].attrs.x + 30, games[i][j].attrs.y + 50);
                        layer.draw();
                    }

                    if (game.rightChamber[i].circleCount > 0) {
                        seatCircle(game.rightChamber[i].circleCount, games[i][j].attrs.x + 61, games[i][j].attrs.y + 60);
                        layer.draw();
                    }
                }
            }
        }
    };

    function seatCircle(shapeCount, shapeX, shapeY) {
        var shapes = [];
        var shapeLimit = 0;

        for (let i = 0; i < shapeCount; i++) {
            if (shapeCount > 1) {
                var circleShape = new Konva.Circle({
                    x: shapeX,
                    y: shapeY - shapeLimit,
                    radius: 10,
                    fill: '#416f85',
                    stroke: 'black',
                    strokeWidth: 1,
                    globalCompositeOperation: 'xor',
                    isParent: true
                });

                shapeLimit += 21;
            }
            else if (shapeCount == 1) {
                var circleShape = new Konva.Circle({
                    x: shapeX,
                    y: shapeY,
                    radius: 10,
                    fill: '#416f85',
                    stroke: 'black',
                    strokeWidth: 1,
                    globalCompositeOperation: 'xor',
                    isParent: true
                });
            }

            layer.add(circleShape);
            stage.add(layer);
            shapes.push(circleShape);
        }

        return shapes;
    }

    function seatRectangle(shapeCount, shapeX, shapeY) {
        var shapes = [];
        var shapeLimit = 0;

        for (let i = 0; i < shapeCount; i++) {
            if (shapeCount > 1) {
                var rectShape = new Konva.Line({
                    x: shapeX,
                    y: shapeY - shapeLimit,
                    points: [0, 0, 0, 18, 18, 18, 18, 0],
                    stroke: 'black',
                    strokeWidth: 1,
                    fill: '#b53d5a',
                    closed: true,
                    globalCompositeOperation: 'xor',
                });

                shapeLimit += 18;
            }
            else if (shapeCount == 1) {
                var rectShape = new Konva.Line({
                    x: shapeX,
                    y: shapeY,
                    points: [0, 0, 0, 18, 18, 18, 18, 0],
                    stroke: 'black',
                    strokeWidth: 1,
                    fill: '#b53d5a',
                    closed: true,
                    globalCompositeOperation: 'xor',
                });
            }
            
            layer.add(rectShape);
            stage.add(layer);
            shapes.push(rectShape);
        }

        return shapes;
    }

    function seatTriangle(shapeCount, shapeX, shapeY) {
        var shapes = [];
        var shapeLimit = 0;

        for (let i = 0; i < shapeCount; i++) {
            if (shapeCount > 1) {
                var triangleShape = new Konva.Line({
                    x: shapeX,
                    y: shapeY - shapeLimit,
                    points: [0, 0, 0, 18, 18, 18, 18, 18],
                    fill: '#416f85',
                    stroke: 'black',
                    strokeWidth: 1,
                    closed: true,
                    globalCompositeOperation: 'xor',
                    isParent: true,
                });

                shapeLimit += 18;
            }
            else if (shapeCount == 1) {
                var triangleShape = new Konva.Line({
                    x: shapeX,
                    y: shapeY,
                    points: [0, 0, 0, 18, 18, 18, 18, 18],
                    fill: '#416f85',
                    stroke: 'black',
                    strokeWidth: 1,
                    closed: true,
                    globalCompositeOperation: 'xor',
                    isParent: true,
                });
            }

            layer.add(triangleShape);
            stage.add(layer);
            shapes.push(triangleShape);
        }

        return shapes;
    }

    function setBalances(balanceNumber, alignRate) {
        balanceXLeft = 100;
        balanceXRight = 150;
        balanceXMiddle = 150;
        balanceXBox1 = 60;
        balanceXBox2 = 162;
        balanceBox1Mouth = 98;
        balanceBox2Mouth = 200;

        for (let i = 0; i < balanceNumber; i++) {
            var seatedLeftLine = new Konva.Line({
                x: gameArea.x() + balanceXLeft,
                y: gameArea.y() + 100,
                points: [0, 0, 0, 100, 0, 0, 50, 0],
                stroke: '#96ce9d',
                name: 'leftLine',
                balanceName: 'balance' + (i + 1),
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
                balanceName: 'balance' + (i + 1),
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
                balanceName: 'balance' + (i + 1),
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
                name: 'leftChamber',
                balanceName: 'balance' + (i + 1),
                lineCap: 'round',
                lineJoin: 'round',
            });

            balanceXBox1 += alignRate;

            var seatedBox2 = new Konva.Line({
                x: gameArea.x() + balanceXBox2,
                y: gameArea.y() + 210,
                points: [0, 0, 0, 75, 75, 75, 75, 0],
                stroke: '#e28b40',
                strokeWidth: 5,
                name: 'rightChamber',
                balanceName: 'balance' + (i + 1),
                lineCap: 'round',
                lineJoin: 'round'
            });

            balanceXBox2 += alignRate;

            var seatedBox1Mouth = new Konva.Ellipse({
                x: gameArea.x() + balanceBox1Mouth,
                y: seatedBox1.y(),
                radiusX: 38,
                radiusY: 5,
                name: 'leftMouth',
                balanceName: 'balance' + (i + 1),
                stroke: '#e28b40',
                strokeWidth: 4
            });

            balanceBox1Mouth += alignRate;

            var seatedBox2Mouth = new Konva.Ellipse({
                x: gameArea.x() + balanceBox2Mouth,
                y: seatedBox1.y(),
                radiusX: 38,
                radiusY: 5,
                name: 'rightMouth',
                balanceName: 'balance' + (i + 1),
                stroke: '#e28b40',
                strokeWidth: 4
            });

            balanceBox2Mouth += alignRate;

            games.push(seatedLeftLine, seatedRightLine, seatedMiddleLine,
                seatedBox1, seatedBox2, seatedBox1Mouth, seatedBox2Mouth);
            games.sort();
            layer.add(seatedLeftLine, seatedRightLine, seatedMiddleLine,
                seatedBox1, seatedBox2, seatedBox1Mouth, seatedBox2Mouth);
            stage.add(layer);
        }

        games.forEach(game => {
            balances.push(game.attrs.balanceName);
        });

        balances = balances.filter(distinct);
    }

    function setRectangle(gameArea, rectX) {
        var rectShape = new Konva.Line({
            x: gameArea.x() + rectX, //1050,
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

    function setCircle(gameArea, circleX) {
        var circleShape = new Konva.Circle({
            x: gameArea.x() + circleX, //1100,
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

    function setTriangle(gameArea, triangleX) {
        var triangleShape = new Konva.Line({
            x: gameArea.x() + triangleX, //1125,
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
                value: rectangleValue,
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
                value: triangleValue
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
                value: circleValue,
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

    function distinct(value, index, self) {
        return self.indexOf(value) === index;
    }
});