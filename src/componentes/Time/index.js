import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {

    const css1 = { backgroundColor: props.corSecundaria };
    const css2 = { borderColor: props.corPrimaria };

    return (
        <section className='time' style={css1}>
            <h3 style={css2}>{props.nome}</h3>
            {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
        </section>
    )
}

export default Time;