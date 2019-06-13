import { templateLogin } from './templateLogin.js';
import { observer } from '../js/firebaseAuth.js';
import { signOut } from '../js/firebaseAuth.js';
import { createPost } from '../js/firebasePost.js';

export const templateProject = () => {
  observer();
  document.getElementById('root').innerHTML = `<p>Template Project</p>
  
  <p id="message"></p>
                                              
  
  <textarea name="post" id="post" cols="30" rows="10"></textarea>
  <button id="posting">Publicar</button>
                                              <button id="sign-out">Cerrar sesión</button>
                                              `
                            
  
// btn posting
document.getElementById('posting').addEventListener('click', () => {
  let textPost = document.getElementById('post').value;
createPost( textPost)
})

  // btn sign out
  document.getElementById('sign-out').addEventListener('click', () => {
signOut();
templateLogin();
window.location.hash = '#/login';
  });
}