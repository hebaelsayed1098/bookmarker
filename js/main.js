var siteNameInput = document.getElementById("siteNameInput");
var siteURLInput = document.getElementById("siteURLInput");
var tableBody = document.getElementById('tbody');
var sites  ;
if(localStorage.getItem('MySiteList')){
  sites = JSON.parse(localStorage.getItem('MySiteList'));
  displaySites(sites);
}
else{
  sites =[];
}
function addSite() {
  var site = {
    siteName: siteNameInput.value,
    siteURL: siteURLInput.value
  };
  sites.push(site);
  console.log(sites);
  localStorage.setItem('MySiteList' , JSON.stringify(sites))
  clearForm();
  displaySites(sites);
  console.log(sites);
}
function clearForm(){
  siteNameInput.value='';
  siteURLInput.value='';
}
function displaySites(arr){
  var cartona  = ``
for(var i=0 ; i<arr.length ; i++){
  console.log(arr[i].siteName);
  console.log(arr[i].siteURL);
  var index = i ;
cartona+=`<tr>
<td>${index+1}</td>
<td>${arr[i].siteName}</td>
<td><button onclick="visit('${arr[i].siteURL}')" class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
<td><button onclick="deleteSite('${i}')" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
</tr>`
}
tableBody.innerHTML= cartona;
}
function deleteSite(deletedIndex){
  sites.splice(deletedIndex,1);
  console.log(sites);
  localStorage.setItem('MySiteList' , JSON.stringify(sites));
  displaySites(sites);
}
function visit(link){
  window.open(link);
}
localStorage.clear()