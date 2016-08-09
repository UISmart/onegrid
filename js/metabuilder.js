/*
 * MetaBuilder: The Engine behind #OneGrid
 *
 * Copyright: Andres Buzzio https://andresbuzzio.github.io/portfolio
 *
 */

/*
1 2 3 4 5
G       6
F       7
E       8
D C B A 9
*/

// blocks editor

$(document).ready(
     function() {
		 $("body").animate({right:'200px'}, 3000);
     $('#Blocks').animate({right:'200px'}, 3000);
});

// insert blocks editor

$( function() {
   $( "#sortable" ).sortable({
     revert: true
   });
   $( "#draggable" ).draggable({
     connectToSortable: "#sortable",
     helper: "clone",
     revert: "invalid"
   });
   $( "ul, li" ).disableSelection();
 } );

//



$('body').append("<div id='Blocks'></div>");
$( "#Blocks" ).insertBefore ( $( "#content" ) );

$('#Blocks').append("<div class='blocksControls'>\
<div class='blocksOpen animated fadeIn'><div class='arrowLeft'><img class='svg' src='https://uismart.github.io/onegrid/img/left-arrow.svg'/></div></div>\
<div class='blocksControlsClose'><img class='svg' src='https://uismart.github.io/onegrid/img/cross-out.svg'/></div>\
</div>\
<div class='TheBlocks'>\
<ul id='sortable draggable'>\
<li class='ui-state-highlight'><div class='blockOne'><div class='blockText'>Carousel</div></div></li>\
<li class='ui-state-default'><div class='blockTwo'><div class='blockText'>Jumbotron</div></div></li>\
<li class='ui-state-default'><div class='blockThree'><div class='blockText'>About</div></div></li>\
</ul>\
</div>");

// close blocks editor

$('.blocksControlsClose').click(function() {
  $("body").animate({right:'53'}, 1000);
  $('#Blocks').animate({right:'53'}, 1000);
  $(".blocksControlsClose").hide().delay(500).fadeOut();
  $(".blocksOpen").show().delay(500).fadeIn();
  $(".TheBlocks").addClass ("animated slideOutRight");
});

// open blocks editor

$('.blocksOpen').click(function() {
  $("body").animate({right:'200px'}, 1000);
  $('#Blocks').animate({right:'200px'}, 1000);
  $(".blocksControlsClose").show().delay(500).fadeIn();
  $(".blocksOpen").hide().delay(500).fadeOut();
  $(".TheBlocks").removeClass ("slideOutRight");
  $(".TheBlocks").addClass ("fadeIn");
});

// fill SVG

$(function(){
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

// EDITABLE H1.

var EditableDivs = ("h1, h2, p");

$(function(){
    var $div=$(EditableDivs), isEditable=$div.is('.editable');
    $(EditableDivs).prop('contenteditable',!isEditable).toggleClass('editable');
})

// tooltip H1

$('#h1').append("<span class='editor animated bounceInUp'></span>");
$( ".editor" ).insertBefore ( $( "#h1" ) );

// show editor #h1
$(function() {
    $("#h1").focus( function() {
    $(".editor").css("display","block");
    $(".editorParagraph").hide().delay(500).fadeOut();
    $(".editorJumboButton").hide().delay(500).fadeOut();
  });
});

// tooltip paragraph

$('.paragraph').append("<span class='editorParagraph animated bounceInUp'></span>");
$( ".editorParagraph" ).insertBefore ( $( ".paragraph" ) );

// show editor paragraph
$(function() {
    $(".paragraph").focus( function() {
    $(".editorParagraph").css("display","block");
    $(".editor").hide().delay(500).fadeOut();
    $(".editorJumboButton").hide().delay(500).fadeOut();
  });
});

// tooltip button

$('.JumboButton').append("<span class='editorJumboButton animated bounceInUp'></span>");
$( ".editorJumboButton" ).insertBefore ( $( ".JumboButton" ) );

// show editor JumboButton
$(function() {
    $(".JumboButton").hover( function() {
    $(".editorJumboButton").css("display","block");
    $(".editor").hide().delay(500).fadeOut();
    $(".editorParagraph").hide().delay(500).fadeOut();
  });
});

// hide editor
$(function() {
    $(".JumboButton").blur( function() {
    $(".editorJumboButton").hide().delay(500).fadeOut();
  });
});

//

// insert tools in tooltip H1
$('.editor').append("<div class='H1Color'></div>\
<div class='H1Font animated flipInX'><i class='fa fa-font'></i></div>\
<div class='H1FontClose animated flipInX'><i class='fa fa-font closed'></i></div>\
<div class='browseFonts animated fadeIn'><input id='font' type='text'></div>\
<div class='H1Align'><i class='fa fa-align-left'></i></div>\
<div class='H1AlignClose'><i class='fa fa-align-left closed'></i></div>");

// insert tools in tooltip paragraph
$('.editorParagraph').append("<div class='PColor'></div>\
<div class='PFont animated flipInX'><i class='fa fa-font'></i></div>\
<div class='PFontClose animated flipInX'><i class='fa fa-font closed'></i></div>\
<div class='PbrowseFonts animated fadeIn'><input id='fontParagraph' type='text'></div>\
<div class='PAlign'><i class='fa fa-align-left'></i></div>\
<div class='PAlignClose'><i class='fa fa-align-left closed'></i></div>");

// insert tools in tooltip button
$('.editorJumboButton').append("<div class='ButtonColor'></div>");

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

// Paragraph color

$('.PColor').minicolors()

$(".PColor").on('change', function() {
//var newCol = $(this).parent().find('.minicolors-swatch-color').css("color");
var newCol = $(this).parent().find('.minicolors-swatch-color').attr('style');

// USE CSS NOT ATTRIB !!
$('.paragraph').css("color", newCol);

});

// Jumbotron Button color

$('.ButtonColor').minicolors()

$(".ButtonColor").on('change', function() {
//var newCol = $(this).parent().find('.minicolors-swatch-color').css("color");
var newCol = $(this).parent().find('.minicolors-swatch-color').attr('style');

// USE CSS NOT ATTRIB !!
$('.JumboButton').css("background-color", newCol);

});

});


// Font Select H1

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

// Font Select Paragraph

$(function(){
$('#fontParagraph').fontselect().change(function(){

  // replace + signs with spaces for css
  var font = $(this).val().replace(/\+/g, ' ');

  // split font into family and weight
  font = font.split(':');

// set family on H1
$('.paragraph').css('font-family', font[0]);
});
});

$('.font-select > a').click(function() {
$('.fs-drop').addClass ('animated fadeIn');
});

// Font Select Button

$(function(){
$('#fontButton').fontselect().change(function(){

  // replace + signs with spaces for css
  var font = $(this).val().replace(/\+/g, ' ');

  // split font into family and weight
  font = font.split(':');

// set family on H1
$('JumboButton').css('font-family', font[0]);
});
});

$('.font-select > a').click(function() {
$('.fs-drop').addClass ('animated fadeIn');
});

//

// H1 Font selection
$('.H1Font').click(function() {
$('.browseFonts').css ('display', 'block');
$('.H1FontClose').css ('display', 'block');
$('.H1Font').css ('display', 'none');
});

// H1FontClose button
$('.H1FontClose').click(function() {
$('.browseFonts').css ('display', 'none');
$('.H1FontClose').css ('display', 'none');
$('.H1Font').css ('display', 'block');
});

// Paragraph Font selection
$('.PFont').click(function() {
$('.PbrowseFonts').css ('display', 'block');
$('.PFontClose').css ('display', 'block');
$('.PFont').css ('display', 'none');
});

// Paragraph FontClose button
$('.PFontClose').click(function() {
$('.PbrowseFonts').css ('display', 'none');
$('.PFontClose').css ('display', 'none');
$('.PFont').css ('display', 'block');
});

// Button Font selection
$('.ButtonFont').click(function() {
$('.ButtonBrowseFonts').css ('display', 'block');
$('.ButtonFontClose').css ('display', 'block');
$('.ButtonFont').css ('display', 'none');
});

// Paragraph FontClose button
$('.ButtonFontClose').click(function() {
$('.ButtonBrowseFonts').css ('display', 'none');
$('.ButtonFontClose').css ('display', 'none');
$('.ButtonFont').css ('display', 'block');
});

//

// H1Align button
$('.H1Align').click(function() {
$('.H1Align').css ('display', 'none');
$('.H1AlignClose').css ('display', 'block');
});

// localStorage of the content editable text

var theContentText = $('#h1');
var theFontSelected = $('#font');

$('#save').on('click', function(){
  var editedContent   = theContentText.html();
  localStorage.newContent = editedContent;
});

// Retrieve
if(localStorage.getItem('newContent')) {
  theContentText.html(localStorage.getItem('newContent'));
}

// localStorage of the H1 color

$('#save').on('click', function(){
    var color = $('#h1').css('color');

    localStorage.setItem('colorvalue', color);
});

$(document).ready(function() {

// Retrieve
var color = localStorage.getItem('colorvalue');
$('#h1').css('color', color);

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

// Font Awesome Picker

$(function () {
    $('.icon-container').iconpicker();
});

$('.icon-container').click(function() {
  $('.icon-container').data('iconpicker').iconpickerProperty;
});

// For the first matched element, access to a plugin property value
$('.icon-container').data('iconpicker').iconpickerProperty;

// Call and apply a plugin method to EACH matched element.
$.iconpicker.batch('.icon-container');
