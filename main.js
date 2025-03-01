//date code
const dateContainer = document.getElementById('DateContainer');
const currentDate = new Date();
const formattedDate = currentDate.toDateString();
dateContainer.textContent = formattedDate;
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
            const now = new Date();
            const timeNow = now.toLocaleTimeString();
            p.innerText = `You have Complete The Task Add Dark Mode at ${timeNow}`;
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
            p.innerText = `You have Completed The Task Add pay success Modal at ${timeNow}`;
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

