/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
  useMatches,
} from '@tanstack/react-router'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: 'GravelRig — Expert Gravel Bike Reviews & Gear Guides (2026)',
        description: 'Independent gravel bike reviews, gear guides, and buying advice from riders who actually ride. Find the perfect gravel bike and accessories for your next adventure.',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function AffiliateDisclosureBanner() {
  return (
    <div className="bg-amber-900/20 border-b border-amber-800/30 text-xs text-amber-200/80 text-center py-1.5 px-4">
      <span className="font-medium">Affiliate Disclosure:</span> GravelRig earns commissions from qualifying purchases. This doesn't affect our recommendations.{' '}
      <Link to="/about" className="underline hover:text-amber-100">Learn more</Link>
    </div>
  )
}

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Back to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { to: '/best-gravel-bikes' as const, label: 'Best Bikes' },
    { to: '/gear-guide' as const, label: 'Gear Guide' },
    { to: '/buyers-guide' as const, label: "Buyer's Guide" },
    { to: '/about' as const, label: 'About' },
  ]

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col scroll-smooth">
        <AffiliateDisclosureBanner />

        {/* Navigation */}
        <nav className="border-b border-border/50 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-black text-primary tracking-tight group-hover:text-primary/80 transition-colors">GravelRig</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">2026</span>
            </Link>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-all"
                  activeProps={{ className: '!text-primary !bg-primary/10' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden border-t border-border/50 bg-background px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg hover:bg-secondary/50 transition-colors"
                  activeProps={{ className: '!text-primary !bg-primary/10' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 mt-16 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid gap-10 md:grid-cols-4">
              <div className="md:col-span-1">
                <h3 className="text-lg font-black text-primary mb-3">GravelRig</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Independent gravel bike reviews and gear guides from riders who put real miles on everything we recommend.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Reviews & Guides</h4>
                <div className="space-y-2">
                  <Link to="/best-gravel-bikes" className="block text-sm text-foreground/70 hover:text-primary transition-colors">Best Gravel Bikes 2026</Link>
                  <Link to="/gear-guide" className="block text-sm text-foreground/70 hover:text-primary transition-colors">Gear Guide</Link>
                  <Link to="/buyers-guide" className="block text-sm text-foreground/70 hover:text-primary transition-colors">Buyer's Guide</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Company</h4>
                <div className="space-y-2">
                  <Link to="/about" className="block text-sm text-foreground/70 hover:text-primary transition-colors">About Us</Link>
                  <a href="mailto:hello@gravelrig.com" className="block text-sm text-foreground/70 hover:text-primary transition-colors">Contact</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Newsletter</h4>
                <p className="text-xs text-muted-foreground mb-3">Weekly gear deals and riding tips. No spam.</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Affiliate Disclosure */}
            <div className="border-t border-border/50 mt-8 pt-6">
              <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
                <strong className="text-foreground/70">Affiliate Disclosure:</strong> GravelRig participates in affiliate programs including Amazon Associates and manufacturer referral programs. When you click product links and make a purchase, we may earn a commission at no additional cost to you. Our editorial recommendations are independent — we never let affiliate partnerships influence our reviews. <Link to="/about" className="text-primary hover:underline">Full disclosure →</Link>
              </p>
            </div>

            <div className="border-t border-border/50 mt-6 pt-6 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} GravelRig. All rights reserved. Prices and availability subject to change.
            </div>
          </div>
        </footer>

        <BackToTop />
        <Scripts />
      </body>
    </html>
  )
}
