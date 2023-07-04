const tablink=document.getElementsByClassName('tab_title');
const content=document.getElementsByClassName('tab');
function opentab(tabcontent){
    for(i =0;i<tablink.length;i++){
        tablink[i].classList.remove('active');
    }
    for(i =0;i<content.length;i++){
        content[i].classList.remove('active__tab');
    }
    event.currentTarget.classList.add('active');
    const activeTab=document.getElementById(tabcontent);
    activeTab.classList.add('active__tab');
}
const list = document.querySelector('.list');
    const toggleButton=document.getElementsByClassName('toggle__button');
const titleName= document.getElementById('title__Name')
 function adafunction(){
  list.classList.toggle('clicked__list');
  titleName.classList.toggle('clicked__h4');
};
