import React from "react";
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';
import Select from "./Select";
import '../assets/styles/carga.css';

export function CargaForm ({}) {
    return(
        <form className="carga-container">
        
            <h3>
                <i className="material-symbols-outlined">
                    assignment
                </i>
                Preguntas para levantamiento y descenso
            </h3>

            <div className="carga-range-container">
                <div className="carga-input">
                    <Label 
                        htmlFor="nombreTrabajador"
                        title="Escriba el nombre del trabajador empezando por apellido paterno"
                    > 
                        Nombre del trabajador:
                    </Label>
                    <Input
                        type="text"
                        id="nombreTrabajador"
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: Juan Rodriguez"
                        // error={errors.startDate}
                    />  
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="carga-input">
                    <Label 
                        htmlFor="puestoTrabajador"
                        title="Escriba el puesto del trabajador que va a checar"
                    > 
                        Puesto del trabajador:
                    </Label>
                    <Input
                        type="text"
                        id="puestoTrabajador"
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: Almacenamiento"
                        // error={errors.endDate}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <div className="carga-range-container">
                <div className="carga-input">
                    <Label 
                        htmlFor="actividadTrabajador"
                        title="Seleccione una actividad del trabajador"
                    > 
                        Actividad del trabajador:
                    </Label>
                    <Select
                        // type="text"
                        id="actividadTrabajador"
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

                <div className="carga-input">
                    <Label 
                        htmlFor="descripcionActividad"
                        title="Describa la actividad del trabajador"
                    > 
                        Descripción de la actividad:
                    </Label>
                    <Input
                        type="text"
                        id="descripcionActividad"
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.endDate}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <div className="carga-range-container">
                <div className="carga-input">
                    <Label 
                        htmlFor="pesoCarga"
                        title="Ingrese el número del peso de la carga en kilos"
                    > 
                        Peso de la carga:
                    </Label>
                    <Input
                        type="number"
                        id="pesoCarga"
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: 12"
                        // error={errors.startDate}
                    />
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="carga-input">
                    <Label 
                        htmlFor="frecuenciaCarga"
                        title="Ingrese la cantidad de veces que realiza la carga al día."
                    > 
                        Frecuencia de la carga:
                    </Label>
                    <Input
                        type="number"
                        id="frecuenciaCarga"
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: 5"
                        // error={errors.endDate}
                    />
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <div className="carga-range-container">
                <div className="carga-input">
                    <Label 
                        htmlFor="distanciaManosEspalda"
                        title="Seleccione la distancia entre las manos y la parte inferior de la espalda"
                    > 
                        ¿Cuál es la distancia horizontal entre las manos y la parte inferior de la espalda?
                    </Label>
                    <Select
                        // type="number"
                        id="distanciaManosEspalda"
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.startDate}
                    >
                        <option>Cerca: Los brazos alineados verticalmente y con el torso erguido</option>
                        <option>Los brazos se alejan del cuerpo.</option>
                        <option>Torso inclinado hacia adelante.</option>
                        <option> Los brazos se inclinan hacia fuera del cuerpo y el torso se inclina hacia adelante.</option>
                    </Select>
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="carga-input">
                    <Label 
                        htmlFor="regionLevantamiento"
                        title="Seleccione la región del levantamiento vertical "
                    > 
                        ¿Cuál es la región de levantamiento vertical?:
                    </Label>
                    <Select
                        //type="number"
                        id="regionLevantamiento"
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.endDate}
                    >
                        <option>Por encima de la rodilla y/o por debajo de la altura del codo.</option>
                        <option>Por debajo de la rodilla y/o por encima de la altura del codo.</option>
                        <option>Nivel de suelo o inferior.</option>
                        <option>A la altura de la cabeza o superior.</option>
                    </Select>
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <div className="carga-range-container">
                <div className="carga-input">
                    <Label 
                        htmlFor="torsionFlexionTorso"
                        title="Seleccione la torsion y flexión lateral del torso"
                    > 
                        ¿Cómo es la torsión y flexión lateral del torso?
                    </Label>
                    <Select
                        // type="number"
                        id="torsionFlexionTorso"
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.startDate}
                    >
                        <option>Poca o ninguna torsión o flexión lateral del torso. </option>
                        <option>Torsión o flexión lateral del torso. </option>
                        <option>Torsión y flexión lateral del torso .</option>
                    </Select>
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="carga-input">
                    <Label 
                        htmlFor="restriccionesPosturales"
                        title="Seleccione si hay restrcciones posturales"
                    > 
                        ¿Hay restricciones posturales?:
                    </Label>
                    <Select
                        //type="number"
                        id="restriccionesPosturales"
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.endDate}
                    >
                        <option>Sin restricciones posturales.</option>
                        <option>Postura restringida .</option>
                        <option>Postura severamente restringida .</option>
                    </Select>
                    {/* {errors.endDate && <p className="message-error">{errors.endDate}</p>} */}
                </div>
            </div>

            <div className="carga-range-container">
                <div className="carga-input">
                    <Label 
                        htmlFor="acomplamientoManoCarga"
                        title="Seleccione el acomplamiento mano-carga"
                    > 
                        ¿Cómo es el acoplamiento mano-carga?
                    </Label>
                    <Select
                        // type="number"
                        id="acomplamientoManoCarga"
                        // value={values.startDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.startDate}
                    >
                        <option>Buen agarre. </option>
                        <option>Agarre regular. </option>
                        <option>mal agarre.</option>
                    </Select>
                    {/* {errors.startDate && <p className="message-error">{errors.startDate}</p>} */}
                </div>

                <div className="carga-input">
                    <Label 
                        htmlFor="superficieTrabajo"
                        title="Seleccione el estado de la superficie de trabajo"
                    > 
                        ¿Cómo es la superficie de trabajo?:
                    </Label>
                    <Select
                        //type="number"
                        id="superficieTrabajo"
                        // value={values.endDate}
                        // onChange={handleChange}
                        placeholder="Ejemplo: "
                        // error={errors.endDate}
                    >
                        <option>Piso seco, limpio y en buenas condiciones de mantenimiento.</option>
                        <option>Piso seco, pero en malas condiciones, desgastado o irregular.</option>
                        <option>Piso contaminado/húmedo o desnivelado, superficie inestable o calzado inadecuado.</option>
                    </Select>
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