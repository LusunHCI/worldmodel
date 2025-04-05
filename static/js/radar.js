let chartDrawn = false;

function drawChart() {
  const rct = document.getElementById('radarChart').getContext('2d');

  new Chart(rct, {
    type: 'radar',
    data: {
      labels: [
        'Object State',
        'Spatial Relation',
        'Transition Model',
        'Planner Success',
        'Action Sequencing',
        'Subgoal Decomposition',
      ],
      datasets: [
        {
            label: 'Mixtral8 x 22B',
            data: [36, 68, 50, 40,36,25],
            fill: true,
            backgroundColor: 'rgba(112, 36, 36, 0.2)',
            borderColor: 'rgb(160, 30, 30)',
            pointBackgroundColor: 'rgb(160, 30, 30)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(160, 30, 30)',
        },
        {
            label: 'Llama 3 70B',
            data: [80, 70, 52, 37, 80, 24],
            fill: true,
            backgroundColor: 'rgba(51, 228, 95, 0.2)',
            borderColor: 'rgb(52, 193, 155)',
            pointBackgroundColor: 'rgb(52, 193, 155)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(52, 193, 155)'
        },
        {
            label: 'Gemini 1.5 Pro',
            data: [90, 72, 47,42,40, 26],
            fill: true,
            backgroundColor: 'rgba(198, 126, 1, 0.22)',
            borderColor: 'rgb(220, 146, 55)',
            pointBackgroundColor: 'rgb(220, 146, 55)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(220, 146, 55)'
        },
        {
            label: 'GPT-4o',
            data: [78,80,60,64,50, 55],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },
        {
            label: 'Claude3.5 Sonnect',
            data: [78, 80, 70, 80, 70, 78],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
        },
        {
            label: 'o1-peview',
            data: [78, 80, 73, 89, 90, 58],
            fill: true,
            backgroundColor: 'rgba(180, 58, 224, 0.2)',
            borderColor: 'rgb(161, 52, 229)',
            pointBackgroundColor: 'rgb(161, 52, 229)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(161, 52, 229)'
        }
      ]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1000
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  chartDrawn = true;
}

// Observer to trigger animation only when chart is in view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !chartDrawn) {
      drawChart();
    }
  });
}, { threshold: 0.3 });

observer.observe(document.getElementById('radarChart'));

// const rct = document.getElementById('radarChart');
// new Chart(rct, {
//   type: 'radar',
//   data: {
//   labels: [
//     'Claude3.5',
//     'GPT-4o',
//     'Qwen2 VL',
//     'InternVL 2.5',
//     'LLaVa-OV',
//     'Gemini 1.5',
//     'Qwen2.5 VL',
//   ],
//   datasets: [{
//     label: 'Quantity',
//     data: [59.5,70.3, 73.6, 74.1, 75.3, 79.3, 80.2],
//     fill: true,
//     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//     borderColor: 'rgb(255, 99, 132)',
//     pointBackgroundColor: 'rgb(255, 99, 132)',
//     pointBorderColor: '#fff',
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: 'rgb(255, 99, 132)'
//   }, {
//     label: 'Spatial',
//     data: [59.1, 59.9, 64.2, 64.3, 65.9, 66.6, 66.7],
//     fill: true,
//     backgroundColor: 'rgba(54, 162, 235, 0.2)',
//     borderColor: 'rgb(54, 162, 235)',
//     pointBackgroundColor: 'rgb(54, 162, 235)',
//     pointBorderColor: '#fff',
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: 'rgb(54, 162, 235)'
//   }]
// },
//   options: {}
// });
