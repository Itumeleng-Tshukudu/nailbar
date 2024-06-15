document.getElementById('booking-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const clientName = document.getElementById('clientName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const nailTech = document.getElementById('nailTech').value;
    const style = document.getElementById('style').value;
  
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clientName,
        email,
        phone,
        date,
        nailTech,
        style
      })
    });
  
    const result = await response.json();
  
    if (response.ok) {
      alert('Appointment booked successfully!');
      document.getElementById('booking-form').reset();
    } else {
      alert('Failed to book appointment: ' + result.error);
    }
  });  