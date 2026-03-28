import { Button, Input, Textarea } from "@material-tailwind/react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form className="space-y-4">
              <Input type="text" label="Name" size="lg" />
              <Input type="email" label="Email" size="lg" />
              <Textarea label="Message" size="lg" />
              <Button type="submit" className="w-full bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300">
                Send Message
              </Button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-orange-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">563, Al Muntasir street, Al Mamourah, Ras-Al-Khaimah, PO BOX-5611, United Arab Amirates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone text-orange-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600"><a href="tel:+971 7 202 3777">+971 7 202 3777</a></p>
                  <p className="text-gray-600"><a href="tel:+971 56 118 4428">+971 56 118 4428</a></p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-orange-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600 hover:text-sky-400"><a href="mailto:info@protecuae.com">info@protecuae.com</a></p>
                  <p className="text-gray-600"><a href="mailto:ajesh@protecuae.com">ajesh@protecuae.com</a></p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d897.9331476009454!2d55.97981308339895!3d25.812394739975613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef670d883324c1f%3A0xb60a2a174056306f!2sPROTEC%20FIRE!5e0!3m2!1sen!2sae!4v1773036638487!5m2!1sen!2sae"
                
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

