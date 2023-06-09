let latitude, longitude = "";

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
} else{
    alert("tarayıcı konumu vermiyor");
}

function onSuccess(position){
     latitude = position.coords.latitude;
     longitude = position.coords.longitude;
   
    initMap();


    const api_key ="b6737d59f8c24d298ffe67f595f5e2ed";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;

    fetch(url)
      .then(response => response.json())
      .then(result => {
        let details = result.results[0].components;

        let {country, postcode, province} = details;

        document.getElementById("results").innerHTML = `
        
        <p>ülke: ${country}</p>
        <p>posta kodu: ${postcode}</p>
        <p>şehir: ${province}</p>

        
        `;
      });

}

function onError(error) {
    if(error.code == 1) {
        alert("kullanıcı erişim iznini reddetti");
    } else if(error.code ==2){
        alert("konum alınamadı");
    }
    else{
        alert("bir hata oluştu");
    }
}

/*let map;

function initMap() {
 map = new google.maps.Map(document.getElementById("map"), {
   center: { lat: latitude, lng: longitude },
  zoom: 8,
  });


  const marker = new google.maps.Marker({
    
    position: { lat: latitude, lng: longitude },
    map: map,
  });

}

*/

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 8,
  });
  console.log(latitude,longitude);
  const marker = new google.maps.Marker({
    
    position: { lat: latitude, lng: longitude },
    map: map,
  });
}



