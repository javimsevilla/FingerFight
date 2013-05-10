var player1 = 50
var player2 = 50

function pulse(id) {
	//alert("Jugador1: "+player1+", Jugador2: "+player2)
	var div = document.getElementById(id);
	if(div.id == "player1"){
		var div2 = document.getElementById("player2");
		player1 = player1+2;
		player2 = player2-2;
		div.style.height = player1+"%";
		div2.style.height = player2+"%";
	}else{
		var div2 = document.getElementById("player1");
		player1 = player1-2;
		player2 = player2+2;
		div.style.height = player2+"%";
		div2.style.height = player1+"%";
	}
	if(player1 ==0){alert("Player 1, you are dead!");location.reload();}
	if(player2 ==0){alert("Player 2, you are dead!");location.reload();}		
	}