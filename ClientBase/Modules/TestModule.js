class TestModule extends module {
        constructor() {
                super(module);
                this.ModuleName = "Test Module";
                this.ModuleId = "TestModule";
                this.category = "misc";
                this.tooltip = "Module for testing new features";
                this.hasSettings = true;
                this.toggleable = true;

                registerBoolSetting(this.ModuleId, "Test Bool", "testBool_test", true);
                registerIntSetting(this.ModuleId, "Test Int", "testInt_test", 0, -10, 10);
                registerEnumSetting(this.ModuleId, "Test Enum", "testEnum_test", [
                        "Mode 1",
                        "Mode 2",
                        "Mode 3",
                        "Mode 4"
                ]);
        }
        execute() {
                console.log("this is a toggleable module");
        }
        onToggle() {
                console.log("toggled");
        }
        onActivate() {
                console.log("activated");
        }
        onDeactivate() {
                console.log("deactivated");
        }
        whileActive() {
                console.log("active");
        }
}
