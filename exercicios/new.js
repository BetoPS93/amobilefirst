let windowOpened = false;
let intervalId;

const startInterval = function () {
  intervalId = setInterval(function () {
    let divElement = document.querySelector("#waiting-tickets-count");
    if (!divElement) {
      console.error(
        'Não foi possível encontrar a div com ID "waiting-tickets-count"'
      );
      return;
    }

    let value = divElement.innerHTML;
    if (value != 0 && !windowOpened) {
      window.open("https://www.youtube.com/watch?v=2AGB-iz54P0");
      windowOpened = true;
      clearInterval(intervalId);
    }
    console.log(value);

    const updateStatusIndicator = function () {
        if (windowOpened == false) {
          statusIndicator.style.backgroundColor = "green";
        } else {
          statusIndicator.style.backgroundColor = "red";
        }
      };
      
      updateStatusIndicator();

  }, 10000);
};

startInterval();

const controlsContainer = document.createElement("div");
controlsContainer.style.position = "fixed";
controlsContainer.style.top = "0";
controlsContainer.style.left = "0";
controlsContainer.style.zIndex = "10";

const restartButton = document.createElement("button");
restartButton.innerHTML = "Reiniciar";
restartButton.addEventListener("click", function () {
  clearInterval(intervalId);
  windowOpened = false;
  startInterval();
});

const statusIndicator = document.createElement("div");
statusIndicator.style.width = "20px";
statusIndicator.style.height = "20px";
statusIndicator.style.borderRadius = "10px";
statusIndicator.style.backgroundColor = "green";
statusIndicator.style.display = "inline-block";
statusIndicator.style.marginRight = "10px";
statusIndicator.style.padding = "8px";
statusIndicator.style.margin = "8px";

controlsContainer.appendChild(restartButton);
controlsContainer.appendChild(statusIndicator);

document.body.appendChild(controlsContainer);
