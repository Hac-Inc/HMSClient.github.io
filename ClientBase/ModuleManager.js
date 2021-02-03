class module {
        constructor() {
                this.ModuleName;
                this.ModuleId;
        }
        getModuleName() {
                return this.ModuleName;
        }
        getModuleId() {
                return this.ModuleId;
        }
}

let modules = [];
function initModules() {
        
        //Create your modules here:
        let MembeanAC_Module = new MembeanAC;


        //add your modules to this list:
        modules.push(MembeanAC_Module);

}

