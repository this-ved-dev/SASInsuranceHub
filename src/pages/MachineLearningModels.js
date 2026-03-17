import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import SectionTitle from '../components/Typography/SectionTitle'
import { config } from '../config'

function MachineLearningModels() {
  return (
    <>

      <PageTitle>Machine Learning Models</PageTitle>
      <CTA />
      <SectionTitle>Insurance Risk Model</SectionTitle>
      <Card className="" style={{ height: "70vh", marginBottom: 20 }}>
        <CardBody className="h-full">
          <sas-report-page style={{ height: "70vh" }} pageName="vi18972"
            authenticationType="guest"
            url={config.sasBaseUrl}
            reportUri="/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"
          ></sas-report-page>
        </CardBody>
      </Card>

      <SectionTitle>Renewal Prediction Model</SectionTitle>
      <Card className="" style={{ height: "70vh", marginBottom: 20 }}>
        <CardBody className="h-full">
          <sas-report-object style={{ height: "70vh" }} objectName="ve23640"
            authenticationType="guest"
            url={config.sasBaseUrl}
            reportUri="/reports/reports/57347ecc-2a91-460d-93db-d812d173656f"
          ></sas-report-object>
        </CardBody>
      </Card>

      <SectionTitle>Fraud Prediction Model</SectionTitle>
      <Card className="" style={{ height: "70vh", marginBottom: 20 }}>
        <CardBody className="h-full">
          <sas-report-object style={{ height: "70vh" }} objectName="ve818"
            authenticationType="guest"
            url={config.sasBaseUrl}
            reportUri="/reports/reports/57347ecc-2a91-460d-93db-d812d173656f"
          ></sas-report-object>
        </CardBody>
      </Card>

    </>
  )
}

export default MachineLearningModels
