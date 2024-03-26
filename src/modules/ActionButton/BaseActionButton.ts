// Right now, I may have up to 8 action buttons

class BaseActionButton {
  buttonType: string;
  buttonIcon: React.JSX.Element;
  positioning: string;
  transition: string;
  size: string;

  constructor(
    buttonType: string,
    buttonIcon: React.JSX.Element,
    positioning: string,
    transition: string,
    size: string
  ) {
    this.buttonType = buttonType;
    this.buttonIcon = buttonIcon;
    this.positioning = positioning;
    this.transition = transition;
    this.size = size;
  }
}

export default BaseActionButton;
