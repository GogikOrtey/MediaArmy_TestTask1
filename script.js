// Обработчик нажатия на кнопку, которая показывает окно
document.getElementById('open-window').addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('.main-window').style.display = 'grid';
    centerElement(draggableElement);
});

// Обработчик нажатия на кнопку закрытия окна
document.getElementById('closed-window').addEventListener('click', function() {
    document.querySelector('.main-window').style.display = 'none';
    document.getElementById('open-window').style.display = 'block';
});


// Делает окно перемещаемым по странице, при помощи мыши
const dragElement = (element, dragArea) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    };

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    dragArea.onmousedown = dragMouseDown;
};

// Центрирует окно
const centerElement = (element) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const elementHeight = element.offsetHeight;
    const elementWidth = element.offsetWidth;

    element.style.top = (windowHeight / 2 - elementHeight / 2) + "px";
    element.style.left = (windowWidth / 2 - elementWidth / 2) + "px";
};

const draggableElement = document.getElementById("draggable");
const dragArea = document.getElementById("drag-area");
dragElement(draggableElement, dragArea);
centerElement(draggableElement);

window.onresize = () => centerElement(draggableElement);