function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3 text-white">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-500">About Us</a></li>
            <li><a href="#" className="hover:text-purple-500">Careers</a></li>
            <li><a href="#" className="hover:text-purple-500">Blog</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3 text-white">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-500">Help Center</a></li>
            <li><a href="#" className="hover:text-purple-500">FAQs</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3 text-white">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-500">Ticket System</a></li>
            <li><a href="#" className="hover:text-purple-500">Analytics</a></li>
            <li><a href="#" className="hover:text-purple-500">Integrations</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-3 text-white">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-purple-500">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold mb-3 text-white">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-500">Twitter</a></li>
            <li><a href="#" className="hover:text-purple-500">Facebook</a></li>
            <li><a href="#" className="hover:text-purple-500">LinkedIn</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; 2026 CS-Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;