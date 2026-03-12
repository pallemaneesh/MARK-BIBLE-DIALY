// Send email when attendance is marked

function sendEmailNotification(message) {

  const templateParams = {
    title: "Bible Study Attendance",
    message: message,
    time: new Date().toLocaleString()
  };

  emailjs.send(
    "service_anxii5m",     // replace with EmailJS service ID
    "template_418rgym",    // replace with EmailJS template ID
    templateParams
  )
  .then(function(response) {
    console.log("Email sent successfully!", response.status, response.text);
  })
  .catch(function(error) {
    console.error("Email sending failed:", error);
  });

}


// Hook into your existing notification function
function sendNotification(body) {

  // browser notification
  if (Notification.permission === "granted") {
    new Notification("✝ Bible Study Attendance", { body });
  }

  // email notification
  sendEmailNotification(body);
}