$(document).ready(function() {
    $('.btn').click(function() {
        $.get('https://freegeoip.app/json/')
            .then(data => {
                console.log(data)
                $('div.output').html(`<img src="https://raw.githubusercontent.com/yusufshakeel/mysql-country-with-flag/master/flags-medium/${data.country_code.toLowerCase()}.png"></img>
                <br><br><h1>${data.country_name}</h1>
                <h5>${data.ip} - ${data.time_zone}</h5>`)
            })
    })
}); 