function buildHMSClient() {
        let x = document.createElement('div');
        x.id = "HMSClientWindow"
        x.style.padding = "5px;";
        x.style.background = "#525252";
        x.style.border = "solid";
        x.style.borderWidth = "1px";
        x.style.position = "absolute";
        x.style.top = "20px";
        x.style.left = "20px";
        x.style.zIndex = "999999";
        document.body.appendChild(x);
        document.getElementById("HMSClientWindow").appendChild(newDiv("HMSClientWindow-header"))
        document.getElementById("HMSClientWindow-header").innerHTML = "HMS Client";
        for(i=0;i<modules.length;i++) {
                document.getElementById("HMSClientWindow").appendChild(newButton((modules[i].getModuleId()), (modules[i].getModuleName()), i))
        }
}