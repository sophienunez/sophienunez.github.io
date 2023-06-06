import { addObserver, appState } from "../../Strore/index";

class List extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this)
    }

        connectedCallback(){
            this.render();
        }

        render(){
           
            if(this.shadowRoot)
            this.shadowRoot.innerHTML = "";

            appState.products.forEach((p) => {
            const pContainer = this.ownerDocument.createElement("article");
            const ptittle = this.ownerDocument.createElement("h2");
            ptittle.textContent = p.name;

            const pPrice = this.ownerDocument.createElement("h2");
            pPrice.textContent = p.price;
            
            pContainer?.appendChild(ptittle)
            pContainer?.appendChild(pPrice)
            this.shadowRoot?.appendChild(pContainer);

            })
        }
    }
    
customElements.define ("my-list", List);
export default List;