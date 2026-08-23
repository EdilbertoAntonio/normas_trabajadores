import Label from '../Label';
import ImageRadioGroup from '../ImageRadioGroup';
import { InfoTooltip } from '../InfoTooltip';

const opcionesPosturaCarga = [
    {
        value: "buena",
        // label: "Buena (El torso se encuentra verticalmente en su mayor parte y no está torcido, las manos están entre la cadera y la altura del hombro)",
        label: "Buena",
        colorTheme: "green"
    },
    {
        value: "razonable",
        // label: "Razonable (El cuerpo está inclinado en la dirección del esfuerzo, el torso está visiblemente flexionado y torcido, las manos están por debajo de la altura de la cadera)",
        label: 'Razonable',
        //image: "/images/norma36/dist_manos_esp_3.png",
        colorTheme: "orange"
    },
    {
        value: "pobre",
        // label: "Pobre o deficiente (El cuerpo está muy inclinado o el trabajador se pone en cuclillas, se arrodilla o necesita empujar con la espalda contra la carga y el torso está severamente flexionado o torcido, las manos están detrás o a un lado del cuerpo o por encima de la altura del hombro) ",
        label:'Pobre o deficiente',
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

const opcionesPatronTrabajo = [
    {
        value: "bueno",
        label: "Bueno.",
        colorTheme: "green"
    },
    {
        value: "razonable",
        label: "Razonable.",
        colorTheme: "orange"
    },
    {
        value: "pobre",
        label: "Pobre o deficiente.",
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

const opcionesOtrosFactores = [
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
        value: "10",
        label: "10 metros o menos.",
        colorTheme: "green"
    },
    {
        value: "10_a_30",
        label: "Entre 10 metros y 30 metros.",
        colorTheme: "orange"
    },
    {
        value: "mas_30",
        label: "Más de 30 metros.",
        colorTheme: "red"
    }
];

// const opcionesObstRuta = [
//     {
//         value: "sin_obst",
//         label: "Sin obstáculos y la ruta de transporte es plana .",
//         colorTheme: "green"
//     },
//     {
//         value: "riesgo_tropiezo",
//         label: "Un tipo de obstáculo, pero sin escalones o rampas.",
//         colorTheme: "orange"
//     },
//     {
//         value: "empinado",
//         label: "Escalones, rampas empinadas, o dos o más tipos de obstáculos",
//         colorTheme: "red"
//     }
// ];

const opcionesObstRuta = [
    {
        value: "sin_obst",
        label: "Sin obstáculos.",
        colorTheme: "green"
    },
    {
        value: "riesgo_tropiezo",
        label: "Un tipo de obstáculo.",
        colorTheme: "orange"
    },
    {
        value: "empinado",
        label: "Dos o más tipos de obstáculos.",
        colorTheme: "red"
    }
];

const opcionesCondicionEquipo = [
    {
        value: "bueno",
        label: "Bueno",
        colorTheme: "green"
    },
    {
        value: "razonable",
        label: "Razonable",
        colorTheme: "orange"
    },
    {
        value: "pobre",
        label: "Pobre",
        colorTheme: "red"
    }
];

const opcionesPesoPequeno = [
    { value: "menos_50", label: "Menos de 50 kg", colorTheme: "green" },
    { value: "50_a_100", label: "De 50 kg a 100 kg", colorTheme: "orange" },
    { value: "100_a_200", label: "De 100 kg a 200 kg", colorTheme: "red" },
    { value: "mas_200", label: "Más de 200 kg", colorTheme: "red" },
    { value: "excede", label: "La carga excede la capacidad nominal del equipo", colorTheme: "purple" }
];

const opcionesPesoMediano = [
    { value: "menos_250", label: "Menos de 250 kg", colorTheme: "green" },
    { value: "250_a_500", label: "De 250 kg a 500 kg", colorTheme: "orange" },
    { value: "500_a_750", label: "De 500 kg a 750 kg", colorTheme: "red" },
    { value: "mas_750", label: "Más de 750 kg", colorTheme: "red" },
    { value: "excede", label: "La carga excede la capacidad nominal del equipo", colorTheme: "purple" }
];

const opcionesPesoGrande = [
    { value: "menos_600", label: "Menos de 600 kg", colorTheme: "green" },
    { value: "600_a_1000", label: "De 600 kg a 1,000 kg", colorTheme: "orange" },
    { value: "1000_a_1500", label: "De 1,000 kg a 1,500 kg", colorTheme: "red" },
    { value: "mas_1500", label: "Más de 1,500 kg", colorTheme: "red" },
    { value: "excede", label: "La carga excede la capacidad nominal del equipo", colorTheme: "purple" }
];

export const EmpujeConEquipo = ({ formData, handleInputChange, errors }) => {

    const obtenerOpcionesPeso = () => {
        if (formData.actividad_trabajador === "Empujar con equipo auxiliar (pequeño)") return opcionesPesoPequeno;
        if (formData.actividad_trabajador === "Empujar con equipo auxiliar (mediano)") return opcionesPesoMediano;
        if (formData.actividad_trabajador === "Empujar con equipo auxiliar (grande)") return opcionesPesoGrande;
        return []; // Por seguridad
    };

    const opcionesPesoActuales = obtenerOpcionesPeso();

    return (
        <>
            <div className="form-range-container">

                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="pesoCarga" 
                            title="Ingrese el número del peso de la carga en kilos"
                        >
                            Peso de la carga en kilos:
                        </Label>
                        <InfoTooltip title="Evaluación de la carga">
                            <p>
                                <strong>I.-</strong> Identificar la actividad. Si se realizan dos o más actividades (por ejemplo, rodando y girando sobre su base), 
                                realice una evaluación para cada tipo de actividad;
                                <br></br>
                                <strong>II.-</strong>Averiguar la masa de la carga movida (de alguna etiqueta de la carga, preguntando a los trabajadores o pesando la carga u objeto)
                                <br></br>
                                <strong>III.-</strong>Evaluar la masa total a mover, si dos o más cargas son movidas a la vez, y
                                <br></br>
                                <strong>IV.-</strong>Evaluar la actividad con la carga de mayor masa, si se mueven cargas de diferente masa.  
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Bajo</strong></td>
                                        <td>{opcionesPesoActuales[0]?.label}</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Medio</strong></td>
                                        <td>{opcionesPesoActuales[1]?.label}</td>
                                        <td>Valor: 2</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Alto</strong></td>
                                        <td>{opcionesPesoActuales[2]?.label}</td>
                                        <td>Valor: 4</td>
                                    </tr>
                                    <tr className="bg-purple">
                                        <td><strong>Muy alto</strong></td>
                                        <td>{opcionesPesoActuales[3]?.label}</td>
                                        <td>Valor: 8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="peso_carga"
                        options={obtenerOpcionesPeso()}
                        selectedValue={formData.peso_carga}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="posturaCarga" 
                            title="Ingrese la postura del operador." 
                            noMargin
                        > 
                            ¿Cómo es la postura?
                        </Label>
                        <InfoTooltip title="Evaluación de Postura">
                            <p>
                                <strong>I.-</strong> Observar la posición general de las manos y el cuerpo durante la operación.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Buena</strong></td>
                                        <td>El torso se encuentra verticalmente en su mayor parte y no está torcido. Manos están entre la cadera y la altura del hombro.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Razonable</strong></td>
                                        <td>El cuerpo está inclinado en la dirección del esfuerzo o el torso flexionado/torcido. 
                                            Manos por debajo de la altura de la cadera.</td>
                                        <td>Valor: 3</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Pobre o Deficiente</strong></td>
                                        <td>
                                            El cuerpo está muy inclinado, o el trabajador se pone en cunclillas, arrodillado o necesita empujar con la espalda.
                                            El torso severamente flexionado/torcido.
                                            Las manos arriba del hombro o detrás del cuerpo.
                                        </td>
                                        <td>Valor: 6</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="postura_carga"
                        options={opcionesPosturaCarga}
                        selectedValue={formData.postura_carga}
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
                                <strong>I.-</strong> Observar cómo es el agarre con las manos o cómo están en contacto con la carga durante el empuje o la tracción. Si la operación implica tanto empujar como jalar, 
                                evalúe la empuñadura para ambas acciones.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Bueno</strong></td>
                                        <td>Hay manijas o azas que permiten un cómodo agarre para alicar fuerza para jalar o un cómodo agarre completo de la mano para empujar</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Razonable</strong></td>
                                        <td>Hay zonas de agarre, pero sólo permiten una agarre parcial, por ejemplo, dedos que sujetan a 90° o contacto parcial de la mano para empujar</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Pobre o Deficiente</strong></td>
                                        <td>No hay asas o el contacto de la mano es incómodo.</td>
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
                            htmlFor="patronTrabajo"
                            title="Seleccione el patron del trabajo de la carga "
                        > 
                            ¿Cómo es el patrón del trabajo?
                        </Label>
                        <InfoTooltip title="Evaluación del patron de trabajo">
                            <p>
                                <strong>I.-</strong> Observar el trabajo, e identificar si la operación es repetitiva (cinco o más traslados por minuto) 
                                y si el trabajador establece el ritmo de trabajo.
                                <br></br>
                                <strong>II.-</strong> Preguntar a los trabajadores sobre su patrón de descansos y sobre otras oportunidades que tienen para descansar o recuperarse del trabajo.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Bueno</strong></td>
                                        <td>El trabajo no es repetitivo (menos de 5 tralados por minuto) y
                                            el ritmo de trabajo es fijado por el trabajador.
                                        </td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Razonable</strong></td>
                                        <td>El trabajo es repetitivo, pero hay oportunidades para descansar o de recuperarse a través de
                                            descansos formales e informales o a través de la rotación del trabajo.
                                        </td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Pobre o Deficiente</strong></td>
                                        <td>El trabajo es repetitivo y no hay descansos formales/informales u oportunidad de rotar 
                                            los puestos de trabajo.
                                        </td>
                                        <td>Valor: 3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>
                    <ImageRadioGroup 
                        name="patron_trabajo"
                        options={opcionesPatronTrabajo}
                        selectedValue={formData.patron_trabajo}
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
                        <InfoTooltip title="Evaluación de la distancia por viaje">
                            <p>
                                <strong>I.-</strong> Determinar la distancia desde el principio hasta el final para un solo viaje;
                                <br></br>
                                <strong>II.-</strong> Hacer una evaluación para el viaje más largo, si la operación no es repetitiva, y
                                <br></br>
                                <strong>III.-</strong> Determinar la distancia promedio para al menos cinco viajes, si la operación es repetitiva.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Corta</strong></td>
                                        <td> 2 metros o menos.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Media</strong></td>
                                        <td> Entre 2 metros y 10 metros.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Pobre o Deficiente</strong></td>
                                        <td>Más de 10 metros.</td>
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
                            htmlFor="condicionesEquipo"
                            title="Seleccione el estado que tiene el equipo auxiliar"
                        > 
                            ¿En qué estado se encuentra el equipo auxiliar?:
                        </Label>
                        <InfoTooltip title="Evaluación del equipo auxiliar">
                            <p>
                                <strong>I.-</strong> Consultar el programa o manuales de mantenimiento y 
                                observar el estado general de conservación del equipo (condición de las ruedas, cojinetes y frenos).
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Buena</strong></td>
                                        <td> El mantenimiento está planificado y es preventivo, y
                                            el equipo está en buen estado de conservación.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Razonable</strong></td>
                                        <td> El mantenimiento ocurre sólo cuando surgen problemas, o 
                                            el equipo está en un estado razonable de conservación.</td>
                                        <td>Valor: 2</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Pobre</strong></td>
                                        <td>El mantenimiento no está planificado (no hay un sistema claro es su lugar), o
                                            el equipo está en mal estado de conservación.</td>
                                        <td>Valor: 4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>
                    </div>

                    <ImageRadioGroup 
                        name="condicion_equipo"
                        options={opcionesCondicionEquipo}
                        selectedValue={formData.condicion_equipo}
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
                                <strong>I.-</strong> Identificar la condición en que se encuentran las superficies de trabajo a lo largo de la ruta y determinar el nivel de riesgo utilizando los siguientes criterios.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Bueno</strong></td>
                                        <td> Seco, limpio, nivelado, firme y en buen estado (no dañado o irregular)</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Razonable</strong></td>
                                        <td> En mayor parte seco y limpio (humedad o escombros en algunas áreas) o
                                            en pendiente (inclinación entre 3° y 5°) o razonablemente firme bajo los pies 
                                            (por ejemplo, alfombrado) o mala condición (daños menores)
                                        </td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Pobre o Deficiente</strong></td>
                                        <td>Contaminado (mojado o con escombros en varias áreas), o pendiente pronunciada
                                            (inclinación superior a 5°) o suave o inestable bajo los pies (grava, arena, barro), o
                                            muy mal estado (daño severo)
                                        </td>
                                        <td>Valor: 4</td>
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
                            htmlFor="obstaculosRuta"
                            title="Seleccione si hay obstaculos que influyan en el camino"
                        > 
                            ¿Existen obstáculos en la ruta de transporte?
                        </Label>
                        <InfoTooltip title="Evaluación de los obstáculos de la ruta">
                            <p>
                                <strong>I.-</strong> Verificar en la ruta si hay obstáculos. Tener en cuenta si el equipo se mueve por encima de cables, 
                                a través de bordes elevados, hacia arriba o hacia abajo en rampas empinadas (pendiente de más de 5 °), subiendo o bajando escalones, 
                                a través de puertas bloqueadas /estrechas, en espacios confinados, alrededor de curvas, esquinas u objetos, y 
                                <br></br>
                                <strong>II.-</strong>Contar cada tipo de obstáculo sólo una vez, sin importar cuántas veces se pase por éste.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Bueno</strong></td>
                                        <td> Sin obstáculos.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Razonable</strong></td>
                                        <td> Un tipo de obstáculo, pero sin escalones o rampas empinadas.</td>
                                        <td>Valor: 2</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Pobre o Deficiente</strong></td>
                                        <td>Escalones, rampas empinadas o dos o más tipo de obstáculos.</td>
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


                <div className="form-input">
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <Label 
                            htmlFor="otrosFactores"
                            title="Seleccione si hay otros factores presentes"
                        > 
                            ¿Existen otros factores?
                        </Label>
                        <InfoTooltip title="Evaluación de otros factores">
                            <p>
                                Identificar algún otro factor, como, por ejemplo:
                                <br></br>
                                <strong>I.-</strong> La carga es inestable.
                                <br></br>
                                <strong>II.-</strong>La carga es grande y obstruye la vista del trabajador de donde se está moviendo.
                                <br></br>
                                <strong>III.-</strong>La carga presenta bordes filosos, está caliente o es potencialmente dañina al tacto.
                                <br></br>
                                <strong>IV.-</strong>Hay malas condiciones de iluminación.
                                <br></br>
                                <strong>V.-</strong>Hay temperaturas extremas calientes o frías o alta humedad.
                                <br></br>
                                <strong>VI.-</strong>Hay ráfagas de viento u otros movimientos fuertes del aire.
                                <br></br>
                                <strong>VII.-</strong>El equipo de protección personal o la vestimenta hacen que el arrastre y empuje de la carga sea más complicado.
                            </p>
                            <table className="tooltip-table">
                                <tbody>
                                    <tr className="bg-green">
                                        <td><strong>Bueno</strong></td>
                                        <td> No hay otros factores.</td>
                                        <td>Valor: 0</td>
                                    </tr>
                                    <tr className="bg-orange">
                                        <td><strong>Razonable</strong></td>
                                        <td> Un factor presente.</td>
                                        <td>Valor: 1</td>
                                    </tr>
                                    <tr className="bg-red">
                                        <td><strong>Deficiente</strong></td>
                                        <td>Dos o más factores.</td>
                                        <td>Valor: 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </InfoTooltip>        
                    </div>  

                    <ImageRadioGroup 
                        name="otros_factores"
                        options={opcionesOtrosFactores}
                        selectedValue={formData.otros_factores}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
                        
        </>
    );
};