import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import apiClient from '../apis/apiClient';
import { AuthContext } from '../context/AuthContext'
import Container from 'react-bootstrap/Container';
import TableViewer from '../components/TableViewer/TableViewer';
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'


function CAS() {

    const { authInfo, setAuthInfo } = useContext(AuthContext);
    const history = useHistory();
    const [tableData, setTableData] = useState({ rows: [], columns: [] });

    useEffect(() => {
        if (authInfo.authenticated === false) {
            history.push("/");
        }
    }, [authInfo.authenticated, history]);

    useEffect(() => {

        if (authInfo.authenticated === true && !("cas" in authInfo.session)) {

            const endpoint = '/cas-shared-default-http/cas/sessions';

            Instance.post(endpoint)

                .then(response => {

                    setAuthInfo({ ...authInfo, session: { ...authInfo.session, cas: response.data.session } });
                })
        }
    }, [authInfo, setAuthInfo]);



    useEffect(() => {

        if (authInfo.session?.cas) {

            const endpoint = `/cas-shared-default-http/cas/sessions/${authInfo.session.cas}/actions/table.fetch`;

            const data = {

                "table": {

                    "caslib": "PUBLIC",

                    // "name": "CLAIMS_RENEWAL_LOGISTIC REGRESSION_NODEOUTPUT"
                    "name": "UpdatesRenewal"

                }

            }

            const headers = {

                "accept": "application/json",

                "content-type": "application/json"

            };

            apiClient.post(endpoint, data, { headers: headers })

                .then(response => {

                    if (response.data.results.Fetch.schema.length > 0) {

                        const result = response.data.results.Fetch;

                        setTableData({ rows: result.rows, columns: result.schema });

                    }

                });

        }

    }, [authInfo.session]);




    return (
        <>
            <PageTitle></PageTitle>
            <CTA />
            <SectionTitle>Claim Renewal Prediction Table</SectionTitle>
            <Container className="justify-content-md-center">

                <br></br>

                <TableViewer data={tableData} />

            </Container>
        </>
    )
};

export default CAS;
