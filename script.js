const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


let fwdBtn = document.getElementById("fwd");
  let  revBtn = document.getElementById("rev");
let video = document.querySelector(".flex");

fwdBtn.addEventListener("click",()=>{
	
	video.currentTime += 25;
})



revBtn.addEventListener("click",()=>{
	video.currentTime-=10;
})
