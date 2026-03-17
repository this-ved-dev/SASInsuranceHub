import React, { useState, useContext, Fragment } from 'react';
import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import apiClient from '../apis/apiClient';
import { AuthContext } from '../context/AuthContext'
import MASForm from '../components/MASForm';
import MASResults from '../components/MASResults';

function MASPredictions() {
    const { authInfo } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [scoreData, setScoreData] = useState({});
    const [message, setMessage] = useState();

    const handleEvaluate = (selection) => {
        setLoading(true)
        const endpoint = '/microanalyticScore/modules/logistic_regression_renewal_clas/steps/score';

        const headers = {
            'Content-Type': 'application/vnd.sas.microanalytic.module.step.input+json',
            'Accept': 'application/vnd.sas.microanalytic.module.step.output+json'
        };
        const formData = { inputs: [] };
        for (let element in selection) {
            const data = selection[element];
            formData.inputs.push({ name: data.variable, value: data.value });
        }

        apiClient.post(endpoint, formData, { headers: headers })
            .then(response => {
                if (response.status === 201 && response.data.executionState === "completed") {
                    const output = {};
                    response.data.outputs.forEach(variable => output[variable.name] = variable.value);
                    setScoreData(output);
                    setLoading(false);
                } else {
                    setMessage("Please try again!");
                }
            });
    };

    return (
        <Fragment>
            <MASForm onEvaluate={handleEvaluate} />
            {Object.keys(scoreData).length === 0 ? null : <MASResults data={scoreData} message={message} />}
        </Fragment>
    )
}

export default MASPredictions;
