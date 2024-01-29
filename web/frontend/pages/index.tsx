import { Card, Page, Layout } from '@shopify/polaris'
import { TitleBar } from '@shopify/app-bridge-react'

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card>
            <p>Home page - Interactiv4 NodeJS APP Template</p>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
