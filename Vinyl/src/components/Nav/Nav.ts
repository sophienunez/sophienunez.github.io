import "../export"
import { dispatch } from "../../Strore/index";
import { navigate } from "../../Strore/actions";
import { Screens } from "../../Types/types";

export default class Nav extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();         
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

    handleProfileButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.PROFILE}));
          console.log('Click handle button to profile') 
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/Nav/Nav.css">
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
        `;

        const btnlibrary = this.shadowRoot?.querySelector('.tolibrary');
        console.log(btnlibrary);
        btnlibrary?.addEventListener("click", this.handleLibraryButton);

        const btnlikes = this.shadowRoot?.querySelector('.tolikes');
        console.log(btnlikes);
        btnlikes?.addEventListener("click", this.handleLikesButton);
        
        const btnprofile = this.shadowRoot?.querySelector('.toprofile');
        console.log(btnprofile);
        btnprofile?.addEventListener("click", this.handleProfileButton);
    }
}

customElements.define("my-nav", Nav);