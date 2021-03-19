class PaperclipsStage1 extends module {
        constructor() {
                super(module);
                this.ModuleId = "PaperclipsStage1";
                this.ModuleName = "Multiply Stage 1 Values";
                this.category = "paperclips";
                this.tooltip = "Multiplies most values spesific to the first stage of the game.";
                this.hasSettings = true;
                registerBoolSetting(this.ModuleId, "Funds", "paperclipsStage1Funds", true);
                registerBoolSetting(this.ModuleId, "Wire", "paperclipsStage1Wire", true);
                registerBoolSetting(this.ModuleId, "Yomi", "paperclipsStage1Yomi", true);
                registerIntSetting(this.ModuleId, "Multiply By", "paperclipsStage1multiplyValue", 2, 2, 4);
        }
        execute() {
                if(boolSetting("paperclipsStage1Funds")) {
                        funds *= intSetting("paperclipsStage1multiplyValue");
                }
                if(boolSetting("paperclipsStage1Wire")) {
                        wire *= intSetting("paperclipsStage1multiplyValue");
                }
                if(boolSetting("paperclipsStage1Yomi")) {
                        yomi *= intSetting("paperclipsStage1multiplyValue");
                }
        }
}