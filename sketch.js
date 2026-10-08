const r = require("raylib");
const g = require("./geometry");

const windowWidth = 800;
const windowHeight = 600;

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(windowWidth, windowHeight, "FRACTRAL TREE");
    r.SetTargetFPS(60);
}

function isRunning() {
    return !r.WindowShouldClose();
}

function drawFractralTree(depth, thickness, degrees, length, startX, startY) {
    if (depth < 0) return;

    const endXLeft = g.getEndX(startX, degrees, length);
    const endYLeft = g.getEndY(startY, degrees, length);
    const leftDegrees = degrees + 15;

    r.DrawLineEx(
        { x: startX, y: startY },
        { x: endXLeft, y: endYLeft },
        thickness,
        r.WHITE,
    );

    drawFractralTree(
        depth - 1,
        thickness * 0.7,
        leftDegrees,
        length * 0.7,
        endXLeft,
        endYLeft,
    );

    const rightDegrees = degrees - 15;
    const endXRight = g.getEndX(startX, degrees, length);
    const endYRight = g.getEndY(startY, degrees, length);

    r.DrawLineEx(
        { x: startX, y: startY },
        { x: endXRight, y: endYRight },
        thickness,
        r.WHITE,
    );

    drawFractralTree(
        depth - 1,
        thickness * 0.7,
        rightDegrees,
        length * 0.7,
        endXRight,
        endYRight,
    );
}

function draw() {
    r.BeginDrawing();

    const details = {
        depth: 10,
        thickness: 10,
        length: 150,
    };

    const startX = windowWidth / 2;
    const startY = (9 * windowHeight) / 10;

    drawFractralTree(
        details.depth,
        details.thickness,
        0,
        details.length,
        startX,
        startY,
    );

    r.EndDrawing();
}

function update() {}

function tearDown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    isRunning,
    draw,
    update,
    tearDown,
};
