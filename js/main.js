function kimOldinda(Ali,Bobur) {
    var aliOldinda=0;
    var boburOldinda=0;
    var result=[];
    for (var i=0;i<3;i++){
        if (Ali[i]>Bobur[i]){
            aliOldinda++;
        }else if(Ali[i]<Bobur[i]){
            boburOldinda++;
        }
    }
    result.push(aliOldinda);
    result.push(boburOldinda);
    return result;
}
var form = document.getElementById('form')
var a = [];
var b = [];
form.addEventListener('submit', function(event){
    event.preventDefault();
    if(document.getElementById('ismlar').value == 'Ali'){
        a.push(document.getElementById('uzunlik').value, document.getElementById('aniqlik').value, document.getElementById('kuch').value);
    } else{
        b.push(document.getElementById('uzunlik').value, document.getElementById('aniqlik').value, document.getElementById('kuch').value);
    }
    document.getElementById('uzunlik').value = '';
    document.getElementById('aniqlik').value = '';
    document.getElementById('kuch').value = '';
    // console.log(kimOldinda(a,b))
    if(a.length != 0 && b.length != 0){
        document.getElementById('ali').textContent = 'Alining bali ' + kimOldinda(a,b)[0];
        document.getElementById('bobur').textContent ='Boburning bali ' + kimOldinda(a,b)[1];
    }
})
