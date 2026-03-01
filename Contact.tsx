import { useVar } from 'orbitcode'
import './Contact.css'

interface ContactProps {
  title?: string
  email?: string
}

function Contact({ title = "Let's Work Together", email = 'hello@yourname.com' }: ContactProps) {
  const [name, setName] = useVar('personalContactName', '')
  const [emailInput, setEmailInput] = useVar('personalContactEmail', '')
  const [message, setMessage] = useVar('personalContactMessage', '')

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    alert(`Thanks ${name}! I'll get back to you soon.`)
    setName('')
    setEmailInput('')
    setMessage('')
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">{title}</h2>
        <p className="contact-subtitle">
          Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to
          you as soon as possible.
        </p>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onInput={e => setName((e.target as HTMLInputElement).value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={emailInput}
                onInput={e => setEmailInput((e.target as HTMLInputElement).value)}
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              value={message}
              onInput={e => setMessage((e.target as HTMLTextAreaElement).value)}
              required
            />
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-alt">
            <p>Or email me directly at:</p>
            <a href={`mailto:${email}`} className="contact-email">
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Default export renders component in isolation for preview
export default function ContactPreview() {
  return (
    <div className="preview-container">
      <Contact />
    </div>
  )
}

export { Contact }
