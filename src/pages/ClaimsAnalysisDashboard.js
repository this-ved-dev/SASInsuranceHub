import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import { config } from '../config'

function ClaimsAnalysisDashboard() {
  return (
    <>
      <PageTitle>Insurance Claims</PageTitle>
      <CTA />
      <SectionTitle>Dashboard</SectionTitle>
      <Card className="" style={{ height: "80vh", marginBottom: 20 }}>
        <CardBody className="h-full">
          <sas-report-page style={{ height: "80vh" }} pageName="vi3463"
            authenticationType="guest"
            url={config.sasBaseUrl}
            reportUri="/reports/reports/57347ecc-2a91-460d-93db-d812d173656f"
          />
        </CardBody>
      </Card>

      <SectionTitle>Analysis</SectionTitle>
      <Card className="" style={{ height: "80vh", marginBottom: 20 }}>
        <CardBody className="h-full">
          <sas-report-page style={{ height: "80vh" }} pageName="vi6267"
            authenticationType="guest"
            url={config.sasBaseUrl}
            reportUri="/reports/reports/57347ecc-2a91-460d-93db-d812d173656f"
          />

        </CardBody>
      </Card>

    </>
  )
}

export default ClaimsAnalysisDashboard
