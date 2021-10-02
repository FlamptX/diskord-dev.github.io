var currentTheme = 'dark';

function changeTheme() {
    body = document.body
    mainInfo = document.getElementById('mainInfo')
    navbar = document.getElementById("_navbar")
    footer = document.getElementById("_footer")
    icon = document.getElementById('changeTheme')

    if(currentTheme === 'light'){
        body.style.color = 'white'

        navbar.style.backgroundColor = "#111863"
        footer.style.backgroundColor = "#111863"
        document.body.style.backgroundColor = "#111863"
        
        mainInfo.style.backgroundColor = '#2f3136'
        currentTheme = 'dark'
        icon.innerHTML = 'brightness_5'
    }
    else if(currentTheme === 'dark'){
        body.style.color = 'black'

        navbar.style.backgroundColor = "#5865f2"
        footer.style.backgroundColor = "#5865f2"
        document.body.style.backgroundColor = "#5865f2"

        mainInfo.style.backgroundColor = 'white'
        currentTheme = 'light'
        icon.innerHTML = 'brightness_2'
    }
}