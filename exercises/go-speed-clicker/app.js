var count;
$("#box").click(function () {
    count = get();
    count++;
    $("span").text(`Clicks: ${Number(count)}`);
    store(count);
});

function get(){
    count = 0;
count = localStorage.getItem("count",count);
    return count;
}

function store(count){
localStorage.setItem("count",count);
}
