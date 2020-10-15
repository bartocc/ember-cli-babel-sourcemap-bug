import Component from '@glimmer/component';

export default class ComponentWithNamespaceStructureComponent extends Component {
  get name() {
    debugger;
    return this.constructor.name
  }
}
