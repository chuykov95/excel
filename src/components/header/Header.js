import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import * as action from '@/redux/actions';
import {defaultTitle} from '@/constants';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    });
  }

  toHTML() {
    const title = this.store.getState().appTitle || defaultTitle
    return `
            <input type="text" class="input" value="${title}">

            <div>

                <div class="button">
                    <i class="material-icons">exit_to_app</i>
                </div>

                <div class="button">
                    <i class="material-icons">delete</i>
                </div>

            </div>
        `
  }

  onInput(event) {
    this.$dispatch(action.changeTitle({
      value: $(event.target).text()
    }))
  }
}
