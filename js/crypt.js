function mySubmitFunction(e) {
    e.preventDefault();
    var output = rot13();
    document.getElementById("output").value = output
    return false;
}

function rot13(text){
    var ms = document.getElementById("msg").value;
    var msg = ms.toUpperCase();
    //var msg = ms
    var outputMsg = "";
    var a="A"
    var tmp="";
    if(msg !== null){
        for(i=0;i<msg.length;i++){
            if(msg.charAt(i)<'A' || msg.charAt(i)>'Z'){
                outputMsg += msg.charAt(i);
            }else{
                tmp = msg.charCodeAt(i) - 64;
                sum = (1 + (tmp - 1 + 13)) % 26;
                if(sum == 0) sum = 26;
                outputMsg += String.fromCharCode(sum+64);
            }
        }
    }
    return outputMsg;
}

function copyToclipboard(){
    var text = document.getElementById("output");
    text.select();
    document.execCommand("copy");
}