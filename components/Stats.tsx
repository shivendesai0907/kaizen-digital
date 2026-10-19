import styles from './Stats.module.css';
import ScrollReveal from './ScrollReveal';
import Counter from './Counter';

const statData = [
  { label: 'Platforms shipped', value: '120+' },
  { label: 'Avg. deployment', value: '2-6 wk' },
  { label: 'Platform uptime', value: '99.98%' },
];

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.grid}>
        {statData.map((stat, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <div className={styles.statCard}>
              <div className={styles.value}>
                <Counter value={stat.value} />
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
