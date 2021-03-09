class PaperclipsMultiplier extends module {
        constructor() {
                super(module);
                this.ModuleName = "Paperclips Multiplier";
                this.ModuleId = "PaperclipsMultiplier";
                this.category = "paperclips";
                this.tooltip = "Multiplies the number of total paperclips you have and the ones that are in your unsold inventory by 2.";
        }
        execute() {
                clips *= 2;
                unsoldClips *=2
                unusedClips *=2
        }
}
