import { useState, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Search } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";

interface Message {
  text: string;
  sender: 'me' | 'other';
}

const MessagePortal: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "me" }]);
      setNewMessage("");
    }
  };

  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
    // Load messages for the selected chat
    // setMessages(loadedMessages);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  return (
  <div>      
    <Navigation/>
    <div className="flex h-[590px]">

      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <div className="flex items-center mb-4">
          <Input placeholder="Search Messages" type="search" className="w-full" />
          <Button variant="ghost" className="ml-2">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <div className="space-y-4">
          {/* Sample chat items */}
          <div
            className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-200"
            onClick={() => handleSelectChat(1)}
          >
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@user1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="font-medium">User 1</p>
              <p className="text-sm text-gray-600">Last message preview...</p>
            </div>
          </div>
          <div
            className="flex items-center cursor-pointer p-2 rounded hover:bg-gray-200"
            onClick={() => handleSelectChat(2)}
          >
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="@user2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="font-medium">User 2</p>
              <p className="text-sm text-gray-600">Last message preview...</p>
            </div>
          </div>
          {/* Add more chat items as needed */}
        </div>
      </div>

      {/* Chat Window */}
      <div className="w-3/4 bg-white p-4 flex flex-col">
        {selectedChat === null ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.sender === "me" ? "text-right" : ""}`}
                >
                  <p
                    className={`p-2 rounded-lg ${msg.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                  >
                    {msg.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex items-center border-t pt-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={handleInputChange}
                className="flex-grow"
              />
              <Button onClick={handleSendMessage} className="ml-2">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default MessagePortal;
