
let thePlans = '';

for (let i = 0; i < plans.length; i++) {
    thePlans += '<li><a href="' + plans[i].website + '" target="_blank">' + plans[i].plan + '</a></li>';
}
document.querySelector(".programs ul").innerHTML = thePlans;

let thePartners = '';
for (let i = 0; i < partners.length; i++) {
    thePartners += '<li><a href="' + partners[i].website + '" target="_blank">' + partners[i].partner + '</a></li>';
}
document.querySelector(".partners ul").innerHTML = thePartners;
