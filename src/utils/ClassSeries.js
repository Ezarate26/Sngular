import { triangular,fibonacci,primo } from "./seriesFunctions"

export class ClassSeries {
    static serie(n){
        if(!n || n <= 0 )return 0
        const result = triangular(n * 2) - primo(n) - fibonacci(n)
        return result 
    }
}