'use client';
import { useForm, ValidationError } from '@formspree/react'
import { Send } from "lucide-react"

function ContactForm() {
    const [state, handleSubmit] = useForm("xovdvvpd");
    if (state.succeeded) {
        return  <p className='font-body'>
                    Got it — message received! I’ll be in touch soon. 
                    Until then, feel free to explore more of my work or connect with me on LinkedIn.
                </p>;
    }

  return (
    <div className="max-w-3xl mx-auto px-6 xl:py-0 sm:py-5 space-y-16">
      <form className="space-y-6"
      onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 text-xl sm:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-subtitle">Name</label>
            <input
              id='name'
              type='name'
              required
              name='Name'
              className="w-full px-4 py-2 border-3 rounded-lg bg-white dark:bg-neutral-900 font-body"
            />
            </div>
        <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
        />
          <div>
            <label className="block mb-1 font-subtitle">Email</label>
            <input
                id='email'
                type='email'
                name='email'
                required
                className="w-full px-4 py-2 border-3 rounded-lg bg-white dark:bg-neutral-900 font-body"
            />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-xl font-subtitle">What can I help you with?</label>
          <textarea
           id='message'
           name='message'
           className="w-full h-64 px-4 py-2 border-3 rounded-lg bg-white dark:bg-neutral-900 font-body"
          />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
    </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="btn font-subtitle"
          >
            Send Message
            <Send className='w-5 h-5'/>
          </button>
        </div>
      </form>
    </div>
  );
}
function App() {
    return (
      <ContactForm />
    );
  }
  export default App;