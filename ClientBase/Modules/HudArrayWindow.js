class HudArrayWindow extends module {
        constructor() {
                super(module);
                this.ModuleName = "Array Window";
                this.ModuleId = "HudArrayWindow";
                this.category = "hud";
                this.tooltip = "Toggles the dragable module window.";
        }
        execute() {
                if(document.getElementById("HMSClientWindow").style.display == "none") {
                        document.getElementById("HMSClientWindow").style.display = "";
                } else {
                        document.getElementById("HMSClientWindow").style.display = "none";
                }
        }
}