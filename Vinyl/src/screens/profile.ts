import { addObserver, dispatch } from "../Strore/index";
import { navigate } from "../Strore/actions";
import { Screens } from "../Types/types";

export default class Profile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
        addObserver(this)
    }

    connectedCallback(){
        this.render();         
    }

    handlehomeButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.HOME}));
          console.log('Click handle button to back to home') 
    }

    handleLibraryButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.LIBRARY}));
          console.log('Click handle button to library') 
    }


    handleLikesButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.LIKES}));
          console.log('Click handle button to likkes') 
    }

    handleSignOutButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.SIGNOUT}));
          console.log('Click Sign Out') 
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/profile.css">
        <div id="sidebar">
        <nav class="nav">
        <h2>Vinyl</h2>
        <h3>Hello!</h3>
         <ul>
         <input type="search" class="search" placeholder="Search">
         <div class="buttons">
         <button class="tohome">Home</button>
         <button class="tolibrary">Library</button>
         <button class="tolikes"><3</button>
         <button class="toprofile">Profile</button>
         </div>
         </ul>
        </nav>
        </div>
        <my-componentprofile class="profile"></my-componentprofile>
        `;

        const btnhome = this.shadowRoot?.querySelector('.tohome');
        console.log(btnhome);
        btnhome?.addEventListener("click", this.handlehomeButton);
        
        const btnlibrary = this.shadowRoot?.querySelector('.tolibrary');
        console.log(btnlibrary);
        btnlibrary?.addEventListener("click", this.handleLibraryButton);

        const btnlikes = this.shadowRoot?.querySelector('.tolikes');
        console.log(btnlikes);
        btnlikes?.addEventListener("click", this.handleLikesButton);

        const btnsignout = this.shadowRoot?.querySelector('.sign_out');
        console.log(btnsignout);
        btnsignout?.addEventListener("click", this.handleSignOutButton);
    }
}

customElements.define("my-profile", Profile);