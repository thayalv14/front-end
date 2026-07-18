function Announcements() {

  const notices = [

    "🎉 Independence Day Holiday - 15 August",

    "📢 Monthly Team Meeting - Monday 10:00 AM",

    "🏆 Best Employee Award Ceremony - Friday",

    "💻 System Maintenance - Sunday 8 PM",

    "🎂 Happy Birthday to July Employees"

  ];

  return (

    <div className="page-container">

      <h1>📢 Company Announcements</h1>

      <div className="announcement-box">

        {notices.map((notice, index) => (

          <div className="announcement-card" key={index}>

            {notice}

          </div>

        ))}

      </div>

    </div>

  );

}

export default Announcements;