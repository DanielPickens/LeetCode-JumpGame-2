var jump = function(nums) {
        if(nums.length==0 || nums.length==1) return 0;

        let jump = 1;
        let count =nums[0];
        let p_max = nums[0];

        for(var i =1;i<nums.length;i++){

            if(count==0){
                jump +=1;
                count = p_max;
            }else p_max -=1;
            
            if(p_max<=nums[i]) p_max = nums[i];
            count = count-1;
        }
        return jump;
    }
