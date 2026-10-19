with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/FeaturesFigma.tsx', 'r') as f:
    figma_code = f.read()

# Extract just the <div style={{position: "relative", width: "100%", height: "100%"}}>...</div> part
start_idx = figma_code.find('<div style={{position: "relative", width: "100%", height: "100%"}}>')
end_idx = figma_code.rfind('</div>')
figma_div = figma_code[start_idx:end_idx+6]

# Add Next.js Image optimization if needed, but standard img is fine for exact match
tsx_code = f"""import styles from './Features.module.css';

export default function Features() {{
  return (
    <section className={{styles.section}}>
      <div className={{styles.header}}>
        <div className={{styles.badge}}>
          <span className={{styles.dot}}></span>
          Full-Service Technology Partner
        </div>
        <h2 className={{styles.title}}>
          More Than CRM-Your Full Service <br />
          Technology Partner
        </h2>
        <p className={{styles.description}}>
          Koraxis helps businesses build complete digital ecosystems — from CRM platforms and payment 
          systems to mobile apps, SaaS platforms, automation tools, and enterprise software.
        </p>
      </div>

      <div className={{styles.figmaWrapper}}>
        <div className={{styles.figmaContainer}}>
          {figma_div}
        </div>
      </div>
    </section>
  );
}}
"""

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'w') as f:
    f.write(tsx_code)
