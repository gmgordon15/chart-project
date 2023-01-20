let e = document.getElementById("chart-select");
let chartSelectValue = e.value;
let chartSelectText = e.options[e.selectedIndex].text;

const removeDataBTN = document.querySelector(".remove-data")
const removeLabelBTN = document.querySelector(".remove-label")


const labelInput = document.querySelector("#label-name")
const labelSubmit = document.querySelector(".label-submit")

const dataInput = document.querySelector(".data-input")
const dataInputButton = document.querySelector(".data-submit")

let labelValue = labelInput.value
let dataValue = dataInput.value

labelSubmit.addEventListener('click', function(){
    let labelValue = labelInput.value
    const addLabelValue = labelValue.toString()
    let dataValue = dataInput.value
    console.log(labelValue)
    console.log(addLabelValue)
    console.log(dataValue)
    
   return addLabelValue


})

const ctx = document.querySelector('.chart').getContext('2d');

const data = {
    labels: ['test 1', 'test 2', 'test 3'],
        datasets: [{
            data:[124923, 47594, 848937]
        }],
}

/*const config = new Chart(ctx, {
    type: 'bar',
    data,
        /*labels: ['test 1', 'test 2', 'test 3'],
        datasets: [{
            data:[124923, 47594, 848937]
        }],

    
    options: {},
    plugins: []
  }) */

  const config = {
    type: 'bar',
    data,
        /*labels: ['test 1', 'test 2', 'test 3'],
        datasets: [{
            data:[124923, 47594, 848937]
        }],*/

    
    options: {},
    plugins: []
  }

  const config2 = {
    type: 'line',
    data,
        /*labels: ['test 1', 'test 2', 'test 3'],
        datasets: [{
            data:[124923, 47594, 848937]
        }],*/

    
    options: {},
    plugins: []
  }

  const config3 = {
    type: 'pie',
    data,
        /*labels: ['test 1', 'test 2', 'test 3'],
        datasets: [{
            data:[124923, 47594, 848937]
        }],*/

    
    options: {},
    plugins: []
  }

  const config4 = {
    type: 'radar',
    data,
        /*labels: ['test 1', 'test 2', 'test 3'],
        datasets: [{
            data:[124923, 47594, 848937]
        }],*/

    
    options: {},
    plugins: []
  }

  const config5 = {
    type: 'doughnut',
    data,
        /*labels: ['test 1', 'test 2', 'test 3'],
        datasets: [{
            data:[124923, 47594, 848937]
        }],*/

    
    options: {},
    plugins: []
  }

  const config6 = {
    type: 'bubble',
    data,
        /*labels: ['test 1', 'test 2', 'test 3'],
        datasets: [{
            data:[124923, 47594, 848937]
        }],*/

    
    options: {},
    plugins: []
  }




  let myChart = new Chart(ctx,
    config)




  function updateLabel(){
    let labelValue = labelInput.value
    const addLabelValue = labelValue.toString()
    config.data.labels.push(addLabelValue)
    myChart.update()
  }

  labelSubmit.addEventListener('click', function(){
    updateLabel()
  })

  function updateData(){
    let dataValue = dataInput.value
    let dataValueInt = parseInt(dataValue)
      config.data.datasets[0].data.push(dataValueInt)
      console.log(dataValueInt)
      console.log(config.data.datasets[0].data)
      myChart.update()
  }


  
  
  dataInputButton.addEventListener('click', function(){
    updateData()
  })
 



function changeChartType(){
    let e = document.getElementById("chart-select");
    let chartSelectValue = e.value;
    console.log(chartSelectValue)
    myChart.destroy()

    if(chartSelectValue === 'bar'){
        myChart = new Chart(ctx,
            config)
    }else if(chartSelectValue === 'line'){
        myChart = new Chart(ctx,
            config2)
    }else if(chartSelectValue === 'pie'){
        myChart = new Chart(ctx,
            config3)
    }else if(chartSelectValue === 'radar'){
        myChart = new Chart(ctx,
            config4)
    }else if(chartSelectValue === 'doughnut'){
        myChart = new Chart(ctx,
            config5)
    }else if(chartSelectValue === 'bubble'){
        myChart = new Chart(ctx,
            config6)
    }
    

}

e.addEventListener('change', function(){
    changeChartType()
})


function removeData(){
    config.data.datasets[0].data.pop()
    myChart.update()
}



removeDataBTN.addEventListener('click', function(){
    removeData()
})

function removeLabel(){
    config.data.labels.pop()
    myChart.update()
}


removeLabelBTN.addEventListener('click', function(){
    removeLabel()
})
