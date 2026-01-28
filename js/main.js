function runToDoApp() {
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

    const main = createHtmlElement("main", {
        classes: "main",
    });

    const todo = createHtmlElement("div", {
        classes: "todo",
        styles: {
            maxWidth: "var(--width-container)",
            margin: "50px auto",
        },
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
    });

    const todoTitle = createHtmlElement("h1", {
        classes: "todo__title",
        text: "To Do List",
        styles: {
            fontSize: "54px",
            marginTop: "15px",
            marginInline: "auto",
        },
    });

    const todoTaskForm = createHtmlElement("form", {
        classes: "todo__task-form",
    });

    const todoTaskField = createHtmlElement("div", {
        classes: ["todo__task-field", "task-field"],
        styles: {
            display: "flex",
            justifyContent: "space-between",
        },
    });

    const taskFieldLabel = createHtmlElement("label", {
        classes: ["task-field__label", "visually-hidden"],
        text: "New task",
        attrs: {
            for: "New-task",
        },
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
    });

    const todoSearchForm = createHtmlElement("form", {
        classes: "todo__search-form",
    });

    const todoSearchField = createHtmlElement("div", {
        classes: ["todo__search-field", "field"],
    });

    const searchFieldLabel = createHtmlElement("label", {
        classes: ["search-field__label", "visually-hidden"],
        text: "Search task",
        attrs: {
            for: "search-task",
        },
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
    });

    const todoTotalTask = createHtmlElement("div", {
        classes: "todo__total-task",
        text: "Total Task: ",
    });

    const totalTaskValue = createHtmlElement("span", {
        text: "0",
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
    });

    const todoList = createHtmlElement("ul", {
        classes: "todo__list",
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

    const todoEmptyMessage = createHtmlElement("div", {
        classes: "todo__empty-message",
    });

    // Cборка проект в дом
    document.body.append(
        addElements(
            main,
            addElements(
                todo,
                addElements(
                    todoContainer,
                    todoTitle,
                    addElements(
                        todoTaskForm,
                        addElements(
                            todoTaskField,
                            taskFieldLabel,
                            taskFieldInput,
                            taskFieldButton,
                        ),
                    ),
                    addElements(
                        todoSearchForm,
                        addElements(
                            todoSearchField,
                            searchFieldInput,
                            searchFieldButton,
                        ),
                    ),
                    addElements(
                        todoInfo,
                        addElements(todoTotalTask, totalTaskValue),
                        deleteAllTaskButton,
                    ),
                    addElements(
                        todoList,
                        addElements(
                            todoItem,
                            itemCheckbox,
                            itemLabel,
                            itemDeleteButton,
                        ),
                    ),
                    todoEmptyMessage,
                ),
            ),
        ),
    );
}
runToDoApp();
