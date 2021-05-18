import './index.css';

const Modal = (props) => {
    const { visible } = props;

    return visible ? (
        <div className="landing-modal-container">
            <div className="landing-modal">
                <div className="landing-modal--close">

                </div>
                <div className="landing-modal--overlay"></div>
            </div>
        </div>
    ) :
    null;

    // if (visible) {
    //     return
    //     (<div className="landing-modal-container">
    //         <div className="landing-modal">
    //             <div className="landing-modal--close">

    //             </div>
    //             <div className="landing-modal--overlay"></div>
    //         </div>
    //     </div>)
    // }
    // return null
}

export default Modal;