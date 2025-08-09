export default function bs_list(haystack: number[], needle: number): boolean{

    let low = 0;
    let high = haystack.length - 1;
    let current;
    do{
        current = Math.floor((low + high)/2);
        if(haystack[current] > needle){
            high = current - 1;
        }else if(haystack[current]< needle){
            low = current + 1;
        }else{
            return true;
        }
    }
    while(low <=high)
        return false;
}