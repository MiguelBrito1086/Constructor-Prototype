//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, color, owner) {
  this.status = 'normal'
  this.color = color
  this.owner = owner
  this.name = name
  this.hungry = true
}

let sadie = new Dog('sadie')
let moonshine = new Dog('moonshine')
let atticus = new Dog('atticus')
sadie.color = 'black'
sadie.hungry = false
// Instances of Dog
// Needed = sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
  this.name = name
  this.cool = true
  this.pet = function (dog) {
    dog.status  = 'happy'
  }
  this.feed = function (dog) {
    dog.hungry = false
  }
}

let mason = new Human('mason')
let julia = new Human('julia')
mason.cool = false
// Instances of Human
// Needed: mason, julia
