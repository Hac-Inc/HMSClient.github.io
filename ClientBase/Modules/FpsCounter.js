class FpsCounter extends module {
        constructor() {
                super(module);
                this.ModuleName = "FPS Counter";
                this.ModuleId = "FpsCounter";
                this.category = "hud";
        }
        execute() {
                if(document.getElementById("HMSClient-fps-counter")) {
                        document.getElementById("HMSClient-fps-counter").remove();
                } else {
                        document.body.appendChild(newUi("HMSClient-fps-counter", "bottom", "left", 20, 30, 25, 100, null, "rgb(0, 0, 0, 0)", "rgb(0, 0, 0, 0)"))
                        document.getElementById("HMSClient-fps-counter").appendChild(newTextBlock("HMSClient-fps-counter-label", "FPS: ", "white", null, null, 30, 80, "absolute"));
                        fpsRefreshLoop();
                }
                let fps;
                const times = []
                function fpsRefreshLoop() {
                        window.requestAnimationFrame(() => {
                                const now = performance.now();
                                while (times.length > 0 && times[0] <= now - 1000) {
                                        times.shift();
                                }
                                times.push(now);
                                fps = times.length;
                                if(document.getElementById("HMSClient-fps-counter")) {
                                        fpsRefreshLoop();
                                } else {
                                        return;
                                }
                        });
                }
                setInterval(
                        function() {
                                if(document.getElementById("HMSClient-fps-counter")) {
                                        if(fps == undefined) {} else {
                                                document.getElementById("HMSClient-fps-counter-label").innerHTML = "FPS: " + fps;
                                        }
                                }
                        }, 1000
                )
        }
}
