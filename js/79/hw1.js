( function () {
    "use strict";
    //loading map
    async function loadMap(){
        const fakewood={ lat: 40.09564277325912, lng: -74.22203857900014 }
            const {Map}= await google.maps.importLibrary('maps');
           
         
           
            
      
        const map=new Map(document.querySelector("#map"),{
            zoom: 18,
            center:fakewood ,
            mapId:"DEMO_MAP_ID",
             mapTypeId: google.maps.MapTypeId.HYBRID
        
        
          })
          const panorama = new google.maps.StreetViewPanorama(
            document.getElementById("pano"),
            {
              position: fakewood,
              pov: {
                heading: 34,
                pitch: 10,
              },
            },
          );
        
          map.setStreetView(panorama);

    }
    loadMap();
}());