window.onload (function sendInfo() {
    $.ajax(
        {
            url:"http://www.mocky.io/v2/5c5ba6e9390000ac14e0574c",
            type:"GET",
            dataType:'json',
            success:function (jsonlist) {
                showData(jsonlist);
            }
        }
    )
});
function showData(jsonlist) {
    var str="";
    str="<tr><td>"+jsonlist[0].hello+"</td></tr>"
        $("#tab").append(str);
}