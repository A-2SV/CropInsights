"use client"
// WeatherLocationComponent.tsx
import React, { useState } from "react";
import { useChat, Message } from "ai/react";

export default function WeatherLocationComponent() {
  const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  // Modify the system message to specify the user's intent
  const systemMessage = "You are requesting weather information for a specific location.";

  return (
    <div>
      {/* Your weather-related UI components here */}
      <h2>Insights by Location</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <p>User Message</p>
        <div className="mt-2">
          <input
            type="text"
            className="w-full bg-slate-600 p-2"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            type="text"
            className="w-full bg-slate-600 p-2"
            placeholder="Enter State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            type="text"
            className="w-full bg-slate-600 p-2"
            placeholder="Enter Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <input
            type="text"
            className="w-full bg-slate-600 p-2"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button className="rounded-md bg-blue-600 p-2 mt-2">Send message</button>
      </form>

      {/* Display weather information from chat messages */}
      {messages.map((message: Message) => (
        <div key={message.id}>
          {message.role === "assistant" ? (
            <h3 className="text-lg font-semibold mt-2">GPT-4</h3>
          ) : (
            <h3 className="text-lg font-semibold mt-2">User</h3>
          )}
          {message.content.split("\n").map((currentTextBlock: string, index: number) => {
            if (currentTextBlock === "") {
              return <p key={message.id + index}>&nbsp;</p>;
            } else {
              return <p key={message.id + index}>{currentTextBlock}</p>;
            }
          })}
        </div>
      ))}
    </div>
  );
}
