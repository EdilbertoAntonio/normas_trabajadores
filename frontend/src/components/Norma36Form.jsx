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

    // 3. FUNCIÓN DE CAMBIO UNIVERSAL
    // Esta única función maneja TODOS los inputs (texto, números, selects y radio buttons)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, // Mantiene los datos anteriores
            [name]: value // Actualiza solo el campo que disparó el evento
        }));
    };

    // 4. FUNCIÓN PARA ENVIAR A SUPABASE
    const handleSubmit = async (e) => {
        e.preventDefault();

        // VALIDACIÓN 1: Comprobar que no haya campos vacíos
        // Object.values extrae todos los valores del diccionario formData
        // .some() verifica si al menos uno cumple la condición (estar vacío)
        const camposVacios = Object.values(formData).some(value => String(value).trim() === "");
        
        if (camposVacios) {
            alert("Por favor, llena todos los campos del formulario antes de continuar.");
            return; // El 'return' detiene la ejecución aquí mismo, evitando que se envíe
        }

        // VALIDACIÓN 2: Convertir a números para validar peso y frecuencia
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

        // VALIDACIÓN 3: Confirmación final (Retorna true si da 'Aceptar' y false si da 'Cancelar')
        const confirmarEnvio = window.confirm("¿Estás seguro de que deseas guardar estas respuestas?");
        
        if (confirmarEnvio) {
            setIsSubmitting(true);
            // Si el usuario acepta, ahora sí procedemos a enviar
            try {
                // 1. Obtenemos al usuario que tiene la sesión iniciada actualmente
                const { data: { user }, error: authError } = await supabase.auth.getUser();

                if (authError || !user) {
                    alert("Error de autenticación: No se pudo identificar al usuario.");
                    setIsSubmitting(false);
                    return;
                }

                // 2. Creamos un nuevo objeto uniendo el formulario y los datos del auditor
                const datosFinales = {
                    ...formData,
                    auditor_email: user.email, // Inyectamos el correo del auditor
                    // Supabase se encargará de generar el "id" (folio) y el "created_at" (fecha y hora) automáticamente
                };
                
                console.log("Enviando a base de datos...", datosFinales);
                
                // 3. Inserción real en Supabase (Descomenta esto cuando tu tabla esté lista)
                
                const { data, error } = await supabase
                    .from('norma36')
                    .insert([datosFinales])
                    .select(); // El .select() hace que Supabase te devuelva el registro recién creado, incluyendo su nuevo ID

                if (error) throw error;
                console.log("Registro guardado con folio:", data[0].id);
                
                
                alert("¡Respuestas guardadas exitosamente!");
                
                // 4. Limpiamos el formulario para la siguiente captura
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
                alert("Hubo un error al comunicarse con la base de datos.");
            } finally {
                // 3. Pase lo que pase (éxito o error), desbloqueamos el botón al final
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
                Preguntas para levantamiento y descenso - NOM 036
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
                        // error={errors.startDate}
                    />  
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
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
                        value={formData.puesto_trabajador}
                        onChange={handleInputChange}
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
                        value={formData.actividad_trabajador}
                        onChange={handleInputChange}
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
                        name='descripcion_actividad'
                        value={formData.descripcion_actividad}
                        onChange={handleInputChange}
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
                        Peso de la carga en kilos:
                    </Label>
                    <Input
                        type="number"
                        id="pesoCarga"
                        name='peso_carga'
                        value={formData.peso_carga}
                        onChange={handleInputChange}
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
                        Frecuencia de la carga al día:
                    </Label>
                    <Input
                        type="number"
                        //type='tel'
                        //inputMode='numeric'
                        id="frecuenciaCarga"
                        name='frecuencia_carga'
                        value={formData.frecuencia_carga}
                        onChange={handleInputChange}
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
                        ¿Cuál es la distancia horizontal entre las manos y la parte inferior de la espalda?
                    </Label>
                
                {/* Así usas tu nuevo componente */}
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
                
                {/* Así usas tu nuevo componente */}
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
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
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

                    <ImageRadioGroup 
                        name="acomplamiento_mano_carga"
                        options={opcionesAcompManoCarga}
                        selectedValue={formData.acomplamiento_mano_carga}
                        onChange={handleInputChange}
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

                    <ImageRadioGroup 
                        name="superficie_trabajo"
                        options={opcionesSupTrabajo}
                        selectedValue={formData.superficie_trabajo}
                        onChange={handleInputChange}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
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