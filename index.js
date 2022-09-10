
let profilePopup = document.querySelector('#profile-pop')
let avatar = document.querySelector('.avatar')

avatar.addEventListener('click',()=>{
    if(profilePopup.style.display === 'flex'){
        profilePopup.style.display = 'none'
    }else{
        profilePopup.style.display = 'flex'
    }
})