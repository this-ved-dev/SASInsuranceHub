import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import PageTitle from '../components/Typography/PageTitle'
import { config } from '../config'

function InsuranceRiskDDC() {
  return (
    <>
      <PageTitle>Data Driven Content</PageTitle>
      <Card className="" style={{ height: "80vh" }}>
        <CardBody className="h-full">
          <sas-report-object style={{ height: "80vh" }} objectName="ve4729"
            authenticationType="guest"
            url={config.sasBaseUrl}
            reportUri="/reports/reports/6f8b203f-22dd-48c3-9f78-67ae1923dd70"
          />
        </CardBody>
      </Card>
    </>
  )
}

export default InsuranceRiskDDC
