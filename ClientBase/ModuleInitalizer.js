function initModules() {
        
        //Create your modules here:
        let MembeanAC_Module = new MembeanAC;
        let TabFreeze_Module = new TabFreeze;


        //add your modules to this list:
        modules.push(MembeanAC_Module);
        modules.push(TabFreeze_Module);

}
setTimeout(initModules(), 500)
setTimeout(buildHMSClient(), 1000)