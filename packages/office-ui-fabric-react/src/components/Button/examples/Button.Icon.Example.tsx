import * as React from 'react';
import { css, classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { getStyles, IButtonBasicExampleStyleProps, IButtonBasicExampleStyles } from './Button.Basic.Example.styles';
import { IconButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

const getClassNames = classNamesFunction<IButtonBasicExampleStyleProps, IButtonBasicExampleStyles>();

export class ButtonIconExample extends React.Component<IButtonProps> {
  public render(): JSX.Element {
    const { disabled, checked } = this.props;
    const classNames = getClassNames(getStyles, {});

    return (
      <div className={css(classNames.example)}>
        <IconButton disabled={disabled} checked={checked} iconProps={{ iconName: 'Emoji2' }} title="Emoji" ariaLabel="Emoji" />
        <p>
          For a list of Icons, visit our <a href="https://developer.microsoft.com/en-us/fabric#/styles/icons">Icon documentation</a>.
        </p>
      </div>
    );
  }
}
