exports.command = function(index) {
    this
    .windowHandles(function(result) {
        var handle = result.value[index];
        this.switchWindow(handle);
        });
    return this;
};