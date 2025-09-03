// alert("Hello");
let counter = 0;
$('.btn-decrease').click(function(){
    counter--;
    let decrease = $('p').text(`${counter}`);
    colorDetect(counter ,decrease);
})

$('.btn-increase').click(function(){
    counter++;
    let increase = $('p').text(`${counter}`);
    colorDetect(counter, increase);
})



$('.btn-reset').click(function(){
    counter = 0;
    let reset = $('p').text(`${counter}`)
    colorDetect(counter, reset);
})


function colorDetect(counter, result){
    if (counter === 0) {
        result.css('color', '#2d232e');
    }
    else if (counter > 0) {
        result.css('color', 'green');
    }
    else {
        result.css('color', 'red');
    }
    
}