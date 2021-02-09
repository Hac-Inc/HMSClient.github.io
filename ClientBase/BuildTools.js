function newDiv(id, innerHTML, hoverText) {
        let div = document.createElement('div');
        hoverText = hoverText || "";
        div.id = id;
        div.title = hoverText;
        div.innerHTML = innerHTML || null;
        div.style.padding = "5px;";
        div.style.background = "#525252";
        div.style.border = "solid";
        div.style.borderWidth = "1px";
        return div;
}
function newButton(id, DisplayName, moduleListId, hoverText) {
        let button = document.createElement('input');
        hoverText = hoverText || DisplayName;
        button.type = "button";
        button.id = id;
        button.title = hoverText;
        button.value = DisplayName;
        button.style.padding = "5px";
        setTimeout(
                function() {
                        document.getElementById(id).addEventListener('click', function() {modules[moduleListId].execute()})
                }, 100
        )
        return button;
}
