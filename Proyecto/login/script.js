const menuToggle= document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
menuToggle.onclick= function(){
    navigation.classList.toggle('open')
}
const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=>
    item.classList.remove('active'))
    this.classList.add('active') 
}
list.forEach((item)=>
item.addEventListener('click',activarLink)
)
function myFunction(){
    var input,filte,table,tr,td,i,txtValue;
    input=document.getElementById("myInput");
    filte=input.Value.toUpperCase();
    table=document.getElementById("myTable");
    tr=table.getElementsByTagName("tr");

    for(i = 0; i < tr.length; i++){
        td= tr[i].getElementsByTagName("td")[0];
        if (td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1)
            {
                tr[i].style.display="";
            }else{
                trt[i].style.display="none";
            }
        }        
    }
}
