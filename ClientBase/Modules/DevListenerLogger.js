class DevListenerLogger extends module {
        constructor() {
                super(module);
                this.ModuleId = "DevListenerLogger";
                this.ModuleName = "Event Listener Logger";
                this.category = "dev_tools";
                this.tooltip = "Logs a list of every object with an event listener attached to it to the console.";
        }
        execute() {
                console.table((function listAllEventListeners() {
                        const allElements = Array.prototype.slice.call(document.querySelectorAll('*'));
                        allElements.push(document); // we also want document events
                        const types = [];
                        for (let ev in window) {
                                if (/^on/.test(ev)) types[types.length] = ev;
                        }
                      
                        let elements = [];
                        for (let i = 0; i < allElements.length; i++) {
                                const currentElement = allElements[i];
                                for (let j = 0; j < types.length; j++) {
                                        if (typeof currentElement[types[j]] === 'function') {
                                                elements.push({
                                                        "node": currentElement,
                                                        "type": types[j],
                                                        "func": currentElement[types[j]].toString(),
                                                });
                                        }
                                }
                        }
                      
                        return elements.sort(function(a,b) {
                                return a.type.localeCompare(b.type);
                        });
                })());
        }
}