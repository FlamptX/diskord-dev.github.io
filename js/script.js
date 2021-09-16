var currentTheme = 'dark';

function changeTheme() {
    body = document.getElementsByTagName('body')[0]
    mainInfo = document.getElementById('mainInfo')
    icon = document.getElementById('changeTheme')

    if(currentTheme === 'light'){
        body.style.color = 'white'
        mainInfo.style.backgroundColor = '#2f3136'
        currentTheme = 'dark'
        icon.innerHTML = 'brightness_5'
        return;
    }
    else if(currentTheme === 'dark'){
        body.style.color = 'black'
        mainInfo.style.backgroundColor = 'white'
        currentTheme = 'light'
        icon.innerHTML = 'brightness_2'
        return;
    }
}