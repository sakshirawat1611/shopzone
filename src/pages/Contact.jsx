import './Contact.css'

const Contact = () => {
  return (
  <div className="contact">
    <div className="contact-card">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">Have a question? We'd love to hear from you.</p>
      <div className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea rows={5} placeholder="Your message..." />
        </div>
        <button className="contact-btn">Send Message</button>
      </div>
    </div>
  </div>
)
}

export default Contact