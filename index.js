showdata();
console.log("hello stay happy!");

let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    console.log("this is worked out");
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let contact=document.getElementById("contact");
    let product=document.getElementById("product");
    let services=document.getElementById("services");
    let others=document.getElementById("others");
    let data= localStorage.getItem("data");
    if(data==null){
        dataobj=[];
    }else{
        dataobj=JSON.parse(data);
    }
    let myobj = {
        name: name.value,
        email: email.value,
        contact:contact.value,
        product:product.value,
        services:services.value,
        others:others.value
    }
    dataobj.push(myobj);
    localStorage.setItem("data", JSON.stringify(dataobj));
    name.value = "";
    email.value = "";
    contact.value="";
    product.value="";
    services.value="";
    others.value="";    
    showdata();
})

function showdata() {
    let data = localStorage.getItem("data");
    if (data == null) {
        dataobj = [];
    }
    else {
        dataobj = JSON.parse(data);
    }
    let html = "";
    dataobj.forEach(function (element) {
        html += `
        <tr>
        <td>${element}</td>
        <td>${element}</td>
        <td>${element}</td>
        <td>${element}</td>
        <td>${element}</td>
        <td>${element}</td>
      </tr>
      </tbody>
      </table>
        `

    });
    }