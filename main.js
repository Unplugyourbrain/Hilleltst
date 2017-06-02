window.onload = function() {
    var json = new Object();
    json.students = [];
    console.dir(json);
var names = ["name1", "name2", "name3", "name4", "name5", "name6" ,"name7" ,"name8" ,"name9" ,"name10"];
    var btn = document.createElement("button");
        btn.innerHTML = "gener";
        btn.addEventListener("click", createJson);

        function createJson(){
            for (i=0; i<names.length; i++){
                var k = Math.floor(Math.random() * (10 + 0));
                json.students[i] = {};
                json.students[i].name = names[k];
                json.students[i].age = Math.floor(Math.random() * (30 - 20 + 1) + 20);   
            }
        }
         document.body.appendChild(btn);
}
        
/*var json = `{
    "blocks": [
        {
            "name": "name1",
            "age": 22
        },
        {
            "name": "name2",
            "age": 56
        },
        {
            "name": "name3",
            "age": 24
        }
    ],
}`;
var data;
if (window.localStorage.info) {
    data = JSON.parse(window.localStorage.info);
} else {
    data = JSON.parse(json);
}


function renderTable() {
    if (document.querySelector(".mainTable")) {
        document.querySelector(".mainTable").remove();
    }
    var table = document.createElement("table");
    table.classList.add("mainTable");
    table.setAttribute("border", "1");
    var tr = document.createElement("tr");
    for (var item in data.blocks[0]) {
        var th = document.createElement("th");
        th.innerHTML = item;
        tr.appendChild(th);
    }

    table.appendChild(tr);

    for(var i = 0; i < data.blocks.length; i++) {
        var tr = document.createElement("tr");
        var objInner = data.blocks[i];
        for (var item in objInner) {
            var td = document.createElement("td");
            td.innerHTML = objInner[item];
            tr.appendChild(td);
        }
        var td = document.createElement("td");
        var btn = document.createElement("button");
        btn.innerHTML = "Remove";
        btn.addEventListener("click", deleteElement.bind(null, i));

        function deleteElement(position){
            data.blocks.splice(position, 1);
            renderTable();
        }
        td.appendChild(btn);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    document.body.appendChild(table);
    window.localStorage.info = JSON.stringify(data);
}

renderTable();



document.querySelector("#clearStorage").onclick = function() {
    window.localStorage.clear();
    location.reload();
}

*/
/* new conf*/ 
/*new commit test1*/ 
/*new commit2 test1 */