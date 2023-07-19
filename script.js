function getAndDisplayWordData() {
  //user input
  let userInput = document.getElementById('word-search-input').value;
  //get the results: word, pronounciation, definitions
  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`).then(response => {
    let word = response.data[0];
       //pronouciation
    let pronounciation = word.phonetic;
      //definitions
    let wordDefinitions = word.meanings[0].definitions;
  //change dom and print
    document.getElementById('no-word-found').style.display = 'none';
    document.getElementById('word').innerHTML = userInput;
    document.getElementById('pronunciation').innerHTML = pronounciation;

    
    for (let definitionObj of wordDefinitions) {
      let listItem = document.createElement('li');
      listItem.innerText = definitionObj.definition;
      document.getElementById('definitions').appendChild(listItem);
    }
  });
  
}
