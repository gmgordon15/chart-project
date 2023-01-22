let e = document.getElementById("chart-select");
let chartSelectValue = e.value;
let chartSelectText = e.options[e.selectedIndex].text;

const removeDataBTN = document.querySelector(".remove-data")
const removeLabelBTN = document.querySelector(".remove-label")


const labelInput = document.querySelector("#label-name")
const labelSubmit = document.querySelector(".label-submit")

const dataInput = document.querySelector(".data-input")
const dataInputButton = document.querySelector(".data-submit")


const chartTitleInput = document.querySelector("#chart-name")
const chartTitleBTN = document.querySelector(".chart-submit")

const exportPDFButton = document.querySelector(".create-chart-button")

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
const ctx1 = document.querySelector('#chart')
const data = {
    label: 'Chart Title',
    labels: [],
        datasets: [{
            data:[]
        }],
}

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Custom Chart Title'
        },
        legend: {
            display: false,
            labels: {
                color: 'rgb(255, 99, 132)',
            },
            title: {
                text: 'Legend Text'
            },
        }

    }
}


const bgColor =  {
    id: "bgColor",
    beforeDraw: (chart, options) =>{
        const {ctx, width, height} = chart;
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, width, height)
        ctx.restore()
    }
}




  const config = {
    type: 'bar',
    label: 'Chart Title',
    data,
    options,
    plugins: [bgColor]
  }

  const config2 = {
    type: 'line',
    label: 'Chart Title',
    data,
    options,
    plugins: [bgColor]
  }

  const config3 = {
    type: 'pie',
    label: 'Chart Title',
    data,
    options,
    plugins: [bgColor]
  }

  const config4 = {
    type: 'radar',
    label: 'Chart Title',
    data,
    options,
    plugins: [bgColor]
  }

  const config5 = {
    type: 'doughnut',
    label: 'Chart Title',
    data,
    options,
    plugins: [bgColor]
  }

  const config6 = {
    type: 'bubble',
    label: 'Chart Title',
    data,
    options,
    plugins: [bgColor]
  }




  let myChart = new Chart(ctx,
    config)




  function updateLabel(){
    let labelValue = labelInput.value
    const addLabelValue = labelValue.toString()
    config.data.labels.push(addLabelValue)
    myChart.update()
  }

  function updateTite(){
    let chartTitleInputValue = chartTitleInput.value
    const addChartValue = chartTitleInputValue.toString()
    config.options.plugins.title.text = addChartValue
    myChart.update()
  }

  chartTitleBTN.addEventListener('click',function(){
      updateTite()
  })

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




function downloadPDF(){
    const pdfChart = document.querySelector('.chart')

    const pdfChartImg  = pdfChart.toDataURL('image/jpeg', 1.0)

    let pdf = new jsPDF('landscape');
    pdf.setFontSize(20);
    pdf.addImage(pdfChartImg, 'JPEG', 15, 15, 280, 150)
    pdf.save('myChart.pdf')
}


exportPDFButton.addEventListener('click', function(){
    downloadPDF()
    console.log("Export")
})



