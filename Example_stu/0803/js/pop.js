function openPop(){
    var newWin=window.open("popup.html","","width=400,height=400");
    if(newWin==null){
        alert("팝업이 차단되어 있습니다. 차단을 해제하고 새로고침을 하세요.");
    }
}

window.onload=openPop;