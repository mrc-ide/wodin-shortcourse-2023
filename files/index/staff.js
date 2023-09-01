$(function() {
    $(".password-page").hide();
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }

    if (vars["staff"] === "true") {
        $(".main").hide();
        $(".password-page").show();
    }

    $(".password-button").click(function() {
        if ($(".password-input").val() === "odinisthebest") {
            $(".main").show();
            $(".password-page").hide();
            $(".show-after").each(function(index) {
                $(this).show()
            });
        }
    });
});
