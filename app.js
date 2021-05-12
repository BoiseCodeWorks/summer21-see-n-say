const animals = [
    { 
      name: "Cow", 
      sound: "Mooooo!", 
      img: "http://images.unsplash.com/photo-1564085352725-08da0272627d", 
      audio: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3" 
    },
    { 
      name: "Pig", 
      sound: "Oink Oink", 
      img: "https://images.unsplash.com/photo-1541689221361-ad95003448dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      audio: "https://soundbible.com/mp3/Cow_Moo-Mike_Koenig-42670858.mp3"
     },
     { 
      name: 'Chicken',
      sound: 'Cluck Cluck',
      img: 'https://i.pinimg.com/originals/d9/f0/0b/d9f00ba4308f752e32d44fa976ef3d2a.jpg',
      audio: 'https://orangefreesounds.com/wp-content/uploads/2021/05/Chickens-wandering-and-clucking-contentedly-sound-effect.mp3' 
    },
    { 
      name: 'Horse',
      sound: 'Neigh',
      img: 'https://www.treehugger.com/thmb/4POnzxta535OuxqNIRBWCUzK39M=/768x0/filters:no_upscale([…]ip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg',
      audio: 'https://orangefreesounds.com/wp-content/uploads/2020/04/Horse-neigh-sound-effect.mp3' 
    },
    { 
      name: 'Duck',
      sound: 'Quack',
      img: 'https://thumbs-prod.si-cdn.com/o5Kp96ifOzERP6ZFcAgLRFVXXjw=/fit-in/1600x0/filters:focal([…]ler/8b/10/8b107dd6-1092-4354-a5ee-5729e402973b/235044.jpg',
      audio: 'https://orangefreesounds.com/wp-content/uploads/2018/06/Duck-quacking-sound.mp3' 
    },
    { 
      name: 'Frog',
      sound: 'Ribbit',
      img: 'https://images.newscientist.com/wp-content/uploads/2020/09/22145012/big-frog-eyes.jpg',
      audio: 'https://orangefreesounds.com/wp-content/uploads/2020/02/Frog-sound-ribbit.mp3' 
    }
]

function findAnimal(animalName){
    if(typeof animalName != 'string'){
      throw new Error(`${animalName} is not a string`)
    }
   let found = animals.find(animal => animal.name == animalName)
   if(!found){
      throw new Error(`${animalName} is not found`)
   }
   drawAnimal(found)
}

function drawAnimal(animal){
  console.log(animal)
  
  const animalElem = document.getElementById('animal-details')
  animalElem.innerHTML = /*html*/ `
  
  <div>
    <img src="${animal.img}" class="img-fluid" onclick="spinTheAnimal(event)" />  
    <h1>
      ${animal.name} - ${animal.sound}
    </h1>
  </div>
  
  ` 
  playAnimalSound(animal)

}

function playAnimalSound(animal){
  const animalSoundPlayer = document.getElementById('sound-player')
  animalSoundPlayer.setAttribute('src', animal.audio)
  // @ts-ignore
  animalSoundPlayer.play()
}

function spinTheAnimal(event){
  console.log(event)
  const imgElem = event.target 
  imgElem.classList.add('spin')
  // wait for 1 second

  setTimeout(chooseRandomAnimal, 1000)


}

function chooseRandomAnimal(){
  const i = Math.floor(Math.random() * animals.length)
  const animal = animals[i]
  drawAnimal(animal)
}