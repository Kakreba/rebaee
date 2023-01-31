
// search code 
const search = () =>{
	const searchbox = document.getElementById(".searchbar-backdrop").value.toUpperCase();
	const storeitems = document.getElementById(".apps")
	const product = document.querySelectorAll(".app-file")
	const pname = document.getElementsByTagName(".text5")


for(var i=0; i < pname.length; i++){
	let match = product[i].getElementsByTagName('.text5')[0];

	if(match){
	  let textvalue = match.textContent || match.innerHTML
	
	if(textvalue.toUpperCase().indexOf(searchbox) > -1){
	product[i].style.display = "";
	 }else{
	 product[i].style.display = "none";
	 }
	}
  }
 }
