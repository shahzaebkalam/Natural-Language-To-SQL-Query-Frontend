'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Database, 
  Brain, 
  Zap, 
  Shield, 
  Code, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Play,
  Terminal,
  BarChart3,
  GitBranch,
  Users,
  Globe,
  Lock
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Database IDE
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Query Your Data in 
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Natural Language</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Transform your database workflow with natural language processing. 
              Simply describe what you need, and our AI generates the perfect SQL queries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/signup" className="block">
                <Button className="h-14 px-8 text-lg font-semibold gap-3" size="lg">
                  <Play className="h-6 w-6" />
                  Start Building Free
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/login" className="block">
                <Button variant="outline" className="h-14 px-8 text-lg font-semibold gap-3" size="lg">
                  <Terminal className="h-6 w-6" />
                  Sign In
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Setup in 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Free forever plan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Why Developers Love Our IDE
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
              Built for modern development teams who want to focus on building, not debugging SQL syntax.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Natural Language Processing</CardTitle>
                <CardDescription>
                  Describe your data needs in plain English. Our AI understands context and generates accurate SQL queries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Multi-Database Support</CardTitle>
                <CardDescription>
                  Works with PostgreSQL, MySQL, SQLite, SQL Server, and more. Connect once, query anywhere.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
                <CardDescription>
                  Generate complex queries in seconds, not minutes. Built for speed and efficiency.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
                <CardDescription>
                  SOC 2 compliant with role-based access control. Your data stays secure and private.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Smart Code Generation</CardTitle>
                <CardDescription>
                  AI-powered suggestions, auto-completion, and intelligent error detection for better code quality.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <CardHeader className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <GitBranch className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Version Control</CardTitle>
                <CardDescription>
                  Track changes, collaborate with teams, and maintain query history with built-in Git integration.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
              Three simple steps to transform your database workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-slide-up">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-3xl font-bold text-primary">
                1
              </div>
              <h3 className="text-2xl font-bold text-foreground">Connect Your Database</h3>
              <p className="text-muted-foreground/80 leading-relaxed">
                Securely connect your database with our one-click setup. Support for all major database systems.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-slide-up">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-3xl font-bold text-primary">
                2
              </div>
              <h3 className="text-2xl font-bold text-foreground">Describe What You Need</h3>
              <p className="text-muted-foreground/80 leading-relaxed">
                Use natural language to describe your data requirements. Our AI understands context and intent.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-slide-up">
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-3xl font-bold text-primary">
                3
              </div>
              <h3 className="text-2xl font-bold text-foreground">Get Perfect Queries</h3>
              <p className="text-muted-foreground/80 leading-relaxed">
                Instantly receive optimized SQL queries that you can run, modify, or save for future use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              Perfect For Every Team
            </h2>
            <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto">
              From data analysts to full-stack developers, everyone can benefit from natural language queries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 animate-slide-up">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Data Analysts</h3>
              <p className="text-sm text-muted-foreground/80">
                Focus on insights, not SQL syntax. Generate complex queries with simple descriptions.
              </p>
            </Card>

            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 animate-slide-up">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Developers</h3>
              <p className="text-sm text-muted-foreground/80">
                Speed up development with AI-generated queries. Perfect for prototyping and testing.
              </p>
            </Card>

            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 animate-slide-up">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Business Users</h3>
              <p className="text-sm text-muted-foreground/80">
                Get the data you need without technical knowledge. Self-service analytics made simple.
              </p>
            </Card>

            <Card className="border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6 animate-slide-up">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Data Teams</h3>
              <p className="text-sm text-muted-foreground/80">
                Collaborate effectively with shared queries and version control. Team productivity amplified.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
            Ready to Transform Your Database Workflow?
          </h2>
          <p className="text-xl text-muted-foreground/80 mb-8 leading-relaxed">
            Join thousands of developers who are already building faster with natural language queries. 
            Start your free trial today and see the difference AI can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/signup" className="block">
              <Button className="h-14 px-8 text-lg font-semibold gap-3" size="lg">
                <Play className="h-6 w-6" />
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            
            <Link href="/login" className="block">
              <Button variant="outline" className="h-14 px-8 text-lg font-semibold gap-3" size="lg">
                <Terminal className="h-6 w-6" />
                Sign In
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground/70">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>No setup fees</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 