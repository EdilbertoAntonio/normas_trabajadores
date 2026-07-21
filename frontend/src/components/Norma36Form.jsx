import React, { useState } from "react";
import Button from './Button';
import Label from './Label';
import Input from './Input';
import Select from "./Select";
import ImageRadioGroup from './ImageRadioGroup';
import { supabase } from '../services/supabaseClient';
import '../assets/styles/norma36.css';
import '../assets/styles/formulario.css';

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

export function Norma36Form () {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        nombre_empresa: "",
        nombre_trabajador: "",
        puesto_trabajador: "",
        actividad_trabajador: "",
        descripcion_actividad: "",
        peso_carga: "",
        frecuencia_carga: "",
        distancia_manos_espalda: "",
        region_levantamiento: "",
        torsion_flexion_torso: "",
        restricciones_posturales: "",
        acomplamiento_mano_carga: "",
        superficie_trabajo: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, 
            [name]: value 
        }));

        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: false
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        const nuevosErrores = {};
        Object.keys(formData).forEach(key => {
            if (String(formData[key]).trim() === "") {
                nuevosErrores[key] = true; 
            }
        });

        if (Object.keys(nuevosErrores).length > 0) {
            setErrors(nuevosErrores); 
            alert("Por favor, completa todos los campos antes de continuar.");
            return;
        }

        const camposVacios = Object.values(formData).some(value => String(value).trim() === "");
        
        if (camposVacios) {
            alert("Por favor, llena todos los campos del formulario antes de continuar.");
            return; 
        }

        const peso = parseFloat(formData.peso_carga);
        const frecuencia = parseFloat(formData.frecuencia_carga);

        if (isNaN(peso) || peso <= 0) {
            alert("El peso de la carga debe ser un número mayor a 0.");
            return; 
        }

        if (isNaN(frecuencia) || frecuencia <= 0) {
            alert("La frecuencia de la carga debe ser un número mayor a 0.");
            return;
        }

        const confirmarEnvio = window.confirm("¿Estás seguro de que deseas guardar estas respuestas?");
        
        if (confirmarEnvio) {

            setIsSubmitting(true);
            try {
                const { data: { user }, error: authError } = await supabase.auth.getUser();

                if (authError || !user) {
                    alert("Error de autenticación: No se pudo identificar al usuario.");
                    setIsSubmitting(false);
                    return;
                }

                const datosFinales = {
                    ...formData,
                    auditor_email: user.email, 
                };
                
                const { data, error } = await supabase
                    .from('norma36')
                    .insert([datosFinales])
                    .select(); 

                if (error) throw error;

                console.log("Registro guardado con folio:", data[0].id);
                
                alert("¡Respuestas guardadas exitosamente!");
                
                setFormData({
                    nombre_empresa: "",
                    nombre_trabajador: "",
                    puesto_trabajador: "",
                    actividad_trabajador: "",
                    descripcion_actividad: "",
                    peso_carga: "",
                    frecuencia_carga: "",
                    distancia_manos_espalda: "",
                    region_levantamiento: "",
                    torsion_flexion_torso: "",
                    restricciones_posturales: "",
                    acomplamiento_mano_carga: "",
                    superficie_trabajo: ""
                });
            } catch (error) {
                console.error("Error al guardar:", error);
                alert("Hubo un error al comunicarse con la base de datos. Favor de volver a guardar nuevamente el formulario.");
            } finally {
                setIsSubmitting(false); 
            }
        }
    };

    return(
        <form className="form-container" onSubmit={handleSubmit}>
        
            <h3>
                <i className="material-symbols-outlined">
                    fitness_center
                </i>
                Formulario para la Norma NOM-036-1-STPS-2018
            </h3>

            <div className="form-range-container">
                <div className="form-input">
                    <Label 
                        htmlFor="nombreEmpresa"
                        title="Escriba el nombre de la empresa que va auditar"
                    > 
                        Nombre de la empresa:
                    </Label>
                    <Input
                        type="text"
                        id="nombreEmpresa"
                        name='nombre_empresa'
                        value={formData.nombre_empresa}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: Cristaleria Luz de AC"
                        error={errors.nombre_empresa}
                    />  

                </div>

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
                        value={formData.nombre_trabajador}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: Juan Rodriguez"
                        error={errors.nombre_trabajador}
                    />  
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
                        value={formData.puesto_trabajador}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: Almacenamiento"
                        error={errors.puesto_trabajador}
                    />
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
                        value={formData.actividad_trabajador}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: Levantamiento  "
                        error={errors.actividad_trabajador}
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
                        name='descripcion_actividad'
                        value={formData.descripcion_actividad}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: "
                        error={errors.descripcion_actividad}
                    />
                </div>
            </div>

            <div className="form-range-container">
                <div className="form-input">
                    <Label 
                        htmlFor="pesoCarga"
                        title="Ingrese el número del peso de la carga en kilos"
                    > 
                        Peso de la carga en kilos:
                    </Label>
                    <Input
                        type="number"
                        id="pesoCarga"
                        name='peso_carga'
                        value={formData.peso_carga}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: 12"
                        min = '0'
                        step ='1'
                        error={errors.peso_carga}
                    />
                </div>

                <div className="form-input">
                    <Label 
                        htmlFor="frecuenciaCarga"
                        title="Ingrese la cantidad de veces que realiza la carga al día."
                    > 
                        Frecuencia de la carga al día:
                    </Label>
                    <Input
                        type="number"
                        id="frecuenciaCarga"
                        name='frecuencia_carga'
                        value={formData.frecuencia_carga}
                        onChange={handleInputChange}
                        placeholder="Ejemplo: 5"
                        min = '0'
                        step ='1'
                        error={errors.frecuencia_carga}
                    />
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
                /   >
                </div>

                <div className="form-input">
                    <Label
                        htmlFor="regionLevantamiento"
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

            <Button type="submit" disabled={isSubmitting}> 
                <span className="material-symbols-outlined">
                    {isSubmitting ? 'sync' : 'save'}
                </span>
                {isSubmitting ? 'Guardando...' : 'Guardar respuestas'}
            </Button>

        </form>
    )
}