"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LogOut, Plus, Trash2, Copy, AlertTriangle, Key, Shield } from "lucide-react"

interface ApiKey {
  id: string
  key: string
  status: "active" | "revoked"
  created_at: string
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [currentKey, setCurrentKey] = useState<ApiKey | null>(null)
  const [generating, setGenerating] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [showRevokeModal, setShowRevokeModal] = useState(false)
  const [revoking, setRevoking] = useState(false)
  const [grokKeyInput, setGrokKeyInput] = useState("")
  const [showGrokInput, setShowGrokInput] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const userData = localStorage.getItem("user")

    if (!token || !userData) {
      router.push("/login")
      return
    }

    setUser(JSON.parse(userData))
    fetchCurrentKey()
  }, [router])

  const fetchCurrentKey = async () => {
    const token = localStorage.getItem("token")
    if (!token) return

    try {
      const response = await fetch("http://localhost:3001/api/keys", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        // Get the most recent active key
        const activeKey = data.keys.find((key: ApiKey) => key.status === "active")
        setCurrentKey(activeKey || null)
      }
    } catch (err) {
      console.error("Failed to fetch key:", err)
    }
  }

  const generateKey = async () => {
    const token = localStorage.getItem("token")
    if (!token) return

    setGenerating(true)
    setError("")
    setMessage("")

    try {
      if (!grokKeyInput.trim()) {
        setShowGrokInput(true)
        setGenerating(false)
        setError("Please enter your GROQ API key")
        return
      }

      // Client-side format validation for GROQ key
      const looksLikeGrok = /^gsk_[A-Za-z0-9_-]{20,}$/.test(grokKeyInput.trim())
      if (!looksLikeGrok) {
        setShowGrokInput(true)
        setGenerating(false)
        setError("Invalid GROQ API key format. It should start with gsk_ and be long.")
        return
      }

      const response = await fetch("http://localhost:3001/api/keys/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ grokApiKey: grokKeyInput.trim() })
      })

      if (response.ok) {
        const data = await response.json()
        setMessage("Key generated successfully!")
        setShowGrokInput(false)
        setGrokKeyInput("")
        fetchCurrentKey()
      } else {
        const errorData = await response.json()
        setError(errorData.message || "Failed to generate key")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setGenerating(false)
    }
  }

  const copyKey = async () => {
    if (!currentKey) return

    try {
      await navigator.clipboard.writeText(currentKey.key)
      setMessage("Key copied to clipboard!")
      setTimeout(() => setMessage(""), 3000)
    } catch (err) {
      setError("Failed to copy key")
    }
  }

  const openRevokeModal = () => {
    setShowRevokeModal(true)
  }

  const closeRevokeModal = () => {
    setShowRevokeModal(false)
  }

  const revokeKey = async () => {
    if (!currentKey) return

    const token = localStorage.getItem("token")
    if (!token) return

    setRevoking(true)

    try {
      const response = await fetch(`http://localhost:3001/api/keys/${currentKey.id}/revoke`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        setMessage("Key revoked successfully!")
        setCurrentKey(null)
        closeRevokeModal()
      } else {
        const errorData = await response.json()
        setError(errorData.message || "Failed to revoke key")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setRevoking(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/")
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">Dashboard</h1>
              <p className="text-muted-foreground/80 text-lg">Welcome back, {user.email}</p>
            </div>
            <Button onClick={logout} variant="outline" size="lg" className="gap-3 bg-transparent hover:bg-muted/50">
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
        {/* Messages */}
        {message && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-xl mb-8 text-base font-medium animate-scale-in shadow-sm">
            {message}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-8 text-base font-medium animate-scale-in shadow-sm">
            {error}
          </div>
        )}

        {/* Main Content - Centered */}
        <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
          {!currentKey ? (
            // No key - Show generate button
            <Card className="w-full max-w-md border-border/50 shadow-xl text-center animate-slide-up">
              <CardHeader className="space-y-3">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Plus className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl flex items-center justify-center gap-3">
                  Generate Login Key
                </CardTitle>
                <CardDescription className="text-base">Create your login key to access services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-left mb-4">
                  <label className="text-sm font-medium">GROQ API Key</label>
                  <input
                    type="text"
                    value={grokKeyInput}
                    onChange={(e) => setGrokKeyInput(e.target.value)}
                    placeholder="Enter your GROQ API key (starts with gsk_...)"
                    className="w-full h-10 px-3 rounded-md border border-border/60 bg-background"
                  />
                  <p className="text-xs text-muted-foreground">We store this securely and use it only for generating SQL in the desktop app.</p>
                </div>
                <Button onClick={generateKey} disabled={generating} className="w-full h-12 text-base font-semibold gap-3" size="lg">
                  <Plus className="h-5 w-5" />
                  {generating ? "Generating..." : "Generate Key"}
                </Button>
              </CardContent>
            </Card>
          ) : (
            // Has key - Show key info and actions
            <Card className="w-full max-w-2xl border-border/50 shadow-xl animate-slide-up">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Your Login Key</CardTitle>
                    <CardDescription className="text-base">Manage your current login key</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 border border-border/60 rounded-xl bg-muted/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-mono text-foreground break-all bg-background/80 px-4 py-3 rounded-lg border border-border/40">
                        {currentKey.key}
                      </p>
                      <p className="text-sm text-muted-foreground/80 mt-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Created: {new Date(currentKey.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="default" className="ml-4 px-3 py-1 text-sm font-semibold">
                      Active
                    </Badge>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button onClick={copyKey} variant="outline" className="flex-1 h-12 gap-3 text-base font-semibold">
                    <Copy className="h-5 w-5" />
                    Copy Key
                  </Button>
                  <Button onClick={openRevokeModal} variant="destructive" className="flex-1 h-12 gap-3 text-base font-semibold">
                    <Trash2 className="h-5 w-5" />
                    Revoke Key
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground/70 text-center">
                  After revoking, you can generate a new key
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Revoke Confirmation Modal */}
      {showRevokeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-background rounded-xl border border-border/60 shadow-2xl max-w-md w-full p-8 animate-scale-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Revoke Login Key</h3>
                <p className="text-sm text-muted-foreground/80">This action cannot be undone</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground/80 mb-8 leading-relaxed">
              Are you sure you want to revoke this login key? Once revoked, it will no longer work and you'll need to generate a new one.
            </p>
            
            <div className="flex gap-4">
              <Button 
                onClick={closeRevokeModal} 
                variant="outline" 
                className="flex-1 h-11"
                disabled={revoking}
              >
                Cancel
              </Button>
              <Button 
                onClick={revokeKey} 
                variant="destructive" 
                className="flex-1 h-11"
                disabled={revoking}
              >
                {revoking ? "Revoking..." : "Revoke Key"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
