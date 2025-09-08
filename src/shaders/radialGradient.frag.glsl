varying vec2 vUv;

uniform vec2 uCenter;
uniform float uHover;
uniform float uTime;

// Grainy hash noise
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
    // Distance from mouse-driven center
    float dist = distance(vUv, uCenter);

    // Wavy ripple animation, more pronounced radial effect
    float ripple = 0.3 * sin(10.0 * dist - uTime * 1.5 + vUv.x * 15.0 + vUv.y * 15.0);

    // Gradient (near-black center → grayish edge)
    float gradient = smoothstep(0.0, 1.2, dist + ripple);

    // Static grain coordinates (no time component for still noise)
    vec2 grainCoords = vUv * 12.0 + vec2(vUv.x * 15.0 + vUv.y * 15.0); 
    float grain = random(grainCoords) - 0.85;

    // Apply sand-like noise with increased intensity
    float brightness = gradient + grain * 0.5;

    // Clamp to maintain contrast, bias toward darker tones
    brightness = clamp(brightness * 0.7, 0.0, 0.7);

    // Hover brightens slightly
    brightness += 0.1 * uHover;

    // Darker color palette (near-black to grayish-blue)
    vec3 color = vec3(brightness * 0.2, brightness * 0.25, brightness * 0.3);

    gl_FragColor = vec4(color, 1.0);
}