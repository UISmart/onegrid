/*
 * MetaBuilder: The Engine behind
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
