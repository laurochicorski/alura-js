/**
 * Created by Lauro on 28/06/2016.
 */

var trs = document.getElementsByTagName("tr");

percorreArray(trs, function (tr) {
    tr.addEventListener("mouseover", function () {
        this.setAttribute("bgcolor", "grey");
    })
})