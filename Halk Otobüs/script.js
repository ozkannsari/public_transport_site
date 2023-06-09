
const searchForm = document.querySelector(".search-form");

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){

    searchForm.classList.toggle("active");
    document.addEventListener("click", function(e){

        if(!e.composedPath().includes(searchBtn)&&
        !e.composedPath().includes(searchForm)    
        ){
            searchForm.classList.remove("active");
        }
    });
});



var counter =1;
setInterval(function(){
document.getElementById(`radio`+ counter).checked= true;
counter++;
if(counter>3){
    counter =1;
}
},5000);