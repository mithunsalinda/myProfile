import LogoButton from '../ui/LogoButton';
import { Menu, X } from 'lucide-react';
type HeaderProps = {
  onToggle: () => void;
  isOpen: boolean;
};
const Header = ({ onToggle, isOpen }: HeaderProps) => (
  <header className="flex justify-between items-center p-4 border-b border-gray-700">
    <LogoButton />
    <button className="sm:hidden" onClick={onToggle} aria-label="Toggle Menu">
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </header>
);

export default Header;
