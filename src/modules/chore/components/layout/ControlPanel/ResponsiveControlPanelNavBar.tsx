import { useState } from 'react';
import { ControlPanelNavbarLinks } from './ControlPanelNavbarLinks';
import { MenuButtonIcon } from '../../icons/MenuButtonIcon';

export const ResponsiveControlPanelNavBar = ({
  pathName,
}: {
  pathName: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
        className="fixed left-1 flex items-center justify-center md:hidden z-40"
      >
        <MenuButtonIcon />
      </button>
      <nav
        className={`${
          isOpen ? 'flex w-1/4' : 'hidden md:flex'
        }fixed md:relative flex-col dark:bg-primario bg-secundario text-primario dark:text-secundario z-30`}
      >
        <ul className="flex flex-col items-center gap-4 bg-slate-900">
          <ControlPanelNavbarLinks pathName={pathName} />
        </ul>
      </nav>
      {isOpen && (
        <div className="md:hidden fixed top-[5rem] left-0 h-screen w-screen bg-primario/30 backdrop-blur-sm z-20"></div>
      )}
    </>
  );
};
