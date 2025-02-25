import React from 'react';

type Props = {};

function BookingAppointment({}: Props) {
    return (
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold">Book an Appointment</h2>
          <p className="mt-4">Select a date and time to book an appointment.</p>
          <input type="date" className="w-full p-2 border rounded-lg mt-2" />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Confirm Booking</button>
        </div>
      );
}

export default BookingAppointment;