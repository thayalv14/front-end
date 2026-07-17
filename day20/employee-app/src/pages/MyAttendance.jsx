function MyAttendance() {

  const attendance = [
    { date: "01-07-2026", status: "Present" },
    { date: "02-07-2026", status: "Present" },
    { date: "03-07-2026", status: "Leave" },
    { date: "04-07-2026", status: "Absent" },
    { date: "05-07-2026", status: "Present" }
  ];

  return (

    <div className="page-container">

      <h1>📅 My Attendance</h1>

      <table>

        <thead>

          <tr>

            <th>Date</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {attendance.map((item, index) => (

            <tr key={index}>

              <td>{item.date}</td>

              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default MyAttendance;