module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!(arr instanceof Array)) {
            return 0;
        }
        
        if (arr.length === 0) {
            return 1;
        }

        const res = arr.map(elem => {
            return 1 + this.calculateDepth(elem);
        });

        return res.sort((a, b) => b - a)[0];
    }
};