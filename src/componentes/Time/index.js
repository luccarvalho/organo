import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props) => {

    const css1 = { backgroundColor: props.corSecundaria };
    const css2 = { borderColor: props.corPrimaria };

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css1}>
            <h3 style={css2}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
            : ''
    )
}

export default Time;