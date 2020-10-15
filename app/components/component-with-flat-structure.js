import Component from '@glimmer/component';

export default class ComponentWithFlatStructureComponent extends Component {
  get name() {
    debugger;
    return this.constructor.name
  }
}
