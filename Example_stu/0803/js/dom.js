// 작은 이미지를 클릭하면, 해당 작은 이미지가 큰 이미지가 되도록 기능 유도.
// 큰이미지의 태그를 변수에 저장.
var bigPic=document.querySelector("#cup");
// 작은 이미지가 있는 태그
var smallPic=document.querySelectorAll(".small");

// for문을 통해서 작은 이미지의 배열의 각각의 요소 모두에 onclick 이벤트 추가한다.
for(var i=0;i<smallPic.length;i++){
   smallPic[i].onclick=changePic;
}

function changePic(){
    // newPic에 현재 클릭한 src 속성을 저장
    var newPic=this.src;
    // bigPic에 newPic 값을 src속성으로 저장
    bigPic.setAttribute("src",newPic);
}

var isOpen=false;
var view=document.querySelector("#view");
view.addEventListener("click",function(){
    if(isOpen==false){
        document.querySelector("#detail").style.display="block";
        view.innerText="상세 설명 닫기";
        isOpen=true;
    }else{
        document.querySelector("#detail").style.display="none";
        view.innerText="상세 설명 보기";
        isOpen=false;
    }
});
