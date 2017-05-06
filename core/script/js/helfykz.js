
console.log('JE TAIME MON AMOUR')

x = 0
y = 0
d = null
fireballs = []
mechants = []
SCORE = 0

INIT = function() {
  document.getElementById('score').innerHTML = 'SCORE : ' + SCORE
}
INIT()

AddScore = function(pts) {
  SCORE += pts
  document.getElementById('score').innerHTML = 'SCORE : ' + SCORE
}


FIREBALL = function() {
  ou = d
  fireball = document.createElement('div')
  fireball.className += 'fireball'
  arena = document.getElementById('ARENA')
  arenaPos = getOffset(arena)
  fireball.style.left = arenaPos.x + x + 'px'
  fireball.style.top = arenaPos.y + y + 'px'
  arena.appendChild(fireball)
  fireballs.push({
    x: x,
    y: y,
    d: ou,
    element: fireball
  })
}


distance = function(a, b) {
  return Math.pow(Math.abs(a.x - b.x), 2) + Math.pow(Math.abs(a.y - b.y), 2)
}


checkFireballs = function() { mechants = mechants.filter(f => !f.DELETE) }
checkMechants = function() { fireballs = fireballs.filter(f => !f.DELETE) }




updateMechant = function() {
  mechants.forEach(m => {
    speed = 1
    if (x > m.x) m.x += speed
    else if (x < m.x) m.x -= speed
    if (y > m.y) m.y += speed
    else if (y < m.y) m.y -= speed
    arena = document.getElementById('ARENA')
    arenaPos = getOffset(arena)
    m.element.style.left = arenaPos.x + m.x + 'px'
    m.element.style.top = arenaPos.y + m.y + 'px'
  })
  setTimeout(updateMechant, 10)
}
updateMechant()

update = function() {
  fireballs.forEach(f => {
    speed = 5
    if (f.d === 'haut') f.y = f.y - speed
    else if (f.d === 'bas') f.y = f.y + speed
    else if (f.d === 'gauche') f.x = f.x - speed
    else if (f.d === 'droite') f.x = f.x + speed
    if (f.x < 0 || f.x > 500 || f.y < 0 || f.y > 500) {
      f.DELETE = 1
      f.element.parentNode.removeChild(f.element)
    }
    else {
      arena = document.getElementById('ARENA')
      arenaPos = getOffset(arena)
      f.element.style.left = arenaPos.x + f.x + 'px'
      f.element.style.top = arenaPos.y + f.y + 'px'
    }
  })
  checkFireballs()

  mechants.forEach(m => {
    fireballs.forEach(f => {
      if (distance(m, f) < 120) {
        m.DELETE = 1
        if (m.element.parentNode) m.element.parentNode.removeChild(m.element)
        f.DELETE = 1
        if (f.element.parentNode) f.element.parentNode.removeChild(f.element)
        AddScore(1000)
      }
    })
  })

  checkMechants()
  checkFireballs()

  setTimeout(update, 10)
}
update()




keyEventListener =  event => {
  var key = event.keyCode
  if (key == 38) BOUGER('haut')
  else if (key == 40) BOUGER('bas')
  else if (key == 37) BOUGER('gauche')
  else if (key == 39) BOUGER('droite')
  else if (key == 32) FIREBALL()
}
document.addEventListener('keydown', keyEventListener, true)

BOUGER = function(ou) {
  speed = 50
  oldX = x
  oldY = y
  if (ou === 'haut') y = y - speed
  else if (ou === 'bas') y = y + speed
  else if (ou === 'gauche') x = x - speed
  else if (ou === 'droite') x = x + speed
  if (x < 0 || x > 500) x = oldX
  if (y < 0 || y > 500) y = oldY
  flo = document.getElementById('flo')
  flo.style.left = x + 'px'
  flo.style.top = y + 'px'
  d = ou
}

ADDMECHANT = function() {
  offsetX = 50 * Math.floor((Math.random() * 10) + 1)
  offsetY = 50 * Math.floor((Math.random() * 10) + 1)
  rand = Math.floor((Math.random() * 4) + 1)
  if (rand == 1) offsetX = 0
  else if (rand == 2) offsetY = 0
  else if (rand == 3) offsetX = 500
  else offsetY = 500

  mechant = document.createElement('div')
  mechant.className += 'mechant1'
  arena = document.getElementById('ARENA')
  arenaPos = getOffset(arena)
  mechant.style.left = arenaPos.x + offsetX + 'px'
  mechant.style.top = arenaPos.y + offsetY + 'px'
  arena.appendChild(mechant)
  mechants.push({
    x: offsetX,
    y: offsetY,
    element: mechant
  })
  setTimeout(ADDMECHANT, 1000)
}
setTimeout(ADDMECHANT, 3000)

function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    x: el.left + window.scrollX,
    y: el.top + window.scrollY
  }
}