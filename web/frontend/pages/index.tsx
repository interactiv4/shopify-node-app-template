import { Card, Page, Layout } from '@shopify/polaris'
import { TitleBar } from '@shopify/app-bridge-react'
import { useAppQuery } from '../hooks'

export default function HomePage() {
  const { data } = useAppQuery({
    url: '/api/products/count',
    reactQueryOptions: {
      onSuccess: (data: any) => {
        console.log('data', data)
      },
    },
  })

  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card>
            <p>Home page - Interactiv4 NodeJS APP Template</p>
          </Card>
          <Card>
            <p>Products count: {data?.count}</p>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
