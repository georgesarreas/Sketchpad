//populate the container\
function createGrid(x) {
    x=16;
    for (var rows=0; rows <x ; rows++){
        for (var columns = 0; columns <x ; columns++){
            $(".container").append("<div class="grid"></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
}

