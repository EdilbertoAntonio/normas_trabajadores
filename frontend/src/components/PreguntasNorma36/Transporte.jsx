import Label from '../Label';
import Select from '../Select';
import ImageRadioGroup from '../ImageRadioGroup';
import { InfoTooltip } from '../InfoTooltip';

const opcionesDistManosEsp = [
    {
        value: "cerca",
        label: "Cerca: Los brazos alineados verticalmente y con el torso erguido",
        image: "/images/norma36/dist_manos_esp_1.png",
        colorTheme: "green"
    },
    {
        value: "moderado_1",
        label: "Moderado: Los brazos se alejan del cuerpo.",
        image: "/images/norma36/dist_manos_esp_2.png",
        colorTheme: "orange"
    },
    {
        value: "moderado_2",
        label: "Moderado: Torso inclinado hacia adelante.",
        image: "/images/norma36/dist_manos_esp_3.png",
        colorTheme: "orange"
    },
    {
        value: "lejos",
        label: "Lejos: Los brazos se inclinan hacia fuera del cuerpo y el torso se inclina hacia adelante.",
        image: "/images/norma36/dist_manos_esp_4.png",
        colorTheme: "red"
        }
];

const opcionesCargaTorso = [
    {
        value: "simetrico",
        label: "La carga y las manos simétricamente enfrente del torso ",
        image: "/images/norma36/carga_torso_1.png",
        colorTheme: "green"
    },
    {
        value: "asimetrico",
        label: "La carga y las manos asimétricas, cuerpo en posición vertical",
        image: "/images/norma36/carga_torso_2.png",
        colorTheme: "orange"
    },
    {
        value: "alado",
        label: "Transportando con una mano a un lado del individuo",
        image: "/images/norma36/carga_torso_3.png",
        colorTheme: "red"
    },
    {
        value: "sobre_hombro",
        label: "Transporte de carga apoyada sobre un hombro ",
        image: "",
        colorTheme: "purple"
    }
];

const opcionesRestPosturales = [
    {
        value: "sin",
        label: "Sin restricciones posturales.",
        colorTheme: "green"
    },
    {
        value: "restringida",
        label: "Postura restringida.",
        colorTheme: "orange"
    },
    {
        value: "severa",
        label: "Postura severamente restringida.",
        colorTheme: "red"
    }
];

const opcionesAcompManoCarga = [
    {
        value: "bueno",
        label: "Buen agarre.",
        colorTheme: "green"
    },
    {
        value: "regular",
        label: "Agarre regular.",
        colorTheme: "orange"
    },
    {
        value: "mal",
        label: "Mal agarre.",
        colorTheme: "red"
    }
];

const opcionesSupTrabajo = [
    {
        value: "seco_limpio",
        label: "Piso seco, limpio y en buenas condiciones de mantenimiento.",
        colorTheme: "green"
    },
    {
        value: "seco_malo",
        label: "Piso seco, pero en malas condiciones, desgastado o irregular.",
        colorTheme: "orange"
    },
    {
        value: "contaminado_inadecuado",
        label: "Piso contaminado/húmedo o desnivelado, superficie inestable o calzado inadecuado.",
        colorTheme: "red"
    }
];

const opcionesFactoresAmbientales = [
    {
        value: "sin_factores",
        label: "Sin factores de riesgo presentes.",
        colorTheme: "green"
    },
    {
        value: "un_factor",
        label: "Un factor de riesto presente.",
        colorTheme: "orange"
    },
    {
        value: "dos_mas_factores",
        label: "Dos o más factores de riesgo presentes.",
        colorTheme: "red"
    }
];

const opcionesDistanciaTrans = [
    {
        value: "2_a_4",
        label: "De 2 a 4 metros.",
        colorTheme: "green"
    },
    {
        value: "4_a_10",
        label: "Más de 4 metros y menos de 10 metros.",
        colorTheme: "orange"
    },
    {
        value: "mas_10",
        label: "Más de 10 metros.",
        colorTheme: "red"
    }
];

const opcionesObstRuta = [
    {
        value: "Sin_obst",
        label: "Sin obstáculos y la ruta de transporte es plana .",
        colorTheme: "green"
    },
    {
        value: "riesgo_tropiezo",
        label: "Pendiente pronunciada o subir escalones o pasar a través de puertas estrechas o riesgo de tropezar.",
        colorTheme: "orange"
    },
    {
        value: "empinado",
        label: "Subir por escaleras y/o pendientes empinadas.",
        colorTheme: "red"
    }
];

export const Transporte = ({ formData, handleInputChange, errors }) => {
    return (
        <>
            <div className="form-range-container">

                <div className="form-input">
                    <Label 
                        htmlFor="frecuenciaCarga"
                        title="Ingrese la cantidad de veces que realiza la carga al día."
                    > 
                        Frecuencia de la carga al día:
                    </Label>
                    <Select
                        id="frecuenciaCarga"
                        name='frecuencia_carga'
                        value={formData.frecuencia_carga}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: Cada 30 minutos"
                        error={errors.frecuencia_carga}
                    >
                        <option value="" disabled hidden>Selecciona una frecuencia...</option>
                        <option>Un transporte al dia</option>
                        <option>Cada 30 minutos</option>
                        <option>Cada 5 minutos</option>
                        <option>Cada 2 minutos</option>
                        <option>Cada 1 minuto</option>
                        <option>Cada 12 segundos</option>
                    </Select>
                </div>
            </div> 

            <div className="form-range-container">
                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="distanciaManosEspalda" 
                            title="Seleccione la distancia entre las manos y la parte inferior de la espalda"
                        >
                            ¿Cuál es la distancia horizontal entre las manos y la parte inferior de la espalda?
                        </Label>
                        <InfoTooltip title="Evaluación de la distancia horizontal entre las manos y la parte inferior de la espalda.">
                            <p>
                                Observar la tarea y examinar la distancia horizontal que existe entre las manos del trabajador y 
                                la parte inferior de su espalda. Siempre considerar el "peor escenario". 
                                Usar las ilustraciones para guiar su evaluación:
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Cerca</strong></td>
                                        <td>Los brazos alineados verticalmente y con el torso erguido.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Moderado</strong></td>
                                        <td>Los brazos se alejan del cuerpo.</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Moderado</strong></td>
                                        <td>Torso inclinado hacia adelante.</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Lejos</strong></td>
                                        <td>Los brazos se inclianan hacia afuera del cuerpo y el torso se inclina hacia adelante.</td>
                                        <td>Valor: 6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    
                    <ImageRadioGroup 
                        name="distancia_manos_espalda"
                        options={opcionesDistManosEsp}
                        selectedValue={formData.distancia_manos_espalda}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label
                            htmlFor="cargaTorso"
                            title="Seleccione la posición de la carga sobre el torso "
                        > 
                            ¿Cómo es la posición de la carga sobre el torso? 
                        </Label>
                        <InfoTooltip title="Evaluación de la carga asimétrica sobre el torso.">
                            <p>
                                Las posturas del trabajador y la estabilidad de la carga son factores de riesgo asociados con lesiones músculo-esqueléticas. 
                                Las siguientes ilustraciones podrán guiar su evaluación.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Verde</strong></td>
                                        <td>La carga y las manos simétricamente enfrenre del torso</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Naranja</strong></td>
                                        <td>La carga y las manos asimétricas, cuerpo en posición vertical.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Rojo</strong></td>
                                        <td>Transportando con una mano a un lado del individuo.</td>
                                        <td>Valor: 2</td>
                                    </tr>
                                    <tr className="bg-purple">
                                        <td><strong>Morado</strong></td>
                                        <td>Transporte de carga apoyada sobre el hombro.</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="carga_torso"
                        options={opcionesCargaTorso}
                        selectedValue={formData.carga_torso}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="form-range-container">

                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="restriccionesPosturales"
                            title="Seleccione si hay restrcciones posturales"
                        > 
                            ¿Hay restricciones posturales?:
                        </Label>
                            <InfoTooltip title="Evaluación de las restricciones posturales">
                            <p>
                                <strong>I.-</strong> Si los movimientos del trabajador no están obstaculizados, la banda será de color verde
                                <br></br>
                                <strong>II.-</strong> Si el trabajador adopta posturas incómodas o forzadas durante el levantamiento de una carga debido al espacio disponible (por ejemplo, espacio estrecho entre el pallet y una tolva de descarga) o el diseño de la estación de trabajo (por ejemplo, 
                                un transportador de monorriel excesivamente alto para colocar o tomar la carga), el color de la banda será naranja.
                                <br></br>
                                <strong>III.-</strong> Si la postura es severamente restringida, el color de la banda será rojo (por ejemplo, trabajo en áreas confinadas como una bodega)
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Verde</strong></td>
                                        <td>Sin restricciones posturales.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Naranja</strong></td>
                                        <td>Postura restringida.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Rojo</strong></td>
                                        <td>Postura severamente restringida</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="restricciones_posturales"
                        options={opcionesRestPosturales}
                        selectedValue={formData.restricciones_posturales}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="acomplamientoManoCarga"
                            title="Seleccione el acomplamiento mano-carga"
                        > 
                            ¿Cómo es el acoplamiento mano-carga?
                        </Label>
                        <InfoTooltip title="Evaluación del acomplamiento mano-carga">
                            <p>
                                Este factor considera las propiedades geométricas y de diseño de la carga que se va a manejar, 
                                en cuanto a su interacción con las manos del trabajador, según se indica a continuación.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Buen agarre.</strong></td>
                                        <td>
                                            Contenedores con elementos de sujeción, como asas o manijas bien diseñados, aptos para este propósito.
                                            Partes holgadas que permiten un agarre cómodo.
                                        </td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Agarre regular.</strong></td>
                                        <td>
                                            Contenedores con asas o manijas mal diseñadas. El material permite hacer un agarre con la mano en pinza.
                                            Los dedos deben estar sujetos a 90 grados bajo el contenedor o la carga.
                                        </td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Mal agarre.</strong></td>
                                        <td>
                                            Contenedores de diseño deficiente. Partes holgadas, objetos irregulares, voluminosos o difíciles de manejar.
                                            Sacos no rígidos (como bultos de arena o cemento) cargas impredecibles.
                                        </td>
                                        <td>Valor: 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="acomplamiento_mano_carga"
                        options={opcionesAcompManoCarga}
                        selectedValue={formData.acomplamiento_mano_carga}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="form-range-container">
                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="superficieTrabajo"
                            title="Seleccione el estado de la superficie de trabajo"
                        > 
                            ¿Cómo es la superficie de trabajo?:
                        </Label>
                        <InfoTooltip title="Evaluación de la superficie de trabajo">
                            <p>
                                Este factor considera las propiedades de la superficie donde el trabajador camina o permanece de pie, según se indica a continuación.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Verde</strong></td>
                                        <td>Piso seco, limpio y en buenas condiciones en mantenimiento.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Naranja</strong></td>
                                        <td>Piso seco, pero en malas condiciones, desgastado o irregular.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Rojo</strong></td>
                                        <td>Piso contaminado/húmedo o desnivelado, superficie inestable o calzado inestable</td>
                                        <td>Valor: 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="superficie_trabajo"
                        options={opcionesSupTrabajo}
                        selectedValue={formData.superficie_trabajo}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="factoresAmbientales"
                            title="Seleccione el estado de la superficie de trabajo"
                        > 
                            ¿Existen otros factores ambientales?
                        </Label>
                        <InfoTooltip title="Evaluación de otros factores ambientales">
                            <p>
                                <strong>I.-</strong>Observar el ambiente de trabajo y calificar si la operación de levantamiento se lleva a cabo bajo: 
                                temperaturas extremas; con fuerte circulación del aire; o en condiciones de iluminación extremas (demasiado oscuro o brillante). 
                                Si uno de éstos factores de riesgo está presente el color de la banda será naranja.
                                <br></br>
                                <strong>II.-</strong>Si dos o más factores de riesgo están presentes el color de la banda será rojo.
                                <br></br>
                                <strong>III.-</strong>Si no existe ningún factor presente el color de la banda será verde.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Verde</strong></td>
                                        <td>Sin factores de riesgo presentes.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Naranja</strong></td>
                                        <td>Un factor de riesgo presente.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Rojo</strong></td>
                                        <td>Dos o más factores de riesgo presente.</td>
                                        <td>Valor: 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>

                    <ImageRadioGroup 
                        name="factores_ambientales"
                        options={opcionesFactoresAmbientales}
                        selectedValue={formData.factores_ambientales}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            
            <div className="form-range-container">
                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="distanciaTransporte"
                            title="Seleccione la distancia en la que el operador lleva la carga"
                        > 
                            ¿Cuál es la distancia de transporte?:
                        </Label>
                        <InfoTooltip title="Evaluación de la distancia de transporte">
                            <p>
                                Observar la actividad y estimar la distancia total que la carga 
                                (trayectoria total) es transportada, en metros.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Verde</strong></td>
                                        <td>De 2 metros a 4 metros.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Naranja</strong></td>
                                        <td>Más de 4 metros y menos de 10 metros.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Rojo</strong></td>
                                        <td>Más de 10 metros</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="distancia_transporte"
                        options={opcionesDistanciaTrans}
                        selectedValue={formData.distancia_transporte}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="obstaculosRuta"
                            title="Seleccione el estado de la superficie de trabajo"
                        > 
                            ¿Existen obstáculos en la ruta de transporte?
                        </Label>
                        <InfoTooltip title="Evaluación de los obstáculos en la ruta">
                            <p>
                                <strong>I.-</strong> Observe la ruta. Si el trabajador tiene que llevar una carga y se presenta un solo factor de riesgo como: una pendiente pronunciada (con inclinación mayor a 20%), subir escalones, 
                                cruzar a través de puertas cerradas o alrededor de materiales que puedan provocar tropiezos, el color de la banda es naranja.
                                <br></br>
                                <strong>II.-</strong> Si la tarea involucra transportar la carga subiendo escaleras, corresponderá el color rojo banda.
                                <br></br>
                                <strong>III.-</strong> Si la tarea involucra más de uno de los factores de riesgo (por ejemplo, una pendiente con inclinación mayor a 20% y luego subir escaleras), el color de la banda será rojo.
                                <br></br>
                                <strong>IV.-</strong> Si no existe ningún factor el color será verde.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Verde</strong></td>
                                        <td>Sin obstáculos y la ruta de transporte es plana.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Naranja</strong></td>
                                        <td>Pendiente pronunciada o subir escalones o pasar a través de puertas estrechas o riesgo de tropezar.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Rojo</strong></td>
                                        <td>Subir por escaleras y/o pendientes empinadas.</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="obstaculos_ruta"
                        options={opcionesObstRuta}
                        selectedValue={formData.obstaculos_ruta}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            
        </>
    );
};