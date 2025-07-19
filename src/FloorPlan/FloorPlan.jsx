import React from 'react';
import styles from './FloorPlan.module.scss';

const FloorPlan = () => {
  return (
    <div className={styles['floor-plan']}>
      <h1>After I saw you where drawing that flower shop plan, I was inspired to do some research on what I would want to build in the future. 
        And those two were drawn by coding. I would want to have this kind of small house somewhere in beautiful rural area</h1>

      <div className={`${styles['floor-1']} ${styles._grid}`}>
        <div className={styles.kitchen}>
          <p>KITCHEN</p>
          <div className={styles.door} />
          <div className={styles.window} />
          <div className={styles.counter} />
          <div className={styles.ref} />
          <div className={styles.sink}>
            <div className={styles.inner}>
              <div className={styles.faucet} />
            </div>
          </div>
          <div className={styles.stove}>
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.circle} />
            <div className={styles.circle} />
          </div>
          <div className={styles.bar} />
          <div className={styles['bar-stool-1']} />
          <div className={styles['bar-stool-2']} />
        </div>

        <div className={styles['outside-1']} />

        {/* Dining */}
        <div className={styles.dining}>
          <p>DINING</p>
          <div className={styles.table}>
            <div className={styles['chair-1']} />
            <div className={styles['chair-2']} />
            <div className={styles['chair-3']} />
            <div className={styles['chair-4']} />
          </div>
        </div>

        {/* Living Area */}
        <div className={styles.living}>
          <p>LIVING AREA</p>
          <div className={styles.door} />
          <div className={styles['couch-left']}>
            <div className={styles['couch-inner']} />
            <div className={styles['couch-inner']} />
          </div>
          <div className={styles['couch-right']}>
            <div className={styles['couch-inner']} />
          </div>
          <div className={styles.table} />
        </div>

        {/* Restroom 1 */}
        <div className={styles['restroom-1']}>
          <p>T&amp;B</p>
          <div className={styles.door} />
          <div className={styles.window} />
          <div className={styles.shower} />
          <div className={styles['toilet-top']} />
          <div className={styles['toilet-seat']} />
          <div className={styles.sink}>
            <div className={styles.inner} />
            <div className={styles.faucet} />
            <div className={styles.container} />
          </div>
        </div>

        {/* Closet */}
        <div className={styles.closet}>
          <p>WIC</p>
          <div className={styles.door} />
          <div className={styles.storage} />
        </div>

        {/* Master Bedroom */}
        <div className={styles.bedroom}>
          <p>MASTER BEDROOM</p>
          <div className={styles.window} />
          <div className={styles.window} />
          <div className={styles.window} />
          <div className={styles.window} />
          <div className={styles.window} />
          <div className={styles.door} />
          <div className={styles.bed}>
            <div className={styles.inner}>
              <div className={styles.pillow} />
              <div className={styles.pillow} />
            </div>
          </div>
          <div className={styles['table-1']} />
          <div className={styles['table-2']} />
          <div className={styles['table-3']} />
          <div className={styles.chair} />
        </div>

        {/* Stairs */}
        <div className={styles.stairs}>
          <p>STAIRS</p>
          <div className={styles.wall} />
          <div className={styles['lines-1']} />
          <div className={styles['lines-2']} />
        </div>

        {/* Restroom 2 */}
        <div className={styles['restroom-2']}>
          <p>T&amp;B</p>
          <div className={styles.door} />
          <div className={styles.shower} />
          <div className={styles['toilet-top']} />
          <div className={styles['toilet-seat']} />
          <div className={styles.sink}>
            <div className={styles.inner} />
            <div className={styles.faucet} />
            <div className={styles.container} />
          </div>
        </div>

        {/* Car Port */}
        <div className={styles['car-port']}>
          <p>CAR PORT</p>
        </div>

        <div className={styles['outside-2']} />
      </div>

      {/* Floor 2 */}
      <div className={`${styles['floor-2']} ${styles._grid}`}>
        {/* Bedroom */}
        <div className={styles.bedroom}>
          <p>BEDROOM</p>
          <div className={styles.door} />
          <div className={styles.window} />
          <div className={styles.bed}>
            <div className={styles.inner}>
              <div className={styles.pillow} />
              <div className={styles.pillow} />
            </div>
          </div>
          <div className={styles.closet} />
          <div className={styles.table} />
          <div className={styles.chair} />
        </div>

        <div className={styles['outside-1']} />

        {/* Storage */}
        <div className={styles.storage}>
          <p>STORAGE</p>
          <div className={styles.door} />
          <div className={styles.window} />
          <div className={styles['shelf-1']} />
          <div className={styles['shelf-2']} />
        </div>

        {/* Library */}
        <div className={styles.library}>
          <p>LIBRARY</p>
          <div className={styles.window} />
          <div className={styles['shelf-1']} />
          <div className={styles['shelf-2']} />
          <div className={styles.chair} />
          <div className={styles.table} />
        </div>

        <div className={styles.path} />

        {/* Open to Below */}
        <div className={styles.open}>
          <p>OPEN TO BELOW</p>
          <div className={styles.door} />
          <div className={styles['lines-1']} />
          <div className={styles['lines-2']} />
          <div className={styles['lines-3']} />
          <div className={styles['lines-4']} />
        </div>

        {/* Balcony */}
        <div className={styles.balcony}>
          <p>BALCONY</p>
          <div className={styles.door} />
        </div>

        <div className={styles['outside-2']} />
      </div>
    </div>
  );
};

export default FloorPlan;
