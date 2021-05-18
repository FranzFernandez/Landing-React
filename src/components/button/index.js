import './index.css';

const BotonModal = (props) => {
    const { button, backgroundColor, fontSize } = props;

    return (
        <div className="button" style={{ backgroundColor, fontSize }}>
            { button }
        </div>
    );
}

export default BotonModal;