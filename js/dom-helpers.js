function createHtmlElement(
    tag,
    { classes = [], text = "", styles = {}, attrs = {} } = {},
) {
    const element = document.createElement(tag);

    const classArray = Array.isArray(classes) ? classes : [classes];
    const validClasses = classArray.filter(
        (cls) => typeof cls === "string" && cls.trim() !== "",
    );
    if (validClasses.length > 0) element.classList.add(...validClasses);

    if (text) element.textContent = text;

    Object.assign(element.style, styles);

    Object.entries(attrs).forEach(([key, value]) =>
        element.setAttribute(key, value),
    );

    return element;
}

function addElements(parent, ...children) {
    children.forEach((child) => child && parent.append(child));
    return parent;
}


export {createHtmlElement, addElements}