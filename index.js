let briefingNum = 10; //Инструктаж
let chBriefingNum = 50;
let test = 50;
let day = 20;
let attest = day * 100/30;
let dateBirth = "14:10:2000"

function addZero(m){
  return (m < 10) ? '0' + m : m; 
}

function addDateZero(d){
  return (d < 10) ? d + '0' : d
}

let getDate = (datNew = new Date()) =>{
  let Y = datNew.getFullYear();
  let M = addZero(datNew.getMonth() + 1);
  let D = datNew.getDate();
  return `${D}:${M}:${Y}`
}

let getTime = (datNew = new Date()) =>{
  let h = addZero(datNew.getHours());
  let m = addZero(datNew.getMinutes());
  return `${h}:${m}`
}

function day_remained(day_r){
  if (day>0){
    if (day_r==1){
      return "День";
    } 
    if (day_r>4){
      return "Дней";
    }
    if (1<day_r<=4){
      return "Дня";
    }
  }else{
    return "Error"
  }
}

let app = new Vue({
    el: '#app',
    data: {
      numberMessage: 10, //Есть ли новые сообщения
      valueBriefing: "--value:" + briefingNum, //Диограмма инструктаж
      valueChBriefing: "--value:" + chBriefingNum, //Диограмма предсменный инструктаж
      valueTest: "--value:" + test,//Диограмма тест
      valueAttest: "--value:" + attest, //Диограмма аттестация
      vueValueTest: test,
      vueDay: day,
      day_name: day_remained(day),
      dateBirth: dateBirth,
      m: (new Date).getMinutes(),
      h: (new Date).getHours(),
      Y: (new Date).getFullYear(),
      M: (new Date).getMonth(),
      D: (new Date).getDate(),
      name: "Дмитрий",
      surname: "Берилло",
      middle_name: "Антонович",
      table_number: "ГОКИ 0000",
      discharge: "VI" 
    },
    mounted () {
      function addZero(m){
        return (m < 10) ? '0' + m : m; 
      }
      
      this.intervalRef = window.setInterval(() => {
        this.m = addZero((new Date).getMinutes());
        this.h = addZero((new Date).getHours());
        this.Y = addZero((new Date).getFullYear());
        this.M = addZero((new Date).getMonth() + 1);
        this.D = addZero((new Date).getDate());
      });
    }
})

//Переключатель темы

let switchMode = document.getElementById("checkbox");

switchMode.onclick = function(){
  let mode = document.getElementById("mode");
  if (mode.getAttribute("href") == "css/main.css"){
    mode.href = "css/dark-main.css";
  } else{
    mode.href = "css/main.css";
  }
  
}
