import React, {useEffect} from 'react';
import s from './Form.module.scss';

import {useDispatch, useSelector} from 'react-redux';
import {createShortLink, selectedLoading} from '../../store/slice/linkSlice';

import {useForm} from 'react-hook-form';
import {Button} from '../button';

type ObjectUrlTypt = {
  Url: string;
};

const Form: React.FC = () => {
  const loading: string = useSelector(selectedLoading);
  const dispatch = useDispatch();

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm({mode: 'onSubmit'});

  const onSubmit = ({Url}: ObjectUrlTypt): void => {
    dispatch(createShortLink(Url));
    reset();
  };

  return (
    <section className={s.section}>
      <div className='container'>
        <form
          className={s.form}
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='url'
            placeholder='Short a link here...'
            className={s.input}
            {...register('Url', {
              pattern: {
                value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g,
                message: 'Please enter a valid url',
              },
            })}
            style={{
              outlineColor: errors.Url ? 'var(--secondary-300)' : 'currentColor',
              outlineWidth: errors.Url ? '4px' : '1px',
            }}
          disabled={loading === 'loading'}
          />
          <Button
            variant='square'
            type='submit'
            size='medium'
          disabled={loading === 'loading'}
          >
            Shorten it!
          </Button>
          {errors.Url && (
            <div className={s.error}>
              {errors.Url.message}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export {Form};