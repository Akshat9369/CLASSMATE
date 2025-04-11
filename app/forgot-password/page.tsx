"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setError("Please enter your email address.")
      return
    }

    // Simulate password reset email
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <div className="flex items-center mb-2">
              <Link href="/login" className="text-muted-foreground hover:text-foreground mr-2">
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <CardTitle>Reset Password</CardTitle>
            </div>
            <CardDescription>
              {!submitted
                ? "Enter your email address and we'll send you a link to reset your password"
                : "Check your email for the reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full mt-6">
                  Send Reset Link
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Check your email</h3>
                <p className="text-muted-foreground mb-4">
                  We've sent a password reset link to <span className="font-medium">{email}</span>
                </p>
                <Button variant="outline" asChild className="mt-2">
                  <Link href="/login">Back to Login</Link>
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Need help? Contact{" "}
              <Link href="#" className="text-primary underline underline-offset-4">
                IT Support
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

