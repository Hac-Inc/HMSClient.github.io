class DarkMode extends module {
        constructor() {
                super(module);
                this.ModuleName = "Dark Mode";
                this.ModuleId = "DarkMode";
                this.category = "page";
                this.tooltip = "Makes the body element dark. *MAY NOT WORK ON ALL SITES*";
                this.hasSettings = true;
                //registerBoolSetting(this.ModuleId, "Super Dark Mode", "darkmode_superdark", false);
                registerEnumSetting(this.ModuleId, "Mode", "darkmode_superdark", [
                        "Only Background",
                        "Super Dark"
                ]);
        }
        execute() {
                document.body.style='background:#292a2d';
                if(enumSetting("darkmode_superdark") === "Super Dark") {
                        let d = document.getElementsByTagName('div');
                        let p = document.getElementsByTagName('p');
                        for(i=0;i<d.length;i++) {
                                d[i].style.backgroundColor = "#454545"
                                d[i].style.border = "solid";
                                d[i].style.borderColor = "#636363";
                                d[i].style.color = "white";
                        }
                        for(i=0;i<p.length;i++) {
                                p[i].style.color = "white";
                                p[i].style.backgroundColor = "#454545";
                        }
                }
        }
}
