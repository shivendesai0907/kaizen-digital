import re

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'r') as f:
    code = f.read()

# Replace `url('${"..."}')` with "url('...')"
code = re.sub(r"`url\('\$\{\s*\"([^\"]+)\"\s*\}'\)`", r'"url(\'\1\')"', code)

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'w') as f:
    f.write(code)
