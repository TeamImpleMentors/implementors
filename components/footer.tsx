import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ImpleMentors & Kriday Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

