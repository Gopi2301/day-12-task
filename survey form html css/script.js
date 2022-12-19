const allStars =document.querySelectorAll('.stars');
allStars.forEach((star,i)=>{
    star.onclick = function(){
        let current_star = i+1;
        console.log(current_star)
        allStars.forEach((star,j)=>{
            if (current_star>=j+1){
               
            } else{
                
            }
        })
    }
})