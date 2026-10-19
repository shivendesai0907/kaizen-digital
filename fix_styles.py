import re

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'r') as f:
    code = f.read()

# Merge multiple style={{...}} style={{...}} on the same line
# We might have cases with 3 style={{...}} tags? Probably just 2.
def merge_styles(match):
    s1 = match.group(1)
    s2 = match.group(2)
    return f"style={{{{{s1}, {s2}}}}}"

# run it multiple times to catch multiple instances on the same line just in case
for _ in range(3):
    code = re.sub(r'style=\{\{([^}]+)\}\}\s*style=\{\{([^}]+)\}\}', merge_styles, code)

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'w') as f:
    f.write(code)

