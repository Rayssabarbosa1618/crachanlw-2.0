const linksSocialMedia = {
    github: "Rayssabarbosa1618",
    youtube:"UCany0ws1z-cvZUopZKSsNIQ",
    instagram:"rayss_abarbosa14"
}

function getGitHubProfileInfos(response) {
    const url= `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        username.textContent = data.name
        userbio.textcontent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

}

getGitHubProfileInfos()