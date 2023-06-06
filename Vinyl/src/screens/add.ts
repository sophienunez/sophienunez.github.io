import { addObserver, dispatch } from "../Strore/index";
import { saveproduct, navigate } from "../Strore/actions";
import { SomeActions } from "../Types/store";
import { Product } from "../Types/products";
import { Screens } from "../Types/types";
import "../components/Productsadded/productsadded"

const userInputs: Product = {
    name: "",
    price: "0",
};

export default class Add extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this)
    }

    connectedCallback(){
        this.render();
    }

    handlehomeButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload: Screens.HOME}))
        console.log('Click handle button to back to home') 
    }

    handleAddButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload: Screens.LIBRARY}))
          console.log('Click handle button to library') 
    }

    handleLikesButton(event: any) {
        event?.preventDefault();
        dispatch(navigate({payload: Screens.LIKES}))
          console.log('Click handle button to likes') 
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/screens/add.css">
        `;

        const container = this.ownerDocument.createElement("div");
        container.classList.add("container")

        const tittle = this.ownerDocument.createElement("h2");
        tittle.classList.add("tittle")
        tittle.textContent = "Sell your Favorites"

        const inputscont = this.ownerDocument.createElement("div");
        inputscont.classList.add("inputscont")

        const name = this.ownerDocument.createElement("input");
            name.type = "text";
            name.placeholder = "Vinyl Name";
            name.addEventListener ("change", (e: any) => {
                userInputs.name = e.target.value; 
                
            });

            const price = this.ownerDocument.createElement("input");
            price.type = "number";
            price.placeholder = "Price";
            price.addEventListener ("change", (e: any) => {
                userInputs.price = e.target.value; 
            });
            
            const button = this.ownerDocument.createElement("button");
            button.textContent = "Save";
            button.addEventListener("click", async () => {
                console.log(userInputs);
                dispatch(await saveproduct(userInputs))
                
            })
           container.appendChild(tittle);
           inputscont.appendChild(name);
           inputscont.appendChild(price);
           inputscont.appendChild(button);
           
           this.shadowRoot?.appendChild(container)
           container.appendChild(inputscont);

        }
    }

customElements.define("my-add", Add);