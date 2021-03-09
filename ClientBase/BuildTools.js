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


function registerBoolSetting(tiedModuleId, displayName, varName, defaultValue) {
        let br = document.createElement("br");
        let setting = document.createElement("input");
        let label = document.createElement('label');
        label.for = varName + "-boolSetting";
        label.innerHTML = displayName;
        label.style.fontFamily = "arial";
        setting.type = "checkbox";
        setting.id = varName + "-boolSetting";
        setting.name = displayName;
        if(defaultValue == true) {
                setting.checked = true;
        } else {
                setting.checked = false;
        };
        setTimeout(function() {
                if(document.getElementById(tiedModuleId + "-moduleS-setting-container").hasChildNodes()) {
                        document.getElementById(tiedModuleId + "-moduleS-setting-container").appendChild(br);
                }
                document.getElementById(tiedModuleId + "-moduleS-setting-container").appendChild(setting);
                document.getElementById(tiedModuleId + "-moduleS-setting-container").appendChild(label);
        },1010);
};

function boolSetting(setting) {
        if(document.getElementById(setting + "-boolSetting").checked == true) {
                return true;
        } else if(document.getElementById(setting + "-boolSetting").checked == false) {
                return false;
        }
}


function registerIntSetting(tiedModuleId, displayName, varName, defaultValue, minValue, maxValue) {
        let br = document.createElement("br");
        let setting = document.createElement("input");
        let label = document.createElement('label');
        label.for = varName + "-intSetting";
        label.innerHTML = displayName + ": " + defaultValue;
        label.style.fontFamily = "arial";
        label.id = varName + "-intSetting-label";
        setting.type = "range";
        setting.id = varName + "-intSetting";
        setting.name = displayName;
        setting.value = defaultValue;
        setting.min = minValue;
        setting.max = maxValue;
        setTimeout(function() {
                if(document.getElementById(tiedModuleId + "-moduleS-setting-container").hasChildNodes()) {
                        document.getElementById(tiedModuleId + "-moduleS-setting-container").appendChild(br);
                }
                document.getElementById(tiedModuleId + "-moduleS-setting-container").appendChild(setting);
                document.getElementById(tiedModuleId + "-moduleS-setting-container").appendChild(label);
                document.getElementById(varName + "-intSetting").addEventListener('change', function() {
                        document.getElementById(varName + "-intSetting-label").innerHTML = displayName + ": " + document.getElementById(varName + "-intSetting").value;
                })
        },1010);
}

function intSetting(setting) {
        let value = document.getElementById(setting + "-intSetting").value;
        return value;
}
