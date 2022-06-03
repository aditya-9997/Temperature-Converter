const calculateTemp =()=>{
    const numberTemp=document.getElementById('temp').value;
    //console.log(numberTemp);

    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;

    const celTOFah=(cel)=>{
        let Fahrenheit= Math.round((cel*9/5)+32);
        return Fahrenheit

    }

    const FahTOcel=(fehr)=>{
        let Celcius= Math.round((fehr-32)*5/9);
        return Celcius;

    }
    
    
    let result;  
    if(valueTemp=='cel'){
        result=celTOFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} Fahrenheit`
    }else{
        result=FahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} Celcius`

    }

}