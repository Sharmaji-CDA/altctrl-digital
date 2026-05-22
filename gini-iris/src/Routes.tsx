import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PlatformOverview from "./pages/products/Platform-Overview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ConversationalAI from "./pages/conversational-AI/ConversationalAI";
import AIAgents from "./pages/ai-agents/AI-Agents";


export default function AppRoutes() {

  return (
    <BrowserRouter>

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<PlatformOverview />} />
        <Route path="/conversational-ai" element={<ConversationalAI />} />
        <Route path="/ai-agents" element={<AIAgents />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
}