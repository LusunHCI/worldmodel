
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'polarArea',
  data: {
  labels: [
    'Claude3.5-Quantity',
    'GPT-4o-Quantity',
    'Qwen2 VL-Quantity',
    'InternVL 2.5-Quantity',
    'LLaVa-OV-Quantity',
    'Gemini 1.5-Quantity',
    'Qwen2.5 VL-Quantity',
    '',
    'Claude3.5-Spatial',
    'GPT-4o-Spatial',
    'Qwen2 VL-Spatial',
    'InternVL 2.5-Spatial',
    'LLaVa-OV-Spatial',
    'Gemini 1.5-Spatial',
    'Qwen2.5 VL-Spatial',
    '',
    'Claude3.5-Temporal',
    'GPT-4o-Temporal',
    'Qwen2 VL-Temporal',
    'InternVL 2.5-Temporal',
    'LLaVa-OV-Temporal',
    'Gemini 1.5-Temporal',
    'Qwen2.5 VL-Temporal',
    '',
    'Claude3.5-Visual',
    'GPT-4o-Visual',
    'Qwen2 VL-Visual',
    'InternVL 2.5-Visual',
    'LLaVa-OV-Visual',
    'Gemini 1.5-Visual',
    'Qwen2.5 VL-Visual',
    '',
    'Claude3.5-Motion',
    'GPT-4o-Motion',
    'Qwen2 VL-Motion',
    'InternVL 2.5-Motion',
    'LLaVa-OV-Motion',
    'Gemini 1.5-Motion',
    'Qwen2.5 VL-Motion',
    ''
  ],
  datasets: [{
    label: 'Performance',
    data: [59.5,70.3, 73.6, 74.1, 75.3, 79.3, 80.2,0,
    59.1, 59.9, 64.2, 64.3, 65.9, 66.6, 66.7, 0,
    31.9, 34.8, 39.9, 41.9, 47.3, 52.8, 60.2, 0,
    67.6, 78.4, 79.8, 80.7, 82.1, 84.6, 88.0, 0,
    40.7, 45.3, 55.6, 58.3, 66.0, 67.2, 70.3, 0],
    backgroundColor: [
      '#899F59',
      '#9C9DCA',
      '#8A6E3E',
      '#834344',
      '#A15694',
      '#647845',
      '#B99B47',
      '#FFFFFF',
      '#899F59',
      '#9C9DCA',
      '#8A6E3E',
      '#834344',
      '#A15694',
      '#647845',
      '#B99B47',
      '#FFFFFF',
      '#899F59',
      '#9C9DCA',
      '#8A6E3E',
      '#834344',
      '#A15694',
      '#647845',
      '#B99B47',
      '#FFFFFF',
      '#899F59',
      '#9C9DCA',
      '#8A6E3E',
      '#834344',
      '#A15694',
      '#647845',
      '#B99B47',
      '#FFFFFF',
      '#899F59',
      '#9C9DCA',
      '#8A6E3E',
      '#834344',
      '#A15694',
      '#647845',
      '#B99B47',
      '#FFFFFF',      
    ]
  }]
},
  options: {}
});


const barperception = document.getElementById('barchart-perception');

new Chart(barperception, {
  type: 'bar',
  data: {
    labels: ['Gemini 1.5 Pro', 'Qwen2 VL', 'Qwen2.5 VL', 'InternVL 2.5', 'GPT-4o','LlaVA-OV','Claude 3.5 Sonnet'],
    datasets:[{
        label: 'Perception',
        data: [68.8, 68.5, 67.5, 65.8, 59.8, 59.1, 56.7],
        backgroundColor: [
            '#687B44',
            '#8D713E',
            '#BC9E46',
            '#864644',
            '#595AA3',
            '#7A578D',
            '#8CA25A'
        ],
        borderColor: [
          '#687B44',
          '#8D713E',
          '#BC9E46',
          '#864644',
          '#595AA3',
          '#7A578D',
          '#8CA25A'
        ],
        borderWidth: 1
      }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


const barprediction = document.getElementById('barchart-prediction');

new Chart(barprediction, {
    type: 'bar',
    data: {
      labels: ['Qwen2 VL','Gemini 1.5 Pro',  'Qwen2.5 VL', 'GPT-4o','InternVL 2.5', 'LlaVA-OV','Claude 3.5 Sonnet'],
      datasets:[{
            label: 'Prediction',
            data: [47.5, 46.6, 45.2, 43.7, 42.5, 37.3, 25.2],
            backgroundColor: [
            '#8D713E',
            '#687B44',
            '#BC9E46',
            '#595AA3',
            '#864644',
            '#8CA25A',
            '#7A578D'
            ],
            borderColor: [
            '#8D713E',
            '#687B44',
            '#BC9E46',
            '#595AA3',
            '#864644',
            '#8CA25A',
            '#7A578D'
            ],
          borderWidth: 1
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
});