/*
i actually couldn't figure out how to turn jsons or txts into an array here
(i couldn't get jquery to work) (also the swear word datasets have some words
i dont feel comfortable having on my github page even tho i didn't write them)
instead, i've manually added commands to change the most common swear words 
using regex
*/

//replacement code
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/fuck|shit|bitch|damn|ass|hell|cunt|cock/i, 'CUSS');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}