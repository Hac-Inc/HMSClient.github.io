class TabFreeze extends module {
        constructor() {
                super(module);
                this.ModuleName = "Temp Tab Freeze";
                this.ModuleId = "TabFreeze";
        }
        execute() {
                window.location.href = "chrome://shorthang";
        }
}