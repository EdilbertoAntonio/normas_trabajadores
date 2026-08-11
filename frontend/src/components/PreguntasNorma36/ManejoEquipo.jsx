import Label from '../Label';
import Select from '../Select';
import ImageRadioGroup from '../ImageRadioGroup';

const opcionesDistManosEsp = [
    {
        value: "cerca",
        label: "Cerca: Brazos alineados verticalmente y torso erguido",
        image: "/images/norma36/dist_manos_esp_eq_1.png",
        colorTheme: "green"
    },
    {
        value: "moderado",
        label: "Moderado: Torso flexionado hacia adelante o brazos inclinados alejados del cuerpo.",
        image: "/images/norma36/dist_manos_esp_eq_2.png",
        colorTheme: "orange"
    },
    {
        value: "lejos",
        label: "Lejos: Los brazos se inclinan lejos del cuerpo y el torso se dobla hacia adelante.",
        image: "/images/norma36/dist_manos_esp_eq_3.png",
        colorTheme: "red"
        }
];

const opcionesRegLevantamiento = [
    {
        value: "encima",
        label: "Por encima de la rodilla y/o por debajo de la altura del codo.",
        image: "/images/norma36/reg_levantamiento_eq_1.png",
        colorTheme: "green"
    },
    {
        value: "debajo",
        label: "Por debajo de la rodilla y/o por encima de la altura del codo.",
        image: "/images/norma36/reg_levantamiento_eq_2.png",
        colorTheme: "orange"
    },
    {
        value: "cabeza",
        label: "A la altura de la cabeza o por arriba, o a nivel de piso o por debajo.",
        image: "/images/norma36/reg_levantamiento_eq_3.png",
        colorTheme: "red"
    }
];

const opcionesTorFlexTorso = [
    {
        value: "poca",
        label: "Poca o ninguna torsión o flexión lateral del torso.",
        //image: "/images/norma36/tor_flex_torso_1.png",
        colorTheme: "green"
    },
    {
        value: "tor_o_flex",
        label: "Torsión o flexión lateral del torso.",
        //image: "/images/norma36/tor_flex_torso_2.png",
        colorTheme: "orange"
    },
    {
        value: "tor_y_flex",
        label: "Torsión y flexión lateral del torso.",
        //image: "/images/norma36/tor_flex_torso_3.png",
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

const opcionesComunicacionControl = [
    {
        value: "bien",
        label: "Bien",
        colorTheme: "green"
    },
    {
        value: "regular",
        label: "Regular.",
        colorTheme: "orange"
    },
    {
        value: "mala",
        label: "Malo o deficiente.",
        colorTheme: "red"
    }
];

export const ManejoEquipo = ({ formData, handleInputChange, errors }) => {
    return (
        <>
            <div className='form-range-container'>
                <div className="form-input">
                    <Label 
                        htmlFor="personasEquipo"
                        title="Ingrese la cantidad de personal que conforma el equipo."
                    > 
                        ¿Cuántas personas conforman el equipo?:
                    </Label>
                    <Select
                        id="personasEquipo"
                        name='personas_equipo'
                        value={formData.personas_equipo}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: 3 personas"
                        error={errors.personas_equipo}
                    >
                        <option>2 personas</option>
                        <option>3 personas</option>
                        <option>4 personas</option>
                    </Select>
                </div>
            </div>
            <div className="form-range-container">
                <div className="form-input">
                    <Label 
                        htmlFor="distanciaManosEspaldaEq" 
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
                        htmlFor="regionLevantamientoEq"
                        title="Seleccione la región del levantamiento vertical "
                    > 
                        ¿Cuál es la región de levantamiento vertical?:
                    </Label>
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
                    <Label 
                        htmlFor="torsionFlexionTorso"
                        title="Seleccione la torsion y flexión lateral del torso"
                    > 
                        ¿Cómo es la torsión y flexión lateral del torso?
                    </Label>
                    <ImageRadioGroup 
                        name="torsion_flexion_torso"
                        options={opcionesTorFlexTorso}
                        selectedValue={formData.torsion_flexion_torso}
                        onChange={handleInputChange}
                    />
                </div>

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

                <div className="form-input">
                    <Label 
                        htmlFor="comunicacionControl"
                        title="Seleccione la opción que mejor describa la comunicación entre el equipo"
                    > 
                        ¿Cómo es la comunicación y control entre los trabajadores?:
                    </Label>
                    <ImageRadioGroup 
                        name="comunicacion_control"
                        options={opcionesComunicacionControl}
                        selectedValue={formData.comunicacion_control}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </>
    );
};