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

const opcionesRegLevantamiento = [
    {
        value: "encima",
        label: "Por encima de la rodilla y/o por debajo de la altura del codo.",
        image: "/images/norma36/reg_levantamiento_1.png",
        colorTheme: "green"
    },
    {
        value: "debajo",
        label: "Por debajo de la rodilla y/o por encima de la altura del codo.",
        image: "/images/norma36/reg_levantamiento_2.png",
        colorTheme: "orange"
    },
    {
        value: "suelo",
        label: "Nivel de suelo o inferior.",
        image: "/images/norma36/reg_levantamiento_3.png",
        colorTheme: "red"
    },
    {
        value: "cabeza",
        label: "A la altura de la cabeza o superior.",
        image: "/images/norma36/reg_levantamiento_4.png",
        colorTheme: "red"
    }
];

const opcionesTorFlexTorso = [
    {
        value: "poca",
        label: "Poca o ninguna torsión o flexión lateral del torso.",
        image: "/images/norma36/tor_flex_torso_1.png",
        colorTheme: "green"
    },
    {
        value: "tor_o_flex",
        label: "Torsión o flexión lateral del torso.",
        image: "/images/norma36/tor_flex_torso_2.png",
        colorTheme: "orange"
    },
    {
        value: "tor_y_flex",
        label: "Torsión y flexión lateral del torso.",
        image: "/images/norma36/tor_flex_torso_3.png",
        colorTheme: "red"
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

export const LevantamientoDescenso = ({ formData, handleInputChange, errors }) => {
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
                        <option>Cada 14 segundos</option>
                        <option>Cada 9 segundos</option>
                        <option>Cada 5 segundos</option>
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
                            htmlFor="regionLevantamiento"
                            title="Seleccione la región del levantamiento vertical "
                        > 
                            ¿Cuál es la región de levantamiento vertical?:
                        </Label>
                        <InfoTooltip title="Evaluación de la region del levantamiento vertical.">
                            <p>
                                Observar la posición de las manos del trabajador al inicio del levantamiento y a medida 
                                que la operación progresa. Siempre considerar el "peor de los casos". Utilizar las
                                ilustraciones como guía:
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Verde</strong></td>
                                        <td>Por encima de la rodilla y/o por debajo de la altura del codo.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Naranja</strong></td>
                                        <td>Por debajo de la rodilla y/o por encima de la altura del codo.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Naranja</strong></td>
                                        <td>Nivel de suelo o inferior.</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Rojo</strong></td>
                                        <td>A la altura de la cabeza o superior.</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="region_levantamiento"
                        options={opcionesRegLevantamiento}
                        selectedValue={formData.region_levantamiento}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="form-range-container">
                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="torsionFlexionTorso"
                            title="Seleccione la torsion y flexión lateral del torso"
                        > 
                            ¿Cómo es la torsión y flexión lateral del torso?
                        </Label>
                        <InfoTooltip title="Evaluación de torsion y flexión lateral del torso.">
                            <p>
                                Observar el torso del trabajador a medida que levanta la carga. 
                                Si el torso se tuerce en relación con las caderas y los muslos o el trabajador se 
                                inclina hacia un lado a medida que levanta la carga, el color de la banda es naranja. 
                                Si el torso se tuerce y se dobla hacia un lado a medida que se levanta la carga, 
                                el color de la banda es rojo.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Verde</strong></td>
                                        <td>Poca o ninguna torsion o flexión lateral del torso.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Naranja</strong></td>
                                        <td>Torsión o flexión lateral del torso.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Rojo</strong></td>
                                        <td>Torsión y felxión lateral del torso</td>
                                        <td>Valor: 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    
                    </div>
                    <ImageRadioGroup 
                        name="torsion_flexion_torso"
                        options={opcionesTorFlexTorso}
                        selectedValue={formData.torsion_flexion_torso}
                        onChange={handleInputChange}
                    />
                </div>

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
            </div>

            <div className="form-range-container">
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
        </>
    );
};