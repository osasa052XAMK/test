//Tunnilla tehty ryhmätyökilpailu, JSON-demo
$(document).ready(function(){ //kun sivu on latautunut
    $("#nappi").click(function(){ //kun painetaan nappia
        $.ajax({url: "opiskelijat.json",success: function(result){
            tulostaLuettelo(result);           
        }
    
    });     
});
});

//*******************************************
function tulostaLuettelo(result){
	//Tunnilla tehty ryhmätyö
	//Tulostetaan yhden tietyn opiskelijan kaksi harrastusta
    var luettelo = result[1].opiskelija[1].harrastukset[0];
    luettelo += result[1].opiskelija[1].harrastukset[1];
	
    $("#laatikko").html(luettelo);   
}














