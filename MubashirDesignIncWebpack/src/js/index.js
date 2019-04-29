// Global app controller
// IMPORT THE CSS FILE into the main app JS or else the CSS file wont generate when npm build is run
import '../sass/main.scss';

history.replaceState(null, null, ' ');

document.querySelector('.index__front--btn').addEventListener('click', () => {
    document.querySelector('.index__front').classList.add("flip-180");
    document.querySelector('.index__back').classList.add("flip-reset");
}
)

const baseURI = window.location.href;

window.addEventListener("hashchange" , e => {

    switch (e.newURL) {
        case baseURI + "#portfolio":
        document.querySelector('#portfolio').classList.remove('hidden');
        document.querySelector('#resources').classList.add('hidden');
        //apply hidden to rest
        break;
        case baseURI + "#resources":
        document.querySelector('#resources').classList.remove('hidden');
        document.querySelector('#portfolio').classList.add('hidden');
       break; 
      }
  });