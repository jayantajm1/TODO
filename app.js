function newElement() {
    var li = document.createElement("li");
    var inputvalueitem = document.getElementById("myinput").value;
    var inputvaluedays = document.getElementById("days").value;
    var m = document.createTextNode(inputvalueitem);
    var d = document.createTextNode(inputvaluedays);

    li.append(d);
    li.append(" -> ");
    li.append(m);

    if(inputvalueitem === '') {
        alert("please write something here");
    }
    else {
        document.getElementById("myjm").appendChild(li);
    }

    document.getElementById("myinput").value = " ";
}
