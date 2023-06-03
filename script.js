const btnCalc = document.querySelector('.btnCalc');
const adviceDay = document.getElementById('adviceDay');
const adviceMonth = document.getElementById('adviceMonth');
const adviceYear = document.getElementById('adviceYear');


btnCalc.addEventListener('click', ()=>{
    adviceDay.style.visibility = 'hidden';
    adviceMonth.style.visibility = 'hidden';
    adviceYear.style.visibility = 'hidden';

    let dateNow = new Date()
    let yearNow = dateNow.getFullYear();
    let monthNow = dateNow.getMonth() + 1;
    let dayNow = dateNow.getDate();

    let ageNumber = document.getElementById('ageNumber')
    let monthNumber = document.getElementById('monthNumber');
    let daysNumber = document.getElementById('daysNumber');

    let inputDay = document.getElementById('inputDay').value;
    let inputMonth = document.getElementById('inputMonth').value;
    let inputYear = document.getElementById('inputYear').value;

    let yearResults;
    let daysResults;
    let monthResults;


    if(inputDay === '' || inputDay === 0 || inputDay > 31){
        adviceDay.style.visibility = 'visible';
        daysResults = '--';
    }
    else{
        if(inputDay < dayNow){
            if(inputMonth === monthNow || dayNow > inputDay){
                daysResults = 0;
            }
            else{
                daysResults = dayNow - inputDay;
            }
        }
        else{
            daysResults = inputDay - dayNow;
        }
    }
    
    if(inputMonth === '' || inputMonth === 0 || inputMonth > 12){
        adviceMonth.style.visibility = 'visible';
        monthResults = '--';
    }
    else{
        if(inputMonth > monthNow){
            monthResults = inputMonth - monthNow;    
        }
        else if(inputMonth === monthNow || inputMonth < monthNow){
            monthResults = 0;
        }
        else{
            monthResults = monthNow - inputMonth;
        }
    }

    if(inputYear > yearNow || inputYear == ''){
        adviceYear.style.visibility = 'visible';
        yearResults = '--';
    }
    else{
        yearResults = yearNow - inputYear - 1;
    }

    ageNumber.innerText = yearResults;
    monthNumber.innerText = monthResults;
    daysNumber.innerText = daysResults;
})

