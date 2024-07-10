import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function MoodRater() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [moodRating, setMoodRating] = useState(5)
  const [moodMessage, setMoodMessage] = useState('')
  const [activitySuggestions, setActivitySuggestions] = useState([])

  const getMoodMessage = (name, level) => {
    if (level <= 3) {
      return `I'm sorry you're not feeling great, ${name}. Things will get better!`
    } else if (level <= 7) {
      return `Glad you're doing okay, ${name}. Keep up the positive attitude!`
    } else {
      return `That's fantastic, ${name}! I'm happy you're in such a good mood!`
    }
  }

  const getActivitySuggestions = (level) => {
    if (level <= 5) {
      return [
        "Take a walk in nature",
        "Call a friend or family member",
        "Practice mindfulness or meditation"
      ]
    } else {
      return [
        "Express gratitude - write down three things you're thankful for",
        "Do something kind for someone else",
        "Engage in a hobby you enjoy"
      ]
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = getMoodMessage(firstName, moodRating)
    setMoodMessage(message)
    const suggestions = getActivitySuggestions(moodRating)
    setActivitySuggestions(suggestions)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Mood Assessment</CardTitle>
        <CardDescription>How are you feeling today? Let us know and we'll provide some encouragement.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName" 
              placeholder="Enter your first name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName" 
              placeholder="Enter your last name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="moodRating">Mood Rating (1-10)</Label>
            <Slider 
              id="moodRating" 
              min={1} 
              max={10} 
              step={1} 
              value={[moodRating]}
              onValueChange={(value) => setMoodRating(value[0])}
              aria-label="Mood Rating" 
            />
          </div>
          {moodMessage && (
            <div className="grid gap-2 mt-4">
              <Label>Mood Message</Label>
              <div className="bg-muted p-4 rounded-lg">
                <p>{moodMessage}</p>
              </div>
            </div>
          )}
          {activitySuggestions.length > 0 && (
            <div className="grid gap-2 mt-4">
              <Label>Activity Suggestions</Label>
              <ul className="list-disc pl-5">
                {activitySuggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="grid gap-2 mt-4">
            <Button type="submit" className="w-full">
              Get Mood Assessment
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
