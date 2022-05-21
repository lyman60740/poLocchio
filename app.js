/*
Système de slide horizontal :
- Chaque slide doit être en .toggle sur son propre clique 
- Toutes les slides qui sont aprés doivent être en .remove
- Toutes les slides avant doivent être en .add 
- Exception pour la premiere qui n'a pas de .toggle sur son propre clique ( slide par défaut)
*/

const premier = document.querySelector ('.premier')
const quatrieme = document.querySelector ('.quatrieme')
const deuxieme = document.querySelector('.deuxieme')
const troisieme = document.querySelector('.troisieme')


premier.addEventListener ('click', ()=>{

    deuxieme.classList.remove ('trans')
    troisieme.classList.remove ('trans')
    quatrieme.classList.remove ('trans')
    
})

deuxieme.addEventListener ('click', ()=>{

    deuxieme.classList.toggle ('trans')
    troisieme.classList.remove ('trans')
    quatrieme.classList.remove ('trans')
    
})
troisieme.addEventListener ('click', ()=>{
    
    troisieme.classList.toggle ('trans')
    deuxieme.classList.add ('trans')
    quatrieme.classList.remove ('trans')
       
})
quatrieme.addEventListener ('click', ()=>{
    
    quatrieme.classList.toggle ('trans')
    deuxieme.classList.add ('trans')
    troisieme.classList.add ('trans')
    
})
/* euh impro projet theme light dark foncedé deso j'ai fait de la merde :)*/
/*const checkbox = document.getElementById('checkbox');
const main = document.querySelector('.main')

checkbox.addEventListener('change', ()=>{
  main.classList.toggle('mainSwitch');
  main.classList.toggle('main');

})*/