
// Делает элемент перемещаемым по странице, при помощи мыши
const dragElement = (element) => {
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

    element.onmousedown = dragMouseDown;
};

// Центрирует элемент при открытии страницы
const centerElement = (element) => {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const elementHeight = element.offsetHeight;
    const elementWidth = element.offsetWidth;

    element.style.top = (windowHeight / 2 - elementHeight / 2) + "px";
    element.style.left = (windowWidth / 2 - elementWidth / 2) + "px";
};

const draggableElement = document.getElementById("draggable");
dragElement(draggableElement);
centerElement(draggableElement);

window.onresize = () => centerElement(draggableElement);