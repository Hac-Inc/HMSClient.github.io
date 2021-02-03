class TabFreeze extends module {
        constructor() {
                super(module);
                this.ModuleName = "Temp Tab Freeze";
                this.ModuleId = "TabFreeze";
        }
        execute() {
                for(i=0;i<10000;i++) {
                        console.log("tab is frozen");
                }
        }
}