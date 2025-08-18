"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const msg = searchParams.get("message")
    if (msg) {
      setMessage(msg)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setMessage("")

    setLoading(true)

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("token", data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        router.push("/dashboard")
      } else {
        const data = await response.json()
        setError(data.message || "Login failed")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Welcome back</h1>
          <p className="text-muted-foreground text-lg">Sign in to your account to continue</p>
        </div>

        <Card className="border-border/50 shadow-xl animate-slide-up">
          <CardHeader className="space-y-2">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {message && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm font-medium animate-scale-in shadow-sm">
                  {message}
                </div>
              )}

              {error && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive-foreground px-4 py-3 rounded-lg text-sm font-medium animate-scale-in">
                  {error}
                </div>
              )}

              <div className="space-y-5">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base">
                    Email address
                  </Label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground/60 group-focus-within:text-foreground transition-colors duration-200 z-10" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-base">
                    Password
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground/60 group-focus-within:text-foreground transition-colors duration-200 z-10" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 pr-12 h-12 text-base"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors duration-200 z-10"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="w-full h-12 text-base font-semibold" size="lg">
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-8 space-y-5">
              <div className="text-center text-sm">
                <span className="text-muted-foreground/80">Don't have an account? </span>
                <Link href="/signup" className="font-semibold text-primary hover:text-primary/80 transition-colors duration-200">
                  Create account
                </Link>
              </div>

              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground transition-colors duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
