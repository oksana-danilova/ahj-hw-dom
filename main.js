/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// ./src/js/app.js


// Функция для генерации случайного числа от min до max включительно
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создаем игровое поле 4x4
const gameField = document.getElementById("game-field");
for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  gameField.appendChild(cell);
}

// Генерация случайной позиции для гоблина
function randomPosition() {
  const cells = Array.from(gameField.children);
  const currentCellIndex = cells.findIndex(cell => cell.contains(goblin));
  let newCellIndex;
  do {
    newCellIndex = getRandomInt(0, 15);
  } while (newCellIndex === currentCellIndex);
  const newCell = cells[newCellIndex];
  newCell.appendChild(goblin);
}

// Создаем элемент для гоблина
const goblin = document.createElement("img");
goblin.src = goblin_namespaceObject;

// Устанавливаем начальную позицию гоблина
randomPosition();

// Запускаем движение гоблина каждые 2 секунды
setInterval(randomPosition, 2000);
;// ./src/index.js


/******/ })()
;