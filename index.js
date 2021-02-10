class module_sub_category {
        constructor(name, parent) {
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
let hud_Subcategory = new module_sub_category("hud", "hud");
let misc_Subcategory = new module_sub_category("misc", "misc");
let tab_Subcategory = new module_sub_category("tab", "misc");
let membean_Subcategory = new module_sub_category("membean", "quiz");
let paperclips_Subcategory = new module_sub_category("paperclips", "games");


const module_categorys = [
        "hud",
        "misc",
        "quiz",
        "games"
]
const module_sub_categorys = [
        hud_Subcategory,
        misc_Subcategory,
        tab_Subcategory,
        membean_Subcategory,
        paperclips_Subcategory
]


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
                document.getElementById(module_categorys[i] + "-categoryHolder").appendChild(newTextBlock(module_categorys[i] + "-categoryHeader", module_categorys[i], "lime"))
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
                document.getElementById(module_sub_categorys[i].name + "-subCategoryHolder").appendChild(newTextBlock(module_sub_categorys[i].name + "-subCategoryHeader", module_sub_categorys[i].name, "#FFF", null, "#FFF", null, null, null, i, "array"));
                document.getElementById(module_sub_categorys[i].name + "-subCategoryHolder").appendChild(newFancyDiv(module_sub_categorys[i].name + "-subCategory", null, null, null, "#FFF"))  ;
        }
        //insertes all the modules in their designated subcategory:
        for(i=0;i<modules.length;i++) {
                document.getElementById(modules[i].getModuleCategory() + "-subCategory").appendChild(newButton((modules[i].getModuleId()), (modules[i].getModuleName()), i, modules[i].getModuleTooltip(), "#a3a3a3", "#6e6e6e"));
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
                document.getElementById(module_categorys[i] + "-categoryHolderS").appendChild(newTextBlock(module_categorys[i] + "-categoryHolderS-header", module_categorys[i], "lime"))
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
                document.getElementById(module_sub_categorys[i].name + "-subCategoryHolderS").appendChild(newTextBlock(module_sub_categorys[i].name + "-subCategoryHeaderS", module_sub_categorys[i].name, "#FFF", null, "#FFF", null, null, null, i, "hud"));
                document.getElementById(module_sub_categorys[i].name + "-subCategoryHolderS").appendChild(newFancyDiv(module_sub_categorys[i].name + "-subCategoryS", null, null, null, "#FFF"))  ;
        }
        //insertes all the modules in their designated subcategory:
        for(i=0;i<modules.length;i++) {
                document.getElementById(modules[i].getModuleCategory() + "-subCategoryS").appendChild(newButton((modules[i].getModuleId() + "S"), (modules[i].getModuleName()), i, modules[i].getModuleTooltip(), "#a3a3a3", "#6e6e6e"));
                let br = document.createElement('br');
                document.getElementById(modules[i].getModuleCategory() + "-subCategoryS").appendChild(br);
        }

        document.body.addEventListener('keypress', e => {
                if(e.key === "`") {
                        toggleHMSClientScreen();
                }
        })

        
}

function notifySuccessfullInjection() {
        //success inject notifier
        document.body.appendChild(newTextBlock("SuccessInjectClient", "HMS Client sucessfully injected! Press the ` key on your keyboard to open the HUD menu.", "lime", null, null, 100, 200, "absolute"));
        document.getElementById("SuccessInjectClient").style.top = "5px";
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
