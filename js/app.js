document.addEventListener('DOMContentLoaded', () => {

    
    const navMobil = document.getElementById('navMovil')
    
    const navegador = document.getElementById('navegador')
    const mql = window.matchMedia("(max-width:767px)")

        const desplegarMenu = (mql) => {

            console.log('funciona el click')

            if(mql.matches){
                
                // navMobil.classList.toggle('hfe-active-menu')
                // navMobil.toggleAttribute('aria-expanded', 'true')
                // navegador.classList.toggle('menu-is-active')
                console.log('funcionando')
            }
        }

     navMobil.addEventListener('click', () => desplegarMenu(mql)) 
    
    
    
    
        
     

    
        

     

    


});