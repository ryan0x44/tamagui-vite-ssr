import React, { Suspense } from 'react'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import { Link } from './Link'
import { TamaguiProvider } from '@tamagui/web'
import tamaguiConfig from '../tamagui.config'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <TamaguiProvider config={tamaguiConfig}>
        <Suspense>
          <PageContextProvider pageContext={pageContext}>
            <Layout>
              <Sidebar>
                <Link className="navitem" href="/">
                  Home
                </Link>
                <Link className="navitem" href="/about">
                  About
                </Link>
              </Sidebar>
              <Content>{children}</Content>
            </Layout>
          </PageContextProvider>
        </Suspense>
      </TamaguiProvider>
    </React.StrictMode>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}
