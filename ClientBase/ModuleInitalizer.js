function initModules() {
        try {


                //Create your modules here:
                let MembeanAC_Module = new MembeanAC;
                let TabFreeze_Module = new TabFreeze;

                //Add them to the compiler list:
                modules.push(MembeanAC_Module);
                modules.push(TabFreeze_Module);


        } catch (error) {
                alert("Injection Failed. Please refresh your page and inject again.");
        }

}

setTimeout(initModules(), 1000);
setTimeout(buildHMSClient(), 1001);