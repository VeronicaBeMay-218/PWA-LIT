import {LitElement, html, css, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {animate} from '@lit-labs/motion';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({type: Boolean}) big = false;
  @property({type: Number}) duration = 500;
  @state() _renderCount = 0;

  static styles = css`
    .bar {
      background: red;
      height: 2em;
      width: 10vw;
    }

    .big {
      width: 50vw;
    }
  `;

  setDuration(e: Event) {
    const v = (e.target as HTMLSelectElement).value;
    this.duration = Number.parseInt(v);
  }

  shouldUpdate(changedProperties: PropertyValues<this>): boolean {
    return !(changedProperties.size === 1 && changedProperties.has('duration'));
  }
  import {LitElement, html, PropertyValues} from 'lit';
  import {customElement, property} from 'lit/decorators.js';
  
  @customElement('my-element')
  export class MyElement extends LitElement {
    @property() forward = '';
    @property() backward = '';
  
    willUpdate(changedProperties: PropertyValues<this>) {
      if (changedProperties.has('forward')) {
        this.backward = this.forward.split('').reverse().join('');
      }
  
      if (changedProperties.has('backward')) {
        this.forward = this.backward.split('').reverse().join('');
      }
    }
  
    onInput(e: Event) {
      const inputEl = e.target as HTMLInputElement;
      if (inputEl.id === 'forward') {
        this.forward = inputEl.value;
      } else {
        this.backward = inputEl.value;
      }
    }
  
    render() {
      return html`
        <label>Forward: <input id="forward" @input=${this.onInput} .value=${this.forward}></label>
        <label>Backward: <input id="backward" @input=${this.onInput} .value=${this.backward}></label>
        <div>Forward text: ${this.forward}</div>
        <div>Backward text: ${this.backward}</div>
      `;
    }
  }