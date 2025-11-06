export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <p>If you want to reach out, send an email to <strong>hello@example.com</strong> or use this placeholder form.</p>

      <form className="mt-6 max-w-md">
        <label className="block mb-2">Name</label>
        <input className="w-full p-2 border rounded mb-4" />
        <label className="block mb-2">Message</label>
        <textarea className="w-full p-2 border rounded mb-4" rows="4" />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
      </form>
    </div>
  )
}