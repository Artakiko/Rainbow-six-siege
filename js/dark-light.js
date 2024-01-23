const body = document.querySelector('body')
function changelight(){
    console.log('light');
    body.style.background = 'linear-gradient(90deg, hsl(178, 70%, 45%) 0%, #8c03b2 100%)'
}
function changedark(){
    console.log('dark');
    body.style.background = 'linear-gradient(90deg, hsl(239, 70%, 45%) 0%, #9b04c5 100%)'
    
}