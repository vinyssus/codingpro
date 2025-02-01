import { useEffect } from "react";

declare global {
  interface Window {
    botpressWebChat: any;
  }
}

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          configUrl: "https://files.bpcontent.cloud/2025/02/01/15/20250201150401-K44IGISG.json",
          host: "https://cdn.botpress.cloud/webchat",
          messagingUrl: "https://messaging.botpress.cloud",
          showPoweredBy: false,
          enableTranscriptDownload: true
        });
      }
    };
  }, []);

  return null;
};

export default Chatbot;