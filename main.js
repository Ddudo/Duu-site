var daysE1 = document.getElementById('days')
var hoursE1 = document.getElementById('hours')
var minuteE1 = document.getElementById('minute')
var secondsE1 = document.getElementById('seconds')

function countdownTimer() {
    const countdowndate = new Date('10/06/2024').getTime()
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const interval = setInterval(()  => {
        const now = new Date().getTime()
        const distance = countdowndate - now
        
        
            daysE1.innerText = formatnumber(Math.floor(distance / day))
            hoursE1.innerText = formatnumber(Math.floor((distance %
                day
            )/ hour))
            minuteE1.innerText = formatnumber(Math.floor((distance %
                hour)/minute))
            secondsE1.innerText = formatnumber(Math.floor((distance %
            minute)/ second))
            //when date is reached
        if (distance < 0 ) {
            document.getElementById('headline').innerText = '❤️예솔아 세상에 온 걸 환영해!❤️'
            document.getElementById('countdown').style.display = 'none'
            clearInterval(interval)
        }
    }, 1000)


    
} 
function formatnumber(number) {
    if(number < 10) {
        return '0' + number
}
return number }
countdownTimer()
