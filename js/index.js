
function generateRandomNumbers(adageCount, quipCount, generatePromptCount) {
    const randomAdageNumber = Math.floor(Math.random() * adageCount);
    const randomQuipNumber = Math.floor(Math.random() * quipCount);
    const randomPromptNumber = Math.floor(Math.random() * generatePromptCount);
    
    return [randomAdageNumber, randomQuipNumber, randomPromptNumber];
  }
  
  const adageCount = listOfAdages.length;
  const quipCount = listOfQuips.length;
  const generatePromptCount = listOfGeneratePrompts.length;
  
  let drawnNumbers = generateRandomNumbers(adageCount, quipCount, generatePromptCount);
  
  console.log(drawnNumbers);
  
  var adageInPonglish = listOfAdages[drawnNumbers[0]]["ponglish"];
  var adageInOriginal = listOfAdages[drawnNumbers[0]]["original"];
  var adageAuthor = listOfAdages[drawnNumbers[0]]["author"];
  var quip = listOfQuips[drawnNumbers[1]];
  var generatePrompt = listOfGeneratePrompts[drawnNumbers[2]];
  
  console.log(adageInPonglish);
  console.log(adageInOriginal);
  console.log(adageAuthor);
  console.log(quip);
  console.log(generatePrompt);
  
  window.onload = function () {
    document.getElementById('adage-ponglish').innerHTML = adageInPonglish;
    document.getElementById('adage-original').innerHTML = adageInOriginal;
    document.getElementById('adage-author').innerHTML = adageAuthor;
    document.getElementById('user-quip').innerHTML = quip;
    document.getElementById('user-generate-prompt').innerHTML = generatePrompt;
  
    const generateLink = document.getElementById('user-generate-prompt');
    generateLink.addEventListener('click', function(event){
      event.preventDefault();
  
      drawnNumbers = generateRandomNumbers(adageCount, quipCount, generatePromptCount);
  
      adageInPonglish = listOfAdages[drawnNumbers[0]]["ponglish"];
      adageInOriginal = listOfAdages[drawnNumbers[0]]["original"];
      adageAuthor = listOfAdages[drawnNumbers[0]]["author"];
      quip = listOfQuips[drawnNumbers[1]];
      generatePrompt = listOfGeneratePrompts[drawnNumbers[2]];
  
      document.getElementById('adage-ponglish').innerHTML = adageInPonglish;
      document.getElementById('adage-original').innerHTML = adageInOriginal;
      document.getElementById('adage-author').innerHTML = adageAuthor;
      document.getElementById('user-quip').innerHTML = quip;
      document.getElementById('user-generate-prompt').innerHTML = generatePrompt;
    });
  };
  