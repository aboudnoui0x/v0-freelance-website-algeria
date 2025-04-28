import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">FreelanceAlgeria</h3>
            <p className="text-sm text-gray-500">
              The premier platform connecting freelancers and clients across Algeria.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">For Freelancers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/find-work" className="text-gray-500 hover:text-green-600">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="/create-profile" className="text-gray-500 hover:text-green-600">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="/freelancer-resources" className="text-gray-500 hover:text-green-600">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-500 hover:text-green-600">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/post-job" className="text-gray-500 hover:text-green-600">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/hire" className="text-gray-500 hover:text-green-600">
                  Hire Talent
                </Link>
              </li>
              <li>
                <Link href="/client-resources" className="text-gray-500 hover:text-green-600">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-gray-500 hover:text-green-600">
                  Enterprise Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-green-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-green-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-green-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} FreelanceAlgeria. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
