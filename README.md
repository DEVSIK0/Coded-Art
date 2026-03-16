# Coded Art

## Cómo ejecutar los shaders

Los diferentes shaders están guardados en la carpeta `/src` con extensión `.frag`.

Para visualizar un shader en la web, debes seguir estos pasos:

1. Abre el archivo `.frag` del shader que deseas ejecutar desde la carpeta `/src` (por ejemplo, `n1.frag`).
2. Copia todo el contenido que se encuentra dentro de la función `mainImage`.
3. Abre el archivo `shader.frag` que se encuentra en la carpeta `/public`.
4. Pega el contenido copiado dentro de la función `mainImage` de `shader.frag`, reemplazando el código anterior si lo hubiera.
5. Guarda los cambios. La web se actualizará para mostrar el nuevo shader.

## Ejemplos de Shaders

### CODED ART No. 1
![n1](https://raw.githubusercontent.com/DEVSIK0/Coded-Art/master/docs/gifs/n1.gif)

<details>
<summary>Ver código del shader</summary>

```glsl
void mainImage( out vec4 O, vec2 I )
{
    float z, d, i;
    for( O *= i; i++ < 2e1; )
    {
        vec3 p = z * normalize( vec3( I + I, 0 ) - iResolution.xyx ) + .1;
        p = vec3( atan( p.y / .2, p.x ) * 2., p.z / 3., length( p.xy ) - 5. - z * .2 );
        for( d = 0.; d++ < 7.; ) 
        {
            p += sin( p.yzx * d + iTime + .3 * i ) / d;
        }
        z += d = length( vec4( .4 * cos( p ) - .4, p.z ) );
        O += ( 1. + cos( p.x + i * .4 + z + vec4( 6, 1, 2, 0 ) ) ) / d;
    }
    O = tanh( O * O / 4e2 );
}
```
</details>


### CODED ART No. 2
![n2](https://raw.githubusercontent.com/DEVSIK0/Coded-Art/master/docs/gifs/n2.gif)

<details>
<summary>Ver código del shader</summary>

```glsl
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
```
</details>

