import { inter } from '@/app/ui/fonts';

import css from './help.module.css';

export default function Page() {
  return (
  <>
    <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>Help Page</h1>
    <div
      className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
    />
    <div className={css.shape} />
  </>);
}
