const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


let storyTemplates = [
    'It was 94 fahrenheit outside, so :insertx: went for a walk. ' +
    'When they got to :inserty:, they saw :customname: standing there. ' +
    'Without warning, :insertx: :insertz:. Everyone was shocked, ' +
    'but :customname: just laughed.',

    ':customname: woke up one morning to find :insertx: in their kitchen, ' +
    'trying to make pancakes out of clouds. They both decided to go to :inserty: instead, ' +
    'where :insertx: suddenly :insertz:. It was the best Tuesday ever.',

    'During the annual cheese parade at :inserty:, :insertx: spotted :customname:. ' +
    'They locked eyes, and then without hesitation, :insertx: :insertz:. ' +
    'The crowd cheered like it was a rock concert.',

    'On a quiet Sunday, :customname: heard strange noises coming from :inserty:. ' +
    'It turned out to be :insertx:, who was there to announce that they had just :insertz:. ' +
    'Naturally, everyone offered them cupcakes.'
];

let insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas',
    'Sir Fluffington the Brave',
    'Professor Pickle',
    'Captain Biscuit'
];

let insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House',
    'a floating castle',
    'the underwater disco',
    'the secret donut laboratory'
];

let insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away',
    'started moonwalking and never stopped',
    'sang opera so loudly that windows shattered',
    'turned into a giant marshmallow'
];

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


randomize.addEventListener('click', result);

function result() {
    let newStory = randomValueFromArray(storyTemplates);


    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);


    let name = customName.value.trim();
    if (name === '') {
        name = 'Bob';
    }
    newStory = newStory.replace(/:customname:/g, name);


    story.textContent = newStory;
    story.style.display = 'block';
}