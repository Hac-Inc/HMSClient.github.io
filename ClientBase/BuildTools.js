//color defaults
var D_ui_background_C = "#525252";
var D_ui_border_C = "#00ff15";
var D_button_background_C = "#616161";
var D_button_border_C = "#00ff15";


function newDiv(id, innerHTML, hoverText) {
        let div = document.createElement('div');
        hoverText = hoverText || "";
        div.id = id;
        div.title = hoverText;
        div.innerHTML = innerHTML || null;
        div.style.padding = "5px;";
        div.style.background = D_ui_background_C;
        div.style.border = "solid";
        div.style.borderWidth = "1px";
        return div;
}
function newFancyDiv(id, innerHTML, hoverText, backgroundColor, borderColor) {
        backgroundColor = backgroundColor || D_ui_background_C;
        borderColor = borderColor || D_ui_border_C;
        let div = document.createElement('div');
        hoverText = hoverText || "";
        div.id = id;
        div.title = hoverText;
        div.innerHTML = innerHTML || null;
        div.style.padding = "5px;";
        div.style.background = D_ui_background_C;
        div.style.border = "solid";
        div.style.borderWidth = "1px";
        div.style.borderColor = borderColor;
        div.style.backgroundColor = backgroundColor;
        div.style.padding = "2px";
        return div;
}
function newButton(id, DisplayName, moduleListId, hoverText, backgroundColor, borderColor) {
        backgroundColor = backgroundColor || "#616161";
        borderColor = borderColor || D_button_border_C;
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
        button.style.outline = "none";
        setTimeout(
                function() {
                        document.getElementById(id).addEventListener('click', function() {modules[moduleListId].toggle()})
                        document.getElementById(id).addEventListener('click', function() {modules[moduleListId].execute()})
                        document.getElementById(id).addEventListener('contextmenu', function(e) {
                                e.preventDefault();
                                if(modules[moduleListId].hasSettings == true) {
                                        if(document.getElementById(modules[moduleListId].getModuleId() + "-moduleS-setting-container").style.display == "none") {
                                                document.getElementById(modules[moduleListId].getModuleId() + "-moduleS-setting-container").style.display = "";
                                                document.getElementById(modules[moduleListId].getModuleId() + "-moduleS-container").style.borderLeft = "solid";
                                                document.getElementById(modules[moduleListId].getModuleId() + "-moduleS-container").style.borderWidth = "5px";
                                                document.getElementById(modules[moduleListId].getModuleId() + "-moduleS-container").style.borderColor = "#00ff15";
                                        } else {
                                                document.getElementById(modules[moduleListId].getModuleId() + "-moduleS-setting-container").style.display = "none";
                                                document.getElementById(modules[moduleListId].getModuleId() + "-moduleS-container").style.borderWidth = "2px";
                                        }
                                }
                        })
                        setInterval(function() {
                                if(modules[moduleListId].active == true) {
                                        modules[moduleListId].whileActive();
                                };
                        },100);
                }, 100
        )
        return button;
}
function newUi(id, top_bottom, left_right, x, y, height, width, innerHtml, backgroundColor, borderColor) {
        top_bottom = top_bottom || "top";
        left_right = left_right || "left";
        backgroundColor = backgroundColor || D_ui_background_C;
        borderColor = borderColor || D_ui_border_C;
        let ui = document.createElement('div');
        innerHtml = innerHtml || null;
        ui.id = id;
        ui.style.position = "sticky";
        switch(top_bottom) {
                case "top":
                        ui.style.top = y + "px";
                        break;
                case "bottom":
                        ui.style.bottom = y + "px";
                        break;
        };
        switch(left_right) {
                case "left":
                        ui.style.left = x + "px";
                        break;
                case "right":
                        ui.style.right = x + "px";
        }
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
function newTextBlock(id, innerHTML, textColor, backgroundColor, borderColor, height, width, posType, moduleSubCategoryListId, array_hud) {
        height = height || "unset";
        width = width || "unset";
        array_hud = array_hud || "array";
        backgroundColor = backgroundColor || D_button_background_C;
        borderColor = borderColor || D_ui_border_C;
        let div = document.createElement('div');
        div.style.fontFamily = "Arial, Helvetica, sans-serif";
        div.id = id;
        div.innerHTML = innerHTML || null;
        div.style.padding = "5px;";
        div.style.background = D_ui_background_C;
        div.style.border = "solid";
        div.style.borderWidth = "1px";
        div.style.padding = "3px";
        div.style.height = height + "px";
        div.style.width = width + "px";
        div.style.position = posType;
        div.style.color = textColor;
        div.style.backgroundColor = backgroundColor;
        div.style.borderColor = borderColor;
        setTimeout(
                function() {
                        if(moduleSubCategoryListId != undefined && moduleSubCategoryListId != null && array_hud === "array") {
                                document.getElementById(id).addEventListener('click', function() {module_sub_categorys[moduleSubCategoryListId].toggleVisibility()})
                        } else if(moduleSubCategoryListId != undefined && moduleSubCategoryListId != null && array_hud === "hud") {
                                document.getElementById(id).addEventListener('click', function() {module_sub_categorys[moduleSubCategoryListId].toggleVisibilityS()})
                        }
                }, 100
        )
        return div;
}





//draw functions:

function drawArrayListModule(moduleId, displayName) {
        let br = document.createElement('div');
        br.id = moduleId + "-moduleArrayListItemBr";
        if(document.getElementById("HMSClientModuleArrayList")?.hasChildNodes()) {
                document.getElementById("HMSClientModuleArrayList")?.appendChild(br);
        };
        let x = document.createElement('div');
        x.id = moduleId + "-moduleArrayListItemDiv";
        x.innerHTML = displayName;
        x.style.color = D_ui_border_C;
        x.style.fontFamily = "arial"
        x.style.borderRight = "solid";
        x.style.borderColor = D_ui_border_C;
        x.style.borderWidth = "4px;";
        x.style.padding = "3px";
        x.style.textAlign = "right";
        let s = document.createElement('div');
        s.id = moduleId + "-moduleArrayListItem";
        document.getElementById("HMSClientModuleArrayList")?.appendChild(s);
        document.getElementById(moduleId + "-moduleArrayListItem")?.appendChild(x);
}
function removeArrayListModule(moduleId) {
        document.getElementById(moduleId + "-moduleArrayListItem")?.remove();
        document.getElementById(moduleId + "-moduleArrayListItemBr")?.remove();
}
