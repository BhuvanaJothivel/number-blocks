console.log(button);
var i;
var j;
let k=0;
let t=0;
var x = new Array();
var colors = new Array();

function myFunction(){

    console.log(k);
    document.getElementById('demo').innerHTML = "";
    var num = document.getElementById("text").value;
    
    colors[t] = document.getElementById("myColor").value;
    console.log(colors);
    for(i=1;i<=num;i++) {
        x.push(i);
        console.log(x);
    }
    
    for(j=0;j<x.length;j++) {
        var temp = 'para'+k;
        if(x[j]<10)
            document.getElementById('demo').innerHTML +="<label id = '"+temp+"' style = 'color: black ; box-shadow: 0px 4px 4px white; border-radius: 15%;  background: "+colors[t]+"'>0" + x[j] +"</label>"+"  ";
        else
            document.getElementById('demo').innerHTML +="<label id = '"+temp+"' style = 'color: black ; box-shadow: 0px 4px 4px white; border-radius: 15%;  background: "+colors[t]+"'>" + x[j] +"</label>"+"  ";
        console.log(temp);
    }

    k++;
    t++;

}
