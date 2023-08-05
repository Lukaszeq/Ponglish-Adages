function generateRandomNumbers(adageCount, quipCount, generatePromptCount) {
    const randomAdageNumber = Math.floor(Math.random() * adageCount);
    const randomQuipNumber = Math.floor(Math.random() * quipCount);
    const randomPromptNumber = Math.floor(Math.random() * generatePromptCount);
    return [randomAdageNumber, randomQuipNumber, randomPromptNumber];
} // returns an array of three different random numbers

const adageCount = listOfAdages.length; // number of entries in adage array
const quipCount = listOfQuips.length; // number of entries in quip array
const generatePromptCount = listOfGeneratePrompts.length; // number of entries in prompt array

let drawnNumbers = generateRandomNumbers(adageCount, quipCount, generatePromptCount); // populate an array with the three random numbers

var adageInPonglish = listOfAdages[drawnNumbers[0]]["ponglish"];
var adageInOriginal = listOfAdages[drawnNumbers[0]]["original"];
var adageAuthor = listOfAdages[drawnNumbers[0]]["author"];
var quip = listOfQuips[drawnNumbers[1]];
var generatePrompt = listOfGeneratePrompts[drawnNumbers[2]];

window.onload = function () {
    // initial stuff
    document.getElementById('adage-ponglish').innerHTML = adageInPonglish;
    document.getElementById('adage-original').innerHTML = adageInOriginal;
    document.getElementById('adage-author').innerHTML = adageAuthor;
    document.getElementById('user-quip').innerHTML = quip;
    document.getElementById('user-generate-prompt').innerHTML = "<a href=# id=\"generate-new-adage\">" + generatePrompt + "</a>";
    // event listener - click on link
    const generateLink = document.getElementById('user-generate-prompt');
    generateLink.addEventListener('click', function (event) {
        event.preventDefault();

        drawnNumbers = generateRandomNumbers(adageCount, quipCount, generatePromptCount);

        // populate the variables
        adageInPonglish = listOfAdages[drawnNumbers[0]]["ponglish"];
        adageInOriginal = listOfAdages[drawnNumbers[0]]["original"];
        adageAuthor = listOfAdages[drawnNumbers[0]]["author"];
        quip = listOfQuips[drawnNumbers[1]];
        generatePrompt = listOfGeneratePrompts[drawnNumbers[2]];

        // feed the elements
        document.getElementById('adage-ponglish').innerHTML = adageInPonglish;
        document.getElementById('adage-original').innerHTML = adageInOriginal;
        document.getElementById('adage-author').innerHTML = adageAuthor;
        document.getElementById('user-quip').innerHTML = quip;
        document.getElementById('user-generate-prompt').innerHTML = "<a href=# id=\"generate-new-adage\">" + generatePrompt + "</a>";

        // add animation classes
        const adagePonglishElement = document.getElementById('adage-ponglish');
        const adageOriginalElement = document.getElementById('adage-original');
        const adageAuthorElement = document.getElementById('adage-author');
        const quipElement = document.getElementById('user-quip');
        const generatePromptElement = document.getElementById('user-generate-prompt');

        // remove animation classes
        adagePonglishElement.classList.remove('fade-in-quick');
        adageOriginalElement.classList.remove('fade-in-quick');
        adageAuthorElement.classList.remove('fade-in-quick');
        quipElement.classList.remove('fade-in-long');
        generatePromptElement.classList.remove('fade-in-long');

        // trigger animation
        void adagePonglishElement.offsetWidth; // trigger a reflow
        adagePonglishElement.classList.add('fade-in-quick');
        adageOriginalElement.classList.add('fade-in-quick');
        adageAuthorElement.classList.add('fade-in-quick');
        quipElement.classList.add('fade-in-long');
        generatePromptElement.classList.add('fade-in-long');
    });
};
