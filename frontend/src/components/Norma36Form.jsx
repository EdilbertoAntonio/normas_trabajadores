import React, { useState } from "react";
import Button from './Button';
import Label from './Label';
import Input from './Input';
import Select from "./Select";
import { supabase } from '../services/supabaseClient';
import { LevantamientoDescenso } from "./PreguntasNorma36/LevantamientoDescenso";
import { Transporte } from "./PreguntasNorma36/Transporte";
import { ManejoEquipo } from "./PreguntasNorma36/ManejoEquipo";
import { EmpujeSinEquipo } from "./PreguntasNorma36/EmpujeSinEquipo";
import { EmpujeConEquipo } from "./PreguntasNorma36/EmpujeConEquipo";
import '../assets/styles/norma36.css';
import '../assets/styles/formulario.css';

const ESTADO_INICIAL = {
    nombre_empresa: "",
    nombre_trabajador: "",
    puesto_trabajador: "",
    actividad_trabajador: "",
    descripcion_actividad: "",
    peso_carga: "",
    
    // Preguntas de Levantamiento / Descenso
    frecuencia_carga: "",
    distancia_manos_espalda: "",
    region_levantamiento: "",
    torsion_flexion_torso: "",
    restricciones_posturales: "",
    acomplamiento_mano_carga: "",
    superficie_trabajo: "",
    factores_ambientales:"",

    // Transporte
    carga_torso: "",
    distancia_transporte: "",
    obstaculos_ruta: "",

    // Manejo equipo
    comunicacion_control: "",
    personas_equipo: "",
    
    // Sin equipo
    postura_carga: '',
    patron_trabajo: '',
    otros_factores: '',

    // Con equipo
    condicion_equipo:''
};

export function Norma36Form () {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState(ESTADO_INICIAL);

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

        // 7 preguntas que tendrán en comun
        let camposRequeridos = [
            'nombre_empresa', 'nombre_trabajador', 'puesto_trabajador', 
            'actividad_trabajador', 'descripcion_actividad', 'peso_carga'
        ];

        // preguntas epecificas
        if (formData.actividad_trabajador === "Levantamiento" || formData.actividad_trabajador === "Descenso") {
            camposRequeridos.push(
                'frecuencia_carga', 'distancia_manos_espalda', 'region_levantamiento', 'torsion_flexion_torso', 
                'restricciones_posturales', 'acomplamiento_mano_carga', 'superficie_trabajo', 'factores_ambientales'
            );
        } 
        if (formData.actividad_trabajador === "Transporte") {
            camposRequeridos.push(
                'frecuencia_carga', 'distancia_manos_espalda', 'carga_torso', 'distancia_transporte', "obstaculos_ruta",
                "restricciones_posturales", "acomplamiento_mano_carga", 'superficie_trabajo', 'factores_ambientales'
            );
        } 
        if (formData.actividad_trabajador === "Manejo en equipo") {
            camposRequeridos.push(
                'personas_equipo','distancia_manos_espalda', 'region_levantamiento', 'torsion_flexion_torso', 'restricciones_posturales',
                'acomplamiento_mano_carga', 'superficie_trabajo', 'factores_ambientales', 'comunicacion_control'
            );
        }

        if (["Rodar", "Arrastrar", "Girar"].includes(formData.actividad_trabajador)) {
            camposRequeridos.push(
                'postura_carga','acomplamiento_mano_carga', 'patron_trabajo', 'distancia_transporte', 'superficie_trabajo',
                'obstaculos_ruta', 'otros_factores'
            );
        }

        if (["Empujar con equipo auxiliar (pequeño)", "Empujar con equipo auxiliar (mediano)", "Empujar con equipo auxiliar (grande)"].includes(formData.actividad_trabajador)) {
            camposRequeridos.push(
                'postura_carga','acomplamiento_mano_carga', 'patron_trabajo', 'distancia_transporte', 'superficie_trabajo',
                'obstaculos_ruta', 'otros_factores', 'condicion_equipo'
            );
        }

        // validamos solo campos requeridos
        const nuevosErrores = {};
        camposRequeridos.forEach(key => {
            // Usamos formData[key] || "" para evitar errores si el campo aún no existe en el estado
            if (String(formData[key] || "").trim() === "") {
                nuevosErrores[key] = true; 
            }
        });

        if (Object.keys(nuevosErrores).length > 0) {
            setErrors(nuevosErrores); 
            alert("Por favor, completa todos los campos antes de continuar.");
            return;
        }

        // const camposVacios = Object.values(formData).some(value => String(value).trim() === "");
        
        // if (camposVacios) {
        //     alert("Por favor, llena todos los campos del formulario antes de continuar.");
        //     return; 
        // }

        if (["Levantamiento", "Descenso", "Transporte", "Manejo en equipo"].includes(formData.actividad_trabajador)) {
            const peso = parseFloat(formData.peso_carga);
            if (isNaN(peso) || peso <= 0) {
                alert("El peso de la carga debe ser un número mayor a 0.");
                return; 
            }
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

                // const datosFinales = {
                //     ...formData,
                //     auditor_email: user.email, 
                // };

                const { nombre_empresa, ...restoDelFormulario } = formData;

                const datosLimpios = Object.fromEntries(
                    Object.entries(restoDelFormulario).filter(([key, value]) => value !== "")
                );

                const datosFinales = {
                    auditor_email: user.email, 
                    tipo_norma: "NOM-036", // Especificamos qué norma es
                    nombre_empresa: nombre_empresa,
                    datos_formulario: datosLimpios // El resto se va empaquetado al JSONB
                };
                
                const { data, error } = await supabase
                    .from('auditorias')
                    .insert([datosFinales])
                    .select(); 

                if (error) throw error;

                console.log("Registro guardado con folio:", data[0].id);
                
                alert("¡Respuestas guardadas exitosamente!");
                
                setFormData(ESTADO_INICIAL);

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
                        <option>Manejo en equipo</option>
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

                {["Levantamiento", "Descenso", "Transporte", "Manejo en equipo"].includes(formData.actividad_trabajador) && (
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
                )}

            </div>

            {(formData.actividad_trabajador === "Levantamiento" || formData.actividad_trabajador === "Descenso") && (
                <LevantamientoDescenso 
                    formData={formData}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            )}

            {(formData.actividad_trabajador === "Transporte" ) && (
                <Transporte 
                    formData={formData}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            )}

            {(formData.actividad_trabajador === "Manejo en equipo" ) && (
                <ManejoEquipo
                    formData={formData}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            )}


            {["Rodar", "Arrastrar", "Girar"].includes(formData.actividad_trabajador) && (
                <EmpujeSinEquipo
                    formData={formData}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            )}

            
            {["Empujar con equipo auxiliar (pequeño)", "Empujar con equipo auxiliar (mediano)", "Empujar con equipo auxiliar (grande)"].includes(formData.actividad_trabajador) && (
                <EmpujeConEquipo
                    formData={formData}
                    handleInputChange={handleInputChange}
                    errors={errors}
                />
            )}

            <Button type="submit" disabled={isSubmitting}> 
                <span className="material-symbols-outlined">
                    {isSubmitting ? 'sync' : 'save'}
                </span>
                {isSubmitting ? 'Guardando...' : 'Guardar respuestas'}
            </Button>

        </form>
    )
}