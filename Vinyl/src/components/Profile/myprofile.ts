import "../export";
import { addObserver, dispatch } from "../../Strore/index";
import { navigate } from "../../Strore/actions";
import { Screens } from "../../Types/types";

export enum ProfileAttributes {
    "profile_img" = "profile_img",
    "profile_name" = "profile_name"
}

export default class Myprofile extends HTMLElement {

    profile_img?: string;
    profile_name?: string;

    static get observedAttributes(){
        const attrs: Record <ProfileAttributes, null> = {

            profile_img: null,
            profile_name: null

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: ProfileAttributes,
        _: unknown,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue
                break;
        }
    }

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
        <link rel="stylesheet" href="../src/components/Profile/myprofile.css">

        <div class="Profile">
        <div class="user_info">
        <img src="${this.profile_img}" class="like-img"></img>
        <h4>Profile</h4>
        <h1 class="profile_name">${this.profile_name}</h1>
        </div>
        <div class="change_info">
        <h3 class"password_text" >Change Password</h3>

        <div class="inputbox">
          <input type="password" required>
          <label for="">Old Password</label>
        </div>

        <div class="inputbox">
          <input type="password" required>
          <label for="">New Password</label>
        </div>

        <button class="Change_btn">Change</button>
        </div>
        <div class="options">
        <button class="btn">Settings</button>
        <button class="btn">Get Premium</button>
        <button class="btn">Help</button>
        <button class="btn">Sign Out</button>
        </div>
        </div>
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

customElements.define("my-componentprofile", Myprofile);