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
function newFancyDiv(id, innerHTML, hoverText, backgroundColor, borderColor) {
        backgroundColor = backgroundColor || "#525252";
        borderColor = borderColor || "#00ff15";
        let div = document.createElement('div');
        hoverText = hoverText || "";
        div.id = id;
        div.title = hoverText;
        div.innerHTML = innerHTML || null;
        div.style.padding = "5px;";
        div.style.background = "#525252";
        div.style.border = "solid";
        div.style.borderWidth = "1px";
        div.style.borderColor = borderColor;
        div.style.backgroundColor = backgroundColor;
        div.style.padding = "2px";
        return div;
}
function newButton(id, DisplayName, moduleListId, hoverText, backgroundColor, borderColor) {
        backgroundColor = backgroundColor || "#616161";
        borderColor = borderColor || "#00ff15";
        let button = document.createElement('input');
        hoverText = hoverText || DisplayName;
        button.type = "button";
        button.id = id;
        button.title = hoverText;
        button.value = DisplayName;
        button.style.padding = "5px";
        button.style.backgroundColor = backgroundColor;
        button.style.border = "solid";
        button.style.borderWidth = "2px";
        button.style.borderColor = borderColor;
        setTimeout(
                function() {
                        document.getElementById(id).addEventListener('click', function() {modules[moduleListId].execute()})
                }, 100
        )
        return button;
}
function newUi(id, x, y, height, width, innerHtml, backgroundColor, borderColor) {
        backgroundColor = backgroundColor || "#525252";
        borderColor = borderColor || "#00ff15";
        let ui = document.createElement('div');
        innerHtml = innerHtml || null;
        ui.id = id;
        ui.style.position = "sticky";
        ui.style.bottom = y + "px";
        ui.style.left = x + "px";
        ui.innerHTML = innerHtml;
        ui.style.minHeight = "10px";
        ui.style.minWidth = "20px";
        ui.style.height = height + "px";
        ui.style.width = width + "px";
        ui.style.backgroundColor = backgroundColor;
        ui.style.border = "solid";
        ui.style.borderColor = borderColor;
        ui.style.borderWidth = "2px";
        ui.style.zIndex = "99999";
        ui.style.padding = "5px";
        return ui;
}
function newTextBlock(id, innerHTML, textColor, backgroundColor, borderColor, moduleSubCategoryListId) {
        backgroundColor = backgroundColor || "#616161";
        borderColor = borderColor || "#00ff15";
        let div = document.createElement('div');
        div.style.fontFamily = "Arial, Helvetica, sans-serif";
        div.id = id;
        div.innerHTML = innerHTML || null;
        div.style.padding = "5px;";
        div.style.background = "#525252";
        div.style.border = "solid";
        div.style.borderWidth = "1px";
        div.style.padding = "3px";
        div.style.color = textColor;
        div.style.backgroundColor = backgroundColor;
        div.style.borderColor = borderColor;
        setTimeout(
                function() {
                        if(moduleSubCategoryListId != undefined && moduleSubCategoryListId != null) {
                                document.getElementById(id).addEventListener('click', function() {module_sub_categorys[moduleSubCategoryListId].toggleVisibility()})
                        }
                }, 100
        )
        return div;
}