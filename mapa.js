var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {	
	directionsDisplay = new google.maps.DirectionsRenderer(); 
	var localAtual = new google.maps.LatLng(-14.235, -51.9253 ); /* definindo localização do mapa com latitude e longitude, nesse caso Brasil*/ 
	
    var options = {
        zoom: 5,
		center: localAtual,
        mapTypeId: google.maps.MapTypeId.ROADMAP /* tipo de mapa que será visualizado */
    };

    map = new google.maps.Map(document.getElementById("map"), options); /* enviando o mapa para o div map */
	directionsDisplay.setMap(map); /* */
	directionsDisplay.setPanel(document.getElementById("trajeto"));  /* os trajetos em textos são enviados para o div trajeto */
	
	
}

initialize();

$("form").submit(function(event) {
	event.preventDefault();
	
	var enderecoOrigem = $("#origem").val(); /* pegando as variaveis do formulario  */
	var enderecoDestino = $("#destino").val();
	
	var request = {      /* usamos as entradas redefinindo as variaveis usando elas, atribuindo aos requistos obrigadtórios */
		origin: enderecoOrigem,
		destination: enderecoDestino,
		travelMode: google.maps.TravelMode.DRIVING /* tipo de viagem, no caso é dirigindo, existe opções de: bicicleta, caminhando e ônibus*/
	};
	
	directionsService.route(request, function(result, status) {  
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
	});
});