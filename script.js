document.getElementById("submit").addEventListener("click", function() {

    const macadresa = document.getElementById("macadresa").value.toUpperCase();
    const regex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    if (regex.test(macadresa)) {
        var e = document.getElementById("opcije");
        var url = "";
        if (e.options[e.selectedIndex].value == "vibracije") {
            url = "https://crowdsensing.elab.fon.bg.ac.rs/controller.php?action=vratiMacVib&mac=" + macadresa;
        } else if (e.options[e.selectedIndex].value == "buka") {
            url = "https://crowdsensing.elab.fon.bg.ac.rs/controller.php?action=vratiMac&mac=" + macadresa;
        } else {
            console.log("Opcija nije odabrana");
        }
        $.getJSON(url, function(data) {
            document.getElementById("brojmerenja").value = data.length;
            document.getElementById("lblbrojmerenja").hidden = false;
            document.getElementById("brojmerenja").hidden = false;
        });
    } else {
        alert("Uneta mac adresa nije validna");
        location.reload();
    }

});
