import "../export"
import "../../components/export"
import { SuggestionAttributes } from "../Suggestions/Suggestions";
import { dispatch } from "../../Strore/index";
import { navigate } from "../../Strore/actions";
import { Screens } from "../../Types/types";
import { data } from "../../data";
import { DataShape } from "../../data";

export enum LibraryAttributes {
    "song_name" = "song_name",
    "album_name" = "album_name",
    "card_img" = "card_img"

}

export default class Library extends HTMLElement {

    album_name?: string;
    song_name?: string;
    card_img?: string;


    static get observedAttributes(){
        const attrs: Record <LibraryAttributes, null> = {

            album_name: null,
            song_name: null,
            card_img: null

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: LibraryAttributes,
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
    }

    connectedCallback(){
        this.render();
    }

    handlehomeButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.HOME}));
          console.log('Click handle button to back to home') 
    }

    handleLikesButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.LIKES}));
          console.log('Click handle button to likes') 
    }

    handleProfileButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload:Screens.PROFILE}));
          console.log('Click handle button to profile') 
    }
    
    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/Library/library.css">
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
            
            <div class="librarycontent">
            <h2>LIBRARY</h2>
            </div>
            `;

            data.forEach((elem: DataShape) => {
            
                const cardSuggestion = this.ownerDocument.createElement("my-suggestions");
    
                cardSuggestion.setAttribute(SuggestionAttributes.song_name, elem.song_name);
                cardSuggestion.setAttribute(SuggestionAttributes.album_name, elem.album_name);
                cardSuggestion.setAttribute(SuggestionAttributes.card_img, elem.card_img);

    
                this.shadowRoot?.appendChild(cardSuggestion);
            });

            
            const btnhome = this.shadowRoot?.querySelector('.tohome');
            console.log(btnhome);
            btnhome?.addEventListener("click", this.handlehomeButton);


            const btnlikes = this.shadowRoot?.querySelector('.tolikes');
            console.log(btnlikes);
            btnlikes?.addEventListener("click", this.handleLikesButton);

            const btnprofile = this.shadowRoot?.querySelector('.toprofile');
            console.log(btnprofile);
            btnprofile?.addEventListener("click", this.handleProfileButton);
        }
    }
}

customElements.define("my-library", Library);