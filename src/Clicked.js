


const Clicked=(event)=>{    
    if (event.currentTarget.style.transform!='rotateY(180deg)') {
      event.currentTarget.style.transform = 'rotateY(180deg)';
  
    }else
    if (event.currentTarget.style.opacity!='0') {
      event.currentTarget.style.transition = 'transform 0.5s, opacity 0.5s';
      event.currentTarget.style.transform = 'translate(200px, -100px) rotate(15deg)';
      event.currentTarget.style.opacity = '0';
      let lastevent = event.currentTarget;
      setTimeout(() => {
        lastevent.style.display = 'none';
        lastevent.style.transform = 'rotateY(360deg)';
      }, 450);
      if(document.getElementsByClassName("flipper")[1].style.display=='none'){
        document.getElementById('buttons').style.display='flex';
      }
    }
}
export default Clicked; 