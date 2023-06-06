import "../../components/export";
import { data } from "../../data";
import { DataShape } from "../../data";

export enum CardsSuggestionAttributes {
    "song_name" = "song_name",
    "album_name" = "album_name",
    "card_img" = "card_img"
}

export default class CardsSuggestion extends HTMLElement {
    album_name?: string;
    song_name?: string;
    card_img? : string


    static get observedAttributes(){
        const attrs: Record <CardsSuggestionAttributes, null> = {
            album_name: null,
            song_name: null,
            card_img : null

        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: CardsSuggestionAttributes,
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

    render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/CardsSuggestion/CardsSuggestion.css">
            <img src="${this.card_img}" class="imgs">
            <h1>${this.album_name}</h1>
            <h1>${this.song_name}</h1>  
            
            `;
        }
    }
}

customElements.define("my-cardssuggestion", CardsSuggestion);