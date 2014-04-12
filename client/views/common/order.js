Session.set('amount',0)

/* Template.order.events({
    "keyup #placeAmount": function(event){
        event.preventDefault();
		var query = event.target.value;
		if (_ > 2) {
			Meteor.call('placeQuery', query, function(error, placesNames) {
				if (error) {
					Session.set('placesNames', false);
				} else {
					Session.set('placesNames', placesNames.data);
				}
			})
		} else {
			Session.set('placesNames',false)			
		}
    }
});
*/


  var map, geocoder

    Template.order.events({
      'click #addMarker': function(ev, el) {
        ev.preventDefault();

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(49.821, 18.262),
          title: 'Your Marker',
          icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
        });

        marker.setMap(map);
      },

      'click #findCity': function(ev, el) {
        ev.preventDefault();

        geocoder.geocode({
          'address': el.find('#cityName').value
        }, function(results, status) {

          if (status == google.maps.GeocoderStatus.OK) {

            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });

            var mymarker = marker.location;
            alert('Geocode was not successful for the following reason: ' + mymarker);
          

          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }

    });


 Template.order.rendered = function() { 

    geocoder = new google.maps.Geocoder();

    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(49.821, 18.262),
      mapTypeId: google.maps.MapTypeId.HYBRID
    };

    if (!map) {
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }

  };

  Template.order.destroyed = function() {

  };


/*
Template.order.events({
    "keyup #placeAmount": function(event){
        event.preventDefault();
		var query = event.target.value;
		if ( query > 5) {
			query = 5
		}			
	}
});


Template.home.placeTest = function limitText(limitField, limitNum) {
		    if (limitField.value.length > limitNum) {
		        limitField.value = limitField.value.substring(0, limitNum);
		    }
		}

		Template.home.placeAmount = function placeAmount(limitField, limitNum) {
		    if (limitField.value > limitNum) {
		        limitField.value = limitNum;
		    }
		}

*/		

   /* <input type="text" id="sessionNo" name="sessionNum" onKeyDown="limitText(this,5);" 
onKeyUp="limitText(this,5);"" /> */