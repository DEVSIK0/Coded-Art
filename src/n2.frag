void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord / iResolution.xy;
    vec2 center = fragCoord - 0.5 * iResolution.xy;
    float i = 0.0;
    float d;
    vec4  o = vec4(0.0);
    vec4  p;
    float z = fract(dot(fragCoord, sin(fragCoord))) - 0.5;
    for (vec2 resolution = iResolution.xy; ++i < 77.0; z += 0.6 * d)
    {
        p = vec4(z * normalize(vec3(center, resolution.y)), 0.1 * iTime);
        p.z += iTime * 3.0;
        vec4 prev = p;
        p.xy *= mat2(cos(2.0 + prev.z + vec4(0, 11, 33, 0)));
        p.xy *= mat2(cos(prev + vec4(0, 11, 33, 0)));
        vec4 color = (1.0 + sin(0.5 * prev.z + length(p - prev) + vec4(0, 4, 3, 6))) / (0.5 + 2.0 * dot(prev.xy, prev.xy));
        p = abs(fract(p) - 0.5);
        d  = abs(min(length(p.xy) - 0.125, min(p.x, p.y) + 1e-3)) + 1e-3;
        o += color.w / d * color;
    }
    fragColor = tanh(o / 20000.0);
}