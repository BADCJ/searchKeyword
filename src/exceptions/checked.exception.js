

class CheckedException{
    constructor(msg, status , code) {

        this.code = code?code:500
        this.status = status?status:"error";
        this.message = msg;

    }
}


module.exports = CheckedException;