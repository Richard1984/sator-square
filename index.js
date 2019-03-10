class Palindrome {

    constructor (word) {
        this.word = word.toUpperCase()
        this.matrix = Array(word.length).fill().map(()=>Array(word.length).fill())
    }

    randomWord (length) {
        const word = Array(length).fill().map(()=>String.fromCharCode(Math.floor(Math.random() * (90 - 65) + 65)))
        return word.join("")
    }
    
    fill (placeholder) {
        for (let i = 0; i < placeholder.length; i++) {
            const start = (this.matrix.length - placeholder.length) / 2
            const end = (this.matrix.length - start) - 1
            this.matrix[start][start + i] = placeholder[i]
            this.matrix[start + i][start] = placeholder[i]
            this.matrix[end][end - i] = placeholder[i]
            this.matrix[end - i][end] = placeholder[i]
        }
        const next = placeholder.length - 2
    
        return next < 0 ? this.matrix : this.fill(this.randomWord(next))
    }

    square () {
        return this.fill(this.word)
    }
}


const generator = new Palindrome("kundl")

const palindrome = generator.square()

console.table(palindrome)