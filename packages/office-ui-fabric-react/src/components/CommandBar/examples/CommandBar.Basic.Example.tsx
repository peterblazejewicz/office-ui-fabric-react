import * as React from 'react';
import { assign } from 'office-ui-fabric-react/lib/Utilities';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

export class CommandBarBasicExample extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      isSearchBoxVisible: true,
      areNamesVisible: true,
      areIconsVisible: true,
      areItemsEnabled: true
    };
  }

  public render() {
    let { items, overflowItems, farItems } = this.props;
    let {
      isSearchBoxVisible: searchBoxVisible,
      areIconsVisible: iconsVisible,
      areNamesVisible: namesVisible,
      areItemsEnabled: itemsEnabled
    } = this.state;

    let filteredItems = items.map((item: any) => assign({}, item, {
      iconOnly: !namesVisible,
      icon: iconsVisible ? item.icon : '',
      disabled: !itemsEnabled
    }));

    let filteredOverflowItems = overflowItems.map((item: any) => assign({}, item, {
      iconOnly: !namesVisible,
      icon: iconsVisible ? item.icon : '',
      disabled: !itemsEnabled
    }));

    let filteredFarItems = farItems.map((item: any) => assign({}, item, {
      iconOnly: !namesVisible,
      icon: iconsVisible ? item.icon : '',
      disabled: !itemsEnabled
    }));

    return (
      <div>
        <Toggle
          label='Show search box'
          checked={ searchBoxVisible }
          // tslint:disable-next-line:jsx-no-lambda
          onChanged={ isSearchBoxVisible => this.setState({ isSearchBoxVisible }) }
          onText='Visible'
          offText='Hidden'
        />
        <Toggle
          label='Show names'
          checked={ namesVisible }
          // tslint:disable-next-line:jsx-no-lambda
          onChanged={ areNamesVisible => this.setState({ areNamesVisible }) }
          onText='Visible'
          offText='Hidden'
        />
        <Toggle
          label='Show icons'
          checked={ iconsVisible }
          // tslint:disable-next-line:jsx-no-lambda
          onChanged={ areIconsVisible => this.setState({ areIconsVisible }) }
          onText='Visible'
          offText='Hidden'
        />
        <Toggle
          label='Enable Items'
          checked={ itemsEnabled }
          // tslint:disable-next-line:jsx-no-lambda
          onChanged={ areItemsEnabled => this.setState({ areItemsEnabled }) }
          onText='Visible'
          offText='Hidden'
        />
        <CommandBar
          isSearchBoxVisible={ searchBoxVisible }
          searchPlaceholderText='Search...'
          elipisisAriaLabel='More options'
          items={ filteredItems }
          overflowItems={ filteredOverflowItems }
          farItems={ filteredFarItems }
        />
      </div>
    );
  }
}