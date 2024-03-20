var bttShowCardapio = document.querySelector('#ShowCardapio')
var bttCloseCardápio = document.querySelector('#bttCloseCardápio')
var BttRedCard = document.querySelector('#BttRedCard')
var bttMenu = document.querySelector('#BttMenu')
var bttPedido = document.querySelector('#pedidoBTT')
var bttSobreNós = document.querySelector('#Normal1')
var bttCardápio = document.querySelector('#Normal2')
var abaMenu = document.querySelector('#AbaMenu')
var Cardapio = document.querySelector('#cardapio')
var Opções = document.querySelector('#Opções')
var LinhaBase = document.querySelector('#Especiais')
var AbaWho = document.querySelector('#História')
var SectionDesconto = document.querySelector("#desconto")

bttSobreNós.addEventListener('click', ()=>{
    var elementoRect1 = AbaWho.getBoundingClientRect()
    var centerY1 = elementoRect1.top + elementoRect1.height/ 2 - window.innerHeight/ 2
    window.scrollTo({
        top: centerY1 + window.scrollY,
        behavior: 'smooth'
    })
})

function ToCardapio(){
    var elementoRect1 = SectionDesconto.getBoundingClientRect()
    var centerY1 = elementoRect1.top + elementoRect1.height/ 2 - window.innerHeight/ 2
    window.scrollTo({
        top: centerY1 + window.scrollY,
        behavior: 'smooth'
    })
}
bttCardápio.addEventListener('click', ToCardapio)



bttMenu.addEventListener('click', ()=>{
    abaMenu.classList.toggle('BttMenu1')
    abaMenu.classList.toggle('BttMenu2')

    bttMenu.classList.toggle('OpCloseMenu1')
    bttMenu.classList.toggle('OpCloseMenu2')

    bttCardápio.classList.toggle('bttMenus1')
    bttCardápio.classList.toggle('bttMenus2')

    bttSobreNós.classList.toggle('bttMenus1')
    bttSobreNós.classList.toggle('bttMenus2')

    bttPedido.classList.toggle('bttMenus1')
    bttPedido.classList.toggle('bttMenus2')
})

bttShowCardapio.addEventListener('click', ()=>{
    Cardapio.classList.toggle('Cardápio1-1')
    Cardapio.classList.toggle('Cardápio1-2')

    Opções.classList.toggle('Opções1')
    Opções.classList.toggle('Opções2')

    bttShowCardapio.classList.toggle('ShowCardapio1')
    bttShowCardapio.classList.toggle('ShowCardapio2')

    BttRedCard.classList.toggle('BttRedCard1')
    BttRedCard.classList.toggle('BttRedCard2')

    var elementoRect1 = LinhaBase.getBoundingClientRect()
    var centerY1 = elementoRect1.top + elementoRect1.height/ 2 - window.innerHeight/ 2
    window.scrollTo({
        top: centerY1 + window.scrollY,
        behavior: 'smooth'
    })
})

bttCloseCardápio.addEventListener('click', ()=>{
    Cardapio.classList.toggle('Cardápio1-2')
    Cardapio.classList.toggle('Cardápio1-1')

    Opções.classList.toggle('Opções2')
    Opções.classList.toggle('Opções1')

    bttShowCardapio.classList.toggle('ShowCardapio2')
    bttShowCardapio.classList.toggle('ShowCardapio1')

    BttRedCard.classList.toggle('BttRedCard2')
    BttRedCard.classList.toggle('BttRedCard1')

    ToCardapio();
})