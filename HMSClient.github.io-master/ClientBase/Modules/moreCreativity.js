class moreCreativity extends module {
    constructor () {
        super(module);
        this.moduleId = "moreCreativity";
        this.ModuleName = "Resource Booster";
        this.category = "paperclips";
        this.tooltip = "Gives you more creativity, processors, and memory in paperclips."
    
    }
    execute () {
        processors += 1000;
        creativity += 1000;
        memory += 1000;
        yomi += 1;
        yomi *= 2;
    }
}
