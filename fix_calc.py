import re

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'r') as f:
    code = f.read()

# Fix calc()
def fix_calc(match):
    expression = match.group(1)
    # Add spaces around + and - if not already there, but avoid matching negative numbers like translate(-50%)
    # Actually, within calc(...), any + or - that is an operator needs spaces.
    # It's safer to just replace 'calc(50%+' with 'calc(50% + '
    # and 'calc(50%-' with 'calc(50% - ' since that's mostly what Figma generated.
    expression = expression.replace('50%+', '50% + ')
    expression = expression.replace('50%-', '50% - ')
    return f'calc({expression})'

code = re.sub(r'calc\(([^)]+)\)', fix_calc, code)

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'w') as f:
    f.write(code)

