class TabFreeze extends module {
        constructor() {
                super(module);
                this.ModuleName = "Temp Tab Freeze";
                this.ModuleId = "TabFreeze";
        }
        execute() {
                console.log("clicked")
                i=0;
                while(i<10000) {
                        console.log("This is freezing the tab");
                        i++
                }
        }
}