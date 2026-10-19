import re

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'r') as f:
    code = f.read()

def merge_css_vars(match):
    s1 = match.group(1)
    s2 = match.group(2)
    return f"style={{{{{s1}, {s2}}} as React.CSSProperties}}"

code = re.sub(r'style=\{\{([^}]+)\}\}\s*style=\{\{([^}]+)\}\s*as\s*React\.CSSProperties\}', merge_css_vars, code)

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'w') as f:
    f.write(code)
