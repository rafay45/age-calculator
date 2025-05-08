// let time = new Date()
// let hours = time.getHours() % 12 || 12
// let minutes = time.getMinutes()
// let seconds = time.getSeconds()
// let ampm = time.getHours() >= 12 ? "PM" : "AM"
// document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`

function dateOfBirth() {
    let userBirth = document.getElementById('userInp').value;
    let userDateAndTime = new Date(userBirth)
    
    if(isNaN(userDateAndTime)){
      alert("Invalid date! Please enter a correct date.")
      return;
    }

    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let userMonth = userDateAndTime.getMonth()
    let typeOfMonth = month[userMonth]

    let userDate = userDateAndTime.getDate()

    let userYear = userDateAndTime.getFullYear()

    let newDate = new Date()
    let ageCalculate = newDate.getTime()  - userDateAndTime.getTime()
    

    let days = Math.floor(ageCalculate / (1000 * 60 * 60 * 24))
    let weeks = Math.floor(days/7)
    let months = Math.floor(ageCalculate / (1000 * 60 * 60 * 24 * 30.4375))
    let hours = Math.floor(ageCalculate / (1000 * 60 * 60))
    let minutes = Math.floor(ageCalculate / (1000 * 60))
    let years = Math.floor(ageCalculate / (1000 * 60 * 60 * 24 * 365.25))


    document.getElementById('box').innerHTML = `${typeOfMonth}/${userDate}/${userYear}`
    document.getElementById('box-1').innerHTML = days.toLocaleString();
    document.getElementById('box-2').innerHTML = weeks.toLocaleString();
    document.getElementById('box-3').innerHTML =  months;
    document.getElementById('box-4').innerHTML =   years;
    document.getElementById('box-5').innerHTML = hours.toLocaleString();
    document.getElementById('box-6').innerHTML = minutes.toLocaleString();
}

