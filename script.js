const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('.menu-icon-btn');

const sidebarToggle = () => {
    const sidebarDisplay = getComputedStyle(sidebar)["display"];
    if(sidebarDisplay == "block"){
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}

sidebarBtn.addEventListener('click', sidebarToggle);
