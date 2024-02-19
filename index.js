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
        saveData();/* This is used here as I am storing the data when certain actions on done with these elements*/
    }

/*Once I will click on li, the toggle helps in activating of ".check" class and the latter image is invoked  */
    listContainer.addEventListener('click', function(e){ /* added an event listener to the list*/
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle("checked");
            saveData();/* This is used here as I am storing the data when certain actions on done with these elements*/
        }
        else if(e.target.tagName === 'SPAN'){  
            e.target.parentElement.remove();/* if clicked on span element, remove parent(which is li) */
            saveData();/* This is used here as I am storing the data when certain actions on done with these elements*/
        }

    },false);


    /* for local storage*/

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML); /* Here I am creating a function and adding local storage*/

        /* I am using method setItem and collecting the data of listContainer*/

    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");

        /* here I am fetching the data from localStorage using method getItem*/
    }
    showTask();