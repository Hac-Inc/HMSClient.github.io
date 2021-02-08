class TabDisguise extends module {
        constructor() {
                super(module);
                this.ModuleId = "TabDisguise";
                this.ModuleName = "Tab Disguiser";
                this.category = "tab";
        }
        execute() {
                let f = document.getElementsByTagName('link')
                for(i=0;i<f.length;i++) {
                        if(f[i].rel == "shortcut icon") {
                                f[i].remove();
                        }
                }
                let x = document.createElement('link');
                x.rel = "shortcut icon";
                x.type = "image/png";
                x.href = "https://hac-inc.github.io/HMSClient.github.io/img/driveIcon.png";
                document.head.appendChild(x);
                document.title = "My Drive - Google Drive";
        }

}