import {
  Mail,
  MapPin,
  Phone,
  Linkedin
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <h3 className="text-2xl font-semibold mb-8 text-center text-muted-foreground">
          Contact Information
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center space-y-4 min-w-[200px] text-center">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:tuanqpham0921@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                tuanqpham0921@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 min-w-[200px] text-center">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+15129718538"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (512) 971-8538
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-4 min-w-[200px] text-center">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">San Marcos, TX</p>
            </div>
          </div>
        </div>

        <div className="pt-12 text-center">
          <h4 className="font-medium mb-4">Connect With Me</h4>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/tuanqpham0921/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
