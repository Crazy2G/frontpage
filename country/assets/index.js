$(document).ready(function() {
    $('.btn').click(function() {
        $.get('http://ip-api.com/json/')
            .then(data => {
                console.log(data)
                $('div.output').html(`<img src="https://raw.githubusercontent.com/yusufshakeel/mysql-country-with-flag/master/flags-medium/${data.countryCode.toLowerCase()}.png"></img>
                <br><br><h1>${data.country}</h1>
                <br><h5>${data.query} // ${data.as}</h5>`)
            })
    })
}); 