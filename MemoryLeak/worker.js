self.onmessage = function(e) {
    if (e.data.action === 'allocate') {
        // Allocate memory in the worker
        let largeData = new Array(e.data.size).join('MemoryLeak ');
        // You could do something with largeData here
    }
};
