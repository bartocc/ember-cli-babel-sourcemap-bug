import Component from '@glimmer/component';

export default class ComponentWithClassicStructureComponent extends Component {
  get name() {
    debugger;
    return this.constructor.name
  }
}
