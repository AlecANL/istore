import styles from './rating.module.css'

export function Rating() {
  return (
    <fieldset className={styles['rating']}>
      <input
        type='radio'
        name='rating'
        id='star5'
        aria-label='start'
        value='5'
      />
      <label
        htmlFor='star5'
        className={styles['full']}
        title='awesome 5 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='star4half'
        aria-label='start'
        value='4.5'
      />
      <label
        htmlFor='star4half'
        className={styles['half']}
        title='pretty good 4.5 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='star4'
        aria-label='start'
        value='4'
      />
      <label
        htmlFor='star4'
        className={styles['full']}
        title='pretty good 4.5 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='star3half'
        aria-label='start'
        value='3.5'
      />
      <label
        htmlFor='star3half'
        className={styles['half']}
        title='Meh 3.5 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='star3'
        aria-label='start'
        value='3'
      />
      <label
        htmlFor='star3'
        className={styles['full']}
        title='pretty 3 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='star2half'
        aria-label='start'
        value='2.5'
      />
      <label
        htmlFor='star2half'
        className={styles['half']}
        title='kinda bad 2.5 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='star2'
        aria-label='start'
        value='2'
      />
      <label
        htmlFor='star2'
        className={styles['full']}
        title='pretty 2 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='star1half'
        aria-label='start'
        value='1.5'
      />
      <label
        htmlFor='star1half'
        className={styles['half']}
        title='Meh 1.5 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='star1'
        aria-label='start'
        value='1'
      />
      <label
        htmlFor='star1'
        className={styles['full']}
        title='Meh 1 stars'
      ></label>

      <input
        type='radio'
        name='rating'
        id='starhalf'
        aria-label='start'
        value='0.5'
      />
      <label
        htmlFor='starhalf'
        className={styles['half']}
        title='sucks big time .5 stars'
      ></label>
    </fieldset>
  )
}
