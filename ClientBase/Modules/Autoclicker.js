class Autoclicker extends module {
        constructor() {
                super(module);
                this.ModuleName = "Smart Autoclicker";
                this.ModuleId = "Autoclicker";
                this.category = "misc";
                this.tooltip = "Automatically clicks on the last clicked on element.";
                this.shouldStopClicking = true;
                this.inited = false;
                this.targetedElement;
        }
        execute() {
                if(this.shouldStopClicking == true) {
                        this.shouldStopClicking = false;
                } else {
                        this.shouldStopClicking = true;
                }
                if(this.inited == false) {
                        alert("To stop autoclicking, close the page.");
                        window.addEventListener('click', e => {
                                if(this.shouldStopClicking != true && e.target != document.getElementById(this.ModuleId + "-module") && e.target != document.getElementById(this.ModuleId + "-moduleS")) {
                                        setInterval(
                                                function() {
                                                        e.target.click()
                                                },100
                                        )
                                }
                        });
                }
        }
}