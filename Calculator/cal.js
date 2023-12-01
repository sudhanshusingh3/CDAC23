console.log("hello")
function append(val){
    //console.log(val)
    document.getElementById('output').value+=val
    console.log(document.getElementById('output').value)
}


function calculate(){
    var val=document.getElementById('output').value
        var i=0
    var sum=""
   while(i<val.length){
if(val[i]!='+'&&val[i]!='-'&&val[i]!='X'&&val[i]!='/'){

    sum+=val[i]
    sum=parseInt(sum)
    console.log("if sum:"+typeof(sum))
    i++
}
else{
    if(val[i]=='+'){
        i++
        sum=parseInt(sum)
        console.log("else sum:"+typeof(sum))
        var num=parseInt(val[i])
        console.log("else val[i]:"+typeof(num))
        sum=sum+num
        i++
    }
    if(val[i]=='-'){
        i++
        sum=parseInt(sum)
        console.log("else sum:"+typeof(sum))
        var num=parseInt(val[i])
        console.log("else val[i]:"+typeof(num))
        sum=sum-num
        i++
    }
    if(val[i]=='/'){
        i++
        sum=parseInt(sum)
        console.log("else sum:"+typeof(sum))
        var num=parseInt(val[i])
        console.log("else val[i]:"+typeof(num))
        sum=sum/num
        i++
    }
    if(val[i]=='X'){
        i++
        sum=parseInt(sum)
        console.log("else sum:"+typeof(sum))
        var num=parseInt(val[i])
        console.log("else val[i]:"+typeof(num))
        sum=sum*num
        i++
    }
}
    

}
    //let result = eval(catchval)
    let result=sum
    document.getElementById("output").value = result
}
function clr(){
    document.getElementById("output").value = ""
}