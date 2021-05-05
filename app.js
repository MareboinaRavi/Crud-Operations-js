var myUname= localStorage.getItem('username').toUpperCase();
document.getElementById('nameId').innerText= myUname;

var arr=[];

function small() {
    window.history.back();
}
function empty(){
    let n = localStorage.getItem('username');
    if(n=="anvesh"){
        localStorage.removeItem('anvesh');
        window.location.reload();
    }
    if(n=="ravi"){
        localStorage.removeItem('ravi');
        window.location.reload();
    }
    if(n=="sravan"){
        localStorage.removeItem('sravan');
        window.location.reload();
    }
    if(n=="monica"){
        localStorage.removeItem('monica');
        window.location.reload();
    }
    
}

setInterval(function timeFun() {
        let presentTime =  new Date();
        let logIn = localStorage.getItem('logTime');
        var diff = (presentTime.getTime() - logIn);
        var seconds = diff / 1000;
        var sec = parseInt(seconds);
        if(sec>=60){
            sec= sec % 60;
        }
        var minutes = seconds / 60;
        var min = parseInt(minutes);
        if(min>=60){
            min= min%60;
        }
        var hours = minutes / 60;
        var hr = parseInt(hours);
        document.getElementById("time").innerHTML = hr +" : "+min+" : "+sec;
    },10);

function loadFun() {
    let n = myUname.toLowerCase();
    if(n=="anvesh"){
        if (localStorage.anvesh) {
            let arr = JSON.parse(localStorage.anvesh);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == null) {
                    continue;
                }
                else{
                    table(arr[i].fullName,arr[i].age,arr[i].gen,arr[i].pno);
                }
            }
        }
    }
    if(n=="ravi"){
        if (localStorage.ravi) {
            let arr = JSON.parse(localStorage.ravi);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == null) {
                    continue;
                }
                else{
                    table(arr[i].fullName,arr[i].age,arr[i].gen,arr[i].pno);
                }
            }
        }
    }   
    if(n=="monica"){
        if (localStorage.monica) {
            let arr = JSON.parse(localStorage.monica);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == null) {
                    continue;
                }
                else{
                    table(arr[i].fullName,arr[i].age,arr[i].gen,arr[i].pno);
                }
            }
        }
    }   
    if(n=="sravan"){
        if (localStorage.sravan) {
            let arr = JSON.parse(localStorage.sravan);
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == null) {
                    continue;
                }
                else{
                    table(arr[i].fullName,arr[i].age,arr[i].gen,arr[i].pno);
                }
            }
        }
    }       
}


function fun() {
    let fullName = prompt("Enter Full-Name:");
    while(fullName=="" || Number(fullName) > 0) {
        fullName = prompt("Please,Enter Full-Name Correctly :");
    }
    let age = Number(prompt("Enter Age:"));
    while (age =="" || isNaN(age) || age > 100) {
        age = prompt("Enter Age Correctly:");
    }
    let gen = prompt("Enter Gender :","Male(M) / Female(F) / Others(O)");
    while (gen =="" || gen.toLowerCase()!="f" && gen.toLowerCase()!="m" && gen.toLowerCase()!="o" && gen.toLowerCase()!="female" && gen.toLowerCase()!="male" && gen.toLowerCase()!="others") {
        gen = prompt("Enter Gender :","Male(M) / Female(F) / Others(O)");
    }
    let pno = Number(prompt("Enter Phone Number:"));
    while(isNaN(pno) || pno.toString().length != 10) {
        pno = Number(prompt("Please Re-enter Phone Number:"));
    }
    
    const obj = {};
    obj['fullName']=fullName;
    obj['age'] = age;
    obj['gen']= gen; 
    obj['pno'] = pno;
    arr.push(obj);
    localStorage.setItem(myUname.toLowerCase(), JSON.stringify(arr));
    table(fullName,age,gen,pno);
}

function table(fullName,age,gen,pno) {
    var tbl = document.getElementById("myTable");
    var row = tbl.insertRow();
    var fullNamecell = row.insertCell(0);
    var agecell = row.insertCell(1);
    var newgencell = row.insertCell(2);
    var pnocell = row.insertCell(3);
    var mod = row.insertCell(4);

    fullNamecell.innerHTML = fullName;
    agecell.innerHTML = age;
    newgencell.innerHTML = gen;
    pnocell.innerHTML = pno;
    mod.innerHTML = `<a class="editcss" onClick="onEdit(this)">Edit</a> <br>
    <a class="delcss" onClick="onDelete(this)">Delete</a>`;;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    let fullName = prompt("Enter Full-Name:",selectedRow.cells[0].innerHTML.toString());
    while(fullName=="" || Number(fullName) > 0) {
        fullName = prompt("Please,Enter Full-Name Correctly :");
    }
    let age = Number(prompt("Enter Age:",selectedRow.cells[1].innerHTML.toString()));
    while (age =="" || isNaN(age) || age > 100) {
        age = prompt("Enter Age Correctly:");
    }
    let gen = prompt("Enter Gender :","Male(M) / Female(F) / Others(O)",selectedRow.cells[2].innerHTML.toString());
    while (gen =="" || gen.toLowerCase()!="f" && gen.toLowerCase()!="m" && gen.toLowerCase()!="o" && gen.toLowerCase()!="female" && gen.toLowerCase()!="male" && gen.toLowerCase()!="others") {
        gen = prompt("Enter Gender :","Male(M) / Female(F) / Others(O)");
    }
    let pno = Number(prompt("Enter Phone Number:",selectedRow.cells[3].innerHTML.toString()));
    while(isNaN(pno) || pno.toString().length != 10) {
        pno = Number(prompt("Please Re-enter Phone Number:"));
    }
    // document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
    const obj = {};
    obj['fullName']=fullName;
    obj['age'] = age;
    obj['gen']= gen; 
    obj['pno'] = pno;
    let n = localStorage.getItem('username');
    if(n=="ravi"){
        if (localStorage.ravi) {
            arr = JSON.parse(localStorage.ravi);
            arr[selectedRow.rowIndex-1] = obj;
            localStorage.setItem("ravi", JSON.stringify(arr));
            window.location.reload();
        }
    }
    if(n=="anvesh"){
        if (localStorage.anvesh) {
            arr = JSON.parse(localStorage.anvesh);
            arr[selectedRow.rowIndex-1] = obj;
            localStorage.setItem("anvesh", JSON.stringify(arr));
            window.location.reload();
        }
    }  
    if(n=="sravan"){
        if (localStorage.sravan) {
            arr = JSON.parse(localStorage.sravan);
            arr[selectedRow.rowIndex-1] = obj;
            localStorage.setItem("sravan", JSON.stringify(arr));
            window.location.reload();
        }
    }  
    if(n=="monica"){
        if (localStorage.monica) {
            arr = JSON.parse(localStorage.monica);
            arr[selectedRow.rowIndex-1] = obj;
            localStorage.setItem("monica", JSON.stringify(arr));
            window.location.reload();
        }
    }     
    localStorage.setItem(myUname.toLowerCase(), JSON.stringify(arr));
    table(fullName,age,gen,pno);
}


function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        var index = row.rowIndex;
        document.getElementById("myTable").deleteRow(index);
        let n = localStorage.getItem('username');
        if(n=="ravi"){
            if (localStorage.ravi) {
                let arr = JSON.parse(localStorage.getItem("ravi"));
                arr[index-1] = null;
                localStorage.setItem("ravi", JSON.stringify(arr));
                window.location.reload();
            }
        }   
        else if(n=="monica"){
            if (localStorage.monica) {
                let arr = JSON.parse(localStorage.getItem("monica"));
                arr[index-1] = null;
                localStorage.setItem("monica", JSON.stringify(arr));
                window.location.reload();
            }
        }   
        else if(n=="sravan"){
            if (localStorage.sravan) {
                let arr = JSON.parse(localStorage.getItem("sravan"));
                arr[index-1] = null;
                localStorage.setItem("sravan", JSON.stringify(arr));
                window.location.reload();
            }
        }
        else{
            if (localStorage.anvesh) {
                let arr = JSON.parse(localStorage.getItem("anvesh"));
                arr[index-1] = null;
                localStorage.setItem("anvesh", JSON.stringify(arr));
                window.location.reload();
            }
        }  
    }
}