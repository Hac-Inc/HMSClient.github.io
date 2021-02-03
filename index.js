function newButton(id, DisplayName, onclick) {
        button = document.createElement('input');
        button.type = "button";
        button.id = id;
        button.value = DisplayName;
        button.style.padding = "5px";
        button.onclick = onclick;
        return button;
}