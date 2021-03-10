//javascript:(function () {var script = document.createElement('script');script.id="HMSClientInjectorScript";script.src="https://hac-inc.github.io/HMSClient.github.io/injector.js";document.head.appendChild(script);}())

const client_files = [
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
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/DevListenerLogger.js'

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
        'ClientBase/Modules/DevListenerLogger.js'

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
        'https://hac-inc.github.io/HMSClientDebug.github.io/ClientBase/Modules/DevListenerLogger.js'

]


function inject() {
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

inject();
//injectDev();

//injectDebug();
