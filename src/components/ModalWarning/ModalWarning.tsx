import ReactDOM from "react-dom";
import Backdrop from 'components/ModalWarning/Backdrop';
import ModalOverlay from 'components/ModalWarning/ModalOverlay';
import { TUser } from 'model/model-card';

function ModalWarning(props: { onClick: Function, userInfo: TUser }) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, document.getElementById('backdrop-root') as HTMLElement)}
            {ReactDOM.createPortal(<ModalOverlay onClick={props.onClick} userInfo={props.userInfo} />, document.getElementById('overlay-root') as HTMLElement)}
        </>
    )
}

export default ModalWarning;