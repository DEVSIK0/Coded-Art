#version 300 es
precision highp float;

out vec4 outColor;
uniform float u_time;
uniform vec2 u_res;

#define iTime u_time
#define iResolution vec3(u_res, 1.0) 

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    // ...
}


void main() {
    vec4 fragColor;
    mainImage(fragColor, gl_FragCoord.xy);
    fragColor.rgb = pow(fragColor.rgb, vec3(1.0 / 1.0));
    outColor = vec4(fragColor.rgb, 1.0);
}