// function createCircle(x, y, radius, color) {
//     const circle = document.createElement('div');
//     circle.style.width = `${radius * 2}px`;   // diameter = 2 * radius
//     circle.style.height = `${radius * 2}px`;
//     circle.style.borderRadius = '50%';
//     circle.style.backgroundColor = color;
//     circle.style.position = 'absolute';

//     // Adjust position so the circle's center is at (x, y)
//     circle.style.left = `${x - radius}px`;
//     circle.style.top = `${y - radius}px`;
//     circle.style.filter = 'blur(24.100000381469727px)';
//     document.body.appendChild(circle);
// }

function createCircle(x, y, radius, color, text = null) {
    const circle = document.createElement('div');
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = color;
    circle.style.position = 'absolute';
    circle.style.left = `${x - radius}px`;
    circle.style.top = `${y - radius}px`;
    circle.style.filter = 'blur(3px)';
    circle.style.display = 'flex';
    circle.style.alignItems = 'center';
    circle.style.justifyContent = 'center';
    circle.style.color = 'white';

    if (text) {
        const heading = document.createElement('h1');
        heading.textContent = text;
        heading.style.position = 'relative'; // keeps it above the blurred bg
        heading.style.zIndex = '1';
        circle.appendChild(heading);
    }

    document.body.appendChild(circle);
}
