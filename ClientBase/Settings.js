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
        },1100);
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
        },1100);
}

function intSetting(setting) {
        let value = document.getElementById(setting + "-intSetting").value;
        return value;
}
