console.log('JS OK');

// Function to generate the game grid
const generateGrid = () => {

    for (let i = 1; i <= 100; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.innerText = i;
    }
};

// all the elements from the DOM
const gridContainer = document.getElementById('my-grid');

const playButton = document.getElementById('play-button');


// listen to the play button
//playButton.addEventListener('click', generateGrid);//
