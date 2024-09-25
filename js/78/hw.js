( async function () {
   'use strict' ;
   const wikistuff=$('#wiki')
   
   const response=await fetch('http://api.geonames.org/wikipediaSearch?q=yeshiva&maxRows=10&username=aj468&type=json')

   if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  const defaultImg=document.getElementById('#img');
  const wikiResults= await response.json();
  const {Map}= await google.maps.importLibrary('maps');
  const {AdvancedMarkerElement}=await google.maps.importLibrary('marker');
  const map=new Map(document.getElementById('map'),{
    zoom: 18,
    center: { lat: 40.09564277325912, lng: -74.22203857900014 },
    mapId:"DEMO_MAP_ID",
    mapTypeId: google.maps.MapTypeId.HYBRID


  })
  wikiResults.geonames.forEach(result => {
    const theLi=$(`<li> <strong>${result.title}</strong> <p>${result.summary}</p></li>`)
    .appendTo(wikistuff)
    .click(()=>{
        console.log("clicked")
   const newMarker=createMarker(map,result.lng,result.lat,result.title,result.thumbnailImg);
    const content=`${result.summary} \n<a href=https://${result.wikipediaUrl}>wiki</a>`
    addInfoWindow(map,newMarker,content,);
    map.panTo({ lat: result.lat, lng: result.lng })
  })

   
    
  });

  function createMarker(map,lng,lat,title,img) {
    let img2 = document.createElement('img');
    img2.src=img
    const addedMarker=new AdvancedMarkerElement({
        position: {lat:lat,lng:lng},
        map:map,
        title:title,
        content:img2
        


   }
   
   
   )
   return addedMarker;
   
  }

  function addInfoWindow(map,marker,content) {
 const infoWindow = new google.maps.InfoWindow({content:content});
 marker.addListener('click',()=>{
    infoWindow.open(map,marker)
 })
    
  }
  

  
}());