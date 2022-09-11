/* Para buscarmos algum dado, para futuramente realizar algum ação sobre ele, por exemplo: Guardar em um servidor ou armaze
nar em algum local etc. precisamos de funções que possam capturar no HTML esses inputs. Para isso temos algumas funções
sendo elas:

    getElementById() - Traz apenas um elemento (element)
    getElementByName() - Traz diversos elementos (HTML Collection)
    getElementByTagName - Traz diversos elementos (HTML Collection)

    querySelector - Traz apenas um elemento, o primeiro que encontrar (element)
    querySelector - Traz todos elementos que encontrar (NodeList)

    NodeList x HTML Collection

*/

const element = document.getElementById("main-text")

console.log(element)

/* Quando "linkamos" o JS dentro do HTML através da tag script com src, o CodeRunner ou CTRL+ALT+N não irão funcionar, de
vido ao arquivo JS estar acessando algo que está dentro do HTML e o CodeRunner não acessa HTML. Para isso, podemos confe
rir o console que está após abrir o LiveServer > Inspecionar > Console */