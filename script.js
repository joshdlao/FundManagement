function hideAllSections() {
    document.getElementById("dashboard-content").style.display = "none";
    document.getElementById("search-content").style.display = "none";
    document.getElementById("calculator-content").style.display = "none";
    document.getElementById("information-content").style.display = "none";
}
function showDashboard() {
    hideAllSections();
    document.getElementById("dashboard-content").style.display = "block";
    setActiveTab(event.currentTarget);

}

function showsearchBar() {
    hideAllSections();
    document.getElementById("search-content").style.display = "block";
    setActiveTab(event.currentTarget);

}
function showcalculatorPage() {
    hideAllSections();
    document.getElementById("calculator-content").style.display = "block";
    setActiveTab(event.currentTarget);

}

function showinformationPage() {
    hideAllSections();
    document.getElementById("information-content").style.display = "block";
    setActiveTab(event.currentTarget);

}
function setActiveTab(clickedLink) {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => link.classList.remove("active"));
    clickedLink.classList.add("active");
}
