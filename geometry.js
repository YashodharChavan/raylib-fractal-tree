function degreesToRadiens(degrees) {
    return degrees * (Math.PI / 180);
}

function getEndX(startX, degrees, length) {
    return startX + length * Math.cos(degreesToRadiens(270 + degrees));
}

function getEndY(startY, degrees, length) {
    return startY + length * Math.sin(degreesToRadiens(270 + degrees));
}

module.exports = {
    degreesToRadiens,
    getEndX,
    getEndY
};
