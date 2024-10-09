/*globals $ google */
(async function () {
  'use strict';
  const wikistuff = $('#wiki');
  const wikiText = $('#wikiText');
  const wikiInput = $('#wikiInput');
  

  //loading map
  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
  const map = new Map(document.getElementById('map'), {
    zoom: 18,
    center: { lat: 40.09564277325912, lng: -74.22203857900014 },
    mapId: "DEMO_MAP_ID",
    mapTypeId: google.maps.MapTypeId.HYBRID


  });
  //adding markers  to map
  wikiInput.click(populateMap);
  async function populateMap(e) {
    e.preventDefault();
    wikistuff.empty();
    //loading wiki results
    const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${wikiText.val()}&maxRows=10&username=aj468&type=json`);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    // const defaultImg=document.getElementById('img');
    //wikiInputHolder.hide();
    const wikiResults = await response.json();
    console.log(wikiResults);
    const bounds = new google.maps.LatLngBounds();


    //adding markers and info windows to map.
    wikiResults.geonames.forEach(result => {
      const newMarker = createMarker(map, result.lng, result.lat, result.title, result.thumbnailImg);
      const content = `${result.summary} \n<a href=https://${result.wikipediaUrl}>Click for more info</a>`;
      addInfoWindow(map, newMarker, content,);
      const point = { lat: result.lat, lng: result.lng };
      bounds.extend(point);
      //adding to sidebar
      const theLi = $(`<li> <strong>${result.title}</strong> <p>${result.summary}</p>
        <img src="${result.thumbnailImg}"/></li>`)
        .appendTo(wikistuff)
        .click(()=> {
          console.log("clicked");
         
          map.panTo({ lat: result.lat, lng: result.lng });
        });


    });


    function createMarker(map, lng, lat, title, img) {
      let img2 = document.createElement('img');
      img2.src = img;
      const addedMarker = new AdvancedMarkerElement({
        position: { lat: lat, lng: lng },
        map: map,
        title: title,
        content: img2



      }


      );
      return addedMarker;

    }

    function addInfoWindow(map, marker, content) {
      const infoWindow = new google.maps.InfoWindow({ content: content });
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

    }


    //map.fitBounds(bounds);
  }
}());