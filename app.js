console.log("JS is working");

// EVENT DATA
const eventsData = [
    {
        id: 1,
        title: "Workshop: Web Design Basics",
        category: "workshop",
        desc: "Learn HTML, CSS, JS fundamentals.",
        date: "2025-12-9"
    },
    {
        id: 2,
        title: "Programming Contest",
        category: "contest",
        desc: "Test your coding skills!",
        date: "2025-12-13"
    },
    {
        id: 3,
        title: "Tech Seminar 2025",
        category: "seminar",
        desc: "Explore the latest trends in technology.",
        date: "2025-12-22"
    }
];






if (window.location.pathname.includes("events.html")) {

    // DOM elements
    const categoryFilter = document.getElementById("categoryFilter");
    const searchBox = document.getElementById("searchBox");
    const container = document.getElementById("eventList");

    // Display Events
    function displayEvents(list) {
        container.innerHTML = "";

        list.forEach(ev => {
            container.innerHTML += `
                <div class="event-box">
                    <h3>${ev.title}</h3>
                    <p><strong>Category:</strong> ${ev.category}</p>
                    <p>${ev.desc}</p>
                    <a href="event-detail.html#${ev.id}" class="details-btn">View Details</a>
                </div>
            `;
        });
    }

    // Filter Function
    function filterEvents() {
        let filtered = eventsData;

        // Category filter
        if (categoryFilter.value !== "all") {
            filtered = filtered.filter(e => e.category === categoryFilter.value);
        }

        // Search filter
        let text = searchBox.value.toLowerCase();
        filtered = filtered.filter(e => e.title.toLowerCase().includes(text));

        displayEvents(filtered);
    }

    // Event listeners
    categoryFilter.addEventListener("change", filterEvents);
    searchBox.addEventListener("keyup", filterEvents);

    // Load all events initially
    displayEvents(eventsData);
}



// EVENT DETAILS PAGE LOGIC

if (window.location.pathname.includes("event-detail.html")) {

    // 1. URL theke ID ber kora (#1, #2, #3)
    const id = window.location.hash.replace("#", "");

    // 2. oi ID er event khuja
    const event = eventsData.find(e => e.id == id);

    // 3. HTML এ data bosbe
    if (event) {
        document.getElementById("eventTitle").textContent = event.title;
        document.getElementById("eventDate").textContent = "Date: " + event.date;
        document.getElementById("eventDesc").textContent = event.desc;
    }
}


// Join Form (members.html)
if (window.location.pathname.includes("members.html")) {

    const btn = document.getElementById("joinBtn");

    btn.addEventListener("click", () => {

        let name = document.getElementById("fullname").value;
        let email = document.getElementById("email").value;
        let dept = document.getElementById("dept").value;
        let id = document.getElementById("studentid").value;
        let reason = document.getElementById("reason").value;

        // Simple validation
        if (!name || !email || !dept || !id || !reason) {
            alert("Please fill all fields!");
        } else {
            document.getElementById("successMsg").textContent = "Your form is submitted successfully!";
        }
    });
}
// Contact Page Form
if (window.location.pathname.includes("contact.html")) {

    const btn = document.getElementById("sendBtn");

    btn.addEventListener("click", () => {

        let name = document.getElementById("cName").value;
        let email = document.getElementById("cEmail").value;
        let message = document.getElementById("cMessage").value;

        if (!name || !email || !message) {
            alert("Please fill all fields!");
        } else {
            document.getElementById("contactSuccess").textContent = 
                "Thank you! Your message has been sent.";
        }
    });
}

