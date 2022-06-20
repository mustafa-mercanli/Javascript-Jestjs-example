const minNumber = (arr)=>{
    if (arr instanceof Array){
        arr.sort((a,b)=>{
            if (typeof a === 'number' && typeof b === 'number' && a<b){
                return -1;
            }
            else{
                return 1;
            }
        })
        if (arr.length){
            return arr[0];
        }
        return null
    }

    throw ("Argument must be an array")

}

module.exports = {minNumber:minNumber}