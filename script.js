let status=[false,false,false,false];//currently show questions only

let qns=document.querySelectorAll(".q");
Array.from(qns).forEach((q)=>{

  //click event handle
    q.addEventListener("click",()=>{
        let plus=q.querySelector("#plus");
        let minus=q.querySelector("#minus");
        let p=q.querySelector("p");
        let id=p.getAttribute("id");

      if(plus.style.display=="none"){
        plus.style.display="inline";
        minus.style.display="none";
        hideAns(id);
      }
      else{
        plus.style.display="none";
        minus.style.display="inline";
        showAns(id);
      }
    });

    //hover event handle
    q.addEventListener("mouseover",()=>{
        q.style.color="hsl(293, 58.90%, 50.40%)";
    });
    q.addEventListener("mouseout",()=>{
        q.style.color="black";
    })
})

function showAns(id){
  if(id=="q1"){
    let ans1=document.querySelector(".a1");
    ans1.style.display="block";
  }
  if(id=="q2"){
    let ans1=document.querySelector(".a2");
    ans1.style.display="block";
  }
  if(id=="q3"){
    let ans1=document.querySelector(".a3");
    ans1.style.display="block";
  }
  if(id=="q4"){
    let ans1=document.querySelector(".a4");
    ans1.style.display="block";
  }
}

function hideAns(id){
  if(id=="q1"){
    let ans1=document.querySelector(".a1");
    ans1.style.display="none";
  }
  if(id=="q2"){
    let ans1=document.querySelector(".a2");
    ans1.style.display="none";
  }
  if(id=="q3"){
    let ans1=document.querySelector(".a3");
    ans1.style.display="none";
  }
  if(id=="q4"){
    let ans1=document.querySelector(".a4");
    ans1.style.display="none";
  }
}