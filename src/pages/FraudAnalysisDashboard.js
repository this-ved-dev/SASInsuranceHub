import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import PageTitle from '../components/Typography/PageTitle'
import { config } from '../config'

function FraudAnalysisDashboard() {
  return (
    <>
      <PageTitle>Fraud Analysis Dashboard</PageTitle>
      <Card className="" style={{ height: "80vh" }}>
        <CardBody className="h-full">
          <sas-report-page style={{ height: "80vh" }} pageName="vi4746"
            authenticationType="guest"
            url={config.sasBaseUrl}
            reportUri="/reports/reports/57347ecc-2a91-460d-93db-d812d173656f"
          />
        </CardBody>
      </Card>
    </>
  )
}

export default FraudAnalysisDashboard
