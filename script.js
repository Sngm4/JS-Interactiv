// Function 1

let footer = document.querySelector('footer');
let i = 0;

footer.addEventListener('click', function () {
  i++;
  console.log(document.innerHTML = `Clique ${i}`);
});

//_______________________

// Function 2

let navBar = document.getElementById('navbarHeader');
let menuChange = document.getElementsByClassName('navbar-toggler');


menuChange[0].addEventListener('click', function () {
  navBar.classList.toggle("collapse")
});

//_______________________

// Function 3
let card = document.getElementsByClassName('col-md-4');
let cardOneEdit = card[0].querySelectorAll("button");

cardOneEdit[1].addEventListener('click', function () {
  card[0].style = "color: red"
});

//_______________________

// Function 4
let cardTwoEdit = card[1].querySelectorAll("button");
let cardTwoEditStatus = false;

cardTwoEdit[1].addEventListener('click', function () {
  if (cardTwoEditStatus === false) {
    card[1].style = 'color: green';
    cardTwoEditStatus = true;
  } else if (cardTwoEditStatus === true) {
    card[1].style = 'color: black';
    cardTwoEditStatus = false;
  }
});

//_______________________

// Function 5

let navbarSelected = document.getElementsByClassName("navbar");
x = false

navbarSelected[0].addEventListener('dblclick', function () {
  if (x === false) {
    for (i = 0; i < document.styleSheets.length; i++) {
      void (document.styleSheets.item(i).disabled = true);
    }
    x = true;
  } else if (x === true) {
    for (i = 0; i < document.styleSheets.length; i++) {
      void (document.styleSheets.item(i).disabled = false);
    }
    x = false;
  }
});

//_______________________

// Function 6

let cardList = document.querySelectorAll('.card');

cardList.forEach((item) => {
  item.addEventListener('mouseenter', function () {
    item.querySelector(".card-text").classList.toggle("collapse");
    let itemImage = item.querySelector('img');
    if (itemImage.style.width === '20%') {
      itemImage.style = "width: 100%";
    } else {
      itemImage.style = "width: 20%";
    }
  });
});

//_______________________