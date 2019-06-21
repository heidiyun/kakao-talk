import { Vue, Component } from 'vue-property-decorator';
import { Auth } from '@/firebaseInit';
import firebase, { auth } from 'firebase';
import User from './user';

@Component
export default class Login extends Vue {
  private user?: User;
  private hasUser: boolean = false;

  private mounted() {
    this.hasUser = false;
    Auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.hasUser = true;
        this.user = new User(user.displayName!, user.email!, user.photoURL!);
      } else {
        this.hasUser = false;
        console.log(this.hasUser);
      }
    });
  }

  private clickLoginButton() {
    Auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    Auth.getRedirectResult().then(function(result) {
      console.log(result.user);
    });
  }

  private clickLogoutButton() {
    Auth.signOut()
      .then(() => {
        this.hasUser = false;
        console.log('sign Out');
      })
      .catch(function(error) {
        console.log('failed sign Out');
      });
  }
}
