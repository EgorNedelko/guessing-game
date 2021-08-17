class GuessingGame {
    constructor() {
        this.min = 0
        this.max = 1
        this.guessNum
    }

    //this method accepts min and max value of range of number to guess
    setRange(min, max) {
        this.min = min
        this.max = max
    }

    //this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
        return this.guessNum = Math.round((this.min + this.max) / 2)
    }

    //this method is called if prev call of `guess()` returned number which is greater than answer
    lower() {
        this.max = this.guessNum 
    }

    //this method is called if prev call of `guess()` returned number which is lower than answer
    greater() {
        this.min = this.guessNum 
    }
}

module.exports = GuessingGame;
