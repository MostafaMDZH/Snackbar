declare class Snackbar {
    static List: Snackbar[];
    static readonly DEFAULT_HIDING_TIMEOUT: number;
    static readonly DEFAULT_POSITION: string;
    protected viewID: number;
    protected view: HTMLElement;
    protected message: string;
    protected position: string;
    protected iconSrc: string | undefined;
    protected theme: string | undefined;
    protected style: object | undefined;
    protected hideEventHandler: EventListenerOrEventListenerObject;
    protected actionText: string | undefined;
    protected onAction: (() => void) | undefined;
    protected waitForEvent: boolean;
    protected timeout: number;
    protected isWaitingForHide: boolean;
    protected afterHide: (() => void) | undefined;
    constructor(parameters: {
        message: string;
        position?: string;
        theme?: string;
        iconSrc?: string;
        style?: object;
        actionText?: string;
        onAction?: () => void;
        waitForEvent?: boolean;
        timeout?: number;
        afterHide?: () => void;
    });
    protected static appendCSS(): void;
    protected static generateViewID(): number;
    protected static getDOM(viewId: number): ChildNode;
    setMessage(message: string): void;
    setPosition(position: string): void;
    setIconSrc(iconSrc?: string): void;
    setTheme(theme?: string): void;
    setStyle(style?: object): void;
    setActionText(actionText?: string): void;
    protected setActionCallback(onAction?: () => void): void;
    protected show(): void;
    protected addHideEventListener(): void;
    protected removeHideEventListener(): void;
    protected handleHideEvent(): void;
    protected startHidingTimer(): void;
    protected hide(): void;
    protected static adjustListPositions(sb: Snackbar): void;
    protected getHeight(): number;
}
declare const Style = "\n.snackbar {\n    position: fixed;\n    transition: top 400ms ease 0s, bottom 400ms ease 0s, margin-top 300ms ease 0s, margin-bottom 300ms ease 0s, opacity 150ms ease 150ms;\n  }\n  .snackbar > .container {\n    box-sizing: border-box;\n    max-width: 450px;\n    min-height: 46px;\n    padding: 10px 20px;\n    border-radius: 3px;\n    background-color: rgb(58, 58, 58);\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n    display: flex;\n    color: rgb(250, 250, 250);\n    align-items: center;\n    gap: 10px;\n    transition: all 150ms ease-in-out;\n  }\n  .snackbar > .container * {\n    box-sizing: border-box;\n  }\n  .snackbar > .container > .icon {\n    width: 20px;\n    height: 20px;\n    margin-left: -3px;\n    margin-right: -2px;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    background-position: center center;\n    display: none;\n  }\n  .snackbar > .container > .message {\n    font-size: 0.9375rem;\n  }\n  .snackbar > .container > .actionButton {\n    height: 100%;\n    padding: 5px 3px;\n    background-color: transparent;\n    font-size: 0.9375rem;\n    color: #F7FF00;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    display: none;\n  }\n  \n  .snackbar.bottom-left {\n    left: 24px;\n    bottom: -60px;\n  }\n  \n  .snackbar.bottom-center {\n    left: 50%;\n    bottom: -60px;\n    transform: translate(-50%, 0);\n  }\n  \n  .snackbar.bottom-right {\n    right: 24px;\n    bottom: -60px;\n  }\n  \n  .snackbar.top-left {\n    left: 24px;\n    top: -60px;\n  }\n  \n  .snackbar.top-center {\n    left: 50%;\n    top: -60px;\n    transform: translate(-50%, 0);\n  }\n  \n  .snackbar.top-right {\n    right: 24px;\n    top: -60px;\n  }\n  \n  .snackbar.light > .container {\n    background-color: #fbfbfb;\n    color: #555;\n  }\n  .snackbar.light > .container > .actionButton {\n    color: #D60;\n  }\n  \n  @media only screen and (max-width: 500px) {\n    .snackbar {\n      max-width: calc(100% - 48px);\n    }\n    .snackbar.top-center,\n  .snackbar.bottom-center {\n      width: calc(100% - 24px);\n      max-width: unset;\n      left: 12px;\n      transform: translate(0, 0);\n      display: flex;\n      justify-content: center;\n    }\n  }/*# sourceMappingURL=snackbar.css.map */\n";
