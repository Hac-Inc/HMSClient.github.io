let modules = [];


class module {
        constructor() {
                this.ModuleName;
                this.ModuleId;
                this.category;    //for the category you must put the name of a subcategory.
                this.tooltip;
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
}

