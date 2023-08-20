// alert("connected")

let count = 0;
document.getElementById("plus").addEventListener("click", function () {
  // console.log('connected');
  const element = document.getElementById("counter");
  // console.log(element.innerText);
  count += 1;
  // console.log(count);
  element.innerText = count;
});

document.getElementById("minus").addEventListener("click", function () {
  // console.log('connected');
  const element = document.getElementById("counter");
  // console.log(element.innerText);
  count -= 1;
  // console.log(count);
  element.innerText = count;
});

document.getElementById("commentBtn").addEventListener("click", function () {
  // alert('clicked submit button');
  const inputText = document.getElementById("reviewInput");
  const inputTextvalue = inputText.value;
  // console.log(inputTextvalue);
  const elementParent = document.getElementById("commentContainer");
  const p = document.createElement("p");
  const childCount = elementParent.childElementCount;
  if (inputTextvalue != "" && inputTextvalue != " ") {
    p.innerText = `${childCount}. ${inputTextvalue}`;
    elementParent.appendChild(p);
    inputText.value = "";
  } else {
    alert("Invalid Input");
  }
});

document.getElementById("reviewInput").addEventListener("keyup", function(event) {
  console.log(event.key);
  if (event.key === "Enter") {
    const inputText = document.getElementById("reviewInput");
    const inputTextvalue = inputText.value;
    const elementParent = document.getElementById("commentContainer");
    const p = document.createElement("p");
    const childCount = elementParent.childElementCount;
    if (inputTextvalue != "" || inputTextvalue != " ") {
        p.innerText = `${childCount}. ${inputTextvalue}`;
        elementParent.appendChild(p);
        inputText.value = "";
      } else {
        alert("Invalid Input");
      }

  }
});

const quotesList = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill",
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      person: "Steve Jobs",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      person: "Albert Einstein",
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      person: "John D. Rockefeller",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt",
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      person: "Lao Tzu",
    },
    {
      quote:
        "Success is walking from failure to failure with no loss of enthusiasm.",
      person: "Winston Churchill",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela",
    },
  ];

  
document.getElementById('generateBtn').addEventListener('click', function(){
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    const qul = quotesList.length;
    // console.log(qul);
    const randomQuote = Math.floor(Math.random() * quotesList.length);
    console.log(quotesList[randomQuote].quote);
    console.log(quotesList[randomQuote].person);
    quote.innerText = `" ${quotesList[randomQuote].quote} "`;
    author.innerText = `${quotesList[randomQuote].person}`;
})
