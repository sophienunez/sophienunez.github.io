import { LikesAttributes } from "../components/Likes/Likes";
import { SuggestionAttributes } from "../components/Suggestions/Suggestions";
import "../components/export";
import { data } from "../data";
import { DataShape } from "../data";
import { addObserver, dispatch } from "../Strore/index";
import { getProduct, navigate } from "../Strore/actions";
import { Screens } from "../Types/types";
import firebase from "../Utils/firebase";

export default class Home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this)
    }

    async connectedCallback(){
        //dispatch(await getProduct())
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/home.css">
        `;

        const nav = this.ownerDocument.createElement("my-nav")
        const player = this.ownerDocument.createElement("my-player")
        const add = this.ownerDocument.createElement("my-add")
        const list = this.ownerDocument.createElement("my-list")

        this.shadowRoot?.appendChild(nav);
        this.shadowRoot?.appendChild(player);
        this.shadowRoot?.appendChild(add);
        this.shadowRoot?.appendChild(list);
    }
}

customElements.define("my-home", Home);
