class ChangeFont extends module {
        constructor() {
                super(module);
                this.ModuleName = "FontChanger";
                this.ModuleId = "FontChanger";
                this.category = "misc";
                this.tooltip = "Type The font You Want And Watch It Change On Screen"
        }
        execute() {
                var f_name = prompt("Enter the name of font! (no caps) \n For list of fonts visit http://goo.gl/I06Lz");
                document.body.style.fontFamily = f_name; 
        }
}
