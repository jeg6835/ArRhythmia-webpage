const navLinks = document.querySelectorAll('nav li');

navLinks.forEach(link => {
  link.addEventListener('click', setActive);
});

function setActive(e) {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  e.target.classList.add('active');
}

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const overall = document.getElementById("overall");
const spreadsheet = document.getElementById("spreadsheet");

daily.addEventListener("click", function() {
  daily.classList.add("active");
  weekly.classList.remove("active");
  overall.classList.remove("active");
  spreadsheet.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUgAAMl4e0cVYKxIt8yWN5g77XCOL3PSie9LK09F4bDwQxrWyOoRad9E6NC-QH_Znh8rLnsVxR3Up4/pubhtml?gid=1420979174&amp;single=true&amp;widget=true&amp;headers=false";
});

weekly.addEventListener("click", function() {
  daily.classList.remove("active");
  weekly.classList.add("active");
  overall.classList.remove("active");
  spreadsheet.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUgAAMl4e0cVYKxIt8yWN5g77XCOL3PSie9LK09F4bDwQxrWyOoRad9E6NC-QH_Znh8rLnsVxR3Up4/pubhtml?gid=1655819020&amp;single=true&amp;widget=true&amp;headers=false";
});

overall.addEventListener("click", function() {
  daily.classList.remove("active");
  weekly.classList.remove("active");
  overall.classList.add("active");
  spreadsheet.src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUgAAMl4e0cVYKxIt8yWN5g77XCOL3PSie9LK09F4bDwQxrWyOoRad9E6NC-QH_Znh8rLnsVxR3Up4/pubhtml?gid=461222815&amp;single=true&amp;widget=true&amp;headers=false";
});