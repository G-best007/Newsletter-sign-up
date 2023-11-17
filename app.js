







function ValidationForm(event) {
  event.preventDefault()

  const email = document.querySelector('.email')
  const redLabel = document.querySelector('.redLabel')
  const smallHeroBtn = document.querySelector('.smallHeroBtn')
  const showEmail = document.querySelector('.showemail')
  const card = document.querySelector('.card')
  const smallHero = document.querySelector('.smallHero') 


  let inputEmail = email.value
  // Email validation Regex
  let emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // check if email is valid
  if (!emailValidation.test(inputEmail)) {
        redLabel.textContent = 'Valid email required'
        redLabel.style.color = 'red'
        email.classList.add("error")
        
  } else {
    redLabel.textContent = ''
    redLabel.style.color = 'none'
    email.classList.remove("error")
    card.classList.add('active')
    smallHero.classList.add('active')
    showEmail.textContent = inputEmail

  }


  smallHeroBtn.addEventListener('click', () => {
    card.classList.remove('active')
    smallHero.classList.remove('active')
    email.value = ''

})
}



