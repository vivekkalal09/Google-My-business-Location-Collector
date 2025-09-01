const button = document.querySelector('.btn');
const url = "https://apps.midinnings.io/webhook/location-id"

const sendData = () => {
    const locationId = document.querySelector('input').value
    const value_location_id = JSON.stringify(locationId)

    if (locationId.length === 20 || locationId.length === 19 || locationId.length === 20) {
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({ locationId })
            body: value_location_id
        })
        button.innerText = "Connected";
        button.style.backgroundColor = "green";
        button.style.color = "white";
        if (response) {
            alert("Webhook triggered successfully");
        } else {
            alert("Failed to trigger webhook");
        }
    } else {
        alert(`Invalid Location ID`);
    }

}


button.addEventListener("click", sendData);

