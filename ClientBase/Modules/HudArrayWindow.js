class HudArrayWindow extends module {
        constructor() {
                super(module);
                this.ModuleName = "Array Window";
                this.ModuleId = "HudArrayWindow";
                this.category = "hud";
                this.tooltip = "Toggles the dragable module window.";
                this.toggleable = true;
        }
        onActivate() {
                document.getElementById("HMSClientWindow").style.display = "";
        }
        onDeactivate() {
                document.getElementById("HMSClientWindow").style.display = "none";
        }
}