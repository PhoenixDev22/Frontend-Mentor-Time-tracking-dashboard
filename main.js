fetch("data.json").then(response => response.json()).then(result => myJsObject = result)


const periodOptions = Array.from(document.querySelectorAll(".over__period > button"));
const current = [...document.querySelectorAll(".current")];
const previous = [...document.querySelectorAll(".previous")];


periodOptions.forEach(ele =>{
    ele.addEventListener("click", function(e){
        periodOptions.forEach(ele =>{
            ele.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        switch (e.currentTarget.dataset.time ) {
            case "daily":
                current.forEach((el, i)=>{
                    if (myJsObject[i].timeframes.daily.current == 1){
                        el.innerHTML =` ${myJsObject[i].timeframes.daily.current}hr`;

                    }else{
                        el.innerHTML =` ${myJsObject[i].timeframes.daily.current}hrs`;
                    }
                })
                previous.forEach((el, i)=>{
                    if (myJsObject[i].timeframes.daily.previous == 1){
                        el.innerHTML =` Yesterday - ${myJsObject[i].timeframes.daily.previous}hr`;

                    }else{
                        el.innerHTML =`Yesterday - ${myJsObject[i].timeframes.daily.previous}hrs`;
                    }
                })
            break;
            case "weekly":
                current.forEach((el, i)=>{
                    el.innerHTML = `${myJsObject[i].timeframes.weekly.current}hrs`;
                })
                previous.forEach((el, i)=>{
                    el.innerHTML = `Last Week - ${myJsObject[i].timeframes.weekly.previous}hrs`;
                })
            break;   
            case "monthly":
                current.forEach((el, i)=>{
                    el.innerHTML = `${myJsObject[i].timeframes.monthly.current}hrs`;
                })
                previous.forEach((el, i)=>{
                    el.innerHTML = `Last Month - ${myJsObject[i].timeframes.monthly.previous}hrs`;
                })
            break;            
        }
    })
})

