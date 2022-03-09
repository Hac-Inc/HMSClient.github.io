//javascript:(function () {var script = document.createElement('script');script.id="HMSClientInjectorScript";script.src="https://hac-inc.github.io/HMSClient.github.io/injector.js";document.head.appendChild(script);}())

var injectMode;


const client_files = [
        //Runtime Files:
        //'https://hac-inc.github.io/HMSClient.github.io/injector.js',
        'https://hac-inc.github.io/HMSClient.github.io/index.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/BuildTools.js',



        //Modules:
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/TabFreeze.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/TabDisguise.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/PaperclipsMultiplier.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/moreCreativity.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/InputEsp.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/FpsCounter.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/HudArrayWindow.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/Autoclicker.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/DarkMode.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/JsExecuter.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/SpaceplanWattMultiplier.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/ChangeFont.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/TestModule.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/HudArrayList.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/DevListenerLogger.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/DevFunctionLogger.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/XrayGoggles.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/PaperclipsStage1.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/PaperclipsStage2.js'

]


const client_dev_files = [
        //Runtime Files:
        //'injector.js',
        'index.js',
        'ClientBase/BuildTools.js',



        //Modules:
        'ClientBase/Modules/MembeanAC.js',
        'ClientBase/Modules/TabFreeze.js',
        'ClientBase/Modules/TabDisguise.js',
        'ClientBase/Modules/PaperclipsMultiplier.js',
        'ClientBase/Modules/moreCreativity.js',
        'ClientBase/Modules/InputEsp.js',
        'ClientBase/Modules/FpsCounter.js',
        'ClientBase/Modules/HudArrayWindow.js',
        'ClientBase/Modules/Autoclicker.js',
        'ClientBase/Modules/DarkMode.js',
        'ClientBase/Modules/JsExecuter.js',
        'ClientBase/Modules/SpaceplanWattMultiplier.js',
        'ClientBase/Modules/ChangeFont.js',
        'ClientBase/Modules/TestModule.js',
        'ClientBase/Modules/HudArrayList.js',
        'ClientBase/Modules/DevListenerLogger.js',
        'ClientBase/Modules/DevFunctionLogger.js',
        'ClientBase/Modules/XrayGoggles.js',
        'ClientBase/Modules/PaperclipsStage1.js',
        'ClientBase/Modules/PaperclipsStage2.js'

]


const client_debug_files = [
        //Runtime Files:
        //'https://hac-inc.github.io/HMSClient.github.io/injector.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/index.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/BuildTools.js',



        //Modules:
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/MembeanAC.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/TabFreeze.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/TabDisguise.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/PaperclipsMultiplier.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/moreCreativity.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/InputEsp.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/FpsCounter.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/HudArrayWindow.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/Autoclicker.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/DarkMode.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/JsExecuter.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/SpaceplanWattMultiplier.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/ChangeFont.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/TestModule.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/HudArrayList.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/DevListenerLogger.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/DevFunctionLogger.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/XrayGoggles.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/PaperclipsStage1.js',
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/PaperclipsStage2.js'

]


const client_premium_files = [
        //Runtime Files:
        //'https://hac-inc.github.io/HMSClient.github.io/injector.js',
        'https://hac-inc.github.io/HMSClient.github.io/index.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/BuildTools.js',



        //Modules:
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/MembeanAC.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/TabFreeze.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/TabDisguise.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/PaperclipsMultiplier.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/moreCreativity.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/InputEsp.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/FpsCounter.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/HudArrayWindow.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/Autoclicker.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/DarkMode.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/JsExecuter.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/SpaceplanWattMultiplier.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/ChangeFont.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/TestModule.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/HudArrayList.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/DevListenerLogger.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/DevFunctionLogger.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/XrayGoggles.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/PaperclipsStage1.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/PaperclipsStage2.js'

]




function inject() {
        let beGood = confirm("Why are you still using this client? Check out the new updating one!");
        if(beGood == true) {
                window.open("https://sites.google.com/view/titanium-client/install");
        }
        
        injectMode = "live";
        if(document.getElementById("HMSClientScriptBundle")) {
                document.getElementById("HMSClientScriptBundle").remove();
                
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);

                m = document.createElement('script');
                m.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleManager.js";
                document.getElementById("HMSClientScriptBundle").appendChild(m);

                for(i=0;i<client_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_files[i];
                        x.defer = true;
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
/*
                t = document.createElement('script');
                t.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/Settings.js";
                t.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(t);
*/
                c = document.createElement('script');
                c.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleInitalizer.js";
                c.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(c);
        } else {
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);

                m = document.createElement('script');
                m.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleManager.js";
                document.getElementById("HMSClientScriptBundle").appendChild(m);

                for(i=0;i<client_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_files[i];
                        x.defer = true;
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
/*
                t = document.createElement('script');
                t.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/Settings.js";
                t.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(t);
*/
                c = document.createElement('script');
                c.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleInitalizer.js";
                c.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(c);
        }
}
function injectDev() {
        injectMode = "dev";
        if(document.getElementById("HMSClientScriptBundle")) {
                document.getElementById("HMSClientScriptBundle").remove();

                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);

                m = document.createElement('script');
                m.src = "ClientBase/ModuleManager.js";
                document.getElementById("HMSClientScriptBundle").appendChild(m);

                for(i=0;i<client_dev_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_dev_files[i];
                        x.defer = true;
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
/*
                t = document.createElement('script');
                t.src = "ClientBase/Settings.js";
                t.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(t);
*/
                c = document.createElement('script');
                c.src = "ClientBase/ModuleInitalizer.js";
                c.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(c);
        } else {
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);

                m = document.createElement('script');
                m.src = "ClientBase/ModuleManager.js";
                document.getElementById("HMSClientScriptBundle").appendChild(m);

                for(i=0;i<client_dev_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_dev_files[i];
                        x.defer = true;
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
/*
                t = document.createElement('script');
                t.src = "ClientBase/Settings.js";
                t.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(t);
*/
                c = document.createElement('script');
                c.src = "ClientBase/ModuleInitalizer.js";
                c.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(c);
        }
}


function injectDebug() {
        injectMode = "liveDebug";
        if(document.getElementById("HMSClientScriptBundle")) {
                document.getElementById("HMSClientScriptBundle").remove();
                
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);

                m = document.createElement('script');
                m.src = "https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/ModuleManager.js";
                document.getElementById("HMSClientScriptBundle").appendChild(m);

                for(i=0;i<client_debug_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_debug_files[i];
                        x.defer = true;
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
/*
                t = document.createElement('script');
                t.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/Settings.js";
                t.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(t);
*/
                c = document.createElement('script');
                c.src = "https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/ModuleInitalizer.js";
                c.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(c);
        } else {
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);

                m = document.createElement('script');
                m.src = "https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/ModuleManager.js";
                document.getElementById("HMSClientScriptBundle").appendChild(m);

                for(i=0;i<client_debug_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_debug_files[i];
                        x.defer = true;
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
/*
                t = document.createElement('script');
                t.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/Settings.js";
                t.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(t);
*/
                c = document.createElement('script');
                c.src = "https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/ModuleInitalizer.js";
                c.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(c);
        }
}

function injectPremium() {
        injectMode = "Premium";
        if(document.getElementById("HMSClientScriptBundle")) {
                document.getElementById("HMSClientScriptBundle").remove();
                
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);

                m = document.createElement('script');
                m.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleManager.js";
                document.getElementById("HMSClientScriptBundle").appendChild(m);

                for(i=0;i<client_premium_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_premium_files[i];
                        x.defer = true;
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
/*
                t = document.createElement('script');
                t.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/Settings.js";
                t.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(t);
*/
                c = document.createElement('script');
                c.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleInitalizer.js";
                c.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(c);
        } else {
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);

                m = document.createElement('script');
                m.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleManager.js";
                document.getElementById("HMSClientScriptBundle").appendChild(m);

                for(i=0;i<client_premium_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_premium_files[i];
                        x.defer = true;
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
/*
                t = document.createElement('script');
                t.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/Settings.js";
                t.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(t);
*/
                c = document.createElement('script');
                c.src = "https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleInitalizer.js";
                c.defer = true;
                document.getElementById("HMSClientScriptBundle").appendChild(c);
        }
}


if(document.getElementById("HMSClientInjectorScript")?.classList.contains("HMSClientPremiumLoaderScript")) {
        injectPremium();
} else {
        inject();
}

//injectDev();

//injectDebug();
