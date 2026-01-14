

import '../styles/contact-form.css'
import emailjs from '@emailjs/browser';


const ContactForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_u0lyuch',
      'template_fhx6iu1',
      e.target,
      'p3HDeuT5nePC26Kjj'
    )
    .then((result) => {
      alert('Message sent successfully!');
      onClose();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="contact-form-backdrop" onClick={onClose}>
      <div className="contact-form-modal" onClick={e => e.stopPropagation()}>
        <div className="contact-form-header">
          <h3>Let's Get Started!</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="service">What Service Do You Need?</label>
            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option value="Personal Branding">Personal Branding</option>
              <option value="Logo Design">Logo Design</option>
              <option value="Website Development">Website Development</option>
              <option value="Social Media Strategy">Social Media Strategy</option>
              <option value="Content Creation">Content Creation</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Photography">Photography</option>
              <option value="Video Production">Video Production</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Tell Me More About Your Project</label>
            <textarea id="message" name="message" required placeholder="Describe your project, goals, timeline, and any specific requirements..." rows="4" />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm