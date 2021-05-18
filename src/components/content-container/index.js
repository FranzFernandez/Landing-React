import './index.css';
import BotonModal from './../button';
import TitleLanding from './../title';
import Text from './../text';


const ContentContainer = () => {
    return (
        <div className="content-container">
            <div class="content-container-title">
                <TitleLanding title="PRÓXIMA MENTE" color="#000" fontSize="90px" letterSpacing="15px"/>
                <Text text="¡Vamos a celebrar el lanzamiento de nuestro nuevo sitio!" color="#000" fontSize="15px" letterSpacing="2px"/>
                <BotonModal button="Notificarme" backgroundColor="#0C1B33" fontSize="16px"/>
            </div>
        </div>
    );
}

export default ContentContainer;