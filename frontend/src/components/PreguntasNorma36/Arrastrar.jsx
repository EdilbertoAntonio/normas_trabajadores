import Label from '../Label';
import Select from '../Select';
import ImageRadioGroup from '../ImageRadioGroup';

const opcionesPosturaCarga = [
    {
        value: "buena",
        label: "Buena (El torso se encuentra verticalmente en su mayor parte y no está torcido, las manos están entre la cadera y la altura del hombro)",
        colorTheme: "green"
    },
    {
        value: "razonable",
        label: "Razonable (El cuerpo está inclinado en la dirección del esfuerzo, el torso está visiblemente flexionado y torcido, las manos están por debajo de la altura de la cadera)",
        //image: "/images/norma36/dist_manos_esp_3.png",
        colorTheme: "orange"
    },
    {
        value: "pobre",
        label: "Pobre o deficiente (El cuerpo está muy inclinado o el trabajador se pone en cuclillas, se arrodilla o necesita empujar con la espalda contra la carga y el torso está severamente flexionado o torcido, las manos están detrás o a un lado del cuerpo o por encima de la altura del hombro) ",
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
        label: "Bueno (El trabajo no es repetitivo, menos de 5 traslados por minuto, el ritmo del trabajo es fijado por el trabajador)",
        colorTheme: "green"
    },
    {
        value: "razonable",
        label: "Razonable ( El trabajo es repetitivo pero hay oportunidades para descansar o de recuperarse a través de descansos formales e informales o rotación) ",
        colorTheme: "orange"
    },
    {
        value: "pobre",
        label: "Pobre o deficiente ( El trabajo es repetitivo y no hay descansos ni oportunidades de rotar )",
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
        value: "2",
        label: "2 metros o menos.",
        colorTheme: "green"
    },
    {
        value: "2_a_10",
        label: "Entre 2 metros y 10 metros.",
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
        value: "sin_obst",
        label: "Sin obstáculos y la ruta de transporte es plana .",
        colorTheme: "green"
    },
    {
        value: "riesgo_tropiezo",
        label: "Un tipo de obstáculo, pero sin escalones o rampas.",
        colorTheme: "orange"
    },
    {
        value: "empinado",
        label: "Escalones, rampas empinadas, o dos o más tipos de obstáculos",
        colorTheme: "red"
    }
];

export const Arrastrar = ({ formData, handleInputChange, errors }) => {
    return (
        <>
            <div className="form-range-container">

                <div className="form-input">
                    <Label 
                        htmlFor="posturaCarga"
                        title="Ingrese la postura del operador."
                    > 
                        ¿Cómo es la postura?
                    </Label>
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
                    <Label 
                        htmlFor="acomplamientoManoCarga"
                        title="Seleccione el acomplamiento mano-carga"
                    > 
                        ¿Cómo es el acoplamiento mano-carga?
                    </Label>
                    <ImageRadioGroup 
                        name="acomplamiento_mano_carga"
                        options={opcionesAcompManoCarga}
                        selectedValue={formData.acomplamiento_mano_carga}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className="form-input">
                    <Label
                        htmlFor="patronTrabajo"
                        title="Seleccione el patron del trabajo de la carga "
                    > 
                        ¿Cómo es el patrón del trabajo?
                    </Label>
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
                    <Label 
                        htmlFor="distanciaTransporte"
                        title="Seleccione la distancia en la que el operador lleva la carga"
                    > 
                        ¿Cuál es la distancia de transporte?:
                    </Label>
                    <ImageRadioGroup 
                        name="distancia_transporte"
                        options={opcionesDistanciaTrans}
                        selectedValue={formData.distancia_transporte}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-input">
                    <Label 
                        htmlFor="superficieTrabajo"
                        title="Seleccione el estado de la superficie de trabajo"
                    > 
                        ¿Cómo es la superficie de trabajo?:
                    </Label>

                    <ImageRadioGroup 
                        name="superficie_trabajo"
                        options={opcionesSupTrabajo}
                        selectedValue={formData.superficie_trabajo}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="form-range-container">
                <div className="form-input">
                    <Label 
                        htmlFor="obstaculosRuta"
                        title="Seleccione si hay obstaculos que influyan en el camino"
                    > 
                        ¿Existen obstáculos en la ruta de transporte?
                    </Label>
                    <ImageRadioGroup 
                        name="obstaculos_ruta"
                        options={opcionesObstRuta}
                        selectedValue={formData.obstaculos_ruta}
                        onChange={handleInputChange}
                    />
                </div>


                <div className="form-input">
                    <Label 
                        htmlFor="factoresAmbientales"
                        title="Seleccione si hay factores ambientales presentes"
                    > 
                        ¿Existen otros factores ambientales?
                    </Label>

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