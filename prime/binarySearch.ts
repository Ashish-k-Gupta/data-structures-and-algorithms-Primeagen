export default function bindary_search(haystack: number[], needle: number): boolean{
    let low = 0;
    let high = haystack.length-1;
    let middle;

    do{
        middle = Math.floor((low + (high - low))/2)
        if(haystack[middle] > needle){
            high = middle - 1;
        }else if(haystack[middle] < needle){
            low = middle + 1;
        }else{
            return true;
        }

    }while(low <= high)

        return false;
}