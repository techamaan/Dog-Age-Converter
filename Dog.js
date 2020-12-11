function convert() {
		
		var a=document.getElementById('final').value;

  		if(a>0 && a<=21)
		{

			a=a/10.5;
			b1=parseInt(a);
			b3=a-b1;
			b4=b3*12;
			console.log(Math.floor(b4));
			document.getElementById('final2').value=b1;
			document.getElementById('final3').value=Math.floor(b4);
		
		}
		else 
		{
		
		a=a-21;
		b=a/4;
		b1=parseInt(b);
		b3=b-b1;
		b4=b3*12;
		b1=b1+2;
		
		
		document.getElementById('final2').value=b1;
		document.getElementById('final3').value=Math.floor(b4);
		}	
	}