import "../components/export"
import { addObserver, appState, dispatch } from "../Strore/index";
import { navigate } from "../Strore/actions";
import { Screens } from "../Types/types";
import firebase from "../Utils/firebase";
import "../indexfireb" 

const Credentials = {
    email: "",
    password: "",
}

export default class Login extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this);
    }

    connectedCallback(){
        this.render();
        console.log(appState.screens);
    }

    //async handleLoggedButton() {
      //  const resp = await firebase.loginUser(Credentials);
        //if(resp){
          //  dispatch(navigate({payload: Screens.HOME}));
        //}
        //console.log(resp);
  //  }

  handleLoginButton() {
            
    dispatch(navigate({payload:Screens.HOME}));
  }

    

             handletoRegisterButton(event:any){
                event?.preventDefault();
                dispatch(navigate({payload:Screens.REGISTER}));
                
             }
    render(){
        if(!this.shadowRoot) return;
         this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/login.css">
        <section>
        
                <div class="form-box">
                    <div class="form-value">
                        <form action="">
                            <h2>Log In</h2>
                            
                            <div class="inputbox">
                               <input type="email" class="email" required>
                               <label for="">Email</label>
                            </div>
        
                            <div class="inputbox">
                               <input type="password" class= "password" required>
                               <label for="">Password</label>
                            </div>
        

                            <div class="forget">
                               <label for="">
                               <a href="#">Did You Forget Your Password</a>
                            </div>
                            <div class="registered">
                               <label for="">
                               <a class="registro">¿No tienes una cuenta? Registrate</a>
                            </div>
                            <button class="home">Continue</button>
                        </form>
                    </div>
                </div>
        </section>
        
        `;
        const email = this.shadowRoot?.querySelector('.email');
        email?.addEventListener("change", (event: any) => (Credentials.email) = event.target.value)

        const password = this.shadowRoot?.querySelector('.password');
        password?.addEventListener("change", (event: any) => (Credentials.password) = event.target.value)

        const button = this.shadowRoot?.querySelector('.home');
        button?.addEventListener("click", this.handleLoginButton);

        const buttontoregister = this.shadowRoot?.querySelector('.registro');
        buttontoregister?.addEventListener("click", this.handletoRegisterButton);
    }
}

customElements.define("my-login", Login);