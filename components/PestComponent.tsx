"use client"
// PestComponent.tsx
import { useChat, Message } from "ai/react";

export default function PestComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    // Modify the system message to specify the user's intent
    const systemMessage = "You are concerned about pest outbreaks.";

    return (
        <div>
            {/* Your pest-related UI components here */}
            <h2>Pest Outbreak Detection and Reporting</h2>
            {/* Display pest information from chat messages */}
            {messages.map((message: Message) => (
                <div key={message.id}>
                    {message.role === "assistant" ? <h3 className="text-lg font-semibold mt-2">GPT-4</h3> : <h3 className="text-lg font-semibold mt-2">User</h3>}
                    {message.content.split("\n").map((currentTextBlock: string, index: number) => {
                        if (currentTextBlock === "") {
                            return <p key={message.id + index}>&nbsp;</p>;
                        } else {
                            return <p key={message.id + index}>{currentTextBlock}</p>;
                        }
                    })}
                </div>
            ))}

            {/* User input form */}
            <form className="mt-12" onSubmit={handleSubmit}>
                <p>User Message</p>
                <textarea
                    className="mt-2 w-full bg-slate-600 p-2"
                    placeholder={"I need information about pest outbreaks in my area."}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="rounded-md bg-blue-600 p-2 mt-2">Send message</button>
            </form>
        </div>
    );
}
