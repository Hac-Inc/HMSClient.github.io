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
        'ClientBase/Modules/MembeanAC.js'
]

function inject() {
        for(i=0;i<client_files.length;i++) {
                x = document.createElement('script');
                x.src = client_files[i];
                x.defer = true;
                document.head.appendChild(x);
        }
}
function injectDev() {
        for(i=0;i<client_dev_files.length;i++) {
                x = document.createElement('script');
                x.src = client_dev_files[i];
                document.head.appendChild(x);
        }
}

inject();
