function initModules() {
        try {


                //Create your modules here:
                let MembeanAC_Module = new MembeanAC;
                let TabFreeze_Module = new TabFreeze;
                let TabDisguise_Module = new TabDisguise;
                let PaperclipsMultiplier_Module = new PaperclipsMultiplier;

                //Add them to the compiler list:
                modules.push(MembeanAC_Module);
                modules.push(TabFreeze_Module);
                modules.push(TabDisguise_Module);
                modules.push(PaperclipsMultiplier_Module);


        } catch (error) {
                alert("Injection Failed. Please refresh your page and inject again. This could be due to poor internet connection or you are trying to inject on a page with large files.");
        }

}

setTimeout(initModules(), 1000);
setTimeout(buildHMSClient(), 1001);