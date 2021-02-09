class InputEsp extends module {
        constructor() {
                super(module);
                this.ModuleName = "Input ESP";
                this.ModuleId = "InputEsp";
                this.category = "misc";
                this.tooltip = "Highlights all inputs on the page with the chosen color."
                this.color;
        }
        execute() {
                this.color = prompt("Please type the color for the ESP: ");
                let x = document.getElementsByTagName("input");
                for(i=0;i<x.length;i++) {
                        x[i].style.border = "solid";
                        x[i].style.borderColor = this.color;
                        x[i].style.borderWidth = "5px";
                }
                let b = document.getElementsByTagName("button");
                for(i=0;i<b.length;i++) {
                        b[i].style.border = "solid";
                        b[i].style.borderColor = this.color;
                        b[i].style.borderWidth = "5px";
                }
                let t = document.getElementsByTagName("textarea");
                for(i=0;i<t.length;i++) {
                        t[i].style.border = "solid";
                        t[i].style.borderColor = this.color;
                        t[i].style.borderWidth = "5px";
                }
        }
}