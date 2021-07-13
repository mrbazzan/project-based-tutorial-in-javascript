
let customer_name = document.getElementById('customname');
const button = document.querySelector('.randomize');
let story = document.querySelector('.story');

let uk = document.getElementById('uk');

let insertx = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
]

let inserty = [
    "the soup kitchen",
    "Disneyland",
    "the White House",
]

let insertz = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
]


function randomArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}



button.onclick = function(){

    let weight;
    let temp;
    if (uk.checked){
        temp = Math.floor(((94-32)*5)/9) + ' centigrade';
        weight = Math.floor(300/14) + ' stones';
    }

    const randomStory = `It was ${temp || '94 fahrenheit'} outside, 
        so ${randomArray(insertx)} went for a walk. 
        When they got to ${randomArray(inserty)}, 
        they stared in horror for a few moments, 
        then ${randomArray(insertz)}. 
        ${customer_name.value || 'Bob'} saw the whole thing, 
        but was not surprised
            — ${randomArray(insertx)} weighs ${weight || '300 pounds'}, 
            and it was a hot day.",`
    
    story.textContent = randomStory;
    story.style.visibility = 'visible';

    
}
