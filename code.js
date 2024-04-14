function mergesort(list){
    if(list.length < 2)
    {
        return list;
    }
    
    for(var size = 1; size < list.length; size *= 2)
    {
        for(var i = 0; i < list.length; i += size *2)
        {
            var start = i;
            var end = i+ size *2 -1;
            var mid = i+ size -1;
        
            mSort(list, start, mid, end);
        }
    }
    return list;
}

function mSort(list, l, m, r)
{
    var min = l;
    var min2 = m+1;
    
    
    while((min <= m) && (min2 <= r))
    {
        if(list[min] > list[min2])
        {
            let minVal = list[min2];
            for(var minPos = min2; minPos > min; minPos--)
            {
                list[minPos] = list[minPos -1];
            }
            
            list[min] = minVal;
            min++;
            min2++;
            m++;
        }else{
            min++
        }
      
    }
}

