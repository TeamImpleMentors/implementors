import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ImpleMentors</h3>
            <p className="text-sm text-muted-foreground">
              Empowering intellectual development through specifically curated modules.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+91 7357442000</li>
              <li>+91 8950459926</li>
              <li>+91 9810073441</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/imple_mentors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/team-implementors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ImpleMentors. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

