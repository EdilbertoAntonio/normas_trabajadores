import React from "react";
import { CargaForm } from "../components/CargaForm";
import { Layout } from "../components/Layout";
import '../assets/styles/carga.css';

const Carga = () => {

    return(
        <Layout>
            <div className="carga-wrapper">
                <CargaForm />
            </div>
        </Layout>
    );

};

export default Carga;