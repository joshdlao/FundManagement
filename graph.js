// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['DSO', 'DIO', 'DPO'],
    datasets: [{
      label: 'Days',
      data: [59, 36, 48],
      backgroundColor: ['#007bff', '#28a745', '#ffc107']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
