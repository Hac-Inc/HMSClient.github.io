class SpaceplanWattMultiplier extends module {
        constructor() {
                super(module);
                this.ModuleName = "Watt Multiplier";
                this.ModuleId = "SpaceplanWattMultiplier";
                this.category = "spaceplan";
                this.tooltip = "Multiplies the number of watts you have by 2";
        }
        execute() {
                power += 1;
                power *= 2;
        }
}