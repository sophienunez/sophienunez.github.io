export default class Player extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot) this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/Player/Player.css">
        <section class="player">
        <img class="player-img" src="../src/img/cover1.jpg">
        <div class="player-info">
        <h1>Prisoner</h1>
        <h3>Miley Cyrus</h3>
        </div>
        </section>
        `;
    }
}

customElements.define("my-player", Player);