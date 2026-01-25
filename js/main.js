function runToDoApp() {
    function createHtmlElement(
        tag,
        {
            classes = [],
            text = "",
            styles = {},
            attrs = {},
            parent = null,
        } = {},
    ) {
        const element = document.createElement(tag);

        if (typeof classes === "string") {
            element.classList.add(classes);
        } else {
            element.classList.add(...classes);
        }

        if (text) {
            element.textContent = text;
        }

        Object.assign(element.style, styles);

        Object.entries(attrs).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }

    const main = createHtmlElement("main", {
        classes: "main",
        parent: document.body,
    });

    const todo = createHtmlElement("div", {
        classes: "todo",
        styles: {
            maxWidth: "var(--width-container)",
            margin: "50px auto",
        },
        parent: main,
    });

    const todoContainer = createHtmlElement("div", {
        classes: "todo__container",
        styles: {
            display: "flex",
            flexWrap: "wrap",
            minHeight: "var(--min-height-container)",
            flexDirection: "column",
            backgroundColor: "#00000038",
            backdropFilter: "blur(15px)",
            borderRadius: "25px",
            borderTop: "1px solid rgba(128, 128, 128, 0.31)",
            borderLeft: "1px solid rgba(128, 128, 128, 0.31)",
            rowGap: "25px",
            paddingInline: "var(--padding-inline-main)",
        },
        parent: todo,
    });

    const todoTitle = createHtmlElement("h1", {
        classes: "todo__title",
        text: "To Do List",
        styles: {
            fontSize: "54px",
            marginTop: "15px",
            marginInline: "auto",
        },
        parent: todoContainer,
    });

    const todoTaskForm = createHtmlElement("form", {
        classes: "todo__task-form",
        parent: todoContainer,
    });

    const todoTaskField = createHtmlElement("div", {
        classes: ["todo__task-field", "task-field"],
        styles: {
            display: "flex",
            justifyContent: "space-between",
        },
        parent: todoTaskForm,
    });

    const taskFieldLabel = createHtmlElement("label", {
        classes: ["task-field__label", "visually-hidden"],
        text: "New task",
        attrs: {
            for: "New-task",
        },
        parent: todoTaskField,
    });

    const taskFieldInput = createHtmlElement("input", {
        classes: "task-field__input",
        styles: {
            paddingLeft: "20px",
            paddingRight: "10px",
            minHeight: "var(--min-height-field)",
            borderRadius: "15px",
            boxShadow: "inset 0 0 3px 0 black",
            flexGrow: "1",
            marginRight: "10px",
        },
        attrs: {
            type: "text",
            id: "New-task",
            placeholder: "New task",
        },
        parent: todoTaskField,
    });

    const taskFieldButton = createHtmlElement("Button", {
        classes: "task-field__button",
        styles: {
            fontSize: "20px",
            borderRadius: "15px",
            paddingInline: "20px",
            boxShadow: "inset 0 0 3px 0 black",
            transitionDuration: "var(--transition-duration)",
        },
        text: "add",
        attrs: {
            type: "submit",
        },
        parent: todoTaskField,
    });

    const todoSearchForm = createHtmlElement("form", {
        classes: "todo__search-form",
        parent: todoContainer,
    });

    const todoSearchField = createHtmlElement("div", {
        classes: ["todo__search-field", "field"],
        parent: todoSearchForm,
    });

    const searchFieldLabel = createHtmlElement("label", {
        classes: ["search-field__label", "visually-hidden"],
        text: "Search task",
        attrs: {
            for: "search-task",
        },
        parent: todoSearchField,
    });

    const searchFieldInput = createHtmlElement("input", {
        classes: "search-field__input",
        styles: {
            flexGrow: "1",
            paddingRight: "10px",
            backgroundColor: "transparent",
        },
        attrs: {
            type: "text",
            id: "search-task",
            placeholder: "Search task",
        },
        parent: todoSearchField,
    });

    const searchFieldButton = createHtmlElement("button", {
        classes: "search-field__button",
        styles: {
            minWidth: "30px",
            aspectRatio: "1",
            background:
                "url(./../img/svg/search_ico.svg) center/contain no-repeat",
            backgroundSize: "30px",
            transitionDuration: "0.2s",
        },
        attrs: {
            type: "button",
        },
        parent: todoSearchField,
    });

    const todoInfo = createHtmlElement("div", {
        classes: "todo__info",
        styles: {
            fontSize: "24px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "3px",
        },
        parent: todoContainer,
    });

    const todoTotalTask = createHtmlElement("div", {
        classes: "todo__total-task",
        text: "Total Task: ",
        parent: todoInfo,
    });

    const totalTaskValue = createHtmlElement("span", {
        text: "0",
        parent: todoTotalTask,
    });

    const deleteAllTaskButton = createHtmlElement("button", {
        classes: "total-task__delete-all-button",
        text: "Delete all",
        styles: {
            fontSize: "24px",
            backgroundColor: "transparent",
            transitionDuration: "var(--transition-duration)",
        },
        attrs: {
            type: "submit",
        },
        parent: todoInfo,
    });

    const todoList = createHtmlElement("ul", {
        classes: "todo__list",
        parent: todoContainer,
    });

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
        parent: todoList,
    });

    const itemCheckbox = createHtmlElement("input", {
        classes: "todo-item__checkbox",
        styles: {
            width: "20px",
            aspectRatio: "1",
        },
        attrs: {
            id: "item-checkbox",
            type: "checkbox",
        },
        parent: todoItem,
    });

    const itemLabel = createHtmlElement("label", {
        classes: "todo-item__label",
        text: "Task 1",
        styles: {
            fontSize: "20px",
            flexGrow: "1",
            paddingBottom: "2px",
        },
        attrs: {
            for: "item-checkbox",
        },
        parent: todoItem,
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
        parent: todoItem,
    });

    const todoEmptyMessage = createHtmlElement("div", {
        classes: "todo__empty-message",
        parent: todoContainer,
    })
}

runToDoApp();
