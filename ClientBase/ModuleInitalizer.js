function initModules() {
        try {


                if(injectMode == "live") {





                        //Create your modules here:
                        let TabFreeze_Module = new TabFreeze;
                        let TabDisguise_Module = new TabDisguise;
                        let PaperclipsMultiplier_Module = new PaperclipsMultiplier;
                        let moreCreativity_module = new moreCreativity;
                        let InputEsp_Module = new InputEsp;
                        let HudArrayWindow_Module = new HudArrayWindow;
                        let FpsCounter_Module = new FpsCounter;
                        let Autoclicker_Module = new Autoclicker;
                        let DarkMode_Module = new DarkMode;
                        let JsExecuter_Module = new JsExecuter;
                        let SpaceplanWattMultiplier_Module = new SpaceplanWattMultiplier;
                        let FontChanger_Module = new ChangeFont;
                        let TestModule_Module = new TestModule;
                        let HudArrayList_Module = new HudArrayList;
                        let DevListenerLogger_Module = new DevListenerLogger;
                        let DevFunctionLogger_Module = new DevFunctionLogger;
                        let XrayGoggles_Module = new XrayGoggles;

                //Add them to the compiler list:
                        modules.push(TabFreeze_Module);
                        modules.push(TabDisguise_Module);
                        modules.push(PaperclipsMultiplier_Module);
                        modules.push(moreCreativity_module);
                        modules.push(InputEsp_Module);
                        modules.push(HudArrayWindow_Module);
                        modules.push(FpsCounter_Module);
                        modules.push(Autoclicker_Module);
                        modules.push(DarkMode_Module);
                        modules.push(JsExecuter_Module);
                        modules.push(SpaceplanWattMultiplier_Module);
                        modules.push(FontChanger_Module);
                        modules.push(TestModule_Module);
                        modules.push(HudArrayList_Module);
                        modules.push(DevListenerLogger_Module);
                        modules.push(DevFunctionLogger_Module);
                        modules.push(XrayGoggles_Module);




                        return;
                } else if(injectMode == "Premium" || injectMode == "dev" || injectMode == "liveDebug") {





                        //Create your modules here:
                        let MembeanAC_Module = new MembeanAC;
                        let TabFreeze_Module = new TabFreeze;
                        let TabDisguise_Module = new TabDisguise;
                        let PaperclipsMultiplier_Module = new PaperclipsMultiplier;
                        let moreCreativity_module = new moreCreativity;
                        let InputEsp_Module = new InputEsp;
                        let HudArrayWindow_Module = new HudArrayWindow;
                        let FpsCounter_Module = new FpsCounter;
                        let Autoclicker_Module = new Autoclicker;
                        let DarkMode_Module = new DarkMode;
                        let JsExecuter_Module = new JsExecuter;
                        let SpaceplanWattMultiplier_Module = new SpaceplanWattMultiplier;
                        let FontChanger_Module = new ChangeFont;
                        let TestModule_Module = new TestModule;
                        let HudArrayList_Module = new HudArrayList;
                        let DevListenerLogger_Module = new DevListenerLogger;
                        let DevFunctionLogger_Module = new DevFunctionLogger;
                        let XrayGoggles_Module = new XrayGoggles;

                        //Add them to the compiler list:
                        modules.push(MembeanAC_Module);
                        modules.push(TabFreeze_Module);
                        modules.push(TabDisguise_Module);
                        modules.push(PaperclipsMultiplier_Module);
                        modules.push(moreCreativity_module);
                        modules.push(InputEsp_Module);
                        modules.push(HudArrayWindow_Module);
                        modules.push(FpsCounter_Module);
                        modules.push(Autoclicker_Module);
                        modules.push(DarkMode_Module);
                        modules.push(JsExecuter_Module);
                        modules.push(SpaceplanWattMultiplier_Module);
                        modules.push(FontChanger_Module);
                        modules.push(TestModule_Module);
                        modules.push(HudArrayList_Module);
                        modules.push(DevListenerLogger_Module);
                        modules.push(DevFunctionLogger_Module);
                        modules.push(XrayGoggles_Module);


                }
                
                
                
                notifySuccessfullInjection();
        } catch (error) {
                alert("Injection Failed. Please refresh your page and inject again. This could be due to poor internet connection or you are trying to inject on a page with large files.");
        }


}

setTimeout(initModules(), 1000);
setTimeout(HMSClientRun(), 1000);
function HMSClientRun() {
        setTimeout(buildHMSClient(), 1201);
        setTimeout(buildHMSClientScreen(), 1201);
        setTimeout(buildHMSClientScreenSettings(), 2300);
}
