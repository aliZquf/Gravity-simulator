let canvas = document.querySelector('canvas');

window.addEventListener('resize',function(){
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
})
canvas.width=window.innerWidth
    canvas.height=window.innerHeight

let c = canvas.getContext('2d');
let balls =[]
class Ball{
    constructor(x,y,r,dy,dx,gravity,Friction){
        this.r=r||20;
      this.x=x || randomIntNumber(0+this.r,window.innerWidth-this.r) ;
      this.y=y|| randomIntNumber(0+this.r,window.innerWidth-this.r);
     this.gravity = 1
     this.Friction = 0.8
      this.dy=dy || 10;
      this.dx=dx || 10;
      this.draw()
    }
    draw(){ 
         c.beginPath()
        c.arc(this.x,this.y,this.r,0,Math.PI*2)
        c.fillStyle = "red"
        c.fill()
    }
      
    update(){ 
        this.y +=this.dy
        if(this.y + this.r > window.innerHeight || this.y-this.r < 0){
            this.dy = - this.dy
        }
        if(this.y+this.r+this.dy>window.innerHeight){
this.dy = -this.dy*this.Friction
        }
        else{
            this.dy +=this.gravity
        }
        this.draw()
    }
}
for(let i=0;i<=10;i++){
    balls.push(new Ball)
}

function animate() {
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
     balls.forEach(ball=>{
         ball.update()
     })
  requestAnimationFrame(animate);  
    
}

animate()

function randomIntNumber(min, max){
  return  Math.floor(Math.random()*(max-min+1)+min)
}

