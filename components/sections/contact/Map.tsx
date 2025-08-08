"use client";

export default function LocationMap() {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.8534519984446!2d120.59525055554101!3d15.482311347233516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c63e364008ff%3A0x998794ff6791df17!2sGo%20Baluyot%20%26%20Adion%20Law%20Office!5e0!3m2!1sen!2sph!4v1739517742103!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
