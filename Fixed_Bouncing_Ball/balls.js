function Ball() {

  this.diameter = 50
  this.radius = this.diameter / 2
  this.xpos = this.radius
  this.ypos = this.radius
  this.xspeed = 2
  this.yspeed = 2.4

  this.show = function() {
    fill(100, 0, 160)
    circle(this.xpos, this.ypos, this.diameter)
  }

  this.move = function() {
    this.xpos = this.xpos + this.xspeed
    this.ypos = this.ypos + this.yspeed
  }
  this.bounce = function() {
    if (this.xpos + this.radius > width || this.xpos - this.radius < 0) {
      this.xspeed = this.xspeed * -1
    }
    if (this.ypos + this.radius > height || this.ypos - this.radius < 0) {
      this.yspeed = this.yspeed * -1
    }
  }
}