document.body.onkeyup = function(e){
    if (e.keyCode == "13") {
        console.log("enter pressed");
        newTask();
    } else console.log("dont care");
};

function newTask(){
    console.log("Inside new task");
    var task = document.getElementById("input").value;
    console.log(task);
    var ol = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ol.appendChild(li);
    var task = null;
    document.getElementById("input").value ="";
    // li.onclick = removeItem;
    li.addEventListener("click", movetocompletedItem);
    li.addEventListener("click",removeItem);
    
};

    var li = document.getElementById("li");
    li.addEventListener("click", movetodemoItem);
    li.addEventListener("click",removeItem);
    
    function movetocompletedItem(e){
        var compol = document.getElementById("completed");
        var compli = document.createElement("li")
        compli.appendChild(document.createTextNode(e.target.innerHTML));
        compol.appendChild(compli);
        console.dir(e.target);
    };

    function movetodemoItem(e){
        var compol = document.getElementById("completed");
        var compli = document.createElement("li")
        e.target.innerHTML = "Demo Task completed"
        compli.appendChild(document.createTextNode(e.target.innerHTML));
        compol.appendChild(compli);
        // console.dir(e.target);
    };

    function removeItem(e){
    e.target.remove();
};

// dakr mode

document.body.onkeydown = function(e){
    if (e.keyCode == "16"){
     document.body.classList.toggle("darkmode"); 
     var heading = document.getElementById("light1");
     heading.classList.toggle("light");
     var heading = document.getElementById("light2");
     heading.classList.toggle("light");
     if ( heading.innerHTML =="Press shift to be the dark knight!"){
        heading.innerHTML="Press shift to be the green lantern!";
    } else if (heading.innerHTML=="Press shift to be the green lantern!" ){
        heading.innerHTML="Press shift to be the dark knight!"
    }
    }
}

// 1. doubt can we use eventlistener - used worked
// 2. if we are defining li.onclick inside of newTask function and it is being triggered when
//    enter is Pressed, how come we can remove the item without pressing enter too. shouldn't removing item be defined outside of 
//    newTask scope. 