"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
  BarChart3,
  GitBranch,
  Users,
  Globe,
  Lock,
  Rocket,
  MessageSquare,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">QueryAI</span>
            </div>
            <div className="flex items-center gap-4 hover:text-blue-600">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-amber-50/50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-bounce delay-500"></div>

        <div className="absolute top-32 right-1/4 opacity-10 animate-float">
          <Database className="h-16 w-16 text-blue-500" />
        </div>
        <div className="absolute bottom-32 left-1/3 opacity-10 animate-bounce">
          <Brain className="h-12 w-12 text-cyan-500" />
        </div>
        <div className="absolute top-48 left-1/4 opacity-10 animate-float delay-1000">
          <Zap className="h-10 w-10 text-amber-500" />
        </div>
        <div className="absolute bottom-48 right-1/4 opacity-10 animate-bounce delay-500">
          <Code className="h-8 w-8 text-purple-500" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative">
          <div className="animate-fade-in">
            <Badge
              variant="secondary"
              className="mb-8 px-6 py-3 text-base font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200 animate-pulse-glow"
            >
              <Sparkles className="h-5 w-5 mr-2" />
              AI-Powered Database Revolution
            </Badge>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-tight">
              Transform Data into
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-amber-500 bg-clip-text text-transparent animate-float">
                Insights Instantly
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
              Say goodbye to complex SQL syntax. Our AI understands your questions in plain English and generates
              perfect database queries in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/signup" className="block">
                <Button
                  className="h-16 px-12 text-xl font-bold gap-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  <Rocket className="h-7 w-7" />
                  Start Free Trial
                  <ArrowRight className="h-6 w-6" />
                </Button>
              </Link>
              
              <Link href="/login" className="block">
                <Button
                  variant="outline"
                  className="h-16 px-12 text-xl font-bold gap-4 border-2 border-blue-200 hover:bg-blue-50 bg-transparent text-blue-700 hover:border-blue-300 hover:text-blue-600"
                  size="lg"
                >
                  <Play className="h-7 w-7" />
                  Sign In
                </Button>
              </Link>
            </div>
            
            <div className="mb-16 relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div className="absolute top-4 right-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Dashboard
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="API Key Management"
                      className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Key Management</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Generate and manage API keys securely with enterprise-grade protection</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-amber-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div className="absolute top-4 right-4 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">
                      AI Engine
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="AI Processing"
                      className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">AI-Powered Intelligence</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Natural language to SQL conversion with advanced machine learning</p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Team
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Team Collaboration"
                      className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Team Collaboration</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Share queries, insights, and collaborate seamlessly across teams</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-lg">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <CheckCircle className="h-6 w-6 text-cyan-600" />
                <span>Setup in under 60 seconds</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <CheckCircle className="h-6 w-6 text-amber-600" />
                <span>Free forever plan available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/30 to-cyan-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-cyan-50/10 to-amber-50/20"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="text-xl text-muted-foreground mb-8 font-medium">Trusted by developers and data teams worldwide</p>
          <div className="flex items-center justify-center gap-16 opacity-70">
            <div className="text-2xl font-bold text-muted-foreground hover:text-blue-600 transition-colors cursor-pointer">TechCorp</div>
            <div className="text-2xl font-bold text-muted-foreground hover:text-cyan-600 transition-colors cursor-pointer">DataFlow</div>
            <div className="text-2xl font-bold text-muted-foreground hover:text-amber-600 transition-colors cursor-pointer">CloudBase</div>
            <div className="text-2xl font-bold text-muted-foreground hover:text-purple-600 transition-colors cursor-pointer">QueryLab</div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span>50+ Countries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold tracking-tight text-foreground mb-6">Why Teams Choose QueryAI</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Built for modern development teams who want to focus on insights, not syntax debugging.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="text-center space-y-4 p-8">
                <div className="mx-auto w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Brain className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">AI-Powered Intelligence</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Advanced natural language processing understands context, relationships, and intent to generate
                  perfect SQL queries every time.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cyan-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-cyan-50/30">
              <CardHeader className="text-center space-y-4 p-8">
                <div className="mx-auto w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                  <Database className="h-10 w-10 text-cyan-600" />
                </div>
                <CardTitle className="text-2xl">Universal Database Support</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Works seamlessly with PostgreSQL, MySQL, SQLite, SQL Server, Oracle, and more. One interface for all
                  your databases.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-amber-50/30">
              <CardHeader className="text-center space-y-4 p-8">
                <div className="mx-auto w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <Zap className="h-10 w-10 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">Lightning Performance</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Generate complex queries in milliseconds, not minutes. Optimized for speed with intelligent caching
                  and query optimization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
              <CardHeader className="text-center space-y-4 p-8">
                <div className="mx-auto w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Enterprise Security</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  SOC 2 Type II compliant with end-to-end encryption, role-based access control, and audit logging for
                  complete peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cyan-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-cyan-50/30">
              <CardHeader className="text-center space-y-4 p-8">
                <div className="mx-auto w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                  <Code className="h-10 w-10 text-cyan-600" />
                </div>
                <CardTitle className="text-2xl">Smart Code Generation</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  AI-powered suggestions, intelligent auto-completion, and real-time error detection for higher code
                  quality and faster development.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-amber-50/30">
              <CardHeader className="text-center space-y-4 p-8">
                <div className="mx-auto w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <GitBranch className="h-10 w-10 text-amber-600" />
                </div>
                <CardTitle className="text-2xl">Team Collaboration</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Built-in version control, shared query libraries, and real-time collaboration features for seamless
                  team productivity.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold tracking-tight text-foreground mb-6">
              From Question to Query in Seconds
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to revolutionize your database workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 animate-slide-up group">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-3xl font-bold text-foreground">Connect Instantly</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Securely connect any database with our one-click setup. Enterprise-grade security with zero
                configuration hassle.
              </p>
            </div>
            
            <div className="text-center space-y-6 animate-slide-up group">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-3xl font-bold text-foreground">Ask Naturally</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Describe your data needs in plain English. Our AI understands context, relationships, and business
                logic.
              </p>
            </div>
            
            <div className="text-center space-y-6 animate-slide-up group">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl flex items-center justify-center text-4xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-3xl font-bold text-foreground">Get Perfect Results</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Receive optimized, production-ready SQL queries that you can run, modify, save, and share with your
                team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold tracking-tight text-foreground mb-6">Perfect For Every Role</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              From data scientists to business analysts, everyone benefits from natural language queries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
              <div className="mx-auto w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <BarChart3 className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Data Analysts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Focus on discovering insights and patterns instead of wrestling with complex SQL syntax and joins.
              </p>
            </Card>

            <Card className="border-cyan-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-cyan-50/30">
              <div className="mx-auto w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-200 transition-colors">
                <Code className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Developers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accelerate development cycles with instant query generation. Perfect for prototyping and feature
                development.
              </p>
            </Card>

            <Card className="border-amber-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-amber-50/30">
              <div className="mx-auto w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                <Users className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Business Users</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get the data you need without technical knowledge. Self-service analytics made simple and accessible.
              </p>
            </Card>

            <Card className="border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 text-center p-8 animate-slide-up group hover:scale-105 bg-gradient-to-br from-white to-blue-50/30">
              <div className="mx-auto w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Data Teams</h3>
              <p className="text-muted-foreground leading-relaxed">
                Collaborate effectively with shared queries, version control, and team workspaces. Scale your impact.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-background to-cyan-50/50"></div>
        <div className="max-w-5xl mx-auto text-center animate-fade-in relative">
          <h2 className="text-6xl font-bold tracking-tight text-foreground mb-8">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Database Workflow?
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Join developers and data teams who are already building faster with AI-powered natural language queries.
            Start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/signup" className="block">
              <Button
                className="h-16 px-12 text-xl font-bold gap-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <Rocket className="h-7 w-7" />
                Start Free Trial
                <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
            
            <Link href="/login" className="block">
              <Button
                variant="outline"
                className="h-16 px-12 text-xl font-bold gap-4 border-2 border-blue-200 hover:bg-blue-50 bg-transparent text-blue-700 hover:border-blue-300 hover:text-blue-600"
                size="lg"
              >
                <MessageSquare className="h-7 w-7" />
                Sign In
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-lg">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Lock className="h-6 w-6 text-blue-600" />
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <CheckCircle className="h-6 w-6 text-amber-600" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 border-t border-blue-200/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-cyan-50/10 to-amber-50/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">QueryAI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
              Transform your database workflow with AI-powered natural language processing. 
              Generate perfect SQL queries in seconds.
            </p>
            <div className="mt-6 pt-6 border-t border-blue-200/30">
              <p className="text-xs text-muted-foreground/60">
                © 2024 QueryAI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
} 
