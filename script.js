var button = document.getElementById("button");
button.addEventListener("click", function(){

	if (navigator.geolocation){

		navigator.geolocation.getCurrentPosition(function(position){
			
			var newcenter = {lat: position.coords.latitude, lng: position.coords.longitude};
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: newcenter
			});
		})
	}

})

function initMap() {
var vsqpj = {lat: 3.108729, lng: 101.6};


var map = new google.maps.Map(document.getElementById('map'), {
zoom: 15,
center: vsqpj
});
var marker = new google.maps.Marker({
position: vsqpj,
map: map
});


}