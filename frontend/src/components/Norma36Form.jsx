import React, { useState } from "react";
import Button from './Button';
import Label from './Label';
import Input from './Input';
import Select from "./Select";
import ImageRadioGroup from './ImageRadioGroup';
import '../assets/styles/norma36.css';
import '../assets/styles/formulario.css';

export function Norma36Form () {
    const [distManosEsp, setDistManosEsp] = useState(""); 

    // Defines las opciones con su imagen y texto
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

    const handleChangeDistManosEsp = (e) => {
        setDistManosEsp(e.target.value);
    };

    const [ regLevantamiento, setRegLevantamiento] = useState(""); 

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

    const handleChangeRegLevantamiento = (e) => {
        setRegLevantamiento(e.target.value);
    };

    const [ torFlexTorso, setTorFlexTorso] = useState(""); 

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

    const handleChangeTorFlexTorso = (e) => {
        setTorFlexTorso(e.target.value);
    };

    const [ restPosturales, setRestPosturales] = useState(""); 

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

    const handleChangeRestPosturales = (e) => {
        setRestPosturales(e.target.value);
    };

    const [ acompManoCarga, setAcompManoCarga] = useState(""); 

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

    const handleChangeAcompManoCarga = (e) => {
        setAcompManoCarga(e.target.value);
    };

    const [ supTrabajo, setSupTrabajo] = useState(""); 

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

    const handleChangeSupTrabajo = (e) => {
        setSupTrabajo(e.target.value);
    };

    return(
        <form className="form-container">
        
            <h3>
                <i className="material-symbols-outlined">
                    fitness_center
                </i>
                Preguntas para levantamiento y descenso
            </h3>

            <div className="form-range-container">
                <div className="form-input">
                    <Label 
                        htmlFor="nombreTrabajador"
                        title="Escriba el nombre del trabajador empezando por apellido paterno"
                    > 
                        Nombre del trabajador:
                    </Label>
                    <Input
                        type="text"
                        id="nombreTrabajador"
                        name='nombre_trabajador'
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: Juan Rodriguez"
                        // error={errors.startDate}
                    />  
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="form-input">
                    <Label 
                        htmlFor="puestoTrabajador"
                        title="Escriba el puesto del trabajador que va a checar"
                    > 
                        Puesto del trabajador:
                    </Label>
                    <Input
                        type="text"
                        id="puestoTrabajador"
                        name='puesto_trabajador'
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: Almacenamiento"
                        // error={errors.endDate}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <div className="form-range-container">
                <div className="form-input">
                    <Label 
                        htmlFor="actividadTrabajador"
                        title="Seleccione una actividad del trabajador"
                    > 
                        Actividad del trabajador:
                    </Label>
                    <Select
                        // type="text"
                        id="actividadTrabajador"
                        name='actividad_trabajador'
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.startDate}
                    >
                        <option>Levantamiento</option>
                        <option>Descenso</option>
                        <option>Transporte</option>
                        <option>Carga en equipo</option>
                        <option>Rodar</option>
                        <option>Arrastrar</option>
                        <option>Girar</option>
                        <option>Empujar con equipo auxiliar (pequeño)</option>
                        <option>Empujar con equipo auxiliar (mediano)</option>
                        <option>Empujar con equipo auxiliar (grande)</option>
                    </Select>
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="form-input">
                    <Label 
                        htmlFor="descripcionActividad"
                        title="Describa la actividad del trabajador"
                    > 
                        Descripción de la actividad:
                    </Label>
                    <Input
                        type="text"
                        id="descripcionActividad"
                        name='descrpcion_actividad'
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.endDate}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <div className="form-range-container">
                <div className="form-input">
                    <Label 
                        htmlFor="pesoCarga"
                        title="Ingrese el número del peso de la carga en kilos"
                    > 
                        Peso de la carga:
                    </Label>
                    <Input
                        type="number"
                        id="pesoCarga"
                        name='peso_carga'
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: 12"
                        // error={errors.startDate}
                    />
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="form-input">
                    <Label 
                        htmlFor="frecuenciaCarga"
                        title="Ingrese la cantidad de veces que realiza la carga al día."
                    > 
                        Frecuencia de la carga:
                    </Label>
                    <Input
                        type="number"
                        id="frecuenciaCarga"
                        name='frecuencia_carga'
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: 5"
                        // error={errors.endDate}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <div className="form-range-container">
                <div className="form-input">
                    <Label
                        htmlFor="distanciaManosEspalda"
                        title="Seleccione la distancia entre las manos y la parte inferior de la espalda"
                    > 
                    ¿   Cuál es la distancia horizontal entre las manos y la parte inferior de la espalda?
                    </Label>
                
                {/* Así usas tu nuevo componente */}
                    <ImageRadioGroup 
                        name="distanciaManosEspalda"
                        options={opcionesDistManosEsp}
                        selectedValue={distManosEsp}
                        onChange={handleChangeDistManosEsp}
                /   >
                </div>

                <div className="form-input">
                    <Label
                        htmlFor="regionLevantamiento"
                        title="Seleccione la región del levantamiento vertical "
                    > 
                        ¿Cuál es la región de levantamiento vertical?:
                    </Label>
                
                {/* Así usas tu nuevo componente */}
                    <ImageRadioGroup 
                        name="regionLevantamiento"
                        options={opcionesRegLevantamiento}
                        selectedValue={regLevantamiento}
                        onChange={handleChangeRegLevantamiento}
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
                        name="torsionFlexionTorso"
                        options={opcionesTorFlexTorso}
                        selectedValue={torFlexTorso}
                        onChange={handleChangeTorFlexTorso}
                    />
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="form-input">
                    <Label 
                        htmlFor="restriccionesPosturales"
                        title="Seleccione si hay restrcciones posturales"
                    > 
                        ¿Hay restricciones posturales?:
                    </Label>
                    {/* <Select
                        //type="number"
                        id="restriccionesPosturales"
                        name='restricciones_posturales'
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.endDate}
                    >
                        <option>Sin restricciones posturales.</option>
                        <option>Postura restringida .</option>
                        <option>Postura severamente restringida .</option>
                    </Select> */}
            
                    <ImageRadioGroup 
                        name="restriccionesPosturales"
                        options={opcionesRestPosturales}
                        selectedValue={restPosturales}
                        onChange={handleChangeRestPosturales}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
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
                    {/* <Select
                        // type="number"
                        id="acomplamientoManoCarga"
                        name='acomplamiento_mano_carga'
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.startDate}
                    >
                        <option>Buen agarre. </option>
                        <option>Agarre regular. </option>
                        <option>mal agarre.</option>
                    </Select> */}
                    <ImageRadioGroup 
                        name="acomplamientoManoCarga"
                        options={opcionesAcompManoCarga}
                        selectedValue={acompManoCarga}
                        onChange={handleChangeAcompManoCarga}
                    />
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="form-input">
                    <Label 
                        htmlFor="superficieTrabajo"
                        title="Seleccione el estado de la superficie de trabajo"
                    > 
                        ¿Cómo es la superficie de trabajo?:
                    </Label>
                    {/* <Select
                        //type="number"
                        id="superficieTrabajo"
                        name='superficie_trabajo'
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.endDate}
                    >
                        <option>Piso seco, limpio y en buenas condiciones de mantenimiento.</option>
                        <option>Piso seco, pero en malas condiciones, desgastado o irregular.</option>
                        <option>Piso contaminado/húmedo o desnivelado, superficie inestable o calzado inadecuado.</option>
                    </Select> */}
                    <ImageRadioGroup 
                        name="superficieTrabajo"
                        options={opcionesSupTrabajo}
                        selectedValue={supTrabajo}
                        onChange={handleChangeSupTrabajo}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <Button type="submit"> 
                <span className="material-symbols-outlined">save</span>
                    Guardar respuestas
            </Button>

        </form>
    )
}