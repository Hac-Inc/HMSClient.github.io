class FpsCounter extends module {
        constructor() {
                super(module);
                this.ModuleName = "FPS Counter";
                this.ModuleId = "FpsCounter";
                this.category = "misc";
        }
        execute() {
                if(document.getElementById("HMSClient-fps-counter")) {
                        document.getElementById("HMSClient-fps-counter").remove();
                } else {
                        document.body.appendChild(newUi("HMSClient-fps-counter", 20, 20, 25, 80, null, null, null))
                        document.getElementById("HMSClient-fps-counter").appendChild(newTextBlock("HMSClient-fps-counter-label", "FPS: ", "white", null, "rgb(0, 0, 0, 0)"));
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