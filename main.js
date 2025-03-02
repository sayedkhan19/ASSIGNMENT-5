//date code
const dateContainer = document.getElementById('DateContainer');
const currentDate = new Date();
const formattedDate = currentDate.toDateString();
dateContainer.textContent = formattedDate;
const mycontainer = document.getElementById('container');
 //btn1
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
            const now = new Date();
            const timeNow = now.toLocaleTimeString();
            p.innerText = `You have Complete The Task Fix Mobile Button Issue at ${timeNow}`;
            mycontainer.appendChild(p);
            const mybtn = document.getElementById('btn-1');
            mybtn.setAttribute('disabled', true);
            mybtn.classList.add('bg-blue-200', "text-gray-300");

        })

// btn-2
document.getElementById('btn-2')
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
            const now = new Date();
            const timeNow = now.toLocaleTimeString();
            p.innerText = `You have Completed The Task Add Add Dark Mode at ${timeNow}`;
            mycontainer.appendChild(p);
            const mybtn = document.getElementById('btn-2');
            mybtn.setAttribute('disabled', true);
            mybtn.classList.add('bg-blue-200', "text-gray-300");
})
//btn-3
document.getElementById('btn-3')
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
            const now = new Date();
            const timeNow = now.toLocaleTimeString();
            p.innerText = `You have Complete The Task Add Optimize  Home page at ${timeNow}`;
            mycontainer.appendChild(p);
            const mybtn = document.getElementById('btn-3');
            mybtn.setAttribute('disabled', true);
            mybtn.classList.add('bg-blue-200', "text-gray-300");
})
//btn-4
document.getElementById('btn-4')
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
            const now = new Date();
            const timeNow = now.toLocaleTimeString();
            p.innerText = `You have Complete The Task Add Add new emoji 🤲 at ${timeNow}`;
            mycontainer.appendChild(p);
            const mybtn = document.getElementById('btn-4');
            mybtn.setAttribute('disabled', true);
            mybtn.classList.add('bg-blue-200', "text-gray-300");
})

//btn-5
document.getElementById('btn-5')
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
            const now = new Date();
            const timeNow = now.toLocaleTimeString(); 
            p.innerText = `You have Complete The Task Add Integrate OpenAI API at ${timeNow}`;
            mycontainer.appendChild(p);
            const mybtn = document.getElementById('btn-5');
            mybtn.setAttribute('disabled', true);
            mybtn.classList.add('bg-blue-200', "text-gray-300");
})

//btn-6
document.getElementById('btn-6')
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
            const now = new Date();
            const timeNow = now.toLocaleTimeString();
            p.innerText = `You have Complete The Task Add Improve Job searching at ${timeNow}`;
            mycontainer.appendChild(p);
            const mybtn = document.getElementById('btn-6');
            mybtn.setAttribute('disabled', true);
            mybtn.classList.add('bg-blue-200', "text-gray-300");
            alert('Congratulation !! you have completed all task');
})
//btn-clear-history
document.getElementById('btn-clear-history')
.addEventListener('click', function(event){
    mycontainer.innerHTML = "";
})

// /new page
document.getElementById("new-page")
.addEventListener('click', function(){
    window.location.href = "secondFile.html";
})

// body color chnage
const colors = ['#e5051b', '#f6e06a', '#f1a432', '#a9b724', '#458a92', '#aa0c90', '#301196d'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
let button = document.getElementById('chnage-bg');
button.addEventListener('click', function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const color = randomColor;
    document.body.style.backgroundColor = `${color}`;
});
