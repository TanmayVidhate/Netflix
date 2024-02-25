const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle('open')

        const icon=faq.querySelector('faq_iconi');
        
        if(icon.className==="fa-solid fa-plus")
        {
            icon.className="fa-solid fa-xmark";
            // alert('click');
        }
        else
        {
            icon.className="fa-solidfa-plus";
        }
    })
})