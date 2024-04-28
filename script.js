const sideBarBtn = document.querySelector('.navigation__mobile-btn');
const sideBar = document.querySelector('.navigation__sidebar')

const linksContainer = document.querySelectorAll('.link');


sideBarBtn.addEventListener('click', () => {
    sideBar.classList.toggle('move');
})

linksContainer.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.classList.remove('move');
    })
})