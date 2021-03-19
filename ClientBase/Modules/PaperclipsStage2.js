class PaperclipsStage2 extends module {
        constructor() {
                super(module);
                this.ModuleId = "PaperclipsStage2";
                this.ModuleName = "Multiply Stage 2 Values";
                this.category = "paperclips";
                this.tooltip = "Multiplies most values spesific to the first stage of the game.";
                this.hasSettings = true;
                registerBoolSetting(this.ModuleId, "MW Storage", "paperclipsStage2Power", true);
                registerBoolSetting(this.ModuleId, "Acquired Matter", "paperclipsStage2Matter", true);
                registerBoolSetting(this.ModuleId, "Wire", "paperclipsStage2Wire", true);
                registerIntSetting(this.ModuleId, "Multiply By", "paperclipsStage2multiplyValue", 2, 2, 4);
        }
        execute() {
                if(boolSetting("paperclipsStage2Power")) {
                        storedPower *= intSetting("paperclipsStage2multiplyValue");
                }
                if(boolSetting("paperclipsStage2Matter")) {
                        acquiredMatter *= intSetting("paperclipsStage2multiplyValue");
                }
                if(boolSetting("paperclipsStage2Wire")) {
                        wire *= intSetting("paperclipsStage2multiplyValue");
                }
        }
}