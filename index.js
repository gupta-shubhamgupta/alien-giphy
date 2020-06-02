
$(document).ready(function(){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        var name=document.getElementById("searchInput");
           // console.log(name.value)
            getdata(name.value);
        
    })

  

    async function getdata(giphyname){
        var result;

        url=`https://api.giphy.com/v1/gifs/search?q=${giphyname}&api_key=r6Wo66ntdthfBg4p8Ar6zi71kqfEQLwg&limit=18`;
        try{
        await fetch(url).then(response => response.json())
        .then(data => {
            //console.log(data);
            result = data.data;
            count=data.pagination.count;
        })
    }catch(error){
        $('.display').html('')
        $('.display').append("<h3 class='error' >Something went wrong, Please try again</h3>")
    }
        if(count!=0){
            $('.display').html('')
         for(i in result){
             //console.log("jquery");
            
             $('.display').append("<img class='image' src='"+result[i].images.original.url+"'  alt='img'/>")
         }
        }
        else{
            $('.display').html('')
            $('.display').append("<h3 class='not-found'>Giphy Not Found</h3>")
        }
        

    }

})