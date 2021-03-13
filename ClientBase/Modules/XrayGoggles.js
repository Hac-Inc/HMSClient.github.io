class XrayGoggles extends module {
        constructor() {
                super(module);
                this.ModuleId = "XrayGoggles";
                this.ModuleName = "XRay Goggles";
                this.category = "dev_tools";
                this.tooltip = "Activates Xray Goggles";
        }
        execute() {
                var script=document.createElement('script');
                script.src='https://x-ray-goggles.mouse.org/webxray.js';
                script.className='webxray';
                script.setAttribute('data-lang','en-US');
                script.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');
                document.body.appendChild(script);
                /*
                switch(injectMode) {
                        case "live":
                                let l = document.createElement('script');
                                l.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');
                                l.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleResc/XrayGogglesResc.js";
                                l.id = "HMSClientXrayGogglesScriptResc";
                                document.head.appendChild(l);
                                break;
                        case "dev":
                                let d = document.createElement('script');
                                d.src = "ClientBase/ModuleResc/XrayGogglesResc.js";
                                d.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');
                                d.id = "HMSClientXrayGogglesScriptResc";
                                document.head.appendChild(d);
                                break;
                        case "liveDebug":
                                let ld = document.createElement('script');
                                ld.setAttribute('data-baseuri','https://x-ray-goggles.mouse.org');
                                ld.src = "https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/ModuleResc/XrayGogglesResc.js";
                                ld.id = "HMSClientXrayGogglesScriptResc";
                                document.head.appendChild(ld);
                                break;
                }*/
        }
}