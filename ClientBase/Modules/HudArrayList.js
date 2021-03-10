class HudArrayList extends module {
        constructor() {
                super(module);
                this.ModuleId = "HudArrayList";
                this.ModuleName = "Array List";
                this.category = "hud";
                this.tooltip = "Toggles the active modules array list";
                this.toggleable = true;
                this.hasSettings = true;
                registerBoolSetting(this.ModuleId, "Solid Background", "hal_backFilled", false);
        }

        onActivate() {
                let x = document.createElement('div');
                x.style.position = "absolute";
                x.style.top = "0px";
                x.style.right = "0px";
                x.style.zIndex = "9999999"
                x.style.display = "grid";
                if(boolSetting("hal_backFilled")) {
                        x.style.backgroundColor = "#525252";
                }
                x.id = "HMSClientModuleArrayList";
                document.body.appendChild(x);
                for(i=0;i<modules.length;i++) {
                        if(modules[i].active == true && modules[i].ModuleId != this.ModuleId) {
                                drawArrayListModule(modules[i].ModuleId, modules[i].ModuleName);
                        }
                }
        }
        onDeactivate() {
                document.getElementById("HMSClientModuleArrayList")?.remove();
        }
        whileActive() {
                document.getElementById("HMSClientModuleArrayList").style.top = document.documentElement.scrollTop + "px";
                document.getElementById("HMSClientModuleArrayList").style.right = document.documentElement.scrollRight + "px";
        }
}