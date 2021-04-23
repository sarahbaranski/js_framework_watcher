/* global Chart, axios */

var vueStars = 0;
var vueWatchers = 0;
var vueForks = 0;
var angularStars = 0;
var angularWatchers = 0;
var angularForks = 0;
var emberStars = 0;
var emberWatchers = 0;
var emberForks = 0;
var svelteStars = 0;
var svelteWatchers = 0;
var svelteForks = 0;
var reactStars = 0;
var reactWatchers = 0;
var reactForks = 0;

function waitFor(conditionFunction) {
  const poll = (resolve) => {
    if (conditionFunction()) {
      resolve();
    } else {
      setTimeout((_) => poll(resolve), 400);
    }
  };
  return new Promise(poll);
}

function getData() {
  axios.get("https://api.github.com/repos/vuejs/vue").then((response) => {
    console.log(response.data);
    vueForks = response.data.forks_count;
    vueWatchers = response.data.subscribers_count;
    vueStars = response.data.stargazers_count;
  });
  axios.get("https://api.github.com/repos/angular/angular.js").then((response) => {
    console.log(response.data);
    angularForks = response.data.forks_count;
    angularWatchers = response.data.subscribers_count;
    angularStars = response.data.stargazers_count;
  });
  axios.get("https://api.github.com/repos/emberjs/ember.js").then((response) => {
    console.log(response.data);
    emberForks = response.data.forks_count;
    emberWatchers = response.data.subscribers_count;
    emberStars = response.data.stargazers_count;
  });
  axios.get("https://api.github.com/repos/sveltejs/svelte").then((response) => {
    console.log(response.data);
    svelteForks = response.data.forks_count;
    svelteWatchers = response.data.subscribers_count;
    svelteStars = response.data.stargazers_count;
  });
  axios.get("https://api.github.com/repos/facebook/react").then((response) => {
    console.log(response.data);
    reactForks = response.data.forks_count;
    reactWatchers = response.data.subscribers_count;
    reactStars = response.data.stargazers_count;
  });
}

function makeCharts() {
  var popForks = [
    { language: "vue", number: vueForks },
    { language: "angular", number: angularForks },
    { language: "ember", number: emberForks },
    { language: "svelte", number: svelteForks },
    { language: "react", number: reactForks },
  ];
  var compareForks = popForks.slice(0);
  compareForks.sort(function (a, b) {
    return b.number - a.number;
  });
  compareForks[0]["Points"] = 5;
  compareForks[1]["Points"] = 4;
  compareForks[2]["Points"] = 3;
  compareForks[3]["Points"] = 2;
  compareForks[4]["Points"] = 1;

  console.log(compareForks);
  var finalForks = [];
  finalForks.push(compareForks.find((x) => x.language === "vue").Points);
  finalForks.push(compareForks.find((x) => x.language === "angular").Points);
  finalForks.push(compareForks.find((x) => x.language === "ember").Points);
  finalForks.push(compareForks.find((x) => x.language === "svelte").Points);
  finalForks.push(compareForks.find((x) => x.language === "react").Points);
  console.log(finalForks);

  var popWatchers = [
    { language: "vue", number: vueWatchers },
    { language: "angular", number: angularWatchers },
    { language: "ember", number: emberWatchers },
    { language: "svelte", number: svelteWatchers },
    { language: "react", number: reactWatchers },
  ];
  var compareWatchers = popWatchers.slice(0);
  compareWatchers.sort(function (a, b) {
    return b.number - a.number;
  });
  compareWatchers[0]["Points"] = 5;
  compareWatchers[1]["Points"] = 4;
  compareWatchers[2]["Points"] = 3;
  compareWatchers[3]["Points"] = 2;
  compareWatchers[4]["Points"] = 1;

  console.log(compareWatchers);
  var finalWatchers = [];
  finalWatchers.push(compareWatchers.find((x) => x.language === "vue").Points);
  finalWatchers.push(compareWatchers.find((x) => x.language === "angular").Points);
  finalWatchers.push(compareWatchers.find((x) => x.language === "ember").Points);
  finalWatchers.push(compareWatchers.find((x) => x.language === "svelte").Points);
  finalWatchers.push(compareWatchers.find((x) => x.language === "react").Points);
  console.log(finalWatchers);

  var popStars = [
    { language: "vue", number: vueStars },
    { language: "angular", number: angularStars },
    { language: "ember", number: emberStars },
    { language: "svelte", number: svelteStars },
    { language: "react", number: reactStars },
  ];
  var compareStars = popStars.slice(0);
  compareStars.sort(function (a, b) {
    return b.number - a.number;
  });
  compareStars[0]["Points"] = 5;
  compareStars[1]["Points"] = 4;
  compareStars[2]["Points"] = 3;
  compareStars[3]["Points"] = 2;
  compareStars[4]["Points"] = 1;

  console.log(compareStars);
  var finalStars = [];
  finalStars.push(compareStars.find((x) => x.language === "vue").Points);
  finalStars.push(compareStars.find((x) => x.language === "angular").Points);
  finalStars.push(compareStars.find((x) => x.language === "ember").Points);
  finalStars.push(compareStars.find((x) => x.language === "svelte").Points);
  finalStars.push(compareStars.find((x) => x.language === "react").Points);
  console.log(finalStars);

  var forks = document.getElementById("forkChart").getContext("2d");
  var forkChart = new Chart(forks, {
    type: "bar",
    data: {
      labels: ["Vue.js", "Angular.js", "Ember.js", "Svelte", "React"],
      datasets: [
        {
          data: [vueForks, angularForks, emberForks, svelteForks, reactForks],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Forks",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  var watchers = document.getElementById("watchersChart").getContext("2d");
  var watchersChart = new Chart(watchers, {
    type: "bar",
    data: {
      labels: ["Vue.js", "Angular.js", "Ember.js", "Svelte", "React"],
      datasets: [
        {
          data: [vueWatchers, angularWatchers, emberWatchers, svelteWatchers, reactWatchers],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Watchers",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  var stars = document.getElementById("starsChart").getContext("2d");
  var starsChart = new Chart(stars, {
    type: "bar",
    data: {
      labels: ["Vue.js", "Angular.js", "Ember.js", "Svelte", "React"],
      datasets: [
        {
          data: [vueStars, angularStars, emberStars, svelteStars, reactStars],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Stars",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  var overall = document.getElementById("overallChart").getContext("2d");
  var overallChart = new Chart(overall, {
    type: "bar",
    data: {
      labels: ["Vue.js", "Angular.js", "Ember.js", "Svelte", "React"],
      datasets: [
        {
          label: "Forks",
          data: finalForks,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
        {
          label: "Watchers",
          data: finalWatchers,
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
        {
          label: "Stars",
          data: finalStars,
          backgroundColor: ["rgba(255, 206, 86, 0.2)"],
          borderColor: ["rgba(255, 206, 86, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Overall Popularity",
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          beginAtZero: true,
          stacked: true,
        },
      },
    },
  });
}

getData();
waitFor((_) => reactStars).then((_) => makeCharts());
