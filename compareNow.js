// 1. Hamara 'Mock' Database (Asali duniya mein ye Server par hota hai)
const mockDatabase = {
    jain: { name: "Jain Online", loc: "Bangalore", fee: "₹1,20,000", accred: "UGC-DEB, NAAC A++", placement: "Online/Corporate" },
    manipal: { name: "Manipal Online", loc: "Jaipur", fee: "₹1,50,000", accred: "UGC-DEB, NAAC A+", placement: "Virtual Job Fair" },
    amrita: { name: "Amrita University", loc: "Coimbatore", fee: "₹1,40,000", accred: "UGC-DEB, NAAC A++", placement: "On-Campus/Online" }
};

// 2. Function jo "API Fetch" ko simulate karta hai
async function fetchUniversityData(uniId) {
    document.getElementById('loading').style.display = 'block';
    
    // Fake delay (jaise internet se data aa raha ho)
    return new Promise((resolve) => {
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            resolve(mockDatabase[uniId]);
        }, 500); // 0.5 second ka delay
    });
}

// 3. Table update karne ka main function
async function updateComparison() {
    const ids = [
        document.getElementById('u1').value,
        document.getElementById('u2').value,
        document.getElementById('u3').value
    ];

    // Sabhi universities ka data "Fetch" karna
    const results = await Promise.all(ids.map(id => fetchUniversityData(id)));

    // Headers Update karna
    results.forEach((data, index) => {
        document.getElementById(`h${index + 1}`).innerText = data.name;
    });

    // Rows Render karna
    const features = [
        { label: "Location", key: "loc" },
        { label: "Fees", key: "fee" },
        { label: "Accreditation", key: "accred" },
        { label: "Placement", key: "placement" }
    ];

    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = ""; // Purana data saaf karna

    features.forEach(f => {
        let row = `<tr>
            <td style="font-weight:bold; background:#0b5e6b; color:white;">${f.label}</td>
            <td>${results[0][f.key]}</td>
            <td>${results[1][f.key]}</td>
            <td>${results[2][f.key]}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Event Listeners
document.querySelectorAll('.u-select').forEach(s => s.addEventListener('change', updateComparison));

// Pehli baar page load hone par data dikhana
updateComparison();