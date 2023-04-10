const btns = document.querySelectorAll("button");
const span = document.querySelector(".span");

let count = 0;

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if (styles.contains("increase")){
            count++;
        }else{
            count = 0;
        }

        if (count === 0){
            span.style.color = "black"
        }else if (count < 0){
            span.style.color = "red";
        }else{
            span.style.color = "green";
        }

        span.textContent = count;
    });
});
