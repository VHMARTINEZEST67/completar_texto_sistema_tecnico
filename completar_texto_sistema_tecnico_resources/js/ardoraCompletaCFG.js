//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=4;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FDFEE7"; colorButton="#FF00FF"; colorText="#000000"; colorSele="#00FF40";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades ¡Lo lograste!"; messageTime=""; messageError="¡Inténtalo de nuevo!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>La <input aria-label="Item 1" type="text" name="item1" id="item1" class="ardoraDropInput" readonly> debe considerar el diagnóstico de <input aria-label="Item 2" type="text" name="item2" id="item2" class="ardoraDropInput" readonly> y el diseño del proyecto. Un factor importante que no debe quedar fuera es la elaboración del <input aria-label="Item 3" type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. Se conoce como presupuesto al calculo anticipado del costo de producción de un producto o <input aria-label="Item 4" type="text" name="item4" id="item4" class="ardoraDropInput" readonly>, además de una comparación con el precio de venta; si fuera de beneficio <input aria-label="Item 5" type="text" name="item5" id="item5" class="ardoraDropInput" readonly>, se calcularía para no sobrepasar el presupuesto asignado. </p><p> Es importante considerar los <input aria-label="Item 6" type="text" name="item6" id="item6" class="ardoraDropInput" readonly> e indirectos; los primeros están íntimamente ligados con el <input aria-label="Item 7" type="text" name="item7" id="item7" class="ardoraDropInput" readonly>. Por ejemplo, en una fábrica de muebles artesanales de madera se deben incluir los costos de este material, la adquisición de herramienta, el pegamento, los clavos y los tornillos. Por su parte, los gastos indirectos serian la gasolina para el transporte, el mantenimiento del camión, el costo de la energía eléctrica, la renta del local para el taller y el sueldo de los trabajadores. Al calcular un precio de venta, se protege la <input aria-label="Item 8" type="text" name="item8" id="item8" class="ardoraDropInput" readonly> que obtendrá el productor, un beneficio económico conocido como ganancia neta. </p><p> </p>'];
var answers=["producto","necesidades","gastos directos","ganancia","planeación","presupuesto","servicio","social"];
var a=["Nw==","Mg==","Ng==","OA==","MQ==","Mw==","NA==","NQ=="];
var itemCorr=["0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Y29tcGxldGFyX3RleHRvX3Npc3RlbWFfdGVjbmljbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fHelp="Verdana, Geneva, sans-serif";
