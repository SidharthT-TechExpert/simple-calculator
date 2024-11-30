function buttonClick(val){
    document.getElementById("screen").value+=val   
}

function screenClear(){
    document.getElementById("screen").value=""
}

function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}