//
let stopCount = 0;
let slowCount = 0
let goCount = 0

goButton.addEventListener('mouseenter', (event) => {
  console.log('Go button was entered');
})
goButton.addEventListener('mouseleave', (event) => {
  console.log('Go button was left');
})

slowButton.addEventListener('mouseenter', (event) => {
  console.log('Slow Button was entered');
})
slowButton.addEventListener('mouseleave', (event) => {
  console.log('Slow Button was left');
})

stopButton.addEventListener('mouseenter', (event) => {
  console.log('Stop button was entered');
})
stopButton.addEventListener('mouseleave', (event) => {
  console.log('Stop button was left');
})

stopButton.addEventListener('click', (event) => {
  stopCount++
  if (stopCount % 2 === 0) {
      console.log('Stop bulb off');
  } else if (stopCount % 2 !== 0) {
      console.log('Stop bulb on');
  }
})

slowButton.addEventListener('click', (event) => {
  slowCount++
  if (slowCount % 2 === 0) {
      console.log('Slow bulb off');
  } else if (slowCount % 2 !== 0) {
      console.log('Slow bulb on');
  }
})

goButton.addEventListener('click', (event) => {
  goCount++
  if (goCount % 2 === 0) {
      console.log('Go bulb off');
  } else if (goCount % 2 !== 0) {
      console.log('Go bulb on');
  }
})

document.getElementById('stopButton').onclick = makeRed;
document.getElementById('slowButton').onclick = makeYellow;
document.getElementById('goButton').onclick = makeGreen;

function makeRed() {
  if (stopLight.style.backgroundColor !== 'red') {
    document.getElementById('stopLight').style.backgroundColor = 'red';
  } else if (stopLight.style.backgroundColor == 'red') {
    document.getElementById('stopLight').style.backgroundColor = '#111';
  }
}

function makeYellow() {
  if (slowLight.style.backgroundColor !== 'yellow') {
    document.getElementById('slowLight').style.backgroundColor = 'yellow';
  } else if (slowLight.style.backgroundColor == 'yellow') {
    document.getElementById('slowLight').style.backgroundColor = '#111';
  }
}

function makeGreen() {
  if (goLight.style.backgroundColor !== 'green') {
    document.getElementById('goLight').style.backgroundColor = 'green';
  } else if (goLight.style.backgroundColor == 'green') {
    document.getElementById('goLight').style.backgroundColor = '#111';
  }
}

//