 function showlocation(){
	var options = {
	  enableHighAccuracy: true,
	  timeout: 5000,
	  maximumAge: 0
	};

	function success(pos) {
		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;
		var myLatlng = new google.maps.LatLng(lat, lon);
		// Objeto literal creado para la realización de las distintas opciones del mapa.
	    var mapOptions = {
	        zoom: 16,
	        center: new google.maps.LatLng(lat, lon),
	        disableDefaultUI: true,
	        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    	
	  // Creamos el mapa y le pasamos las opciones y el id del contenedor en el que se va a alojar
 		var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
  	 		var marker = new google.maps.Marker({
      		 position: myLatlng,
     		 map: map,
     		 title: "Holaaa",
 			 });
  	 				var infowindow = new google.maps.InfoWindow({
			    	minHeigth: 350,
			    	content: 'Paco Fiestas'

					});

  	 			     google.maps.event.addListener(marker, 'click', function() {
   					 infowindow.open(map, marker);
					});
		};

	function error(err) {
	  console.warn('ERROR(' + err.code + '): ' + err.message);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);
  
  };

 $.getJSON("usuarios.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});


