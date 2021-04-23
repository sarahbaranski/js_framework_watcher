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
          display: false
        },
        title: {
          display: true,
          text: 'Forks'
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
          display: false
        },
        title: {
          display: true,
          text: 'Watchers'
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
          display: false
        },
        title: {
          display: true,
          text: 'Stars'
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
          data: [60, 30, 10, 20, 50],
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
        {
          label: "Watchers",
          data: [10, 40, 90, 18, 45],
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
        {
          label: "Stars",
          data: [48, 23, 18, 32, 95],
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
          text: 'Overall Popularity'
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
