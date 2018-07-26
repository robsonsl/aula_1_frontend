const h1=document.querySelector('h1');
//instancia a tag primeira tag h1 para a constante h1

const pagina=document.querySelector('#pagina');
//instancia o id chamado pagina
//.nome = class, #nome=id, [nomes]=atributo
const paragrafo=document.createElement('p');
//cria um novo elemento (tag)
//no documento atual
const a=document.querySelector('a');

h1.innerHTML='Alfa';
//insere um texto ou tags para dentro do elemento instanciado e o sobrepõe
paragrafo.innerHTML='Loren Ipsunnnnn';

pagina.appendChild(paragrafo);
//adiciona como filho da pagina (div) 
//o paragrafo (p) 
a.innerHTML='R.B Informatica';

pagina.classList.remove('orange-text','text-darken-4')
//remove da lista de classe do elemento 
//os contesto relacionados dentro da função remove