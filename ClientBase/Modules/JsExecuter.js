class JsExecuter extends module {
        constructor() {
                super(module);
                this.ModuleName = "JavaScript Executer";
                this.ModuleId = "JsExecuter";
                this.category = "tab";
                this.tooltip = "Executes JavaScript on the page your on without using the console."
        }
        execute() {
                function e(stuff) {
                        eval(stuff);
                };
                e(prompt("Please type or paste the JavaScript Code you would like to execute:"));
        }
}