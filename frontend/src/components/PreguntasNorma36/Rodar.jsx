import Label from '../Label';
import Select from '../Select';
import ImageRadioGroup from '../ImageRadioGroup';

const opcionesPostura = [
    {
        value: "buena",
        label: "Buena.",
        colorTheme: "green"
    },
    {
        value: "razonable",
        label: "Razonable.",
        //image: "/images/norma36/dist_manos_esp_3.png",
        colorTheme: "orange"
    },
    {
        value: "pobre",
        label: "Pobre o deficiente.",
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

export const Rodar = ({ formData, handleInputChange, errors }) => {
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
                    <Label 
                        htmlFor="distanciaManosEspalda" 
                        title="Seleccione la distancia entre las manos y la parte inferior de la espalda"
                    >
                        ¿Cuál es la distancia horizontal entre las manos y la parte inferior de la espalda?
                    </Label>
                    
                    <ImageRadioGroup 
                        name="distancia_manos_espalda"
                        options={opcionesDistManosEsp}
                        selectedValue={formData.distancia_manos_espalda}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className="form-input">
                    <Label
                        htmlFor="cargaTorso"
                        title="Seleccione la posición de la carga sobre el torso "
                    > 
                        ¿Cómo es la posición de la carga sobre el torso? 
                    </Label>
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
                    <Label 
                        htmlFor="restriccionesPosturales"
                        title="Seleccione si hay restrcciones posturales"
                    > 
                        ¿Hay restricciones posturales?:
                    </Label>
                    <ImageRadioGroup 
                        name="restricciones_posturales"
                        options={opcionesRestPosturales}
                        selectedValue={formData.restricciones_posturales}
                        onChange={handleInputChange}
                    />
                </div>

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
            </div>

            <div className="form-range-container">
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


                <div className="form-input">
                    <Label 
                        htmlFor="factoresAmbientales"
                        title="Seleccione el estado de la superficie de trabajo"
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
                        htmlFor="obstaculosRuta"
                        title="Seleccione el estado de la superficie de trabajo"
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
            </div>

            
        </>
    );
};