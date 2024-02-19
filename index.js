const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');

/* above we simply selected two elements */


function addTask(){ /* this function is associated with add button*/
    if(inputBox.value === ""){ /* it says if the box is empty alert */
        alert('Input box is empty')
    }
        else{/* Otherwise, create an element */
            let li = document.createElement('li');
            li.innerHTML = inputBox.value; /* Be the value of that element === value of inputBox */
            listContainer.appendChild(li); /* finally append it with th parent element  which is ul*/
            let span = document.createElement('span'); /* we simply created a span within li element */
            span.innerHTML = '\u00d7'; /* This code is for "cross" and is added next to the content of li*/
            li.appendChild(span); /* as li is parent to span, we append it to the li*/
        }
        inputBox.value = '';  /* once the user puts data into the input and clicks on button, empty the input*/
        saveData();
    }

/*Once I will click on li, the toggle helps in activating of ".check" class and the latter image is invoked  */
    listContainer.addEventListener('click', function(e){ /* added an event listener to the list*/
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === 'SPAN'){  
            e.target.parentElement.remove();/* if clicked on span element, remove parent(which is li) */
            saveData();
        }

    },false);


    /* for local storage*/

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);

    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }
    showTask();