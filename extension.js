const buttonEl=document.getElementById("inputbtn");
let myLead=[];
let myLocal=JSON.parse(localStorage.getItem("myLead"));
const inputEl=document.getElementById("inputEl");
const ulEl=document.getElementById("list");
const delbt=document.getElementById("delete");
const tab=document.getElementById("savetab");

buttonEl.addEventListener("click" ,function(){
    myLead.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLead",JSON.stringify(myLead));
    renderlist(myLead);
});
tab.addEventListener("click",function(){
   myLead.push(window.location.href);
   localStorage.setItem("myLead",JSON.stringify(myLead));
   renderlist(myLead);
})
delbt.addEventListener("dblclick",function(){
    localStorage.clear();
    myLocal=null;
    myLead=[];
    renderlist(myLead);
})
if(myLocal)
{
    myLead=myLocal;
    renderlist(myLead);
}
function renderlist(Lead)
{
    let listitem="";
    for(let i=0;i<Lead.length;i++)
    {
    listitem+=`<li>
                   <a href="${Lead[i]}"target='_blank'>${Lead[i]}</a>
                </li>`;
    }
   ulEl.innerHTML=listitem;
}
