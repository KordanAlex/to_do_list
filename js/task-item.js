import { createHtmlElement, addElements } from "./dom-helpers.js";

function createTaskItem(taskObj) {
    const uniqueId = crypto.randomUUID();

    const todoItem = createHtmlElement("li", {
        classes: "todo__item",
        styles: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "white",
            minHeight: "var(--min-height-field)",
            borderRadius: "15px",
            boxShadow: "inset 0 0 3px 1px black",
            paddingInline: "15px",
        },
    });

    const itemCheckbox = createHtmlElement("input", {
        classes: "todo-item__checkbox",
        styles: {
            width: "20px",
            aspectRatio: "1",
        },
        attrs: {
            id: uniqueId,
            type: "checkbox",
        },
    });

    itemCheckbox.checked = taskObj.isDone;

    const itemLabel = createHtmlElement("label", {
        classes: "todo-item__label",
        text: taskObj.text,
        styles: {
            fontSize: "20px",
            flexGrow: "1",
            paddingBottom: "2px",
            textDecoration: taskObj.isDone ? "line-through" : "none",
            color: taskObj.isDone ? "gray" : "black",
        },
        attrs: {
            for: uniqueId,
        },
    });

    const itemDeleteButton = createHtmlElement("button", {
        classes: "todo-item__delete-button",
        styles: {
            width: "20px",
            aspectRatio: "1",
            background:
                "url(./../img/svg/close_ico.svg) center/cover no-repeat",
            backgroundSize: "150%",
            transitionDuration: "var(--transition-duration)",
        },
        attrs: {
            type: "button",
            title: "Delete",
            ariaLabel: "Delete",
        },
    });

    addElements({
        parent: todoItem,
        children: [itemCheckbox, itemLabel, itemDeleteButton],
    });

    return {
        element: todoItem,
        checkbox: itemCheckbox,
        label: itemLabel,
        deleteBtn: itemDeleteButton,
    };
}

export { createTaskItem };
