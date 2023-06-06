import { data } from "../../data";
import { DataShape } from "../../data";


export enum CardsLikeAttributes {
    "card_img" = "card_img",
    "artist_name" = "artist_name",
    "song_name" = "song_name",
}

export default class CardsLike extends HTMLElement {
    card_img?: string;
    artist_name?: string;
    song_name?: string;

    static get observedAttributes(){
        const attrs: Record <CardsLikeAttributes, null> = {
            card_img: null,
            artist_name: null,
            song_name: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: CardsLikeAttributes,
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
            <link rel="stylesheet" href="../src/components/CardsLike/CardsLike.css">
            <img src="${this.card_img}" class="like-img"></img>
            <h1>${this.artist_name}</h1>
            <h1>${this.song_name}</h1>
            `;
        }
    }
}

customElements.define("my-cardslike", CardsLike);