let workerData = {};

self.onmessage = function(e) {
    if (e.data.action === 'allocate') {
        // Creating a deeply nested structure in the worker
        workerData = { data: new Array(e.data.size).join('MemoryLeak '), next: workerData };
    }
};
