var spacing = 52;
//x and y offsets for table
var tableLeftOffset = 100;
var tableTopOffset = 25;
//left offset
var leftOffset = tableLeftOffset + spacing*xPosition
//top offset
var topOffset = tableTopOffset + spacing*yPosition
//putting the spacing together...
document.getElementById(idOfElement).style.left = leftOffset;
document.getElementById(idOfElement).style.top = topOffset;

var currentID = null;

function activateModal(elementData){
    //create ID's of affected elements
    const modalID = elementData.name+'_modal';
    const modalContent = elementData.name+'_modal_content';
    //modal cover is activated
    document.getElementById(modalID).style.visibility = 'visible';
    document.getElementById(modalID).style.opacity = 0.4;
    document.getElementById(modalID).style.zIndex = 2;
    //modal is activated
    document.getElementById(modalContent).style.visibility = 'visible';
    document.getElementById(modalContent).style.zIndex = 3;

    currentID = modalID;



}


function closeModal(){
    document.getElementById(currentID).style.visibility = 'hidden';
    document.getElementById(currentID).style.opacity = 1;
    document.getElementById(currentID).style.zIndex = -1;

    document.getElementById(currentID+'_content').style.visibility = 'hidden';
    document.getElementById(currentID+'_content').style.opacity = 1;
    document.getElementById(currentID+'_content').style.zIndex = -1;
}