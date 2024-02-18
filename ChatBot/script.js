function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
    
    // Display user message
    chatBox.innerHTML += "<div>User: " + userInput + "</div>";

    // Call function to get response
    var response = getResponse(userInput);

    // Display bot response
    chatBox.innerHTML += "<div>Bot: " + response + "</div>";
    
    // Clear user input
    document.getElementById("user-input").value = "";

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(userInput) {
    // Simple example of response based on user input
    var diseases = {
        "powdery mildew": "Powdery mildew is a common fungal disease. You can treat it by spraying with a fungicide. Also, make sure to improve air circulation around the plants.",
        "aphids": "Aphids are small insects that can be controlled using insecticidal soap or neem oil. Ladybugs are also natural predators of aphids.",
        "leaf spot": "Leaf spot is often caused by fungal or bacterial pathogens. Remove infected leaves and apply a fungicide to prevent further spread.",
        "root rot": "Root rot is caused by overwatering and poorly drained soil. Allow the soil to dry out between waterings and improve drainage.",
        "whiteflies": "Whiteflies can be controlled using insecticidal soap or neem oil. Introducing natural predators like parasitic wasps can also help.",
        "rust": "Rust is a fungal disease that appears as orange-brown spots on leaves. Remove infected leaves and apply a fungicide.",
        "blight": "Blight is a fungal disease that causes rapid wilting and browning of leaves. Remove infected plants and avoid overhead watering.",
        "scale insects": "Scale insects can be removed by hand or treated with horticultural oil. Prune heavily infested branches to reduce the population.",
        "mosaic virus": "Mosaic virus causes mottled patterns and stunted growth in plants. There is no cure, so remove infected plants to prevent spread.",
        "downy mildew": "Downy mildew thrives in humid conditions. Improve air circulation and use a copper-based fungicide to control it.",
        "early blight": "Early blight is a common fungal disease of potatoes, characterized by dark lesions with concentric rings on the leaves. It can be managed by applying fungicides, practicing crop rotation, and removing infected plant debris.",
        "late blight": "Late blight is a serious fungal disease of potatoes, caused by Phytophthora infestans. It manifests as water-soaked lesions on leaves, stems, and tubers, often with white fungal growth. Management involves applying fungicides, maintaining good ventilation, and promptly removing infected plants.",
        "potato scab": "Potato scab is a bacterial disease that causes rough, scaly patches on the surface of tubers. It can be managed by maintaining proper soil pH, avoiding excessive fertilization with high-nitrogen fertilizers, and planting disease-free seed potatoes.",
        "potato virus Y": "Potato virus Y (PVY) is a viral disease that affects potatoes, causing mosaic patterns on leaves, stunted growth, and reduced yields. Management strategies include using certified disease-free seed potatoes and controlling aphid vectors.",
        "blackleg": "Blackleg is a bacterial disease that affects potatoes, causing black, necrotic lesions on stems and tubers. To manage blackleg, plant disease-free seed potatoes, practice crop rotation, and avoid over-fertilizing with nitrogen.",
        "wireworms": "Wireworms are the larval stage of click beetles and can cause damage to potato tubers by tunneling through them. To control wireworms, rotate crops, use traps, and apply insecticides if infestations are severe.",
        "pink rot": "Pink rot is a fungal disease that affects potato tubers, causing them to rot and develop a pinkish color. To manage pink rot, practice crop rotation, avoid planting in poorly drained soils, and apply fungicides preventatively.",
        "potato leafroll virus": "Potato leafroll virus (PLRV) is a viral disease that affects potatoes, causing leaf yellowing, stunting, and reduced yields. To manage PLRV, use disease-free seed potatoes and control aphid vectors.",
        "powdery scab": "Powdery scab is a fungal disease that affects potato tubers, causing raised, powdery lesions on their surface. To manage powdery scab, plant disease-resistant potato varieties, rotate crops, and avoid over-irrigation.",
        "brown rot": "Brown rot is a fungal disease that affects potato tubers, causing them to rot and develop a foul smell. To manage brown rot, practice crop rotation, avoid planting in waterlogged soils, and promptly remove infected tubers."
    };

    // Check if the disease is predefined
    var remedy = diseases[userInput.toLowerCase()];
    if (remedy) {
        return remedy;
    } else {
        return "I'm sorry, I'm not familiar with that disease. Please enter a different disease name.";
    }
    }

