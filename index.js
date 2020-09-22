var micOffState = "mic-off";
var isTyping = false;
var chatInput = document.querySelector('[aria-labelledby^="new-message-"]');
var chatButton = document.querySelector('#chat-button');
function push2Talk (k, shouldMute = false) {
    if (k.code == "Space" && !isTyping){
        var isMuted = document.querySelector("#microphone-button").getAttribute("data-state") == micOffState;
        if (shouldMute != isMuted) {
            document.querySelector("#microphone-button").click();
            isMuted = shouldMute; 
        }
    }
}
function addInputListeners(elem){
    if(elem){
        elem.addEventListener('focusin', function(){isTyping = true;});
        elem.addEventListener('focusout', function(){isTyping = false;});
    }
}
addInputListeners(chatInput);
document.addEventListener('focusin', function(event){
    var nodeName = event.target.nodeName;
    var label = event.target.getAttribute('aria-labelledby') || '';
    if(["INPUT", "BUTTON"].includes(nodeName) || label.indexOf('new-message-') == 0){
        isTyping=true;addInputListeners(event.target);
    }
});
document.addEventListener('keydown',function(k){push2Talk(k);});
document.addEventListener('keyup',function(k){push2Talk(k, true);});
