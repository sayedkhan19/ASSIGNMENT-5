//date code
const dateContainer = document.getElementById('DateContainer');
const currentDate = new Date();
const formattedDate = currentDate.toDateString();
dateContainer.textContent = formattedDate;
// time
const now = new Date();
const timeNow = now.toLocaleTimeString();
//button click add and minus 

const mycontainer = document.getElementById('container');
 
document.getElementById('btn-1')
.addEventListener('click', function(event){
    alert("Board update succssefully");
    
   const Number =  document.getElementById('number-6').innerText;
   const number =parseInt(Number);

   const secondNum = document.getElementById('num-23').innerText;
   const second = parseInt(secondNum);

    event.target;
    const num = number - 1;
    document.getElementById('number-6').innerText = num;
    // second num add
    const add = second + 1;
    document.getElementById('num-23').innerText = add;
    const p  = document.createElement('p');
            p.classList.add("bg-[#F4F7FF]", "py-2", "rounded-md","px-2");
            p.innerText = `You have Complete The Task Add Dark Mode at ${timeNow}`;
            mycontainer.appendChild(p);
            const mybtn = document.getElementById('btn-1');
            mybtn.setAttribute('disabled', true);
            mybtn.classList.add('bg-blue-200', "text-gray-300");

            
    
    // disable
     // document.getElementById("btn-1").disabled = true;
    // button.classList.add("blurred");


})

//btn-clear-history
document.getElementById('btn-clear-history')
.addEventListener('click', function(event){
    mycontainer.innerHTML = "";
})
