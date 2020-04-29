function formatHeight(parent, classElement, classChildFormatHeight) {

  var elementsFormat = parent.getElementsByClassName(classElement);
  resetHeightIndexOf(elementsFormat, classChildFormatHeight);
  
  var iteminRow = 1;
  if (elementsFormat.length) {

      iteminRow = Math.ceil(parent.clientWidth / elementsFormat[0].clientWidth);
  }
  
  for (let index = 0; index < elementsFormat.length; index += iteminRow) {

      var begin = index;
      var end = index + iteminRow - 1
      if (index + iteminRow > elementsFormat.length) {
          end = elementsFormat.length - 1;
      }
      
      var maxHeight = getMaxHeightIndexOf(elementsFormat, begin, end);
       
      fixHeightIndexOf(elementsFormat, maxHeight, begin, end, classChildFormatHeight);
  }
}

function getMaxHeightIndexOf(elements, begin, end) {
  // var classFixHeight = 'js-item-format-height';

  var max = elements[begin].clientHeight;
  if (begin == end) {
      return max;
  }
  for (var index = begin; index <= end; index++) {

      ///elements[index].getElementsByClassName(classFixHeight)[0].style.height = '';
      var heightDom = elements[index].clientHeight;
      if (heightDom > max) {
          max = heightDom;
      }
  }
  return max;
}

function fixHeightIndexOf(elements, height, begin, end, classChildFormatHeight) {
  
  for (var index = begin; index <= end; index++) {

    var domFormat = elements[index];
    if(classChildFormatHeight){

      var domsFormat = domFormat.getElementsByClassName(classChildFormatHeight);
      if(domsFormat.length){
        var domFormat = domsFormat[0];
      }
    }
    domFormat.style.height = height + "px";
  }
}

function resetHeightIndexOf(elements, classChildFormatHeight) {

  for (var index = 0; index < elements.length; index++) {

    var domFormat = elements[index];
    if(classChildFormatHeight){

      var domsFormat = domFormat.getElementsByClassName(classChildFormatHeight);
      if(domsFormat.length){
        var domFormat = domsFormat[0];
      }
    }
    domFormat.style.height = "";
  }
}

module.exports = formatHeight;