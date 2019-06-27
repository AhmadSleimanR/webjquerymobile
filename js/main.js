// JavaScript Document
$(document).ready(function(){
	"use strict";

	$.ajax({
  method: "POST",
  url: "http://pix.pe/servicioandroid/serviciocategorias.php",
  dataType: "json"
})
  .done(function( data ) {
    $.each(data, function(index, value){
		//alert(value.nombre);
		$("#lvCategorias").append("<li><a href='#'>" + value.nombre + "</a></li>");
	});
  });	
});