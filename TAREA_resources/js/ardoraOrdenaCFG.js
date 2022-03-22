var timeAct=120; timeIni=120; timeBon=5;
var successes=0; successesMax=3; attempts=0; attemptsMax=5;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADEEEEES!!!!!!!"; messageTime="SE ACABÓ EL TIEMPO!"; messageError="OH NO!!!"; messageErrorG="OH NO!!!"; messageAttempts="SIN INTENTOS!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VEFSRUE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TGEgUXXDrW1pY2EgZXMgbGEgY2llbmNpYSBxdWUgZXN0dWRpYSBsYSBtYXRlcmlhLCBsYSBlbmVyZ8OtYSB5IHN1cyBjYW1iaW9zLg==","TGEgcXXDrW1pY2EgY29udHJpYnV5ZSBkZSBmb3JtYSBkZWNpc2l2YSBhIHNhdGlzZmFjZXIgbGFzIG5lY2VzaWRhZGVzIGRlIGxhIGh1bWFuaWRhZA==","TGEgcXXDrW1pY2EgZXMgdW5hIGNpZW5jaWEgcXVlIHRpZW5lIHBvciBmaW5hbGlkYWQgbm8gc8OzbG8gZGVzY3VicmlyLCBzaW5vIHRhbWJpw6luLCB5IHNvYnJlIHRvZG8sIGNyZWFyLCB5YSBxdWUgZXMgZWwgYXJ0ZSBkZSBoYWNlciBjb21wbGVqYSBsYSBtYXRlcmlh","",""];imaW=["compuestos-quimicos-concepto-lifeder-min-1024x575.jpg","para-que-sirve-quimica.jpg","Quimica-comprimida.jpg","",""];queW=["","","","",""]; c=[74,84,150,0,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="TAREA_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
