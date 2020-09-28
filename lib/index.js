document.p2t_active = !document.p2t_active;
document.p2t = {
    micOffState: "mic-off",
    isTyping: false,
    chatInput: document.querySelector('[aria-labelledby^="new-message-"]'),
};
if (!document.p2t_initialized){
    document.p2t_initialized = true;
    function push2Talk (k, shouldMute = false) {
        if (k.code == "Space" && !document.p2t.isTyping && document.p2t_active){
            const isMuted = document.querySelector("#microphone-button").getAttribute("data-state") == document.p2t.micOffState;
            if (shouldMute != isMuted) {
                document.querySelector("#microphone-button").click();
                isMuted = shouldMute; 
            }
        }
    }
    function addInputListeners(elem){
        if(elem){
            elem.addEventListener('focusin', function(){document.p2t.isTyping = true;});
            elem.addEventListener('focusout', function(){document.p2t.isTyping = false;});
        }
    }
    addInputListeners(document.p2t.chatInput);
    document.addEventListener('focusin', function(event){
        const nodeName = event.target.nodeName;
        const label = event.target.getAttribute('aria-labelledby') || '';
        if(["INPUT", "BUTTON"].includes(nodeName) || label.indexOf('new-message-') == 0){
            document.p2t.isTyping = true;
            addInputListeners(event.target);
        }
    });
    document.addEventListener('keydown',function(k){push2Talk(k);});
    document.addEventListener('keyup',function(k){push2Talk(k, true);});
}
