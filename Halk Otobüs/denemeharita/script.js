const getlocation = () =>{
    if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  }  else{
        alert("Lokasyon bu tarayıcı tarafından desteklenmiyor!");
    }
};



const showPosition= (position) => {
    let lat = position.coords.latitude;   // telegram botu  
    let long = position.coords.longitude;


    const des = document.querySelector("p");
    des.innerHTML = `Enlem: ${lat} <br> Boylam: ${long}`;
    
}

const showError = (error) => {
    switch (error.code){
        case error.PERMISSION_DENIED:
            alert("Kullanıcı konum talebini reddetti.");
            break;

        case error.POSITION_UNAVAILABLE:
            alert("Konum bilgisi mevcut değil.");
            break;

        case error.TIMEOUT:
            alert("Konum bilgisi zaman aşımına ulaştı.");
            break;
            
        case error.UNKNOWN_ERROR:
            alert("Bilinmeyen bir hata oluştu.");
            break;
            
        default:  
        alert("Bilinmeyen bir hata oluştu.");
    }
};