class MembeanAC extends module {
        constructor() {
                super(module)
                this.ModuleName = "Membean Auto Correct";
                this.ModuleId = "MembeanAC";
                this.category = "membean";
                this.tooltip = "Automatically answers the question your on correctly. YOU WILL GET FLAGGED FOR CHEATING";
        }
        execute() {
                document.getElementById('pass').click();
        }
};

