class module_sub_category {
        constructor(name, parent, displayName) {
                this.displayName = displayName || name;
                this.name = name;
                this.parentCategory = parent;
        }
        toggleVisibility() {
                if(document.getElementById(this.name + "-subCategory").style.display == "none") {
                        document.getElementById(this.name + "-subCategory").style.display = null;
                } else {
                        document.getElementById(this.name + "-subCategory").style.display = "none";
                }
        }
        toggleVisibilityS() {
                if(document.getElementById(this.name + "-subCategoryS").style.display == "none") {
                        document.getElementById(this.name + "-subCategoryS").style.display = null;
                } else {
                        document.getElementById(this.name + "-subCategoryS").style.display = "none";
                }
        }
}

//create your subcategorys here:
let hud_Subcategory = new module_sub_category("hud", "visual", "HUD");
let page_Subcategory = new module_sub_category("page","visual", "Page");
let misc_Subcategory = new module_sub_category("misc", "misc", "Misc");
let tab_Subcategory = new module_sub_category("tab", "misc", "Tab");
let membean_Subcategory = new module_sub_category("membean", "quiz", "Membean");
let paperclips_Subcategory = new module_sub_category("paperclips", "games", "Paperclips");
let spaceplan_Subcategory = new module_sub_category("spaceplan", "games", "Spaceplan");
let devTools_Subcategory = new module_sub_category("dev_tools", "devTools", "Tools");

//let premium_visual_Subcategory = new module_sub_category("premium_visual", "premium", "Visual");


var module_categorys = [
        "visual",
        "misc",
        "games",
        "devTools"
]
//when assigning a category to a module, you must use the name of a module sub category, not just the category name.
var module_sub_categorys = [
        hud_Subcategory,
        page_Subcategory,
        misc_Subcategory,
        tab_Subcategory,
        paperclips_Subcategory,
        spaceplan_Subcategory,
        devTools_Subcategory
]

//add the premium categorys if its premium mode:
if(injectMode == "Premium" || injectMode == "dev" || injectMode == "liveDebug") {
        //categories:
        module_categorys.push("quiz");

        //subcategories:
        module_sub_categorys.push(membean_Subcategory);
}



//color defaults
var D_ui_background_C = "#525252";
var D_ui_border_C = "#00ff15";
if(injectMode == "Premium") {
        D_ui_border_C = "#ff0000";
}
var D_button_background_C = "#616161";
var D_button_border_C = "#00ff15";
if(injectMode == "Premium") {
        D_button_border_C = "#ff0000";
}


//constructs all the elements into one and builds the client
function buildHMSClient() {
        let x = document.createElement('div');
        x.id = "HMSClientWindow";
        x.style.display = "none";
        x.style.padding = "5px;";
        x.style.backgroundColor = "#525252";
        x.style.border = "solid";
        x.style.borderWidth = "1px";
        x.style.position = "absolute";
        x.style.top = "20px";
        x.style.left = "20px";
        x.style.zIndex = "999999";
        x.style.overflowY = "scroll";
        x.style.maxHeight = window.innerHeight - 150 + "px";
        document.body.appendChild(x);
        document.getElementById("HMSClientWindow").appendChild(newTextBlock("HMSClientWindow-header", "HMS Client", "#FFF", null, "#FFF"));
        document.getElementById("HMSClientWindow-header").style.cursor = "move";
        document.getElementById("HMSClientWindow-header").style.color = "#FFF";
        dragElement(document.getElementById("HMSClientWindow"));
        //creates the categories:
        for(i=0;i<module_categorys.length;i++) {
                document.getElementById("HMSClientWindow").appendChild(newDiv(module_categorys[i] + "-categoryHolder"));
                document.getElementById(module_categorys[i] + "-categoryHolder").appendChild(newTextBlock(module_categorys[i] + "-categoryHeader", module_categorys[i], D_ui_border_C))
                document.getElementById(module_categorys[i] + "-categoryHolder").appendChild(newFancyDiv(module_categorys[i] + "-category"))
                let br = document.createElement('div');
                br.style.backgroundColor = "#303030";
                br.style.height = "15px";
                document.getElementById("HMSClientWindow").appendChild(br);
        }
        //creates the subcategories:
        for(i=0;i<module_sub_categorys.length;i++) {
                document.getElementById(module_sub_categorys[i].parentCategory + "-category").appendChild(newDiv(module_sub_categorys[i].name + "-subCategoryHolder"));
                let divbr = document.createElement('div');
                divbr.style.backgroundColor = "#303030";
                divbr.style.height = "10px";
                document.getElementById(module_sub_categorys[i].parentCategory + "-category").appendChild(divbr);
                document.getElementById(module_sub_categorys[i].name + "-subCategoryHolder").appendChild(newTextBlock(module_sub_categorys[i].name + "-subCategoryHeader", module_sub_categorys[i].displayName, "#FFF", null, "#FFF", null, null, null, i, "array"));
                document.getElementById(module_sub_categorys[i].name + "-subCategoryHolder").appendChild(newFancyDiv(module_sub_categorys[i].name + "-subCategory", null, null, null, "#FFF"))  ;
        }
        //insertes all the modules in their designated subcategory:
        for(i=0;i<modules.length;i++) {
                document.getElementById(modules[i].getModuleCategory() + "-subCategory").appendChild(newButton((modules[i].getModuleId() + "-module"), (modules[i].getModuleName()), i, modules[i].getModuleTooltip(), "#a3a3a3", "#6e6e6e"));
                let br = document.createElement('br');
                document.getElementById(modules[i].getModuleCategory() + "-subCategory").appendChild(br);
        }

        /*
        for(i=0;i<modules.length;i++) {
                document.getElementById("HMSClientWindow").appendChild(newButton((modules[i].getModuleId()), (modules[i].getModuleName()), i));
                let br = document.createElement('br');
                document.getElementById("HMSClientWindow").appendChild(br);
        }*/
}

//builds the main screen
function buildHMSClientScreen() {
        let x = document.createElement('div');
        x.id = "HMSClientScreen";
        x.style.width = window.innerWidth + "px";
        x.style.height = window.innerHeight + "px";
        x.style.position = "absolute";
        x.style.top = "0px";
        x.style.left = "0px";
        x.style.display = "none";
        x.style.zIndex = "99999999";
        x.style.padding = "5px";
        x.style.backgroundColor = "rgb(112, 112, 112, 0.75)";
        document.body.appendChild(x);

        //creates the categories:
        for(i=0;i<module_categorys.length;i++) {
                document.getElementById("HMSClientScreen").appendChild(newDiv(module_categorys[i] + "-categoryHolderS"));
                document.getElementById(module_categorys[i] + "-categoryHolderS").appendChild(newTextBlock(module_categorys[i] + "-categoryHolderS-header", module_categorys[i], D_ui_border_C))
                document.getElementById(module_categorys[i] + "-categoryHolderS").appendChild(newFancyDiv(module_categorys[i] + "-categoryS"))
                document.getElementById(module_categorys[i] + "-categoryHolderS").style.display = "inline-block";
                document.getElementById(module_categorys[i] + "-categoryHolderS").style.verticalAlign = "top";
                let xbr = document.createElement("div");
                xbr.style.display = "inline-block";
                xbr.style.width = "5px";
                document.getElementById("HMSClientScreen").appendChild(xbr);
        }
        //creates the subcategories:
        for(i=0;i<module_sub_categorys.length;i++) {
                document.getElementById(module_sub_categorys[i].parentCategory + "-categoryS").appendChild(newDiv(module_sub_categorys[i].name + "-subCategoryHolderS"));
                let divbr = document.createElement('div');
                divbr.style.backgroundColor = "#303030";
                divbr.style.height = "10px";
                document.getElementById(module_sub_categorys[i].parentCategory + "-categoryS").appendChild(divbr);
                document.getElementById(module_sub_categorys[i].name + "-subCategoryHolderS").appendChild(newTextBlock(module_sub_categorys[i].name + "-subCategoryHeaderS", module_sub_categorys[i].displayName, "#FFF", null, "#FFF", null, null, null, i, "hud"));
                document.getElementById(module_sub_categorys[i].name + "-subCategoryHolderS").appendChild(newFancyDiv(module_sub_categorys[i].name + "-subCategoryS", null, null, null, "#FFF"))  ;
        }
        //insertes all the modules in their designated subcategory:
        for(i=0;i<modules.length;i++) {
                let d = document.createElement('div');
                d.id = modules[i].getModuleId() + "-moduleS-container";
                if(modules[i].hasSettings == true) {
                        d.style.borderLeft = "solid";
                        d.style.borderColor = D_ui_border_C;
                        d.style.borderWidth = "2px";
                }
                let s = document.createElement('div');
                s.id = modules[i].getModuleId() + "-moduleS-setting-container";
                s.style.display = "none";
                document.getElementById(modules[i].getModuleCategory() + "-subCategoryS").appendChild(d);
                document.getElementById(modules[i].getModuleId() + "-moduleS-container").appendChild(newButton((modules[i].getModuleId() + "-moduleS"), (modules[i].getModuleName()), i, modules[i].getModuleTooltip(), "#a3a3a3", "#6e6e6e"));
                document.getElementById(modules[i].getModuleId() + "-moduleS-container").appendChild(s);
        }

        document.body.addEventListener('keypress', e => {
                if(e.key === "`") {
                        toggleHMSClientScreen();
                }
        })


        //watermark:
        let w = newTextBlock("HMSClientWatermark", "<h2 style='display:inline-block'>HMS Client </h2><p style='display:inline-block'><sub> Public</sub></p>", D_ui_border_C, null, null, "25px");
        switch(injectMode) {
                case "live":
                        w.innerHTML = "<h2 style='display:inline-block'>HMS Client </h2><p style='display:inline-block'><sub> Public</sub></p>";
                        break;
                case "liveDebug":
                        w.innerHTML = "<h2 style='display:inline-block'>HMS Client </h2><p style='display:inline-block'><sub> Dev</sub></p>";
                        break;
                case "dev":
                        w.innerHTML = "<h2 style='display:inline-block'>HMS Client </h2><p style='display:inline-block'><sub> Dev</sub></p>";
                        break;
                case "Premium":
                        w.innerHTML = "<h2 style='display:inline-block'>HMS Client </h2><p style='display:inline-block'><sub> Premium</sub></p>"

        }
        w.style.position = "absolute";
        w.style.left = "";
        w.style.top = "";
        w.style.right = "20px";
        w.style.bottom = "20px";
        document.getElementById("HMSClientScreen").appendChild(w);


        
}





//SETTINGS:



function registerBoolSetting(tiedModuleId, displayName, varName, defaultValue) {
        let setting = new m_boolSetting(tiedModuleId, displayName, varName, defaultValue);
        m_settings.push(setting);
};

function boolSetting(setting) {
        if(document.getElementById(setting + "-boolSetting").checked == true) {
                return true;
        } else if(document.getElementById(setting + "-boolSetting").checked == false) {
                return false;
        }
}


function registerIntSetting(tiedModuleId, displayName, varName, defaultValue, minValue, maxValue) {
        let setting = new m_intSetting(tiedModuleId, displayName, varName, defaultValue, minValue, maxValue);
        m_settings.push(setting);
}

function intSetting(setting) {
        let value = document.getElementById(setting + "-intSetting").value;
        return value;
}





function drawBoolSetting(i) {
        let br = document.createElement("br");
        let setting = document.createElement("input");
        let label = document.createElement('label');
        label.for = m_settings[i].varName + "-boolSetting";
        label.innerHTML = m_settings[i].displayName;
        label.style.fontFamily = "arial";
        setting.type = "checkbox";
        setting.id = m_settings[i].varName + "-boolSetting";
        setting.name = m_settings[i].displayName;
        if(m_settings[i].defaultValue == true) {
                setting.checked = true;
        } else {
                setting.checked = false;
        };
        setTimeout(function() {
                if(document.getElementById(m_settings[i].tiedModuleId + "-moduleS-setting-container").hasChildNodes()) {
                        document.getElementById(m_settings[i].tiedModuleId + "-moduleS-setting-container").appendChild(br);
                }
                document.getElementById(m_settings[i].tiedModuleId + "-moduleS-setting-container").appendChild(setting);
                document.getElementById(m_settings[i].tiedModuleId + "-moduleS-setting-container").appendChild(label);
        },10);
}

function drawIntSetting(i) {
        let br = document.createElement("br");
        let setting = document.createElement("input");
        let label = document.createElement('label');
        label.for = m_settings[i].varName + "-intSetting";
        label.innerHTML = m_settings[i].displayName + ": " + m_settings[i].defaultValue;
        label.style.fontFamily = "arial";
        label.id = m_settings[i].varName + "-intSetting-label";
        setting.type = "range";
        setting.id = m_settings[i].varName + "-intSetting";
        setting.name = m_settings[i].displayName;
        setting.value = m_settings[i].defaultValue;
        setting.min = m_settings[i].minValue;
        setting.max = m_settings[i].maxValue;
        setTimeout(function() {
                if(document.getElementById(m_settings[i].tiedModuleId + "-moduleS-setting-container").hasChildNodes()) {
                        document.getElementById(m_settings[i].tiedModuleId + "-moduleS-setting-container").appendChild(br);
                }
                document.getElementById(m_settings[i].tiedModuleId + "-moduleS-setting-container").appendChild(setting);
                document.getElementById(m_settings[i].tiedModuleId + "-moduleS-setting-container").appendChild(label);
                document.getElementById(m_settings[i].varName + "-intSetting").addEventListener('change', function() {
                        document.getElementById(m_settings[i].varName + "-intSetting-label").innerHTML = m_settings[i].displayName + ": " + document.getElementById(m_settings[i].varName + "-intSetting").value;
                })
        },100);
}


function buildHMSClientScreenSettings() {
        for(i=0;i<m_settings.length;i++) {
                if(m_settings[i].settingType == "int") {
                        drawIntSetting(i);
                } else if(m_settings[i].settingType == "bool") {
                        drawBoolSetting(i);
                }
        }
}











//backend stuff:




function notifySuccessfullInjection() {
        //success inject notifier
        document.body.appendChild(newTextBlock("SuccessInjectClient", "HMS Client sucessfully injected! Press the ` key on your keyboard to open the HUD menu.", D_ui_border_C, null, null, 100, 200, "absolute"));
        document.getElementById("SuccessInjectClient").style.top = "5px";
        document.getElementById("SuccessInjectClient").style.zIndex = "99999";
        setTimeout(
                function() {
                        document.getElementById("SuccessInjectClient").remove();
                }, 2500
        );
}
//toggles the main module screen when the user presses the ` key
function toggleHMSClientScreen() {
        if(document.getElementById("HMSClientScreen").style.display == "none") {
                document.getElementById("HMSClientScreen").style.display = "";
                document.getElementById("HMSClientScreen").style.top = document.documentElement.scrollTop + "px";
                document.getElementById("HMSClientScreen").style.left = document.documentElement.scrollLeft + "px";
                document.body.style.overflow = "hidden";
        } else {
                document.getElementById("HMSClientScreen").style.display = "none";
                document.body.style.overflow = "";
        };
}


//allows the window to be draggable:
function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "-header")) {
          // if present, the header is where you move the DIV from:
          document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          elmnt.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      };
      










//let shouldInject = false;
/* var client_injection_check = setInterval(
        function() {
                const client_files_list = [
                        ModuleManager_Loaded,
                        ModuleInitalizer_Loaded,
                        BuildTools_Loaded,
                
                        //modules:
                        MembeanAC_Loaded,
                        TabFreeze_Loaded
                ]
                let loaded_files_count_true = 0;
                let loaded_files_count_false = 0;
                if(shouldInject == false) {
                        for(i=0;i<client_files_list;i++) {
                                if(client_files_list[i] == true) {
                                        loaded_files_count_true++;
                                        console.log("logged true file")
                                } else {
                                        loaded_files_count_false++;
                                }
                        }
                        if(loaded_files_count_false < 0) {
                        } else {
                                shouldInject = true;
                        }
                } else {
                        clearInterval(client_injection_check);
                        initModules();
                        buildHMSClient();
                }
        }, 500
)*/
