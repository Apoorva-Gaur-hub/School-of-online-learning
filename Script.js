//section 4 js
    
        function scrollSlider(distance) {
            document.getElementById('slider').scrollBy({
                left: distance,
                behavior: 'smooth'
            });
        }


//section 6
    function scrollPartnerGrid(distance) {
        document.getElementById('partner-grid').scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }
 
//section 9
function toggleFaq(element) {
    const item = element.parentElement;
    
    // Baki sab open boxes ko band karne ke liye (Optional)
    // document.querySelectorAll('.faq-item').forEach(el => {
    //     if (el !== item) el.classList.remove('active');
    //     if (el !== item) el.querySelector('.faq-answer').style.maxHeight = null;
    // });

    // Current box ko toggle karein
    item.classList.toggle('active');
    const answer = item.querySelector('.faq-answer');
    
    if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
        answer.style.maxHeight = null;
    }
}
