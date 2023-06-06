import './screens/export';
import {addObserver, appState} from "./Strore/index"
import { Screens } from "./Types/types";


class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;
        switch (appState.screens) {

            case Screens.LOGIN:
                this.shadowRoot.innerHTML =`<my-login></my-login>`;
            break;

            case Screens.REGISTER:
                this.shadowRoot.innerHTML = `<my-register></my-register>`;
            break;

            case Screens.HOME:
                this.shadowRoot.innerHTML = `<my-home></my-home>`;
            break;

            case Screens.LIBRARY:
                this.shadowRoot.innerHTML = `<my-library></my-library>`;
            break;

            case Screens.LIKES:
                this.shadowRoot.innerHTML = `<my-likes></my-likes>`;
            break;

            case Screens.PROFILE:
            this.shadowRoot.innerHTML = `<my-profile></my-profile>`;
            break;

            /*LIBRARY TO LIKES*/ 

            case Screens.LIBRARY:
                this.shadowRoot.innerHTML = `<my-likes></my-likes>`;
            break;
            
            default:
            break;
    } 
 }
}

customElements.define('app-container', AppContainer)