class DevFunctionLogger extends module {
        constructor() {
                super(module);
                this.ModuleId = "DevFunctionLogger";
                this.ModuleName = "Function Logger";
                this.category = "dev_tools";
                this.tooltip = "Logs every defined function to the console."
        }
        execute() {
                var allfunctions=[];
                console.table((function getAllFunctions(){ 
                        for ( var i in window) {
                                if((typeof window[i]).toString()=="function"){
                                        allfunctions.push({
                                                name: window[i].name,
                                                function: window[i]
                                        });
                                }
                        }

                        return allfunctions;
                })());
                console.log(allfunctions);
        }
}