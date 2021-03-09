let modules = [];

let m_settings = [];


class module {

        registerBoolSetting(tiedModuleId, displayName, varName, defaultValue) {
                let setting = new m_boolSetting(tiedModuleId, displayName, varName, defaultValue);
                m_settings.push(setting);
        };
        
        boolSetting(setting) {
                if(document.getElementById(setting + "-boolSetting").checked == true) {
                        return true;
                } else if(document.getElementById(setting + "-boolSetting").checked == false) {
                        return false;
                }
        }
        
        
        registerIntSetting(tiedModuleId, displayName, varName, defaultValue, minValue, maxValue) {
                let setting = new m_intSetting(tiedModuleId, displayName, varName, defaultValue, minValue, maxValue);
                m_settings.push(setting);
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




class m_boolSetting {
        constructor(tiedModuleId, displayName, varName, defaultValue) {
                this.tiedModuleId = tiedModuleId;
                this.displayName = displayName;
                this.varName = varName;
                this.defaultValue = defaultValue;
        }
        draw() {
                let br = document.createElement("br");
                let setting = document.createElement("input");
                let label = document.createElement('label');
                label.for = this.varName + "-boolSetting";
                label.innerHTML = this.displayName;
                label.style.fontFamily = "arial";
                setting.type = "checkbox";
                setting.id = this.varName + "-boolSetting";
                setting.name = this.displayName;
                if(this.defaultValue == true) {
                        setting.checked = true;
                } else {
                        setting.checked = false;
                };
                setTimeout(function() {
                        if(document.getElementById(this.tiedModuleId + "-moduleS-setting-container").hasChildNodes()) {
                                document.getElementById(this.tiedModuleId + "-moduleS-setting-container").appendChild(br);
                        }
                        document.getElementById(this.tiedModuleId + "-moduleS-setting-container").appendChild(setting);
                        document.getElementById(this.tiedModuleId + "-moduleS-setting-container").appendChild(label);
                },2010);
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
        }
        draw() {
                let br = document.createElement("br");
                let setting = document.createElement("input");
                let label = document.createElement('label');
                label.for = this.varName + "-intSetting";
                label.innerHTML = this.displayName + ": " + this.defaultValue;
                label.style.fontFamily = "arial";
                label.id = this.varName + "-intSetting-label";
                setting.type = "range";
                setting.id = this.varName + "-intSetting";
                setting.name = this.displayName;
                setting.value = this.defaultValue;
                setting.min = this.minValue;
                setting.max = this.maxValue;
                setTimeout(function() {
                        if(document.getElementById(this.tiedModuleId + "-moduleS-setting-container").hasChildNodes()) {
                                document.getElementById(this.tiedModuleId + "-moduleS-setting-container").appendChild(br);
                        }
                        document.getElementById(this.tiedModuleId + "-moduleS-setting-container").appendChild(setting);
                        document.getElementById(this.tiedModuleId + "-moduleS-setting-container").appendChild(label);
                        document.getElementById(this.varName + "-intSetting").addEventListener('change', function() {
                                document.getElementById(this.varName + "-intSetting-label").innerHTML = this.displayName + ": " + document.getElementById(this.varName + "-intSetting").value;
                        })
                },2010);
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