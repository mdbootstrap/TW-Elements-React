import { BaseComponent } from "../../types/baseComponent";

interface ModalTheme {
  show?: string;
  static?: string;
  staticProperties?: string;
  wrapper?: string;
}

interface ModalProps extends BaseComponent {
  appendToBody?: boolean;
  backdrop?: boolean;
  closeOnEsc?: boolean;
  leaveHiddenModal?: boolean;
  modalRef?: React.RefObject<any>;
  scrollable?: boolean;
  show: boolean;
  setShow?: React.SetStateAction<any>;
  staticBackdrop?: boolean;
  tag?: React.ComponentProps<any>;
  theme?: ModalTheme;
  onHide?: () => void;
  onHidePrevented?: () => any;
  onShow?: () => void;
}

export { ModalProps };
