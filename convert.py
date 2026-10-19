import re

with open('/Users/viswanathreddy/.gemini/antigravity/brain/0e5d51df-fc20-4313-b680-218fe02438cc/.system_generated/steps/160/output.txt', 'r') as f:
    lines = f.readlines()

output_jsx = []

def tailwind_to_style(classes):
    style_dict = {}
    classes = classes.split()
    for c in classes:
        if c == 'absolute': style_dict['position'] = '"absolute"'
        elif c == 'relative': style_dict['position'] = '"relative"'
        elif c == 'flex': style_dict['display'] = '"flex"'
        elif c == 'flex-col': style_dict['flexDirection'] = '"column"'
        elif c == 'items-center': style_dict['alignItems'] = '"center"'
        elif c == 'justify-center': style_dict['justifyContent'] = '"center"'
        elif c == 'overflow-hidden': style_dict['overflow'] = '"hidden"'
        elif c == 'overflow-clip': style_dict['overflow'] = '"clip"'
        elif c == 'pointer-events-none': style_dict['pointerEvents'] = '"none"'
        elif c == 'whitespace-pre-wrap': style_dict['whiteSpace'] = '"pre-wrap"'
        elif c == 'not-italic': style_dict['fontStyle'] = '"normal"'
        elif c == 'text-center': style_dict['textAlign'] = '"center"'
        elif c == 'contents': style_dict['display'] = '"contents"'
        elif c == 'block': style_dict['display'] = '"block"'
        elif c == 'flex-none': style_dict['flex'] = '"none"'
        elif c == 'rotate-90': style_dict['transform'] = style_dict.get('transform', '""') + ' + " rotate(90deg)"'
        elif c == '-translate-x-1/2': style_dict['transform'] = style_dict.get('transform', '""') + ' + " translateX(-50%)"'
        elif c == '-translate-y-1/2': style_dict['transform'] = style_dict.get('transform', '""') + ' + " translateY(-50%)"'
        elif c == 'size-full': style_dict['width'] = '"100%"'; style_dict['height'] = '"100%"'
        elif c == 'max-w-none': style_dict['maxWidth'] = '"none"'
        elif c == 'w-full': style_dict['width'] = '"100%"'
        elif c == 'h-full': style_dict['height'] = '"100%"'
        elif c == 'left-0': style_dict['left'] = '0'
        elif c == 'right-0': style_dict['right'] = '0'
        elif c == 'top-0': style_dict['top'] = '0'
        elif c == 'bottom-0': style_dict['bottom'] = '0'
        elif c == 'top-1/2': style_dict['top'] = '"50%"'
        elif c == 'left-1/2': style_dict['left'] = '"50%"'
        elif c == 'right-1/2': style_dict['right'] = '"50%"'
        elif c == 'mb-0': style_dict['marginBottom'] = '0'
        elif c == 'font-medium': style_dict['fontWeight'] = '500'
        elif c == 'font-normal': style_dict['fontWeight'] = '400'
        elif c == 'text-white': style_dict['color'] = '"#ffffff"'
        elif c == 'opacity-50': style_dict['opacity'] = '0.5'
        elif c == 'opacity-87': style_dict['opacity'] = '0.87'
        elif c == 'opacity-20': style_dict['opacity'] = '0.2'
        elif c.startswith('left-['): style_dict['left'] = '"' + c[6:-1] + '"'
        elif c.startswith('right-['): style_dict['right'] = '"' + c[7:-1] + '"'
        elif c.startswith('top-['): style_dict['top'] = '"' + c[5:-1] + '"'
        elif c.startswith('bottom-['): style_dict['bottom'] = '"' + c[8:-1] + '"'
        elif c.startswith('w-['): style_dict['width'] = '"' + c[3:-1] + '"'
        elif c.startswith('h-['): style_dict['height'] = '"' + c[3:-1] + '"'
        elif c.startswith('size-['): style_dict['width'] = '"' + c[6:-1] + '"'; style_dict['height'] = '"' + c[6:-1] + '"'
        elif c.startswith('bg-['): style_dict['backgroundColor'] = '"' + c[4:-1] + '"'
        elif c.startswith('text-['): style_dict['fontSize'] = '"' + c[6:-1] + '"' if 'px' in c else style_dict.setdefault('color', '"' + c[6:-1] + '"')
        elif c.startswith('rounded-['): style_dict['borderRadius'] = '"' + c[9:-1] + '"'
        elif c.startswith('rounded-bl-['): style_dict['borderBottomLeftRadius'] = '"' + c[12:-1] + '"'
        elif c.startswith('rounded-br-['): style_dict['borderBottomRightRadius'] = '"' + c[12:-1] + '"'
        elif c.startswith('rounded-tl-['): style_dict['borderTopLeftRadius'] = '"' + c[12:-1] + '"'
        elif c.startswith('rounded-tr-['): style_dict['borderTopRightRadius'] = '"' + c[12:-1] + '"'
        elif c.startswith('border-['): style_dict['borderWidth'] = '"' + c[8:-1] + '"' if 'px' in c else style_dict.setdefault('borderColor', '"' + c[8:-1] + '"')
        elif c == 'border-solid': style_dict['borderStyle'] = '"solid"'
        elif c.startswith('shadow-['): style_dict['boxShadow'] = '"' + c[8:-1].replace('_', ' ') + '"'
        elif c.startswith('tracking-['): style_dict['letterSpacing'] = '"' + c[10:-1] + '"'
        elif c.startswith('leading-['): style_dict['lineHeight'] = '"' + c[9:-1] + '"'
        elif c.startswith('inset-['): 
            val = c[7:-1].replace('_', ' ')
            vals = val.split()
            if len(vals) == 4:
                style_dict['top'], style_dict['right'], style_dict['bottom'], style_dict['left'] = [f'"{v}"' for v in vals]
            elif len(vals) == 2:
                style_dict['top'] = style_dict['bottom'] = f'"{vals[0]}"'
                style_dict['left'] = style_dict['right'] = f'"{vals[1]}"'
        elif c == 'inset-0':
            style_dict['top'] = style_dict['right'] = style_dict['bottom'] = style_dict['left'] = '0'
        elif c.startswith('mask-size-['): style_dict['WebkitMaskSize'] = '"' + c[11:-1].replace('_', ' ') + '"'
        elif c.startswith('mask-position-['): style_dict['WebkitMaskPosition'] = '"' + c[15:-1].replace('_', ' ') + '"'
        elif c == 'mask-no-repeat': style_dict['WebkitMaskRepeat'] = '"no-repeat"'
        elif c.startswith('backdrop-blur-['): style_dict['backdropFilter'] = '"blur(' + c[15:-1] + ')"'
    
    # cleanup transform
    if 'transform' in style_dict:
        style_dict['transform'] = style_dict['transform'].replace('"" + ', '').strip(' "')
        style_dict['transform'] = f'"{style_dict["transform"]}"'
        
    return style_dict

start_parsing = False
for line in lines:
    line = re.sub(r'^\d+:\s+', '', line)
    
    if "export default function FeaturesStack" in line:
        start_parsing = True
        
    if not start_parsing: continue
    
    # Replace className="..." with style={{...}}
    def replace_class(match):
        classes = match.group(1)
        style_dict = tailwind_to_style(classes)
        style_str = ", ".join([f"{k}: {v}" for k, v in style_dict.items()])
        return f"style={{{{{style_str}}}}}"
        
    line = re.sub(r'className="([^"]+)"', replace_class, line)
    
    # Fix style={{...}} merged with existing style={{...}}
    # e.g., style={{...}} style={{ maskImage: ... }}
    def merge_styles(match):
        s1 = match.group(1)
        s2 = match.group(2)
        return f"style={{{{{s1}, {s2}}}}}"
    
    line = re.sub(r'style=\{\{([^}]+)\}\}\s*style=\{\{([^}]+)\}\}', merge_styles, line)
    
    # Replace asset URLs with local paths
    line = re.sub(r'imgBakgroundPatternLogoImage1', '"/images/features/bg-pattern-1.png"', line)
    line = re.sub(r'imgCloundIconFromBento', '"/images/features/cloud-icon.png"', line)
    line = re.sub(r'imgBgTextureTextImageBgFromBento', '"/images/features/bg-texture.png"', line)
    line = re.sub(r'imgIllustrationSpeedometerIllustrationFromBento', '"/images/features/speedometer.png"', line)
    line = re.sub(r'imgCard5', '"/images/features/card5.png"', line)
    line = re.sub(r'imgBakgroundPatternLogoImage', '"/images/features/bg-pattern-logo.svg"', line)
    line = re.sub(r'imgGroup10', '"/images/features/group-10.svg"', line)
    line = re.sub(r'imgGroup11', '"/images/features/group-11.svg"', line)
    line = re.sub(r'imgGroup12', '"/images/features/group-12.svg"', line)
    line = re.sub(r'imgGroup13', '"/images/features/group-13.svg"', line)
    line = re.sub(r'imgGroup14', '"/images/features/group-14.svg"', line)
    line = re.sub(r'imgGroup15', '"/images/features/group-15.svg"', line)
    line = re.sub(r'imgGroup1', '"/images/features/group-1.svg"', line)
    line = re.sub(r'imgGroup2', '"/images/features/group-2.svg"', line)
    line = re.sub(r'imgGroup3', '"/images/features/group-3.svg"', line)
    line = re.sub(r'imgGroup4', '"/images/features/group-4.svg"', line)
    line = re.sub(r'imgGroup5', '"/images/features/group-5.svg"', line)
    line = re.sub(r'imgGroup6', '"/images/features/group-6.svg"', line)
    line = re.sub(r'imgGroup7', '"/images/features/group-7.svg"', line)
    line = re.sub(r'imgGroup8', '"/images/features/group-8.svg"', line)
    line = re.sub(r'imgGroup9', '"/images/features/group-9.svg"', line)
    line = re.sub(r'imgGroup', '"/images/features/group-0.svg"', line)
    line = re.sub(r'imgVector1', '"/images/features/vector-1.svg"', line)
    line = re.sub(r'imgVector2', '"/images/features/vector-2.svg"', line)
    line = re.sub(r'imgVector3', '"/images/features/vector-3.svg"', line)
    line = re.sub(r'imgVector4', '"/images/features/vector-4.svg"', line)
    line = re.sub(r'imgVector5', '"/images/features/vector-5.svg"', line)
    line = re.sub(r'imgVector6', '"/images/features/vector-6.svg"', line)
    line = re.sub(r'imgVector', '"/images/features/vector-0.svg"', line)
    line = re.sub(r'imgBackgroundPatternLogoImage', '"/images/features/bg-pattern-logo-2.svg"', line)
    line = re.sub(r'imgIconIconSvg', '"/images/features/icon-1.svg"', line)
    line = re.sub(r'imgIconSvg', '"/images/features/icon-2.svg"', line)
    line = re.sub(r'imgStars01IconSvg', '"/images/features/icon-stars.svg"', line)
    line = re.sub(r'imgBgText1', '"/images/features/bg-text-1.svg"', line)
    line = re.sub(r'imgBgText2', '"/images/features/bg-text-2.svg"', line)
    line = re.sub(r'imgBgText', '"/images/features/bg-text.svg"', line)
    line = re.sub(r'imgBgLineSvg', '"/images/features/bg-line.svg"', line)

    # remove data-node-id and data-name
    line = re.sub(r'\sdata-node-id="[^"]+"', '', line)
    line = re.sub(r'\sdata-name="[^"]+"', '', line)
    
    output_jsx.append(line)
    
    if line.strip() == "}":
        break

with open('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/FeaturesFigma.tsx', 'w') as f:
    f.writelines(output_jsx)

