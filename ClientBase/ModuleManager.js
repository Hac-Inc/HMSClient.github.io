let modules = [];

var m_settings = [];


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


class module {

        

        constructor() {
                this.ModuleName;
                this.ModuleId;
                this.category;    //for the category you must put the name of a subcategory.
                this.tooltip;
                this.toggleable = false;
                this.hasSettings = false;

                this.active = false;


        }
        getModuleName() {
                return this.ModuleName;
        }
        getModuleId() {
                return this.ModuleId;
        }
        getModuleCategory() {
                return this.category;
        }
        getModuleTooltip() {
                if(this.tooltip == undefined) {
                        return this.ModuleName;
                } else {
                        return this.tooltip;
                }
        }

        execute() {
                return;
        };
        onActivate() {
                return;
        };
        onDeactivate() {
                return;
        };
        onToggle() {
                return;
        };
        whileActive() {
                return;
        };

        toggle() {
                if(this.toggleable == true) {
                        if(this.active == false) {
                                this.active = true;
                                this.onActivate();
                                this.onToggle();
                                document.getElementById(this.ModuleId + "-module").style.color = D_ui_border_C;
                                document.getElementById(this.ModuleId + "-moduleS").style.color = D_ui_border_C;
                                drawArrayListModule(this.ModuleId, this.ModuleName);
                        } else if(this.active == true) {
                               this.active = false;
                               this.onDeactivate();
                               this.onToggle(); 
                               document.getElementById(this.ModuleId + "-module").style.color = "black";
                               document.getElementById(this.ModuleId + "-moduleS").style.color = "black";
                               removeArrayListModule(this.ModuleId);
                        }
                }
        };


        
        

}



function readModuleActive(moduleId) {
        for(i=0;i<modules.length;i++) {
                if(modules[i].ModuleId == moduleId) {
                        return modules[i].active;
                }
        }
}




class m_boolSetting {
        constructor(tiedModuleId, displayName, varName, defaultValue) {
                this.tiedModuleId = tiedModuleId;
                this.displayName = displayName;
                this.varName = varName;
                this.defaultValue = defaultValue;
                this.settingType = "bool";
        }
}

class m_intSetting {
        constructor(tiedModuleId, displayName, varName, defaultValue, minValue, maxValue) {
                this.tiedModuleId = tiedModuleId;
                this.displayName = displayName;
                this.varName = varName;
                this.defaultValue = defaultValue;
                this.minValue = minValue;
                this.maxValue = maxValue;
                this.settingType = "int";
        }
}


//the default value will be the first option you put in the values list
class m_enumSetting {
        constructor(tiedModuleId, displayName, varName, valuesList) {
                this.tiedModuleId = tiedModuleId
                this.displayName = displayName
                this.varName = varName
                this.values = valuesList
                this.settingType = "enum"
        }
}




/*
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
*/