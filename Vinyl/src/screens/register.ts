import "../components/export"
import { dispatch } from "../Strore/index";
import { navigate } from "../Strore/actions";
import { addObserver } from "../Strore/index"
import { Screens } from "../Types/types";

export default class Register extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this)

    }

    connectedCallback(){
        this.render();
              
    }

    handleRegisterButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.HOME}));
        console.log('Click handle button') 
        }

        //const btn = this.shadowRoot?.querySelector("button");
        //btn?.addEventListener("click", ()=> {
            //const event = 
            //new CustomEvent("user-registered", {
             //   composed: true
            //});

            //this.dispatchEvent(event);
            //alert("User-created");
            //console.log("Se registró con exito");
            
        //})

    

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/register.css">
<section>

        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Register</h2>
                    
                    <div class="inputbox">
                       <input type="email" required>
                       <label for="">Email</label>
                    </div>

                    <div class="inputbox">
                       <input type="text" required>
                       <label for="">Name</label>
                    </div>

                    <div class="inputbox">
                       <input type="password" required>
                       <label for="">Password</label>
                    </div>

                    <div class="inputbox">
                       <input type="password" required>
                       <label for="">Confirme Password</label>
                    </div>


                    <div class="forget">
                       <label for=""><input type="checkbox">
                       <a href="#">I agree</a>
                    </div>
                    <button class="toregister">Continue</button>
                    

                </form>
            </div>

        </div>
</section>

        `;
        const button = this.shadowRoot?.querySelector('.toregister');
        console.log(button);
        button?.addEventListener("click", this.handleRegisterButton);
    }
}

customElements.define("my-register", Register);