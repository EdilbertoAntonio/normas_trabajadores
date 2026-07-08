import React from "react";
import { Norma36Form } from "../components/Norma36Form";
import { Layout } from "../components/Layout";
import '../assets/styles/norma36.css';
import '../assets/styles/formulario.css';

const Norma36 = () => {

    return(
        <Layout>
            <div className="form-wrapper">
                <Norma36Form />
            </div>
        </Layout>
    );

};

export default Norma36;