export default function bubble_sort(numAarray : number[]): void{
    for(let i = 0; i < numAarray.length; i++){
        for(let j = 0; j < numAarray.length - 1 - i; j++){
            if(numAarray[j] > numAarray[j + 1]){
                const temp = numAarray[j];
                numAarray[j] = numAarray[j + 1];
                numAarray[j+1]  = temp;
            }
        }
    }
}