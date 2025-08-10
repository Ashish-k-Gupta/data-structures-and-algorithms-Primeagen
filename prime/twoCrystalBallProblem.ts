export default function two_crystal_ball(building: boolean[]): number {
    let jumpSize = Math.floor(Math.sqrt(building.length));

    let i = jumpSize;
    for(; i < building.length; i += jumpSize){
        if(building[i]){
            break;
        }
    }

    i -= jumpSize;
    for(let j = 0; j < jumpSize && i < building.length; ++j, ++i){
        if(building[i]){
            return i;
        }
    }
    return -1;
} 