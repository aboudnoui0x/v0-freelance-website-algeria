"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { createClientSupabaseClient } from "@/lib/supabase/client"
import { useToast } from "@/components/ui/use-toast"
import { Send } from "lucide-react"

export default function MessagesPage() {
  const { user, profile, isLoading } = useAuth()
  const [conversations, setConversations] = useState<any[]>([])
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [messages, setMessages] = useState<any[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const { toast } = useToast()
  const supabase = createClientSupabaseClient()

  // Redirect if not logged in
  if (!isLoading && !user) {
    redirect("/login")
  }

  // Fetch conversations
  useEffect(() => {
    if (user) {
      async function fetchConversations() {
        // This is a simplified version - in a real app, you'd have a conversations table
        // or a more sophisticated query to get unique conversation partners
        const { data: sentMessages } = await supabase
          .from("messages")
          .select("recipient_id")
          .eq("sender_id", user.id)
          .order("created_at", { ascending: false })

        const { data: receivedMessages } = await supabase
          .from("messages")
          .select("sender_id")
          .eq("recipient_id", user.id)
          .order("created_at", { ascending: false })

        // Combine and get unique user IDs
        const userIds = new Set([
          ...(sentMessages?.map((msg) => msg.recipient_id) || []),
          ...(receivedMessages?.map((msg) => msg.sender_id) || []),
        ])

        if (userIds.size > 0) {
          const { data: users } = await supabase.from("profiles").select("*").in("id", Array.from(userIds))

          setConversations(users || [])

          // Select the first conversation by default
          if (users && users.length > 0 && !selectedConversation) {
            setSelectedConversation(users[0].id)
          }
        }
      }

      fetchConversations()
    }
  }, [user, supabase])

  // Fetch messages for selected conversation
  useEffect(() => {
    if (user && selectedConversation) {
      async function fetchMessages() {
        const { data } = await supabase
          .from("messages")
          .select("*")
          .or(`sender_id.eq.${user.id},recipient_id.eq.${user.id}`)
          .or(`sender_id.eq.${selectedConversation},recipient_id.eq.${selectedConversation}`)
          .order("created_at", { ascending: true })

        setMessages(data || [])
      }

      fetchMessages()

      // Set up real-time subscription
      const channel = supabase
        .channel("messages")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "messages",
            filter: `sender_id=eq.${selectedConversation},recipient_id=eq.${user.id}`,
          },
          (payload) => {
            setMessages((current) => [...current, payload.new])
          },
        )
        .subscribe()

      return () => {
        supabase.removeChannel(channel)
      }
    }
  }, [user, selectedConversation, supabase])

  // Send message
  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault()

    if (!newMessage.trim() || !selectedConversation) return

    setIsSending(true)

    const { error } = await supabase.from("messages").insert({
      sender_id: user!.id,
      recipient_id: selectedConversation,
      content: newMessage.trim(),
    })

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } else {
      setNewMessage("")
    }

    setIsSending(false)
  }

  // Get user initials for avatar
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  // Find conversation partner
  const getConversationPartner = (id: string) => {
    return conversations.find((c) => c.id === id)
  }

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Messages</h1>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
          {/* Conversations list */}
          <Card className="md:max-h-[600px] overflow-y-auto">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {conversations.length === 0 ? (
                <div className="p-4 text-center text-gray-500">No conversations yet</div>
              ) : (
                <ul className="divide-y">
                  {conversations.map((conversation) => (
                    <li key={conversation.id}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start px-4 py-3 h-auto ${
                          selectedConversation === conversation.id ? "bg-gray-100" : ""
                        }`}
                        onClick={() => setSelectedConversation(conversation.id)}
                      >
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarFallback>
                            {getInitials(conversation.first_name, conversation.last_name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-medium">
                            {conversation.first_name} {conversation.last_name}
                          </div>
                          <div className="text-sm text-gray-500 truncate">
                            {conversation.title || conversation.user_type}
                          </div>
                        </div>
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>

          {/* Messages */}
          <Card className="md:h-[600px] flex flex-col">
            {selectedConversation ? (
              <>
                <CardHeader className="border-b">
                  {getConversationPartner(selectedConversation) && (
                    <CardTitle className="text-lg">
                      {getConversationPartner(selectedConversation).first_name}{" "}
                      {getConversationPartner(selectedConversation).last_name}
                    </CardTitle>
                  )}
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.length === 0 ? (
                    <div className="h-full flex items-center justify-center text-center text-gray-500">
                      No messages yet. Start the conversation!
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender_id === user?.id ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender_id === user?.id ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {message.content}
                          <div
                            className={`text-xs mt-1 ${
                              message.sender_id === user?.id ? "text-green-100" : "text-gray-500"
                            }`}
                          >
                            {new Date(message.created_at).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </CardContent>
                <div className="p-4 border-t">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      disabled={isSending}
                    />
                    <Button type="submit" size="icon" disabled={isSending || !newMessage.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-center text-gray-500 p-4">
                Select a conversation to start messaging
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
