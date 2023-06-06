import {CardsSuggestionAttributes} from "../CardsSuggestion/CardsSuggestion";
import "../export";
import "../../components/export";
import { data } from "../../data";
import { DataShape } from "../../data";


export enum SuggestionAttributes {

    "song_name" = "song_name",
    "album_name" = "album_name",
    "card_img" = "card_img"

}

export default class Suggestions extends HTMLElement {

    song_name: string = "";
    album_name: string = "";
    card_img : string = ""


    static get observedAttributes(){
        const attrs: Record <SuggestionAttributes, null> = {

            song_name: null,
            album_name: null,
            card_img: null
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: SuggestionAttributes,
        _: unknown,
        newValue: string
    ){
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/Suggestions/suggestions.css">

        `;

        const container = this.ownerDocument.createElement('section');
        container.classList.add("suggestions")

        const cardsFigure = this.ownerDocument.createElement('my-cardssuggestion');
        cardsFigure.setAttribute(CardsSuggestionAttributes.card_img, this.card_img);
        cardsFigure.setAttribute(CardsSuggestionAttributes.song_name, this.song_name);
        cardsFigure.setAttribute(CardsSuggestionAttributes.album_name, this.album_name);


        container.appendChild(cardsFigure);

        this.shadowRoot?.append(container);
    }
}

customElements.define('my-suggestions', Suggestions);