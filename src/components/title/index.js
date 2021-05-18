import './index.css';

const TitleLanding = (props) => {
    const { title, color, fontSize, letterSpacing } = props;

    return (
        <h1 style={{ color, fontSize, letterSpacing }}className="landing-title"><br></br>
            {title}
        </h1>
    );
}

export default TitleLanding;