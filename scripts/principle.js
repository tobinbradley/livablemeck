
// populate plans list
let programs = document.querySelector("#list-plans");
let checkplans = programs.getAttribute("data-strategies").split(",");
let links = '';
for (let i = 0; i < plans.length; i++) {
    if (plans[i].strategies) {
        let strats = plans[i].strategies;
        for (let j = 0; j < checkplans.length; j++) {
            if (strats.indexOf(checkplans[j]) !== -1) {
                links += '<li><a href="' + plans[i].website + '" target="_blank">' + plans[i].plan + '</a></li>';
                j = checkplans.length;
            }
        }
    }
}
programs.innerHTML = links;


// category click effect
var imps = document.querySelectorAll(".principle-toggle");
for (var x = 0; x < imps.length; x++) {
    imps[x].addEventListener("click", function() {
        document.querySelector(this.getAttribute("data-block")).classList.toggle("info-hidden");
        var chevron = this.querySelector(".right i");
        if (chevron.classList.contains("icon-up-open")) {
            chevron.classList.remove("icon-up-open");
            chevron.classList.add("icon-down-open");
        } else {
            chevron.classList.remove("icon-down-open");
            chevron.classList.add("icon-up-open");
        }
    });
}
