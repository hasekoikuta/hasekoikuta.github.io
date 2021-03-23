var wrapper1 = document.getElementById("wrapper1");
var wrapper2 = document.getElementById("wrapper2");
var Entry = document.getElementById("Entry");
var Initial = document.getElementById("Initial");

function toInitial() {
    wrapper1.classList.remove("hidden");
    wrapper2.classList.add("hidden");
    Initial.classList.add("nav-active");
    Entry.classList.remove("nav-active");
}
function toEntry() {
    wrapper1.classList.add("hidden");
    wrapper2.classList.remove("hidden");
    Entry.classList.add("nav-active");
    Initial.classList.remove("nav-active");
}