/*
 * MetaBuilder: The Engine behind #OneGrid
 *
 * Copyright: Andres Buzzio https://andresbuzzio.github.io/portfolio
 *
 */

// EDITABLE H1.

var EditableDivs = ("h1, p");

$(function(){
    var $div=$(EditableDivs), isEditable=$div.is('.editable');
    $(EditableDivs).prop('contenteditable',!isEditable).toggleClass('editable');
})

// tooltip init
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// tooltip H1

$('#h1').append("<span class='editor animated bounceInUp'></span>");
$( ".editor" ).insertBefore ( $( "#h1" ) );

// show editor
$(function() {
    $("#h1").focus( function() {
    $(".editor").css("display","block");
  });
});

// insert tools in tooltip H1
$('.editor').append("<div class='H1Color'></div>\
<div class='H1Font'><i class='fa fa-font'></i></div>\
<div class='H1FontClose'><i class='fa fa-font closed'></i></div>\
<div id='browseFonts' class='animated fadeIn'><input id='font' type='text'></div>\
<div class='H1Align'><i class='fa fa-align-left'></i></div>\
<div class='H1AlignClose'><i class='fa fa-align-left closed'></i></div>");

// localStorage of the content editable text

var theContent = $('#h1');

$('#save').on('click', function(){
  var editedContent   = theContent.html();
  localStorage.newContent = editedContent;
});

// Retrieve
if(localStorage.getItem('newContent')) {
  theContent.html(localStorage.getItem('newContent'));
}

// localStorage of the colors

$('#save').on('click', function(){
    var color = $('.#34495e').css('background-color');

    localStorage.setItem('colorvalue', color);
});

$(document).ready(function() {

// Retrieve
var color = localStorage.getItem('colorvalue');
$('.jumbotron').css('background-color', color);

});

// Download the HTML / Save just what is within html #content

function createDownloadLink(anchorSelector, str, fileName){
    if(window.navigator.msSaveOrOpenBlob) {
        var fileData = [str];
        blobObject = new Blob(fileData);
        $(anchorSelector).click(function(){
            window.navigator.msSaveOrOpenBlob(blobObject, fileName);
        });
    } else {
        var url = "data:text/plain;charset=utf-8," + encodeURIComponent(str);
        $(anchorSelector).attr("download", fileName);
        $(anchorSelector).attr("href", url);
    }
}

$(function () {
    var str = document.getElementById("content").innerHTML;
    createDownloadLink("#export",str,"OneGridPage.html");
});

// mini colors

$(document).ready(function() {

  $.minicolors = {
    defaults: {
        animationSpeed: 50,
        animationEasing: 'swing',
        change: null,
        changeDelay: 0,
        control: 'wheel',
        dataUris: true,
        defaultValue: '',
        format: 'hex',
        hide: null,
        hideSpeed: 500,
        inline: false,
        keywords: '',
        letterCase: 'lowercase',
        opacity: false,
        position: 'bottom left',
        show: null,
        showSpeed: 100,
        theme: 'default',
        swatches: []
    }
};

// H1 color

$('.H1Color').minicolors()

$(".H1Color").on('change', function() {
//var newCol = $(this).parent().find('.minicolors-swatch-color').css("color");
var newCol = $(this).parent().find('.minicolors-swatch-color').attr('style');

// USE CSS NOT ATTRIB !!
$('#h1').css("color", newCol);

});

});

// FONT SELECTOR

$(function(){
$('#font').fontselect().change(function(){

  // replace + signs with spaces for css
  var font = $(this).val().replace(/\+/g, ' ');

  // split font into family and weight
  font = font.split(':');

// set family on H1
$('#h1').css('font-family', font[0]);
});
});

$('.font-select > a').click(function() {
$('.fs-drop').addClass ('animated fadeIn');
});

// H1Color button

// H1Font button
$('.H1Font').click(function() {
$('#browseFonts').css ('display', 'block');
$('.H1Font').css ('display', 'none');
$('.H1FontClose').css ('display', 'block');
});

// H1Align button
$('.H1Align').click(function() {
$('.H1Align').css ('display', 'none');
$('.H1AlignClose').css ('display', 'block');
});
