document.documentElement.className = "light"
function changeTheme() {
    icon = document.getElementById('changeTheme')
    currentTheme = document.documentElement.className

    if(currentTheme === 'light'){
        document.documentElement.className = "dark"
        
        currentTheme = 'dark'
        icon.innerHTML = 'brightness_5'
    }
    else if(currentTheme === 'dark'){
        document.documentElement.className = "light"
        
        currentTheme = 'light'
        icon.innerHTML = 'brightness_2'
    }
}