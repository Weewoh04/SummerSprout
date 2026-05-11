type EmailSignupProps = {
  compact?: boolean;
  title?: string;
};

export function EmailSignup({
  compact = false,
  title = "Get the Free Summer Fun Starter Pack"
}: EmailSignupProps) {
  return (
    <section className={`email-box ${compact ? "email-box--compact" : ""}`}>
      <div>
        <p className="eyebrow">Free printable download</p>
        <h2>{title}</h2>
        <p>
          Join the Summer Sprout list for printable routines, boredom busters,
          activity lists, and cheerful seasonal ideas.
        </p>
      </div>
      <form className="signup-form">
        {/* Connect Mailchimp, ConvertKit, Klaviyo, Flodesk, or another email service here. */}
        <label>
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="you@example.com" />
        </label>
        <button type="button">Send My Printables</button>
      </form>
    </section>
  );
}
