import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row">
          <div className="md:mr-8 mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Revepsic</h2>
            <p className="text-sm mt-2">Psicologia Cientifica.</p>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-blue-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Acerca de
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="hover:text-blue-400">
                Términos de uso
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-400">
                Política de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-400"><FaFacebook /></Link>
            <Link href="#" className="hover:text-blue-400"><FaTwitter /></Link>
            <Link href="#" className="hover:text-blue-400"><FaInstagram /></Link>
            <Link href="#" className="hover:text-blue-400"><FaEnvelope /></Link>
          </div>
          <p className="text-sm">
            © 2023 Mi Sitio Web. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
