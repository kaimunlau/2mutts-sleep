const logoUrls = [
    'img/logos/2MUTTS-logo-v3_ANIM-1.svg',
    'img/logos/2MUTTS-logo-v3_ANIM-2.svg',
    'img/logos/2MUTTS-logo-v3_ANIM-3.svg',
    'img/logos/2MUTTS-logo-v3_ANIM-4.svg',
    'img/logos/2MUTTS-logo-v3_ANIM-5.svg',
    'img/logos/2MUTTS-logo-v3_ANIM-2.svg',
    'img/logos/2MUTTS-logo-v3_ANIM-5.svg',
]
const muttsLogo = document.getElementById('mutts-logo');

let startingMuttIndex = 1;

const switchMuttFrame = () => {
    if (startingMuttIndex >= logoUrls.length) {
        startingMuttIndex = 0
    }

    muttsLogo.setAttribute('src', logoUrls[startingMuttIndex])

    startingMuttIndex++;
}

setInterval(switchMuttFrame, 700)