import React, {useState} from 'react';
import s from './Shortens.module.scss';

import {useSelector} from 'react-redux';
import {ItemsType, selectLinks} from '../../store/slice/linkSlice';

import {AnimatePresence, motion} from 'framer-motion';
import {Button} from '../button';


const Shortens: React.FC = () => {
  const [copiedLinks, setCopiedLinks] = useState<string | null>(null);
  const links: ItemsType[] = useSelector(selectLinks);

  const copyToClipboard = (link: string): void => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLinks(link);
    })
  };

  if (!links.length) return null;


  return (
    <section className={s.shortens}>
      <div className='container'>
        {links.map((item) => (
          <AnimatePresence key={item.code}>
            <motion.div
              className={s.item}
              data-active={copiedLinks === item.full_short_link2}
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto'}}
            >
              <span>{item.original_link}</span>
              <span>{item.full_short_link2}</span>
              <Button
                variant='square'
                onClick={() => copyToClipboard(item.full_short_link2)}
              >
                {copiedLinks === item.full_short_link2 ? 'Copied!' : 'Copy'}
              </Button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>

    </section>
  )
}


export {Shortens}