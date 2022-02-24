

class CheckedException{
    constructor(err, msg , code) {

        this.code = code?code:500
        this.err = err;
        this.msg = msg;

    }
}


module.exports = CheckedException;