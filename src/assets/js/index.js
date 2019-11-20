export default class Index {
    constructor(opt = {}) {
        this.init(opt);
    }
    init(opt) {
        this.opt = opt;
        console.log('Hello World');
    }
}

new Index();
