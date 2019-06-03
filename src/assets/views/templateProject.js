import { templateHome } from './templateHome.js';
import { signOut } from '/assets/js/firebaseAuth.js';

export const templateProject = () => {
  document.getElementById('root').innerHTML = `<p>Template Project</p>
  
                                              <button id="btn-home">Ir a Home</button>
                                              <button id="sign-out">Cerrar sesión</button>`
                            
  /*document.getElementById('btn-home').addEventListener('click', () => {
    templateHome();
    window.location.hash = '#/home';
  })*/

  // btn sign out
  document.getElementById('sign-out').addEventListener('click', () => {
signOut();
templateHome();
window.location.hash = '#/home';
  });
}