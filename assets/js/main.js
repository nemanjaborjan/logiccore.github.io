// JavaScript za dinamicko ispisvanje i obradu sadrzaja
var statsNiz = [
   {
      ikonica: "📊",
      naslov: "Total Revenue",
      vrednost: "$142,847",
      opis: "Monthly revenue increased by 23% compared to last month with strong performance across all channels.",
      graf: "miniChart1"
   },
   {
      ikonica: "🟢",
      naslov: "Active Users",
      vrednost: "58.5K",
      opis: "Real-time analytics showing active users currently engaging with the platform.",
      graf: "miniChart2"
   },
   {
      ikonica: "🎯",
      naslov: "Conversion Rate",
      vrednost: "94.3%",
      opis: "Customer satisfaction rate based on recent surveys and feedback analysis.",
      graf: "miniChart3"
   },
   {
      ikonica: "🚀",
      naslov: "Performance Score",
      vrednost: "9,392",
      opis: "Overall system performance metrics showing optimal operation across all services.",
      graf: "miniChart4"
   },
   {
      ikonica: "💰",
      naslov: "Monthly Growth",
      vrednost: "+28.5%",
      opis: "Consistent month-over-month growth in user acquisition and revenue generation.",
      graf: "miniChart5"
   },
   {
      ikonica: "⚡",
      naslov: "System Uptime",
      vrednost: "99.9%",
      opis: "Exceptional reliability with minimal downtime ensuring seamless user experience.",
      graf: "miniChart6"
   },
   {
      ikonica: "👥",
      naslov: "Total Users",
      vrednost: "5M+",
      opis: "Trusted by over 5 million users worldwide, demonstrating widespread adoption and satisfaction.",
      graf: "miniChart7"
   },
   {
      ikonica: "🧠",
      naslov: "Artificial Intelligence",
      vrednost: "30%",
      opis: "Currently 30% of our analytics are powered by AI-driven insights, with plans to increase this significantly in the coming year.",
      graf: "miniChart8"
   }
];

var statsGrid = document.getElementById("statsGrid");

for (let i = 0; i < statsNiz.length; i++) {
   var kartica = document.createElement("div");
   kartica.className = "stat-card";
   kartica.innerHTML =
     `<div class="stat-header">
         <div class="stat-icon"></div>
         <div class="stat-title"></div>
      </div>
      <div class="stat-value"></div>
      <div class="stat-description"></div>
      <div class="stat-chart">
         <canvas class="mini-chart" id="${statsNiz[i].graf}"></canvas>
      </div>`;

   kartica.querySelector(".stat-icon").textContent = statsNiz[i].ikonica;
   kartica.querySelector(".stat-title").textContent = statsNiz[i].naslov;
   kartica.querySelector(".stat-value").textContent = statsNiz[i].vrednost;
   kartica.querySelector(".stat-description").textContent = statsNiz[i].opis;
   statsGrid.appendChild(kartica);
}



// JavaScript za dinamicko kreiranje
var reportsNiz = [
   {
      ikonica1: "💼",
      titula1: "Business Intelligence",
      vrednost1: "98.5%",
      opis1: "Accuracy in predictive analytics and business forecasting models."
   },
   {
      ikonica1: "📱",
      titula1: "Mobile Analytics",
      vrednost1: "2.4M",
      opis1: "Mobile app downloads and active user engagement metrics."
   },
   {
      ikonica1: "🌍",
      titula1: "Global Reach",
      vrednost1: "150+",
      opis1: "Countries actively using our analytics platform worldwide."
   },
   {
      ikonica1: "🚀",
      titula1: "Performance Index",
      vrednost1: "847",
      opis1: "Comprehensive performance scoring across all platform metrics."
   },
   {
      ikonica1: "⚡",
      titula1: "Response Time",
      vrednost1: "0.2s",
      opis1: "Average API response time ensuring optimal user experience."
   },
   {
      ikonica1: "📊",
      titula1: "Data Processing",
      vrednost1: "12TB",
      opis1: "Daily data volume processed through our analytics pipeline."
   },
   {
      ikonica1: "🔒",
      titula1: "Data Security",
      vrednost1: "100%",
      opis1: "Ensuring all data is encrypted and protected against unauthorized access."
   },
   {
      ikonica1: "💻",
      titula1: "Our Team",
      vrednost1: "150+",
      opis1: "Our dedicated team contains over 150 experts in data science, engineering, and analytics."
   },
   {
      ikonica1: "💡",
      titula1: "Innovations",
      vrednost1: "75+",
      opis1: "Successful AI-driven solutions implemented across various industries."
   },
   {
      ikonica1: "☁️",
      titula1: "Cloud Integration",
      vrednost1: "24/7",
      opis1: "Continuous availability of cloud-based services and infrastructure."
   }
];

var infoGrid = document.getElementById("infoGrid");

for (let j = 0; j < reportsNiz.length; j++) {

   var kartica1 = document.createElement("div");
   kartica1.className = "info-card";
   kartica1.innerHTML = 
     `<div class="info-icon">${reportsNiz[j].ikonica1}</div>
      <h3 class="info-title">${reportsNiz[j].titula1}</h3>
      <div class="info-value">${reportsNiz[j].vrednost1}</div>
      <p>${reportsNiz[j].opis1}</p>`;
   infoGrid.appendChild(kartica1);
}