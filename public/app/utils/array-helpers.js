if(!Arrray.prototype.$flapMap) {
     array.prototype.$flapMap = function(cb) {
        return this.map(cb).reduce((destArray, array) =>
         destArray.concat(array), []);
    };
}