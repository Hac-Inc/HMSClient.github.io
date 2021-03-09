class TestModule extends module {
        constructor() {
                super(module);
                this.ModuleName = "Test Module";
                this.ModuleId = "TestModule";
                this.category = "misc";
                this.tooltip = "Module for testing new features";

                this.toggleable = true;

                registerBoolSetting(this.ModuleId, "Test Bool", "testBool", true);
                registerIntSetting(this.ModuleId, "Test Int", "testInt", 0, -10, 10);
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
