
// const select = document.querySelector('select');
// const list = document.querySelector('ul');
// const h1 = document.querySelector('h1');

// select.onchange = function() {
//   const choice = select.value;
   
//   let days;
//   // ADD CONDITIONAL HERE
//   if ((choice === 'September') || (choice === 'April') || (choice === 'June') || (choice === 'November')){
//     days = 30;
//   }else if(choice == 'February'){
//     days = 28;
//   }else {
//     days = 31;
//   }
//   createCalendar(days, choice);
// }

// function createCalendar(days, choice) {
//   list.innerHTML = '';
//   h1.textContent = choice;
//   for (let i = 1; i <= days; i++) {
//     const listItem = document.createElement('li');
//     listItem.textContent = i;
//     list.appendChild(listItem);
//   }
// }

// createCalendar(31,'January');

const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;
  switch(choice){
    case 'white':
      // alert('white');
      update('green', choice);
      break;
    case 'black':
      update('white', choice);
      break;
    case 'purple':
      update('grey', choice);
      break;
    case 'yellow':
      update('black', choice);
      break;
    case 'psychedelic':
      update('red', choice);
      break;
  }
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}