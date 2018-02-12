function LangPageUpdate()
{

	
	var e = document.getElementById("sellag").value; 
	window.alert('Activated');
	if(e == 'RUS'){
			window.open("../../│ru/form/");
	}else
		if(e == 'LVA'){
			window.open("../../│lv/form/");
		}
		else{ 
				window.open("../../│en/form/");
			}
}