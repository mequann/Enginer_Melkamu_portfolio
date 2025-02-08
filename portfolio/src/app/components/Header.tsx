export default function Header() {
  return (
    <header className="flex bg-blue-500 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">Melkamu's Website</div>
        <ul className="flex list-none space-x-6 " >
          <li><a href="/" className="no-underline hover:underline hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="no-underline hover:underline hover:text-gray-300 ">About</a></li>
          <li><a href="/projects" className="no-underline hover:underline hover:text-gray-300">Projects</a></li>
          <li><a href="/contact" className="no-underline hover:underline hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
