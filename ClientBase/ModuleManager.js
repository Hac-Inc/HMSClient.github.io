let modules = [];


class module {

        registerBoolSetting(tiedModuleId, displayName, varName, defaultValue) {
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
                },2010);
        };
        
        boolSetting(setting) {
                if(document.getElementById(setting + "-boolSetting").checked == true) {
                        return true;
                } else if(document.getElementById(setting + "-boolSetting").checked == false) {
                        return false;
                }
        }
        
        
        registerIntSetting(tiedModuleId, displayName, varName, defaultValue, minValue, maxValue) {
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
                },2010);
        }
        
        intSetting(setting) {
                let value = document.getElementById(setting + "-intSetting").value;
                return value;
        }

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
                                document.getElementById(this.ModuleId + "-module").style.color = "#00ff15";
                                document.getElementById(this.ModuleId + "-moduleS").style.color = "#00ff15";
                        } else if(this.active == true) {
                               this.active = false;
                               this.onDeactivate();
                               this.onToggle(); 
                               document.getElementById(this.ModuleId + "-module").style.color = "black";
                               document.getElementById(this.ModuleId + "-moduleS").style.color = "black";
                        }
                }
        };


        
        

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