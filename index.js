window.onload = beranda;

        
 function beranda(){   
     
$(document).ready(function(){
    	 $('#gif1').show();  
    	 $('#gif2').show();  
    	 $('#gif3').show();  
    	 $('#gif4').show();  
    	 $('#gif5').show();  
    	 $('#gif6').show();  
$.ajax({ url:  "http://mta.flagodna.com/beranda/v2/selamat.php",
        context: document.body,
        success:function(response){
                	$('#gif1').hide(); 
                    $("#selamat").html(response);
                }

      });
    $.ajax({ url:  "http://mta.flagodna.com/beranda/v2/tanggal.php",
        context: document.body,
        success:function(response){
                	$('#gif2').hide(); 
                    $("#tanggal").html(response);
                }

      });
    $.ajax({ url:  "http://mta.flagodna.com/beranda/v2/covid.php",
        context: document.body,
        success:function(response){
                	$('#gif3').hide(); 
                    $("#covid").html(response);
                }

      });
    $.ajax({ url:  "http://mta.flagodna.com/beranda/v2/pmi.php",
        context: document.body,
        success:function(response){
                	$('#gif4').hide(); 
                    $("#pmi").html(response);
                }

      });
    $.ajax({ url:  "http://mta.flagodna.com/beranda/v2/salingsapa.php",
        context: document.body,
        success:function(response){
                	$('#gif5').hide(); 
                    $("#salingsapa").html(response);
                }

      });
    $.ajax({ url:  "http://mta.flagodna.com/beranda/v2/menu.php",
        context: document.body,
        success:function(response){
                	$('#gif6').hide(); 
                    $("#menu").html(response);
                }

      });
}); 
}
function brosur(){   
    $(document).ready(function(){
    	 $('#gif0').show();  
    $.ajax({ url:  "http://mta.flagodna.com/beranda/v2/brosur.php",
        context: document.body,
        success:function(response){
                	$('#gif0').hide(); 
                    $("#main").html(response);
                }

      });
}); 
  }
function beranda2(){ 
$(document).ready(function(){
    	 $('#gif0').show(); 
       $('#awal').hide();  
       $('#barmenu').show();  
    $.ajax({ url:  "http://mta.flagodna.com/beranda/v2/beranda.php",
        context: document.body,
        success:function(response){
                	$('#gif0').hide(); 
                    $("#main").html(response);
                }

      });
});  
  }

function tausiyah(){ 
$(document).ready(function(){
    	 $('#gif0').show(); 
       $('#awal').show();  
       $('#tausiyah').hide();   
    $.ajax({ url:  "http://mta.flagodna.com/beranda/v2/tausiyahislam.php",
        context: document.body,
        success:function(response){
                	$('#gif0').hide(); 
                    $("#main").html(response);
                }

      });
});  
  }

function tokomta(){ 
$(document).ready(function(){
    	 $('#gif0').show();   
       $('#tokomta1').hide();   
       $('#awal').show();
    $.ajax({ url:  "http://mta.flagodna.com/tokomta/index2.php",
        context: document.body,
        success:function(response){
                	$('#gif0').hide(); 
                    $("#main").html(response);
                }

      });
});  
  }
 