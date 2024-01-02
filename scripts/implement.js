
// populate partners dropdowns
for (var i = 0; i < partners.length; i++) {
    var link = '<li><a href="' + partners[i].website + '" target="_blank">' + partners[i].partner + '</a></li>';
    if (partners[i].thinktanks) {
        var tanks = partners[i].thinktanks;
        for (var j = 0; j < tanks.length; j++) {
            var container = document.querySelector('[data-tank="' + tanks[j] + '"]');
            if (container) {
                container.innerHTML = container.innerHTML + link;
            }
        }
    }
}

// category click effect
var imps = document.querySelectorAll(".implement-toggle");
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
