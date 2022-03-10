import React from 'react';
import {features, FeaturesType, ItemDataType} from './data';
import s from './Features.module.scss';

const Features: React.FC = () => {
  return (
    <section className={s.features}>
      <div className='container'>
        <h2 className={s.title}>
          {features.title}
        </h2>
        <p className={s.description}>
          {features.description}
        </p>
        <div className={s.items}>
          {features.items.map(item => (
            <FratureItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
};

const FratureItem = ({title, body, icon}: ItemDataType) => (
  <article className={s.item}>
    <figure>
      <img src={icon} alt={title} />
    </figure>
    <h3>{title}</h3>
    <p>{body}</p>
  </article>
)

export {Features};