DOM manipulation
	Parte 1: accesso al DOM
<!--	1)document.getElementById(id).src : manipola il contenuto di un elemento( src, value, ecc...) in base al suo id
		<img id="star" src="star_off.gif">
		<script>
			document.getElementById("star").src = "star_on.gif"; //Accende la stella
		</script>
	2)document.getElementById(id).childNodes[number] : manipola un figlio senza id all'interno di un nodo
		<span id="stars">
			<img src="star_off.gif">
			<img src="star_off.gif">
			<img src="star_off.gif">
		</span>	
		<script>
		document.getElementById("stars").childNodes[1].src = "star_on.gif";	//Accende la stella centrale 
		</script>
	3)document.getElementById(id).lastChild( o firstChild).src : manipola il primo( con firstChild) o l'ultimo figlio( con lastChild) di un nodo
		<span id="phrase">
			Twinkle twinkle little
			<u>
				<img src="star_off.gif">
				star
			</u>
		</span>
		<script>
		document.getElementById("phrase").lastChild.firstChild.src = "star_on.gif"; // Accede all'ultimo figlio e successivamente al primo di questo per accendere la stella
		</script>
	4)document.getElementById(id).previousSibling( o nextSibling).src : si sposta di 1 posizione prima( previousSibling) o dopo( nextSibling) all'interno di un nodo avente più figli
		<span>
			<img src="star_off.gif">
			<img src="star_off.gif">
			<img id="laststar" src="star_off.gif">
		</span>
		<script>
			document.getElementById('laststar').previousSibling.previousSibling.src = 'star_on.gif'; //Accede alla prima posizione spostandosi di 2 indietro rispetto all'ultima
		</script>
	5)document.getElementById(id).parentNode: accede al padre di un nodo figlio
		<span>
			<b>
				<small id="start_here">
					Twinkle
				</small>
			</b>
			<i>
				twinkle little
				<img src="star_off.gif">
			</i>
		<span>
		<script>
			document.getElementById('start_here').parentNode.nextSibling.lastChild.src = 'star_on.gif'; //Accede al figlio del primo nodo per poi passare al figlio del fratello del suo nodo padre 
		</script>
-->	
	Parte 2: manipolazione del DOM
<!--	1)document.getElementById(id).innerHTML : modifica un elemento HTML( non contano gli elementi senza tag) contenuto in un nodo 
		<span id="field">
			Wish upon a
			<img src="star_off.gif">
		</span>
		<script>
			document.getElementById('field').innerHTML = '<img src="star_on.gif">'; //Accede all'interno di field e cambia l'immagine della stella
		</script>
	2)document.getElementById(id).removeChild(node);	
		<span>
			Shooting
			<img id="fallenstar" src="star_on.gif">
		</span>
		<script>
		var star = document.getElementById('fallenstar');
		star.parentNode.removeChild(star);				//Rimuove la stella
		</script>
	3)document.getElementById(id).appendChild(target)  : sposta il nodo target( e tutti i suoi figli) in un'altro nodo
		<span>
			<span id="source">
				Here's a star:
				<img src="star_on.gif">
			</span>
			<span id="target">
				Move it here:
			</span>
		</span>
		<script>
			document.getElementById('target').appendChild(document.getElementById('source').lastChild); //Sposta la stella dal primo figlio all'ultimo 
		</script>
	4)document.createTextNode(stringa): crea un nuovo nodo contenente del testo
		<span id="math">
			6 * 7 =
		</span>
		<script>
			var target = document. getElementById("math");
			target.appendChild(document.createTextNode("42"));	//Appende al nodo target un nuovo nodo contenente il risultato dell'operazione
		</script>
	5)document.createElement(TAG): crea un nuovo elemento del tipo TAG
		<span id="sky">
		</span>
		<script>
			var img = document.createElement('IMG');	//Creo un nuovo tag immagine contenente una stella e l'assegno al nodo con id sky
			img.src = 'star_on.gif';
			document.getElementById('sky').appendChild(img); 
		</script>
-->		
	Parte 3: eventi DOM
<!--	1)document.getElementById(id).onclick = function() {}: aggiunge un evento al nodo id quando viene premuto con il mouse
		<button id="first">Execute</button>
		<script>
			document.getElementById('first').onclick = function() //modifica il colore del bottone quando viene premuto
			{
				this.style.background = '#ff8';
			};
		</script>
	2).addEventListener(type, function, false) : aggiunge ad un nodo un ascoltatore di tipo type( click,ecc...) per una data funzione 
		<button id="w3c">Execute</button>
		<script>
			var button = document.getElementById('w3c');	
			button.addEventListener('click', function() {this.style.background = '#ff8';}, false); //aggiunge un evento che cambia il colore del bottone quando viene premuto 
			// Bonus:
			button.addEventListener('click', function() {alert('Hello');}, false);		//aggiunge un alert dove viene scritto Hello quando il bottone viene premuto 
		</script>
	3).removeEventListener(type, function, false);: rimuove ad un nodo un ascoltatore di tipo type( click,ecc...) per una data funzione
	   <img id="once_star" src="star_on.gif"> 	
	   <script>  
			var img = document.getElementById('once_star');
			var clickFunc = function() {														//Funzione che inizialmente mostra un alert e successivamente rimuove il listener dal nodo
											alert('Hello');				
											img.removeEventListener('click', clickFunc, false);
									   };
			img.addEventListener('click', clickFunc, false);
	   </script>
	4)Questo codice aggiunge ad un nodo padre un listener che si attiverà con gli elementi figli
		var func = function(e) 
		{
			if (e.target.src) 
			{
				e.target.src = 'star_on.gif';
			}
		};
		document.getElementById('star_table').addEventListener('mouseover', func, false);
	5)Questo codice aggiunge ad un nodo un listener che evita di leggere da tastiera valori non numerici
		var func = function(e) 
		{
			if (e.charCode < 48 || e.charCode > 57) 
			{
				e.preventDefault();
			}
		};
		document.getElementById('phone').addEventListener('keypress', func, false);
-->
	Parte 4: richieste server asincrone DOM
	2)
	var sendAjax = function() 
	{
		var req = new XMLHttpRequest();	//oggetto XMLHttpRequest per interagire con il server
		req.open('GET', 'data.txt');	// inzializza la richiesta( il GET definisce che vuole ricevere il data.txt, se fosse stato POST indicava l'invio di alcuni dati)
		req.onreadystatechange = myResponseHandler;	// quando avviene una variazione del readyState, effettua un'operazione specifica 
		req.send();
	};
	VERSIONE TESTUALE 
	var myResponseHandler = function() 
	{
		if(this.readyState == 4 && this.status == 200)	// verifico che la connessione sta venendo effettuata e lo stato ritorna un esito positivo
		{
			alert(this.responseText);	//stampo il contenuto del file in formato testuale
		}
	};
	VERSIONE XML ( richiedo il primo valore presente nel file)
	var sendAjax = function() 
	{
		var req = new XMLHttpRequest();	
		req.open('GET', 'data.xml');	
		req.onreadystatechange = myResponseHandler;	
		req.send();
	};
	var myResponseHandler = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			alert(this.responseXML.getElementsByTagName('cat')[0].getAttribute('name'));
		}
	};
	VERSIONE JSON( similare ad XML)
	var sendAjax = function() 
	{
		var req = new XMLHttpRequest();	
		req.open('GET', 'data.xml');	
		req.onreadystatechange = myResponseHandler;	
		req.send();
	};
	var myResponseHandler = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			alert(JSON.parse(this.responseText).apollo11[0]);	//JSON.parse permette di leggere i dati del file 
		}
	};
	
	Possibili valori di readyState:
	0: request not initialized 
	1: server connection established
	2: request received 
	3: processing request 
	4: request finished and response is ready
	5) Calcolatrice backend 
	var req = new XMLHttpRequest();
	var a = document.getElementById('number1').value;
	var b = document.getElementById('number2').value;
	req.open('GET', '/add.py?a=' + a + '&b=' + b);
	req.onreadystatechange = function() 
	{
		if (this.readyState == 4 && this.status == 200) 
		{
			alert(this.responseText);
		}
	};
	req.send();
