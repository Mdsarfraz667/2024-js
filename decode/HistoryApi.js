// function loadAbout() {
//     history.pushState(null, null, "about")
//     document.body.append("I am the 'about' Contents")
// }

window.addEventListener("popstate", e => {
    console.log(e);
})