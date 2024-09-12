useEffect(() => {
    const injectScript = (src, id) => {
      const existingScript = document.getElementById(id);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        document.body.appendChild(script);
        console.log(`Script with id ${id} injected`);
      } else {
        console.log(`Script with id ${id} already exists`);
      }
    };
  
    if (chatbotVisible) {
      injectScript('https://cdn.botpress.cloud/webchat/v2.1/inject.js', 'botpress-webchat');
      injectScript('https://mediafiles.botpress.cloud/69b3bbc6-6c3f-4696-ab66-fd951180e7b3/webchat/v2.1/config.js', 'botpress-webchat-config');
  
      // Initialize Botpress chat widget
      const initializeBotpress = () => {
        if (window.botpressWebChat) {
          window.botpressWebChat.init({
            host: 'https://cdn.botpress.cloud',
            botId: 'your-bot-id', // Replace with your Botpress bot ID
          });
        }
      };
  
      // Wait for the scripts to be loaded
      const scriptLoader = () => {
        if (document.getElementById('botpress-webchat') && document.getElementById('botpress-webchat-config')) {
          initializeBotpress();
        } else {
          setTimeout(scriptLoader, 100); // Check every 100ms
        }
      };
  
      scriptLoader();
    } else {
      const script1 = document.getElementById('botpress-webchat');
      const script2 = document.getElementById('botpress-webchat-config');
      if (script1) document.body.removeChild(script1);
      if (script2) document.body.removeChild(script2);
    }
  
    // Cleanup script on component unmount
    return () => {
      const script1 = document.getElementById('botpress-webchat');
      const script2 = document.getElementById('botpress-webchat-config');
      if (script1) document.body.removeChild(script1);
      if (script2) document.body.removeChild(script2);
    };
  }, [chatbotVisible]);
  