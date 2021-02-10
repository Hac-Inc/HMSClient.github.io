//javascript:(function () {var script = document.createElement('script');script.id="HMSClientInjectorScript";script.src="https://hac-inc.github.io/HMSClient.github.io/injector.js";document.head.appendChild(script);}())

const client_files = [
        //Runtime Files:
        //'https://hac-inc.github.io/HMSClient.github.io/injector.js',
        'https://hac-inc.github.io/HMSClient.github.io/index.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/BuildTools.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleManager.js',
        //Modules:
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/MembeanAC.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/TabFreeze.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/TabDisguise.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/PaperclipsMultiplier.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/moreCreativity.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/InputEsp.js',
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/Modules/FpsCounter.js',


        //Compilers:
        'https://hac-inc.github.io/HMSClient.github.io/ClientBase/ModuleInitalizer.js'

]

const client_dev_files = [
        //Runtime Files:
        //'injector.js',
        'index.js',
        'ClientBase/BuildTools.js',
        'ClientBase/ModuleManager.js',
        //Modules:
        'ClientBase/Modules/MembeanAC.js',
        'ClientBase/Modules/TabFreeze.js',
        'ClientBase/Modules/TabDisguise.js',
        'ClientBase/Modules/PaperclipsMultiplier.js',
        'ClientBase/Modules/moreCreativity.js',
        'ClientBase/Modules/InputEsp.js',
        'ClientBase/Modules/FpsCounter.js',

        //Compilers:
        'ClientBase/ModuleInitalizer.js'
]

function inject() {
        if(document.getElementById("HMSClientScriptBundle")) {
                document.getElementById("HMSClientScriptBundle").remove();
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);
                for(i=0;i<client_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_files[i];
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
        } else {
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);
                for(i=0;i<client_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_files[i];
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
        }
}
function injectDev() {
        if(document.getElementById("HMSClientScriptBundle")) {
                document.getElementById("HMSClientScriptBundle").remove();
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);
                for(i=0;i<client_dev_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_dev_files[i];
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
        } else {
                s = document.createElement('section');
                s.id = "HMSClientScriptBundle";
                document.head.appendChild(s);
                for(i=0;i<client_dev_files.length;i++) {
                        x = document.createElement('script');
                        x.src = client_dev_files[i];
                        document.getElementById("HMSClientScriptBundle").appendChild(x);
                }
        }
}

inject();
//injectDev();
